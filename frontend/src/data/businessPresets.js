// src/data/businessPresets.js

export const businessPresets = {
  bakery: {
    
    // 👇 1. ABOUT SECTION (This fixes your crash!)
   about: {
  title: "OUR STORY", // or "About Us"
  story: "KOBA is a story of craftsmanship, excellence, and shared indulgence.",
  description: "We are a pastry and bakery place in Addis, where you'll ever find the tastiest, freshest, and most delicious handmade treats.",
  mission: "Baking smiles, one slice at a time.",
},

    // 👇 2. HERO SECTION
    hero: {
      title: "Handcrafted Desserts",
      subtitle: "Made with love, baked to perfection.",
      buttonText: "View Menu",
      buttonLink: "#products"
    },

    // 👇 3. SERVICES SECTION
    services: [
      { 
        id: 1, 
        title: "Custom Cakes", 
        description: "Unique, personalized designs for any special occasion." 
      },
      { 
        id: 2, 
        title: "Event Catering", 
        description: "Sweet treats and dessert tables for your parties and weddings." 
      },
      { 
        id: 3, 
        title: "Local Delivery", 
        description: "Freshly baked goods delivered right to your door." 
      }
    ],

    // 👇 4. PRODUCTS SECTION (With your new categories added!)
  // src/data/businessPresets.js
products: [
  // CAKES
  {
    id: 1,
    name: "White Coconut",
    description: "Delicate coconut cake with creamy frosting",
    price: "$45",
    category: "Cake", // 👈 Cake category
  },
  {
    id: 2,
    name: "Black Strawberry",
    description: "Rich chocolate cake with fresh strawberries",
    price: "$50",
    category: "Cake",
  },
  
  // COOKIES
  {
    id: 3,
    name: "Kinder Biscoff",
    description: "Indulgent Biscoff spread with Kinder chocolate",
    price: "$55",
    category: "Cookie", // 👈 Cookie category
  },
  {
    id: 4,
    name: "Oreo",
    description: "Classic Oreo cookie cake with cream cheese frosting",
    price: "$48",
    category: "Cookie",
  },
  
  // BREAD
  {
    id: 5,
    name: "White Strawberry",
    description: "Light vanilla sponge topped with glazed fresh strawberries",
    price: "$52",
    category: "Bread", // 👈 Bread category
  },
  {
    id: 6,
    name: "Lotus Biscoff",
    description: "Caramelized Biscoff crumbs with creamy lotus spread",
    price: "$50",
    category: "Bread",
  },
],

    // 👇 5. CONTACT SECTION
    contact: {
      phone: "+1 234 567 890",
      email: "hello@bakery.com",
      address: "123 Sweet Street, Dessert City",
      hours: "Mon-Sat: 8:00 AM - 8:00 PM"
    },

    // 👇 6. FOOTER SECTION
    footer: {
      copyright: "© 2024 Bakery. All rights reserved.",
      socialLinks: {
        instagram: "#",
        facebook: "#"
      }
    }

  } // end of bakery
};