import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const experiences = [
  {
    title: "Artisan Coffee",
    description: "Hand-pulled espresso, premium beans, expert baristas.",
    image: "/images/experience_barista_1785938858879.jpg"
  },
  {
    title: "Live Music",
    description: "Local artists every week. An atmosphere worth staying for.",
    image: "/images/venue_live_music_1785941060447.jpg"
  },
  {
    title: "Art Gallery",
    description: "Rotating exhibitions from Niagara's local artists.",
    image: "/images/venue_art_gallery_1785941082599.jpg"
  },
  {
    title: "Evening Lounge",
    description: "Craft cocktails, wine, late-night ambience.",
    image: "/images/menu_cocktail_1785945159697.jpg"
  }
];

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const elements = gsap.utils.toArray('.feature-card') as HTMLElement[];
    
    elements.forEach((el, index) => {
      gsap.fromTo(el, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} id="experience" className="relative z-10 py-24 md:py-32 px-4 md:px-12 text-ivory">
      <div className="container mx-auto max-w-7xl bg-espresso/40 backdrop-blur-xl border border-ivory/10 rounded-3xl p-8 md:p-16 lg:p-24 overflow-hidden shadow-2xl">
        
        <div className="text-center mb-20 feature-card">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-8 md:w-16 bg-gold/50"></div>
            <h2 className="text-xs tracking-[0.4em] uppercase text-gold">The Mahtay Experience</h2>
            <div className="h-[1px] w-8 md:w-16 bg-gold/50"></div>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif font-light italic">More Than A Café</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {experiences.map((item, index) => (
            <div 
              key={index}
              className="feature-card group relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle tint overlay */}
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/10 transition-colors duration-700" />
              
              {/* Glass overlay container for text */}
              <div className="absolute inset-x-4 bottom-4 md:inset-x-8 md:bottom-8 p-6 md:p-8 rounded-xl bg-espresso/40 backdrop-blur-md border border-ivory/10 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 shadow-xl overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-xs md:text-sm tracking-[0.2em] text-gold uppercase mb-3 md:mb-4">
                    {item.title}
                  </h4>
                  <p className="text-ivory/90 font-serif text-lg md:text-xl font-light italic leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
