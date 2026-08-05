import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import menuLatteArt from '../assets/images/menu_latte_art_1785945147381.jpg';
import menuCocktail from '../assets/images/menu_cocktail_1785945159697.jpg';

const signatureItems = [
  {
    name: "The Velvet Cortado",
    description: "Single-origin espresso, steamed milk, hint of Madagascar vanilla.",
    image: menuLatteArt,
  },
  {
    name: "Midnight Botanical",
    description: "Gin, elderflower, blackberry reduction, smoked rosemary.",
    image: menuCocktail,
  }
];

const fullMenu = [
  { category: "Espresso Bar", items: ["Americano", "Cappuccino", "Latte", "Flat White", "Mocha", "Cortado"] },
  { category: "Handcrafted Teas", items: ["Matcha Latte", "London Fog", "Chai Latte", "Earl Grey", "Sencha Green"] },
  { category: "Culinary Creations", items: ["Avocado Tartine", "Smoked Salmon Bagel", "Heirloom Tomato Sandwich", "Truffle Mushroom Panini"] },
  { category: "Evening Lounge", items: ["Old Fashioned", "Negroni", "Espresso Martini", "Local Craft Beer", "Curated Wine Selection"] }
];

export function Menu() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const items = gsap.utils.toArray('.menu-item') as HTMLElement[];
    
    items.forEach((item) => {
      const image = item.querySelector('.menu-image');
      const text = item.querySelector('.menu-text');
      
      if (image) {
        gsap.fromTo(image, 
          { scale: 1.1, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 70%",
            }
          }
        );
      }

      if (text) {
        gsap.fromTo(text,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 70%",
            }
          }
        );
      }
    });
  }, []);

  return (
    <>
      <section ref={containerRef} id="menu" className="relative z-10 py-24 md:py-32 px-4 md:px-12 text-ivory">
        <div className="container mx-auto max-w-7xl bg-espresso/40 backdrop-blur-xl border border-ivory/10 rounded-3xl p-8 md:p-16 lg:p-24 overflow-hidden shadow-2xl">
          <div className="text-center mb-24">
            <h2 className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Signature Collection</h2>
            <h3 className="text-4xl md:text-6xl font-serif font-light italic mb-12">Curated Taste</h3>
            <button 
              onClick={() => setIsFullMenuOpen(true)}
              className="inline-flex items-center gap-4 text-xs tracking-[0.2em] text-ivory uppercase hover:text-gold transition-colors duration-500 border border-ivory/30 hover:border-gold/50 px-8 py-4 rounded-full backdrop-blur-md"
            >
              View Full Menu
            </button>
          </div>

          <div className="space-y-32">
            {signatureItems.map((item, index) => (
              <div 
                key={item.name} 
                className={`menu-item flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
              >
                <div className="w-full md:w-1/2">
                  <div className="aspect-[4/5] overflow-hidden relative rounded-2xl shadow-2xl" data-cursor="DRAG">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="menu-image w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 border border-ivory/20 rounded-2xl pointer-events-none m-4" />
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 menu-text text-center md:text-left flex flex-col justify-center">
                  <h4 className="text-3xl md:text-5xl font-serif text-ivory mb-6 font-light">
                    {item.name}
                  </h4>
                  <p className="text-ivory/70 font-sans text-sm md:text-base tracking-wide max-w-sm uppercase leading-relaxed mx-auto md:mx-0">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Menu Modal */}
      <AnimatePresence>
        {isFullMenuOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFullMenuOpen(false)}
              className="absolute inset-0 bg-espresso/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative w-full max-w-4xl h-full md:h-[80vh] bg-espresso/90 border border-ivory/10 shadow-2xl md:rounded-3xl overflow-y-auto backdrop-blur-xl"
            >
              <button
                onClick={() => setIsFullMenuOpen(false)}
                className="absolute top-6 right-6 text-ivory/60 hover:text-ivory transition-colors z-20"
              >
                <X size={24} />
              </button>
              
              <div className="p-12 md:p-16">
                <div className="text-center mb-16">
                  <h2 className="text-sm tracking-[0.3em] uppercase text-gold mb-4">Complete Selection</h2>
                  <h3 className="text-4xl md:text-5xl font-serif text-ivory font-light italic">The Menu</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  {fullMenu.map((category) => (
                    <div key={category.category}>
                      <h4 className="text-xl font-serif text-gold mb-6 border-b border-ivory/10 pb-4">{category.category}</h4>
                      <ul className="space-y-4">
                        {category.items.map((item) => (
                          <li key={item} className="text-ivory/80 font-light tracking-wide text-sm md:text-base">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
