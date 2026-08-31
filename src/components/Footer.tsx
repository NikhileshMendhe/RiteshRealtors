import React from 'react';
import { Logo } from './Logo';
import { Instagram, MapPin, PhoneCall } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-12 border-t border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div onClick={() => onNavigate('home')} className="cursor-pointer inline-block">
              <Logo size="md" variant="dark" />
            </div>

            <p className="text-xs text-stone-400 max-w-sm leading-relaxed font-sans">
              Promoter, builder and developer bringing residential and commercial plot opportunities to customers around Nagpur, Mouza Chimnazari, and Umred Road.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-brand-orange text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="tel:+919876543210"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-brand-orange text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Call Ritesh Realtors"
              >
                <PhoneCall className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              {['home', 'about', 'projects', 'why-us', 'gallery', 'location', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item)}
                    className="hover:text-brand-orange capitalize transition-colors"
                  >
                    {item === 'why-us' ? 'Why Choose Us' : item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Focus Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-green">
              Location Focus
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span>Mouza Chimnazari & Umred Road Sector, Nagpur Region, Maharashtra</span>
              </div>
              <div className="text-[11px] text-stone-400 pt-2 border-t border-stone-800">
                Key Layouts: Samarth Nagari – 1 | Indravan City 200ft Road Touch
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <div>© 2026 Ritesh Realtors. All rights reserved.</div>
          <div className="text-[11px] text-stone-500">
            Promoter • Builder • Developers | Nagpur, MH
          </div>
        </div>

      </div>
    </footer>
  );
};
