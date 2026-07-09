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

  // Automatically get all unique categories from your data
  const categories = ["All", ...new Set(products.map(p => p.category).filter(Boolean))];

  // Filter the cakes based on what button is clicked
  const filteredProducts = activeFilter === "All" 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <section id="gallery" className="w-full py-16 md:py-20 bg-gradient-to-b from-[#F5E0E3]/30 to-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#8B4A5A] mb-3">Our Full Gallery</h2>
          <p className="text-gray-600 max-w-xl mx-auto font-light">Browse our complete collection of handcrafted desserts</p>
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

        {/* Gallery Grid (Shows ALL cakes, not just 6) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const productImage = productImages[product.name] || heroBg;
            
            return (
              <div key={product.id} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  <img src={productImage} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif text-[#8B4A5A] leading-tight">
                      {product.name}
                    </h3>
                    {product.category && (
                      <span className="text-xs font-medium text-[#8B4A5A] bg-[#F5E0E3] px-2 py-1 rounded-full whitespace-nowrap ml-2">
                        {product.category}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
                    {product.description}
                  </p>
                  <a href="#contact" className="inline-block bg-[#8B4A5A] text-white hover:bg-[#723C4B] px-6 py-2 text-sm font-medium uppercase tracking-wider transition-all rounded">
                    Inquire for Price
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}