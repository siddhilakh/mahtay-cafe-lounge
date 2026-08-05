import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Kendra R",
    text: "Service is great and they have a nice selection of vegan/veggie snacks and meals",
  },
  {
    name: "Muriah U",
    text: "Yummy baked goods, well made drinks, friendly staff, and lots of seating.",
  },
  {
    name: "Vanessa Lee",
    text: "Fantastic place to study with great food, coffee, and vibes.",
  }
];

export function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const elements = gsap.utils.toArray('.review-card') as HTMLElement[];
    
    elements.forEach((el, index) => {
      gsap.fromTo(el, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} id="reviews" className="relative z-10 py-24 md:py-32 px-4 md:px-12 text-ivory">
      <div className="container mx-auto max-w-7xl bg-espresso/40 backdrop-blur-xl border border-ivory/10 rounded-3xl p-8 md:p-16 lg:p-24 overflow-hidden shadow-2xl">
        
        <div className="text-center mb-24">
          <h2 className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Word of Mouth</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-light italic">Voices of the Lounge</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {reviews.map((review, i) => (
            <div key={i} className="review-card flex flex-col items-center text-center p-8 border border-ivory/10 rounded-2xl bg-ivory/5">
              <div className="flex gap-1 mb-6 text-gold">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-ivory/80 font-serif italic text-lg lg:text-xl leading-relaxed mb-8 flex-grow">
                "{review.text}"
              </p>
              <h4 className="text-sm tracking-[0.2em] text-ivory uppercase">
                {review.name}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
