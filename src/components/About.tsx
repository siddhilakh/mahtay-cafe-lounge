import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current || !quoteRef.current) return;

    gsap.to(imageRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.fromTo(quoteRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: quoteRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} id="about" className="relative z-10 py-24 md:py-32 px-4 md:px-12">
      <div className="container mx-auto max-w-7xl bg-espresso/40 backdrop-blur-xl border border-ivory/10 rounded-3xl p-8 md:p-16 lg:p-24 overflow-hidden shadow-2xl">
        <div className="max-w-3xl mb-32">
          <h2 className="text-xs tracking-[0.3em] uppercase text-gold mb-8">Our Philosophy</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-ivory leading-tight mb-8">
            An oasis of <br/><span className="italic font-light">refined culture.</span>
          </h3>
          <p className="text-ivory/80 font-sans text-lg font-light leading-relaxed max-w-xl">
            Mahtay Café & Lounge is a sanctuary designed for those who seek more than just coffee. It is a cinematic escape where high-end hospitality meets local artistry. Every detail, from the rich walnut tables to the brass accents, tells a story of craftsmanship.
          </p>
        </div>

        {/* Overlapping quotation */}
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="w-full md:w-5/12">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl group shadow-2xl">
              <img 
                src="/images/gallery_people_1785938922599.jpg" 
                alt="Lively cafe atmosphere"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
            </div>
          </div>
          
          <div ref={quoteRef} className="w-full md:w-7/12">
            <h4 className="text-3xl md:text-5xl lg:text-7xl font-serif text-ivory leading-tight italic font-light mb-12">
              "A space where time slows down, and every sip feels like a scene from a film."
            </h4>
            <div className="flex items-center gap-6">
              <div className="w-16 h-[1px] bg-gold"></div>
              <span className="text-sm tracking-[0.2em] uppercase text-ivory/60">The Vision</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
