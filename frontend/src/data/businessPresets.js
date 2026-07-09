// src/data/businessPresets.js

export const businessPresets = {
  bakery: {
    name: "Bi-Sweet Deserts",
    type: "Homemade Desserts",
    heroTitle: "Bi-Sweet",
    heroSubtitle: "Homemade with Love",
    heroText: "Premium, artisanal homemade desserts crafted with love and the finest ingredients.",
    
// Inside src/data/businessPresets.js

    products: [
      { 
        id: 1,
        name: "White Coconut", 
        price: "250 Br", 
        description: "Creamy coconut dessert topped with shredded coconut flakes"
      },
      { 
        id: 2,
        name: "Black Strawberry", 
        price: "300 Br", 
        description: "Rich chocolate base with fresh strawberries and cream"
      },
      { 
        id: 3,
        name: "Kinder Biscoff", 
        price: "280 Br", 
        description: "Lotus biscoff cookies layered with creamy custard"
      },
      { 
        id: 4,
        name: "Oreo", 
        price: "250 Br", 
        description: "Classic Oreo cookies with caramel drizzle and cream"
      },
      { 
        id: 5,
        name: "White Strawberry", 
        price: "300 Br", 
        description: "Delicate white cream with fresh strawberry layers"
      },
      { 
        id: 6,
        name: "Lotus Biscoff", 
        price: "280 Br", 
        description: "Crushed biscoff cookies with caramel and cream layers"
      },
    ],

    contact: {
      phone: "0982284291",
      location: "Jimma",
      email: "hello@bisweetdeserts.com",
      hours: "Mon-Sat: 9AM - 6PM",
      tiktok: "https://www.tiktok.com/@__bi__sweet?is_from_webapp=1&sender_device=pc",
      tiktokUsername: "__bi__sweet",
      telegram: "https://t.me/Yb087",
      telegramUsername: "Yb087",
    },

    about: {
      title: "Our Story",
      text: "Bi-Sweet Deserts started as a small home kitchen passion project. Today, we continue to create handcrafted desserts using traditional recipes and premium ingredients. Every dessert is made fresh to order with love.",
    }
  },
};