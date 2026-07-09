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
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent" />
      
      {/* Content - Moved slightly down with pt-20 */}
      <div className="relative z-10 w-full h-full flex items-center px-4 sm:px-6 lg:px-8 pt-20">
        
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left column - Content */}
            <div className="lg:col-span-4 lg:col-start-1 text-left -ml-4 lg:-ml-12">
              
              {/* Text in one line */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#5C2A32] leading-tight mb-4 animate-slide-up drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
                Welcome to Hanit Bakery
              </h1>
              
              <p className="text-[#5C2A32]/90 text-base md:text-lg mb-8 max-w-md animate-slide-up font-medium leading-relaxed" style={{ animationDelay: '0.4s' }}>
                {data.heroText}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <Link 
                  to="/booking"
                  className="inline-block bg-[#5C2A32] text-white hover:bg-[#4A2228] px-8 py-3 text-sm font-bold transition-all uppercase tracking-wider hover:scale-105 hover:shadow-2xl text-center shadow-lg"
                >
                  Order Now →
                </Link>
                <a 
                  href="#products"
                  className="inline-block bg-white border-2 border-[#5C2A32] text-[#5C2A32] hover:bg-[#5C2A32] hover:text-white px-8 py-3 text-sm font-bold transition-all uppercase tracking-wider text-center shadow-md"
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

      {/* Scroll Indicator - REMOVED */}
    </section>
  );
}