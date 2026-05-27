const menu = [
  // MAINS
  { id: 1, name: "Wild Mushroom Risotto", price: 450, cat: "Mains", veg: true, img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500", desc: "Arborio rice, forest mushrooms, aged parmesan, truffle oil" },
  { id: 2, name: "Signature Butter Chicken", price: 520, cat: "Mains", veg: false, img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500", desc: "Free-range chicken in rich tomato cream, served with naan" },
  { id: 3, name: "Thai Green Curry Bowl", price: 380, cat: "Mains", veg: true, img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500", desc: "Coconut milk, lemongrass, kaffir lime, jasmine rice" },
  { id: 4, name: "Lamb Rogan Josh", price: 650, cat: "Mains", veg: false, img: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=500", desc: "Slow-braised highland lamb, Kashmiri spices, saffron rice" },
  { id: 5, name: "Asparagus Penne Pesto", price: 410, cat: "Mains", veg: true, img: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=500", desc: "Artisanal penne, garden pesto, grilled asparagus, pine nuts" },
  { id: 6, name: "Pan-Seared Sea Bass", price: 890, cat: "Mains", veg: false, img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500", desc: "Sustainably sourced bass, capers, lemon butter, microgreens" },
  { id: 7, name: "Paneer Lababdar", price: 340, cat: "Mains", veg: true, img: "https://images.unsplash.com/photo-1567184109191-37830c0f862e?w=500", desc: "Artisanal paneer, rich onion-tomato gravy, cream, fenugreek" },
  { id: 8, name: "Braised Beef Short Ribs", price: 920, cat: "Mains", veg: false, img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500", desc: "48-hour braised ribs, red wine reduction, truffle mash" },
  { id: 9, name: "Smoked Tofu Stir Fry", price: 310, cat: "Mains", veg: true, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500", desc: "Cold-smoked tofu, seasonal greens, ginger, sesame, miso" },
  { id: 10, name: "Heritage Chicken Biryani", price: 480, cat: "Mains", veg: false, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500", desc: "Dum-cooked basmati, farm chicken, saffron, fried onions" },

  // HEALTHY
  { id: 11, name: "Quinoa Avocado Bowl", price: 290, cat: "Healthy", veg: true, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500", desc: "Tri-color quinoa, ripe avocado, edamame, sesame dressing" },
  { id: 12, name: "Grilled Salmon Salad", price: 550, cat: "Healthy", veg: false, img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500", desc: "Atlantic salmon, arugula, capers, dill, lemon vinaigrette" },
  { id: 13, name: "Kale & Chickpea Caesar", price: 260, cat: "Healthy", veg: true, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500", desc: "Tuscan kale, roasted chickpeas, cashew caesar, seed croutons" },
  { id: 14, name: "Tuna Niçoise Salad", price: 420, cat: "Healthy", veg: false, img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500", desc: "Seared ahi tuna, green beans, eggs, olives, dijon" },
  { id: 15, name: "Mediterranean Hummus Plate", price: 240, cat: "Healthy", veg: true, img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500", desc: "House hummus, roasted veg, feta, za'atar, warm pita" },
  { id: 16, name: "Acai Berry Bowl", price: 280, cat: "Healthy", veg: true, img: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=500", desc: "Frozen acai, banana, granola, coconut flakes, honey drizzle" },
  { id: 17, name: "Prawn Mango Salad", price: 480, cat: "Healthy", veg: false, img: "https://images.unsplash.com/photo-1535400875461-191c9ac1ced3?w=500", desc: "Tiger prawns, fresh mango, cucumber, thai chili dressing" },

  // APPETIZERS
  { id: 21, name: "Artisanal Spring Rolls", price: 180, cat: "Appetizers", veg: true, img: "https://images.unsplash.com/photo-1544378730-8b5104b18790?w=500", desc: "Crystal rolls, tofu, glass noodles, herbs, peanut sauce" },
  { id: 22, name: "Sticky Honey Wings", price: 280, cat: "Appetizers", veg: false, img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500", desc: "Free-range wings, wildflower honey, sriracha, sesame" },
  { id: 23, name: "Crispy Corn Fritters", price: 160, cat: "Appetizers", veg: true, img: "https://images.unsplash.com/photo-1600271886311-ad8d71424593?w=500", desc: "Sweet corn, cheddar, scallions, chipotle aioli" },
  { id: 24, name: "Calamari Fritti", price: 320, cat: "Appetizers", veg: false, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500", desc: "Crispy squid rings, lemon zest, marinara, herb oil" },
  { id: 25, name: "Bruschetta Pomodoro", price: 210, cat: "Appetizers", veg: true, img: "https://images.unsplash.com/photo-1572656631137-7935297eff55?w=500", desc: "Heirloom tomatoes, sourdough, aged balsamic, basil" },
  { id: 26, name: "Truffle Arancini", price: 260, cat: "Appetizers", veg: true, img: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=500", desc: "Saffron rice balls, black truffle, mozzarella, marinara" },
  { id: 27, name: "Shrimp Ceviche", price: 350, cat: "Appetizers", veg: false, img: "https://images.unsplash.com/photo-1535400875461-191c9ac1ced3?w=500", desc: "Tiger shrimp, citrus, red onion, cilantro, aji amarillo" },

  // DESSERTS
  { id: 31, name: "Belgian Chocolate Lava", price: 250, cat: "Desserts", veg: true, img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500", desc: "72% dark chocolate, liquid center, vanilla bean gelato" },
  { id: 32, name: "Classic Tiramisu", price: 280, cat: "Desserts", veg: true, img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500", desc: "Mascarpone, espresso-soaked ladyfingers, dark cocoa" },
  { id: 33, name: "New York Cheesecake", price: 310, cat: "Desserts", veg: true, img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500", desc: "Cream cheese, graham crust, fresh berry compote" },
  { id: 34, name: "Berry Fruit Tart", price: 220, cat: "Desserts", veg: true, img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=500", desc: "Buttery pastry, crème pâtissière, seasonal berries" },
  { id: 35, name: "Mango Panna Cotta", price: 240, cat: "Desserts", veg: true, img: "https://images.unsplash.com/photo-1488477304112-4944851de03d?w=500", desc: "Silky Italian custard, Alphonso mango coulis, mint" },
  { id: 36, name: "Matcha Opera Cake", price: 290, cat: "Desserts", veg: true, img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500", desc: "Layers of matcha sponge, white chocolate ganache" },

  // BEVERAGES
  { id: 41, name: "Green Detox Juice", price: 150, cat: "Beverages", veg: true, img: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=500", desc: "Cold-pressed kale, cucumber, celery, green apple, ginger" },
  { id: 42, name: "Berry Oat Smoothie", price: 180, cat: "Beverages", veg: true, img: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=500", desc: "Mixed berries, oat milk, banana, flax, hemp seeds" },
  { id: 43, name: "Sparkling Kombucha", price: 190, cat: "Beverages", veg: true, img: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?w=500", desc: "House-brewed, ginger-lemon, live cultures, effervescent" },
  { id: 44, name: "Ceremonial Matcha Latte", price: 200, cat: "Beverages", veg: true, img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500", desc: "Grade-A ceremonial matcha, oat milk, honey, cinnamon" },
  { id: 45, name: "Watermelon Mint Cooler", price: 160, cat: "Beverages", veg: true, img: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=500", desc: "Fresh watermelon, spearmint, lime, Himalayan pink salt" },
  { id: 46, name: "Turmeric Golden Milk", price: 170, cat: "Beverages", veg: true, img: "https://images.unsplash.com/photo-1615485500704-8e3b8b69a9df?w=500", desc: "Turmeric, coconut milk, black pepper, adaptogenic herbs" },
];

module.exports = { menu };
