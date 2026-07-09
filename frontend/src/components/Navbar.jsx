// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (sectionId) => {
    setIsOpen(false);
    if (isHome) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={() => window.scrollTo(0, 0)}>
            <img 
              src={logo} 
              alt="Hanit Bakery Logo" 
              className="h-14 md:h-16 lg:h-20 w-auto object-contain" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleSectionClick("home")}
              className={`text-sm font-medium transition-colors uppercase tracking-wide ${
                scrolled 
                  ? 'text-gray-700 hover:text-[#5C2A32]' 
                  : 'text-[#5C2A32] hover:text-[#4A2228]'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => handleSectionClick("products")}
              className={`text-sm font-medium transition-colors uppercase tracking-wide ${
                scrolled 
                  ? 'text-gray-700 hover:text-[#5C2A32]' 
                  : 'text-[#5C2A32] hover:text-[#4A2228]'
              }`}
            >
              Products
            </button>
            <button 
              onClick={() => handleSectionClick("about")}
              className={`text-sm font-medium transition-colors uppercase tracking-wide ${
                scrolled 
                  ? 'text-gray-700 hover:text-[#5C2A32]' 
                  : 'text-[#5C2A32] hover:text-[#4A2228]'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => handleSectionClick("contact")}
              className={`text-sm font-medium transition-colors uppercase tracking-wide ${
                scrolled 
                  ? 'text-gray-700 hover:text-[#5C2A32]' 
                  : 'text-[#5C2A32] hover:text-[#4A2228]'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Order Button - MORE VISIBLE */}
          <Link 
            to="/booking" 
            onClick={() => window.scrollTo(0, 0)}
            className="hidden md:inline-block bg-[#5C2A32] text-white px-8 py-3 text-sm font-bold transition-all uppercase tracking-wider hover:bg-[#4A2228] hover:scale-105 hover:shadow-xl shadow-lg rounded-sm"
          >
            Order Now
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden text-2xl transition-colors ${
              scrolled ? 'text-gray-700' : 'text-[#5C2A32]'
            }`}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-lg">
            <button 
              onClick={() => handleSectionClick("home")}
              className="block w-full text-left text-[#5C2A32] hover:text-[#4A2228] font-medium uppercase text-sm"
            >
              Home
            </button>
            <button 
              onClick={() => handleSectionClick("products")}
              className="block w-full text-left text-[#5C2A32] hover:text-[#4A2228] font-medium uppercase text-sm"
            >
              Products
            </button>
            <button 
              onClick={() => handleSectionClick("about")}
              className="block w-full text-left text-[#5C2A32] hover:text-[#4A2228] font-medium uppercase text-sm"
            >
              About
            </button>
            <button 
              onClick={() => handleSectionClick("contact")}
              className="block w-full text-left text-[#5C2A32] hover:text-[#4A2228] font-medium uppercase text-sm"
            >
              Contact
            </button>
            <Link 
              to="/booking" 
              onClick={() => {
                window.scrollTo(0, 0);
                setIsOpen(false);
              }}
              className="block bg-[#5C2A32] text-white text-center px-6 py-3 font-bold uppercase text-sm hover:bg-[#4A2228] shadow-lg rounded-sm"
            >
              Order Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}