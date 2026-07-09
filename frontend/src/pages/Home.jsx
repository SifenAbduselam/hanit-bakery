// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { businessPresets } from "../data/businessPresets";
import heroBg from "../assets/hero-bg.jpg";

export default function Home() {
  const data = businessPresets.bakery;

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center bg-cover bg-[20%_50%]"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* STRONGER OVERLAY: Increased opacity on the left for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left column - Content */}
          <div className="text-left lg:pr-12">
            
            {/* Welcome Text */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#5C2A32] leading-tight mb-6 animate-slide-up drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
              Welcome to<br />Hanit Bakery
            </h1>
            
            {/* Description */}
            <p className="text-[#5C2A32]/90 text-lg md:text-xl mb-10 max-w-lg animate-slide-up font-medium leading-relaxed" style={{ animationDelay: '0.4s' }}>
              {data.heroText}
            </p>

            {/* Animated Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <Link 
                to="/booking"
                className="inline-block bg-[#5C2A32] text-white hover:bg-[#4A2228] px-10 py-4 text-sm font-bold transition-all uppercase tracking-wider hover:scale-105 hover:shadow-2xl text-center shadow-lg"
              >
                Order Now →
              </Link>
              <a 
                href="#products"
                className="inline-block bg-white border-2 border-[#5C2A32] text-[#5C2A32] hover:bg-[#5C2A32] hover:text-white px-10 py-4 text-sm font-bold transition-all uppercase tracking-wider text-center shadow-md"
              >
                View Products
              </a>
            </div>
          </div>
          
          {/* Empty right column - lets cake show through */}
          <div className="hidden lg:block"></div>
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