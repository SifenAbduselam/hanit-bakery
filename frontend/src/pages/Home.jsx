// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { businessPresets } from "../data/businessPresets";
import heroBg from "../assets/hero-bg.jpg";

export default function Home() {
  const data = businessPresets.bakery;

  return (
    <section 
      id="home"
      className="relative h-screen w-full overflow-hidden bg-cover bg-right-bottom bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* OVERLAY - Updated to match new palette */}
      <div className="absolute inset-0 bg-gradient-to-r from-bakery-cream/95 via-bakery-cream/60 to-transparent" />
      
      {/* Content - Moved slightly down with pt-20 */}
      <div className="relative z-10 w-full h-full flex items-center px-4 sm:px-6 lg:px-8 pt-20">
        
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left column - Content */}
            <div className="lg:col-span-4 lg:col-start-1 text-left -ml-4 lg:-ml-12">
              
              {/* Two lines: Welcome to / Hanit Bakery */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-bakery-dark leading-tight mb-6 animate-slide-up drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
                Welcome to<br />Hanit Bakery
              </h1>
              
              <p className="text-bakery-dark/90 text-sm md:text-base mb-8 max-w-sm animate-slide-up font-medium leading-relaxed" style={{ animationDelay: '0.4s' }}>
                {data.heroText}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <Link 
                  to="/booking"
                  className="inline-block bg-bakery-dark text-bakery-cream hover:bg-bakery-caramel px-6 py-2.5 text-xs font-bold transition-all uppercase tracking-wider hover:scale-105 hover:shadow-2xl text-center shadow-lg"
                >
                  Order Now →
                </Link>
                <a 
                  href="#products"
                  className="inline-block bg-bakery-cream border-2 border-bakery-dark text-bakery-dark hover:bg-bakery-dark hover:text-bakery-cream px-6 py-2.5 text-xs font-bold transition-all uppercase tracking-wider text-center shadow-md"
                >
                  View Products
                </a>
              </div>
            </div>
            
            {/* Empty right column */}
            <div className="hidden lg:block lg:col-span-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
}