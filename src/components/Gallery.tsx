import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import galleryVertical from '../assets/images/gallery_vertical_1785945205036.jpg';

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const images = gsap.utils.toArray('.gallery-img') as HTMLElement[];
    
    images.forEach((img, i) => {
      gsap.fromTo(img,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
          }
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} id="gallery" className="relative z-10 py-24 md:py-32 px-4 md:px-12 text-ivory">
      <div className="container mx-auto max-w-7xl bg-espresso/40 backdrop-blur-xl border border-ivory/10 rounded-3xl p-8 md:p-16 lg:p-24 overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
          <div className="w-full md:w-5/12 gallery-img">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={galleryVertical} 
                alt="Vertical details"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-full md:w-7/12 flex flex-col justify-center">
            <div className="max-w-lg mb-12">
              <h2 className="text-3xl md:text-5xl font-serif text-ivory leading-tight italic font-light mb-8">
                Designed to be experienced.
              </h2>
              <p className="text-ivory/80 font-sans font-light leading-relaxed">
                Whether you're seeking a quiet corner to lose yourself in a book, or a vibrant space to connect with friends, our lounge adapts to your rhythm. Every seat is the best seat in the house.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
