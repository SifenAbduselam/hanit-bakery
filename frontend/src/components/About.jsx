// src/components/About.jsx
import { businessPresets } from "../data/businessPresets";
import aboutImage from "../assets/about-image.jpg";
import ingredientsImage from "../assets/ingredients.jpg"; // Add this image

export default function About() {
  const { about } = businessPresets.bakery;

  return (
    <section id="about" className="w-full px-0">
      
      {/* ===== PART 1: WHITE BACKGROUND (Our Story) ===== */}
      <div className="w-full bg-white py-16 md:py-24">
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

      {/* ===== PART 2: GREEN BACKGROUND (Values) ===== */}
    

      {/* ===== PART 3: GREEN BACKGROUND (Take Cake) ===== */}
      <div className="w-full bg-[#064e3b] py-20 md:py-24 border-t border-white/10 px-0">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          
          <h2 className="text-5xl md:text-6xl font-serif font-light mb-10">
            <span className="text-white">Take</span>
            <span className="text-[#d4af37]"> Cake</span>
          </h2>

          <p className="text-white/90 text-lg md:text-xl leading-relaxed font-light mb-8">
            Not only are our pastry chefs highly skilled, but they also have a great deal of passion for what they do. 
            To create unique and tasty pastries that you won't find anywhere else, they are always experimenting with 
            new tastes and ingredients.
          </p>

          <p className="text-white/90 text-lg md:text-xl leading-relaxed font-light mb-12">
            Attention to detail is the secret to making pastries that are genuinely remarkable. Every aspect of our 
            pastries is meticulously planned and constructed, from the ideal sweetness balance to the texture and 
            presentation.
          </p>

          <div className="flex justify-center">
            <a href="#products" className="inline-flex items-center justify-center w-14 h-14 bg-[#d4af37] rounded-full hover:bg-[#b8960c] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ===== PART 4: INGREDIENTS & COMMITMENT (New Section) ===== */}
      <div className="w-full bg-white py-20 md:py-24 px-0">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Text Content */}
            <div className="lg:pr-8">
              <p className="text-gray-700 text-lg leading-relaxed font-light mb-6">
                From sourcing to serving, our essential ingredients—the finest and freshest—are obtained from trusted 
                and reputable local and global suppliers. But what distinguishes us from the competition is our 
                commitment to making you satisfied.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-light mb-8">
                Whether you're stopping by for a morning pastry and coffee or settling in for a leisurely afternoon 
                snack, the times you spend at our cozy and inviting patisserie are fulfilling.
              </p>
              <p className="text-[#d4af37] text-lg font-medium">
                Make beautiful KOBA memories.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={ingredientsImage} 
                  alt="Our Ingredients" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#064e3b]/5 rounded-full -z-10" />
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}