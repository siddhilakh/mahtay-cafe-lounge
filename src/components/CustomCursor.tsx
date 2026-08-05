import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { cn } from '../lib/utils';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    // Set initial GSAP positions
    gsap.set(cursor, { x: mouseX, y: mouseY, xPercent: -50, yPercent: -50 });

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.05,
        ease: 'none',
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const magneticTarget = target.closest('[data-magnetic]');
      const cursorTarget = target.closest('[data-cursor]');
      
      if (cursorTarget || target.tagName === 'A' || target.tagName === 'BUTTON') {
        setIsHovering(true);
        const text = cursorTarget?.getAttribute('data-cursor');
        if (text) {
          setCursorText(text);
        } else {
          setCursorText('');
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      setIsHovering(false);
      setCursorText('');
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={cn(
        "fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center rounded-full mix-blend-difference transition-all duration-300",
        isHovering ? "w-24 h-24 bg-white" : "w-4 h-4 bg-white"
      )}
    >
      <span 
        ref={textRef}
        className={cn(
          "text-espresso font-medium text-xs tracking-widest uppercase transition-opacity duration-300 absolute",
          cursorText && isHovering ? "opacity-100" : "opacity-0"
        )}
      >
        {cursorText}
      </span>
    </div>
  );
}
