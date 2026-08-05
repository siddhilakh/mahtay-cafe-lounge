import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LoadingScreen } from './components/LoadingScreen';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  useEffect(() => {
    const handleOpenReservation = () => setIsReservationOpen(true);
    window.addEventListener('open-reservation', handleOpenReservation);
    
    return () => {
      window.removeEventListener('open-reservation', handleOpenReservation);
    };
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-gold/30 selection:text-ivory overflow-x-hidden relative text-ivory">
      {/* Global Video Background */}
      <div className="fixed inset-0 z-[-2] w-full h-full">
        <video
          src="/images/hero_video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      <div className="fixed inset-0 bg-espresso/60 z-[-1] pointer-events-none" />

      <CustomCursor />
      <LoadingScreen />
      <Navbar />
      <ReservationModal isOpen={isReservationOpen} onClose={() => setIsReservationOpen(false)} />
      <main>
        <Hero />
        <About />
        <Menu />
        <Features />
        <Gallery />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
