// src/components/Values.jsx
export default function Values() {
  return (
    <section className="w-full bg-[#064e3b] py-16 md:py-20">
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
    </section>
  );
}