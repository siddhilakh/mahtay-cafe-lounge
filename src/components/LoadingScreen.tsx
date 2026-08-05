import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = '';
    }, 2500);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.85, 0, 0.15, 1] }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-espresso"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 md:w-24 md:h-24 border border-gold/30 flex items-center justify-center rounded-sm relative overflow-hidden mb-8">
               <motion.div
                 initial={{ y: "100%" }}
                 animate={{ y: "0%" }}
                 transition={{ duration: 1.5, ease: "circOut" }}
                 className="absolute inset-0 bg-gold/10"
               />
               <span className="font-serif text-3xl md:text-5xl text-gold z-10 font-light italic">M</span>
            </div>
            <motion.div className="overflow-hidden flex flex-col items-center">
              <motion.h1 
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-sm md:text-base font-serif text-ivory tracking-[0.3em] uppercase font-light mb-2"
              >
                Mahtay
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xs text-gold tracking-widest font-light"
              >
                Café & Lounge
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
