// src/components/About.jsx
import { businessPresets } from "../data/businessPresets";
import aboutImage from "../assets/about-image.jpg";
import ingredientsImage from "../assets/ingredients.jpg";

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
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-bakery-cream rounded-full -z-10" />
            </div>

            {/* Right Side - Content */}
            <div className="lg:pl-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-10 h-px bg-bakery-caramel" />
                <p className="text-bakery-caramel text-xs font-medium uppercase tracking-[0.3em]">Our Story</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-bakery-dark mb-6">
                {about.title}
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-bakery-dark/80 font-light">
                  {about.story}
                </p>
                <p className="text-lg leading-relaxed text-bakery-dark/80 font-light">
                  {about.description}
                </p>
              </div>

              <div className="mt-10">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 bg-bakery-dark text-bakery-cream px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-bakery-caramel transition-all duration-300 rounded shadow-lg hover:shadow-xl"
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

      {/* ===== PART 2: DARK BROWN BACKGROUND (Values) ===== */}
      <div className="w-full bg-bakery-dark py-16 md:py-20 px-0">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-light text-bakery-cream uppercase tracking-wide">
              The Finest Goodies Place in Addis
            </h2>
            <div className="w-20 h-1 bg-bakery-caramel mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            <div className="text-center p-6 border border-bakery-caramel/20 rounded-xl hover:bg-bakery-caramel/10 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-medium text-bakery-caramel mb-4 uppercase tracking-wider font-serif">Passion for Baking</h3>
              <p className="text-bakery-cream/90 text-base leading-relaxed font-light">Putting in that magic ingredient, the heart.</p>
            </div>
            <div className="text-center p-6 border border-bakery-caramel/20 rounded-xl hover:bg-bakery-caramel/10 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-medium text-bakery-caramel mb-4 uppercase tracking-wider font-serif">Pursuit of Perfection</h3>
              <p className="text-bakery-cream/90 text-base leading-relaxed font-light">Exceeding your expectations in all that we do.</p>
            </div>
            <div className="text-center p-6 border border-bakery-caramel/20 rounded-xl hover:bg-bakery-caramel/10 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-medium text-bakery-caramel mb-4 uppercase tracking-wider font-serif">Delightful Indulgence</h3>
              <p className="text-bakery-cream/90 text-base leading-relaxed font-light">Fulfilling is watching you have a good time.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== PART 3: PALE CREAM BACKGROUND (Take Cake) ===== */}
      <div className="w-full bg-bakery-pale py-20 md:py-24 px-0">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          
          <h2 className="text-5xl md:text-6xl font-serif font-light mb-10 text-bakery-dark">
            Take <span className="text-bakery-caramel italic">Cake</span>
          </h2>

          <p className="text-bakery-dark/80 text-lg md:text-xl leading-relaxed font-light mb-8">
            Not only are our pastry chefs highly skilled, but they also have a great deal of passion for what they do. 
            To create unique and tasty pastries that you won't find anywhere else, they are always experimenting with 
            new tastes and ingredients.
          </p>

          <p className="text-bakery-dark/80 text-lg md:text-xl leading-relaxed font-light mb-12">
            Attention to detail is the secret to making pastries that are genuinely remarkable. Every aspect of our 
            pastries is meticulously planned and constructed, from the ideal sweetness balance to the texture and 
            presentation.
          </p>

          <div className="flex justify-center">
            <a href="#products" className="inline-flex items-center justify-center w-14 h-14 bg-bakery-dark text-bakery-cream rounded-full hover:bg-bakery-caramel transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ===== PART 4: WHITE BACKGROUND (Ingredients & Commitment) ===== */}
      <div className="w-full bg-white py-20 md:py-24 px-0">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Text Content */}
            <div className="lg:pr-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-10 h-px bg-bakery-caramel" />
                <p className="text-bakery-caramel text-xs font-medium uppercase tracking-[0.3em]">Quality First</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-bakery-dark mb-8">
                Our Commitment to You
              </h2>
              <p className="text-bakery-dark/80 text-lg leading-relaxed font-light mb-6">
                From sourcing to serving, our essential ingredients—the finest and freshest—are obtained from trusted 
                and reputable local and global suppliers. But what distinguishes us from the competition is our 
                commitment to making you satisfied.
              </p>
              <p className="text-bakery-dark/80 text-lg leading-relaxed font-light mb-8">
                Whether you're stopping by for a morning pastry and coffee or settling in for a leisurely afternoon 
                snack, the times you spend at our cozy and inviting patisserie are fulfilling.
              </p>
              <p className="text-bakery-caramel text-xl font-serif italic">
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
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-bakery-sage rounded-full -z-10" />
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}