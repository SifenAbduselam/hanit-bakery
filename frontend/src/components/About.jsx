// src/components/About.jsx
import { businessPresets } from "../data/businessPresets";
import aboutImage from "../assets/about-image.jpg";

export default function About() {
  const { about } = businessPresets.bakery;

  return (
    <section id="about" className="w-full">
      
      {/* ===== ABOUT SECTION ===== */}
      <div className="w-full py-16 md:py-24 bg-white">
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
      </div>

      {/* ===== VALUES SECTION ===== */}
      <div className="w-full bg-[#064e3b] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-light text-white uppercase tracking-wide">
              The Finest Goodies Place in Addis
            </h2>
          </div>

          {/* Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            
            {/* Column 1 */}
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-medium text-[#d4af37] mb-4 uppercase tracking-wider">
                Passion for Baking
              </h3>
              <p className="text-white/90 text-base leading-relaxed font-light">
                Putting in that magic ingredient, the heart.
              </p>
            </div>

            {/* Column 2 */}
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-medium text-[#d4af37] mb-4 uppercase tracking-wider">
                Pursuit of Perfection
              </h3>
              <p className="text-white/90 text-base leading-relaxed font-light">
                Exceeding your expectations in all that we do.
              </p>
            </div>

            {/* Column 3 */}
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-medium text-[#d4af37] mb-4 uppercase tracking-wider">
                Delightful Indulgence
              </h3>
              <p className="text-white/90 text-base leading-relaxed font-light">
                Fulfilling is watching you have a good time.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ===== TAKE CAKE SECTION (New!) ===== */}
      <div className="w-full bg-[#064e3b] py-20 md:py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          
          {/* Title with two colors */}
          <h2 className="text-5xl md:text-6xl font-serif font-light mb-10">
            <span className="text-white">Take</span>
            <span className="text-[#d4af37]"> Cake</span>
          </h2>

          {/* First Paragraph */}
          <p className="text-white/90 text-lg md:text-xl leading-relaxed font-light mb-8">
            Not only are our pastry chefs highly skilled, but they also have a great deal of passion for what they do. 
            To create unique and tasty pastries that you won't find anywhere else, they are always experimenting with 
            new tastes and ingredients.
          </p>

          {/* Second Paragraph */}
          <p className="text-white/90 text-lg md:text-xl leading-relaxed font-light mb-12">
            Attention to detail is the secret to making pastries that are genuinely remarkable. Every aspect of our 
            pastries is meticulously planned and constructed, from the ideal sweetness balance to the texture and 
            presentation.
          </p>

          {/* Down Arrow Button */}
          <div className="flex justify-center">
            <a href="#products" className="inline-flex items-center justify-center w-14 h-14 bg-[#d4af37] rounded-full hover:bg-[#b8960c] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}