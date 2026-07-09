// src/components/Products.jsx
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

export default function Products() {
  const { products } = businessPresets.bakery;

  // Separate products by category
  const cakes = products.filter(p => p.category === "Cake").slice(0, 3);
  const cookies = products.filter(p => p.category === "Cookie").slice(0, 3);
  const bread = products.filter(p => p.category === "Bread").slice(0, 3);

  return (
    <section id="products" className="w-full bg-bakery-cream py-20 md:py-28 px-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-10 h-px bg-bakery-dark/40" />
            <p className="text-bakery-dark/80 text-xs font-medium uppercase tracking-[0.3em]">Our Specialties</p>
            <span className="w-10 h-px bg-bakery-dark/40" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-bakery-dark mb-4">What We Bake</h2>
          <p className="text-bakery-dark/70 max-w-xl mx-auto font-light text-lg">Freshly baked daily with love and the finest ingredients</p>
        </div>

        {/* ===== CAKES SECTION ===== */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-serif text-bakery-dark">Cakes</h3>
            <a href="#gallery?category=Cake" className="inline-flex items-center text-bakery-caramel hover:text-bakery-dark font-medium uppercase tracking-wider text-sm transition-colors">
              View All Cakes
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cakes.map((product) => (
              <ProductCard key={product.id} product={product} productImage={productImages[product.name] || heroBg} />
            ))}
          </div>
        </div>

        {/* ===== COOKIES SECTION ===== */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-serif text-bakery-dark">Cookies</h3>
            <a href="#gallery?category=Cookie" className="inline-flex items-center text-bakery-caramel hover:text-bakery-dark font-medium uppercase tracking-wider text-sm transition-colors">
              View All Cookies
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cookies.map((product) => (
              <ProductCard key={product.id} product={product} productImage={productImages[product.name] || heroBg} />
            ))}
          </div>
        </div>

        {/* ===== BREAD SECTION ===== */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-serif text-bakery-dark">Bread</h3>
            <a href="#gallery?category=Bread" className="inline-flex items-center text-bakery-caramel hover:text-bakery-dark font-medium uppercase tracking-wider text-sm transition-colors">
              View All Bread
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bread.map((product) => (
              <ProductCard key={product.id} product={product} productImage={productImages[product.name] || heroBg} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// Reusable Product Card Component
function ProductCard({ product, productImage }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-bakery-sage/50">
      <div className="relative h-64 overflow-hidden">
        <img src={productImage} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <h4 className="text-xl font-serif text-bakery-dark leading-tight mb-3 group-hover:text-bakery-caramel transition-colors">
          {product.name}
        </h4>
        <p className="text-bakery-dark/70 text-sm leading-relaxed font-light mb-4">
          {product.description}
        </p>
        <a href="#contact" className="inline-flex items-center text-sm text-bakery-caramel hover:text-bakery-dark font-medium uppercase tracking-wider transition-colors">
          Inquire
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}