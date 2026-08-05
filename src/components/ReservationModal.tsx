import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-espresso/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative w-full max-w-5xl h-full md:h-auto bg-ivory shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-espresso/40 hover:text-espresso transition-colors z-20"
            >
              <X size={24} />
            </button>

            <div className="hidden md:block w-1/2 relative overflow-hidden bg-espresso">
              <img 
                src="/images/gallery_vertical_1785945205036.jpg" 
                alt="Mahtay Cafe"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent" />
            </div>

            <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center overflow-y-auto">
              <h3 className="text-4xl md:text-5xl font-serif text-espresso mb-4 leading-none">Your <br/><span className="italic font-light">Reservation</span></h3>
              <p className="text-espresso/60 font-sans font-light mb-12 text-sm leading-relaxed max-w-sm">Join us for an unforgettable experience. We recommend booking in advance for evening hours.</p>
              
              <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="sm:col-span-2 relative">
                    <input type="text" required placeholder="Full Name" className="w-full bg-transparent border-b border-espresso/20 py-3 outline-none focus:border-gold transition-colors text-espresso font-light rounded-none placeholder:text-espresso/40" />
                  </div>
                  <div className="sm:col-span-2 relative">
                    <input type="email" required placeholder="Email Address" className="w-full bg-transparent border-b border-espresso/20 py-3 outline-none focus:border-gold transition-colors text-espresso font-light rounded-none placeholder:text-espresso/40" />
                  </div>
                  <div className="relative">
                    <input type="date" required className="w-full bg-transparent border-b border-espresso/20 py-3 outline-none focus:border-gold transition-colors text-espresso/70 font-light rounded-none" />
                  </div>
                  <div className="relative">
                    <input type="time" required className="w-full bg-transparent border-b border-espresso/20 py-3 outline-none focus:border-gold transition-colors text-espresso/70 font-light rounded-none" />
                  </div>
                  <div className="sm:col-span-2 relative">
                    <select required className="w-full bg-transparent border-b border-espresso/20 py-3 outline-none focus:border-gold transition-colors text-espresso/70 font-light rounded-none appearance-none">
                      <option value="" disabled selected>Number of Guests</option>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5+">5+ People</option>
                    </select>
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full py-5 mt-4 bg-espresso text-ivory text-xs tracking-[0.2em] uppercase hover:bg-gold transition-colors duration-300"
                >
                  Request Table
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
