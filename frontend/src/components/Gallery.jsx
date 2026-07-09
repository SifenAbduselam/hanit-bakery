// src/components/Gallery.jsx
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  
  // Get category from URL (e.g., #gallery?category=Cake)
  const getInitialCategory = () => {
    const params = new URLSearchParams(location.hash.split('?')[1]);
    return params.get('category') || "All";
  };

  const [activeFilter, setActiveFilter] = useState(getInitialCategory());

  // Update filter when URL changes
  useEffect(() => {
    setActiveFilter(getInitialCategory());
  }, [location.hash]);

  const categories = ["All", "Cake", "Cookie", "Bread"];
  const filteredProducts = activeFilter === "All" 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <section id="gallery" className="w-full py-20 md:py-28 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-bakery-dark mb-4">
            {activeFilter === "All" ? "Our Full Gallery" : `All ${activeFilter}s`}
          </h2>
          <p className="text-bakery-dark/70 max-w-xl mx-auto font-light text-lg">
            {activeFilter === "All" 
              ? "Browse our complete collection of handcrafted desserts" 
              : `Explore our delicious ${activeFilter.toLowerCase()} selection`
            }
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                activeFilter === category
                  ? "bg-bakery-dark text-bakery-cream shadow-lg"
                  : "bg-bakery-cream text-bakery-dark hover:bg-bakery-caramel hover:text-white border border-bakery-dark/20"
              }`}
            >
              {category === "All" ? "All Products" : `All ${category}s`}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const productImage = productImages[product.name] || heroBg;
            
            return (
              <div key={product.id} className="group bg-bakery-cream/30 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-bakery-sage/30">
                <div className="relative h-64 overflow-hidden">
                  <img src={productImage} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 right-4 bg-bakery-dark/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-medium text-bakery-cream uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-bakery-dark leading-tight mb-3">
                    {product.name}
                  </h3>
                  <p className="text-bakery-dark/70 text-sm leading-relaxed font-light mb-6">
                    {product.description}
                  </p>
                  <a href="#contact" className="inline-block bg-bakery-dark text-bakery-cream hover:bg-bakery-caramel px-6 py-2 text-sm font-medium uppercase tracking-wider transition-all rounded w-full text-center">
                    Inquire for Price
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-bakery-dark/60 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}