import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import gsap from 'gsap';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Venue', href: '#visit' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isHidden ? -100 : 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed top-0 left-0 right-0 z-40 px-6 py-6 flex justify-center pointer-events-none"
    >
      <div 
        className={cn(
          "pointer-events-auto flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] rounded-full",
          isScrolled 
            ? "w-full max-w-4xl bg-espresso/40 backdrop-blur-xl border border-white/10 px-8 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
            : "w-full px-4 py-2"
        )}
      >
        <a href="#home" data-cursor="HOME" className="text-xl font-serif tracking-widest z-50 transition-colors duration-300 text-ivory flex items-center gap-2">
          <span className="font-light italic text-gold text-2xl">M</span>
          <span className={cn("transition-all duration-500 overflow-hidden", isScrolled ? "w-0 opacity-0 hidden md:block" : "w-auto opacity-100")}>ahtay</span>
        </a>

        {/* Desktop Nav */}
        <nav className={cn(
          "hidden md:flex items-center gap-8 transition-all duration-500",
          isScrolled ? "gap-6" : ""
        )}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              data-cursor="GO"
              className="text-xs font-medium tracking-[0.2em] uppercase transition-colors relative group text-ivory/80 hover:text-ivory"
            >
              {link.name}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            data-cursor="RESERVE"
            onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-reservation')); }}
            className={cn(
              "text-xs tracking-[0.2em] uppercase transition-all duration-500 rounded-full border",
              isScrolled 
                ? "px-6 py-2.5 bg-gold/10 text-gold border-gold/20 hover:bg-gold hover:text-espresso" 
                : "px-8 py-3 bg-transparent text-ivory border-ivory hover:bg-ivory hover:text-espresso"
            )}
          >
            Reserve
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 p-2 transition-colors duration-300 text-ivory"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-espresso z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-700 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] md:hidden pointer-events-auto',
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl font-serif text-ivory hover:text-gold transition-colors italic font-light"
          >
            {link.name}
          </a>
        ))}
        <button
          onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); window.dispatchEvent(new CustomEvent('open-reservation')); }}
          className="px-10 py-4 border border-gold text-gold text-sm tracking-widest uppercase mt-8 hover:bg-gold hover:text-espresso transition-colors"
        >
          Reserve Table
        </button>
      </div>
    </motion.header>
  );
}
