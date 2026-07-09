// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { businessPresets } from "../data/businessPresets";
import heroBg from "../assets/hero-bg.jpg";

export default function Home() {
  const data = businessPresets.bakery;

  return (
    <section 
  id="home"
  className="relative min-h-screen flex items-center bg-cover bg-[100%_200%] bg-no-repeat"
  style={{ backgroundImage: `url(${heroBg})` }}
>
      {/* STRONGER OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left column - Content */}
          <div className="lg:col-span-5 lg:col-start-1 text-left">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#5C2A32] leading-tight mb-4 animate-slide-up drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
              Welcome to<br />Hanit Bakery
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
          <div className="hidden lg:block lg:col-span-7"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/4 animate-bounce hidden lg:block">
        <span className="text-[#5C2A32] text-sm uppercase tracking-widest block mb-2 drop-shadow-sm">Scroll</span>
        <div className="w-0.5 h-10 bg-[#5C2A32] rounded-full mx-auto"></div>
      </div>
    </section>
  );
}