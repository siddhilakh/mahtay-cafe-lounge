import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !videoRef.current || !textRef.current) return;
    
    // Parallax and zoom effect on scroll
    gsap.to(videoRef.current, {
      scale: 1.15,
      y: 100,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.to(textRef.current, {
      y: 50,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    // Initial cinematic zoom
    gsap.fromTo(videoRef.current,
      { scale: 1.1 },
      { scale: 1, duration: 2, ease: "power2.out" }
    );
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative h-screen w-full flex items-center justify-center">
      <div ref={textRef} className="relative z-10 flex flex-col items-center text-center mt-20 px-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-[120px] font-serif text-ivory tracking-wider mb-2 font-light uppercase">
            MAHTAY
          </h1>
          <p className="text-sm md:text-lg tracking-[0.4em] text-gold uppercase mb-16 font-light">
            Café & Lounge
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="flex flex-col items-center pointer-events-auto"
        >
          <p className="text-lg md:text-2xl text-ivory/80 font-serif italic max-w-2xl leading-relaxed mb-16">
            Coffee. Culture. Conversation.
          </p>

          <a 
            href="#menu" 
            data-cursor="EXPLORE"
            className="group flex flex-col items-center gap-4 text-xs tracking-[0.2em] text-ivory uppercase hover:text-gold transition-colors duration-500"
          >
            <span>Explore Experience</span>
            <div className="w-8 h-12 rounded-full border border-ivory/30 flex items-start justify-center p-2 group-hover:border-gold/50 transition-colors duration-500 relative overflow-hidden">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1 rounded-full bg-gold"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
