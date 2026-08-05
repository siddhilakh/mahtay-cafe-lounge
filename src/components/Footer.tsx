import { useRef } from 'react';

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <footer ref={containerRef} id="contact" className="relative z-10 py-24 md:py-32 px-4 md:px-12 text-ivory">
      <div className="container mx-auto max-w-7xl bg-espresso/40 backdrop-blur-xl border border-ivory/10 rounded-3xl p-8 md:p-16 lg:p-24 overflow-hidden shadow-2xl flex flex-col justify-between">
        
        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-gold mb-6 font-medium">Location</h4>
              <p className="text-ivory/80 font-light leading-relaxed">
                241 St. Paul Street<br />
                St. Catharines, ON<br />
                L2R 3M7
              </p>
            </div>

            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-gold mb-6 font-medium">Hours</h4>
              <ul className="text-ivory/80 font-light leading-relaxed space-y-2">
                <li className="flex justify-between max-w-[200px]">
                  <span>Mon - Wed</span>
                  <span>8am - 8pm</span>
                </li>
                <li className="flex justify-between max-w-[200px]">
                  <span>Thu - Sat</span>
                  <span>8am - 11pm</span>
                </li>
                <li className="flex justify-between max-w-[200px]">
                  <span>Sunday</span>
                  <span>9am - 5pm</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-gold mb-6 font-medium">Connect</h4>
              <div className="flex flex-col items-start gap-4">
                <a href="https://instagram.com/mahtaycafe" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-ivory/80 font-light hover:text-gold transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  <span>Follow Us</span>
                </a>
                <button onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-reservation')); }} className="text-ivory/80 font-light hover:text-gold transition-colors mt-2">Reserve a Table</button>
              </div>
            </div>
          </div>

          <div className="w-full h-64 md:h-full min-h-[300px] rounded-2xl overflow-hidden border border-ivory/10 shadow-2xl relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2911.4583767223067!2d-79.24584282361668!3d43.15783307113113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3506cfbb8dccb%3A0x6e2c2ddf7756f7ee!2sMahtay%20Caf%C3%A9%20%26%20Lounge!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 opacity-80"
            ></iframe>
          </div>
        </div>

        {/* Massive Typography Ending */}
        <div className="text-center md:text-left flex flex-col md:flex-row items-end justify-between w-full border-t border-gold/20 pt-12">
          <div className="overflow-hidden">
            <h1 className="text-5xl md:text-8xl font-serif text-ivory tracking-tight leading-none mb-4 md:mb-0">
              MAHTAY
            </h1>
          </div>
          
          <div className="flex flex-col items-end gap-2 text-right">
            <p className="text-gold font-serif italic text-xl md:text-2xl">Café & Lounge</p>
            <p className="text-xs text-ivory/40 uppercase tracking-widest mt-4">© 2026 Mahtay. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
