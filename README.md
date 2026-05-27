# 🌿 GreenPlate — Food Ordering Website

A full-stack restaurant ordering web application with login/register, menu browsing, cart management, order summary, and payment flow.

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v16 or higher (download from [nodejs.org](https://nodejs.org))

### Installation

```bash
# 1. Navigate to the project folder
cd greenplate

# 2. Install dependencies
npm install

# 3. Start the server
npm start
```

### Open in Browser
```
http://localhost:3000
```

That's it! The database is created automatically on first run.

---

## 🧑‍💻 Demo Credentials

You can register a new account, or use the app directly after registering.

---

## 📁 Project Structure

```
greenplate/
├── server.js              # Express backend (API + session auth)
├── package.json           # Dependencies
├── greenplate.db          # SQLite database (auto-created)
├── db/
│   ├── database.js        # Database helper (sql.js)
│   └── menuData.js        # 36 curated menu items
└── public/
    └── index.html         # Full frontend SPA (single file)
```

---

## 🌟 Features

### Frontend (Single Page App)
- **Login / Register** — Session-based authentication
- **Menu Browser** — 36 curated dishes, filterable by category & diet
- **Cart Drawer** — Slide-in cart with real-time item management
- **Order Summary** — Itemized bill with delivery charges and loyalty discount
- **Payment Page** — Card, UPI, and Cash on Delivery options with live card preview
- **Success Page** — Animated confirmation with eco impact stats

### Backend (Express.js)
- `POST /api/register` — Create account (bcrypt hashed passwords)
- `POST /api/login` — Login with session
- `POST /api/logout` — Destroy session
- `GET  /api/me` — Get current session user
- `GET  /api/menu` — Get menu (filterable by cat/diet)
- `POST /api/orders` — Place an order (auth required)
- `GET  /api/orders` — Get order history (auth required)

### Database (SQLite via sql.js)
- **users** table — id, name, email, password (hashed), phone, created_at
- **orders** table — id, user_id, items (JSON), total, status, payment_method, address, carbon_saved, created_at

---

## 🎨 Design

- **Typography**: Cormorant Garamond (serif, editorial) + DM Sans (clean body)
- **Palette**: Forest green, warm cream, antique gold
- **Aesthetic**: Luxury botanical — distinguished from Swiggy/Zomato's delivery-app look
- **Fully responsive** — Works on mobile, tablet, desktop

---

## 🔧 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML/CSS/JS (SPA) |
| Backend | Node.js + Express.js |
| Auth | express-session + bcryptjs |
| Database | SQLite (sql.js — pure JS, no native build) |
| Fonts | Google Fonts (Cormorant Garamond, DM Sans) |

---

## 💡 Notes

- The database file `greenplate.db` is created automatically in the project root
- Sessions are in-memory (server restart clears sessions — users need to log in again)
- No environment variables required — works out of the box
- Images served from Unsplash CDN
