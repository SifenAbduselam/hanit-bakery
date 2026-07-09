// src/components/Gallery.jsx
import { useState } from "react";
import { businessPresets } from "../data/businessPresets";
import heroBg from "../assets/hero-bg.jpg";
import whiteCoconut from "../assets/white-coconut.jpg";
import blackStrawberry from "../assets/black-strawberry.jpg";
import kinderBiscoff from "../assets/kinder-biscoff.jpg";
import oreo from "../assets/oreo.jpg";
import whiteStrawberry from "../assets/white-strawberry.jpg";
import lotusBiscoff from "../assets/lotus-biscoff.jpg";

const productImages = {
  "White Coconut": whiteCoconut,
  "Black Strawberry": blackStrawberry,
  "Kinder Biscoff": kinderBiscoff,
  "Oreo": oreo,
  "White Strawberry": whiteStrawberry,
  "Lotus Biscoff": lotusBiscoff,
};

export default function Gallery() {
  const { products } = businessPresets.bakery;
  const [activeFilter, setActiveFilter] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(products.map(p => p.category).filter(Boolean))];

  // Filter products
  const filteredProducts = activeFilter === "All" 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <section id="gallery" className="w-full py-16 md:py-20 bg-gradient-to-b from-[#F5E0E3] to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-10 h-px bg-[#8B4A5A]/40" />
            <p className="text-[#8B4A5A]/80 text-xs font-medium uppercase tracking-[0.3em]">Our Gallery</p>
            <span className="w-10 h-px bg-[#8B4A5A]/40" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#8B4A5A] mb-3">All Our Creations</h2>
          <p className="text-[#8B4A5A]/70 max-w-xl mx-auto font-light">Browse our complete collection of handcrafted desserts</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all ${
                activeFilter === category
                  ? "bg-[#8B4A5A] text-white shadow-lg"
                  : "bg-white text-[#8B4A5A] hover:bg-[#8B4A5A] hover:text-white border border-[#8B4A5A]/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const productImage = productImages[product.name] || heroBg;
            
            return (
              <div key={product.id} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img src={productImage} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  
                  {product.category && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-medium text-[#8B4A5A] uppercase tracking-wider">
                        {product.category}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-[#8B4A5A] leading-tight mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
                    {product.description}
                  </p>
                  <a href="#contact" className="inline-block bg-[#8B4A5A] text-white hover:bg-[#723C4B] px-6 py-2 text-sm font-medium uppercase tracking-wider transition-all rounded">
                    Order Now
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#8B4A5A]/60 text-lg">No cakes found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}