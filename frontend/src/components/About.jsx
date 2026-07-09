// src/components/About.jsx
import { businessPresets } from "../data/businessPresets";
import aboutImage from "../assets/about-image.jpg"; // You'll add this image

export default function About() {
  const { about } = businessPresets.bakery;

  return (
    <section id="about" className="w-full py-16 md:py-24 px-0 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={aboutImage} 
                alt="Our Story" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Optional: Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#8B4A5A]/10 rounded-full -z-10" />
          </div>

          {/* Right Side - Content */}
          <div className="lg:pl-8">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#064e3b] mb-6">
              {about.title}
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700 font-light">
                {about.story}
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700 font-light">
                {about.description}
              </p>
            </div>

            {/* Button */}
            <div className="mt-10">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-[#064e3b] text-white px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-[#8B4A5A] transition-all duration-300 rounded shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}