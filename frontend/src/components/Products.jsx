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

  return (
    <section id="products" className="w-full my-16 md:my-24 px-0">
      
      <div className="w-full bg-[#8B4A5A] shadow-2xl py-16 md:py-20">
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-10 h-px bg-white/40" />
              <p className="text-white/80 text-xs font-medium uppercase tracking-[0.3em]">Our Menu</p>
              <span className="w-10 h-px bg-white/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-3">Exquisite Desserts</h2>
            <p className="text-white/80 max-w-xl mx-auto font-light">Handcrafted with love, made fresh to order</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 6).map((product) => {
              const productImage = productImages[product.name] || heroBg;
              
              return (
                <div key={product.id} className="group bg-[#723C4B] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/10">
                  <div className="relative h-56 overflow-hidden">
                    <img src={productImage} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    
                    {/* CATEGORY BADGE */}
                    {product.category && (
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-xs font-medium text-[#8B4A5A] uppercase tracking-wider">
                          {product.category}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-white leading-tight mb-3 group-hover:text-[#F5E0E3] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed font-light mb-4">
                      {product.description}
                    </p>
                    
                    {/* INQUIRE BUTTON INSTEAD OF PRICE */}
                    <a href="#contact" className="inline-block text-sm text-[#F5E0E3] hover:text-white font-medium uppercase tracking-wider transition-colors">
                      Inquire for Price →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* VIEW MORE BUTTON - Links to Gallery */}
          <div className="text-center mt-14">
            <p className="text-white/90 text-lg mb-6 font-light">Want to see our full collection?</p>
            <a href="#gallery" className="inline-block bg-white text-[#8B4A5A] hover:bg-[#F5E0E3] px-10 py-3 text-sm font-medium uppercase tracking-wider transition-all shadow-lg hover:shadow-xl">
              View All Cakes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}