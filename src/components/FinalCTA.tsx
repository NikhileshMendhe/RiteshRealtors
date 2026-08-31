import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';

interface FinalCTAProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onExploreClick, onContactClick }) => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-brand-charcoal via-stone-900 to-brand-charcoal text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[350px] h-[350px] bg-brand-orange/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[350px] h-[350px] bg-brand-green/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-brand-orange-light text-xs font-bold uppercase tracking-widest border border-white/15">
          PROMOTER • BUILDER • DEVELOPER
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Ready to Find <span className="text-brand-orange italic font-normal">Your Place?</span>
        </h2>

        <p className="text-stone-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-sans font-normal">
          Explore property opportunities with Ritesh Realtors across Nagpur, Mouza Chimnazari, and the New Nagpur Metro corridor.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-bold shadow-glow-orange transition-all"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onContactClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold border border-white/20 transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-brand-orange-light" />
            <span>Contact Us</span>
          </button>
        </div>

      </div>
    </section>
  );
};
