const express = require('express');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const path = require('path');
const { getDB, query, run } = require('./db/database');
const { menu } = require('./db/menuData');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'greenplate-secret-2024',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 24 * 60 * 60 * 1000 }
}));

// Auth middleware
function requireAuth(req, res, next) {
  if (req.session.userId) return next();
  res.status(401).json({ error: 'Not authenticated' });
}

// ===================== AUTH ROUTES =====================

// Register
app.post('/api/register', async (req, res) => {
  const { name, email, password, phone } = req.body;
  if (!name || !email || !password) return res.status(400).json({ error: 'All fields required' });
  try {
    const existing = query('SELECT id FROM users WHERE email = ?', [email]);
    if (existing.length > 0) return res.status(409).json({ error: 'Email already registered' });
    const hashed = await bcrypt.hash(password, 10);
    const result = run('INSERT INTO users (name, email, password, phone) VALUES (?, ?, ?, ?)', [name, email, hashed, phone || '']);
    req.session.userId = result.lastID;
    req.session.userName = name;
    req.session.userEmail = email;
    res.json({ success: true, user: { id: result.lastID, name, email } });
  } catch (e) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });
  try {
    const users = query('SELECT * FROM users WHERE email = ?', [email]);
    if (users.length === 0) return res.status(401).json({ error: 'Invalid credentials' });
    const user = users[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: 'Invalid credentials' });
    req.session.userId = user.id;
    req.session.userName = user.name;
    req.session.userEmail = user.email;
    res.json({ success: true, user: { id: user.id, name: user.name, email: user.email } });
  } catch (e) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// Logout
app.post('/api/logout', (req, res) => {
  req.session.destroy();
  res.json({ success: true });
});

// Get current user
app.get('/api/me', (req, res) => {
  if (!req.session.userId) return res.json({ user: null });
  res.json({ user: { id: req.session.userId, name: req.session.userName, email: req.session.userEmail } });
});

// ===================== MENU ROUTES =====================

app.get('/api/menu', (req, res) => {
  const { cat, diet } = req.query;
  let filtered = menu;
  if (cat && cat !== 'All') filtered = filtered.filter(m => m.cat === cat);
  if (diet === 'veg') filtered = filtered.filter(m => m.veg);
  if (diet === 'nonveg') filtered = filtered.filter(m => !m.veg);
  res.json({ menu: filtered });
});

// ===================== ORDER ROUTES =====================

// Place order
app.post('/api/orders', requireAuth, (req, res) => {
  const { items, total, payment_method, address, carbon_saved } = req.body;
  if (!items || !total) return res.status(400).json({ error: 'Invalid order data' });
  try {
    const result = run(
      'INSERT INTO orders (user_id, items, total, payment_method, address, carbon_saved) VALUES (?, ?, ?, ?, ?, ?)',
      [req.session.userId, JSON.stringify(items), total, payment_method || 'card', address || '', carbon_saved || 0]
    );
    res.json({ success: true, orderId: result.lastID, message: 'Order placed successfully!' });
  } catch (e) {
    res.status(500).json({ error: 'Order placement failed' });
  }
});

// Get user's order history
app.get('/api/orders', requireAuth, (req, res) => {
  try {
    const orders = query('SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC', [req.session.userId]);
    const parsed = orders.map(o => ({ ...o, items: JSON.parse(o.items) }));
    res.json({ orders: parsed });
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

// ===================== PAGES =====================
// Serve main SPA for all non-API routes
app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ===================== START =====================
async function start() {
  await getDB();
  app.listen(PORT, () => {
    console.log(`\n🌿 GreenPlate server running at http://localhost:${PORT}\n`);
  });
}

start();
