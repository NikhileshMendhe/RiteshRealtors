import React from 'react';
import { NAGPUR_INVESTMENT_REASONS } from '../data/propertyData';
import { TrendingUp, Route, Building2, ShieldCheck, ArrowRight } from 'lucide-react';

interface WhyInvestNagpurProps {
  onExploreClick: () => void;
}

export const WhyInvestNagpur: React.FC<WhyInvestNagpurProps> = ({ onExploreClick }) => {
  const iconMap: Record<string, React.ElementType> = {
    Route: Route,
    TrainTrack: Route,
    Building2: Building2,
    TrendingUp: TrendingUp,
  };

  return (
    <section id="why-nagpur" className="py-20 lg:py-28 bg-stone-900 text-white relative overflow-hidden">
      {/* Background Decorative Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [bg-size:20px_20px] pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-brand-orange/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-brand-green/15 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/20 text-brand-orange-light text-xs font-extrabold uppercase tracking-widest border border-brand-orange/30">
            <TrendingUp className="w-3.5 h-3.5 inline mr-1.5" />
            HIGH ROI GROWTH LOCATION
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Why Invest in <span className="text-brand-orange italic font-normal">Nagpur Real Estate?</span>
          </h2>

          <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-sans">
            Nagpur is rapidly expanding as Maharashtra’s premier logistics and smart infrastructure hub, creating high long-term value for plot and home owners.
          </p>
        </div>

        {/* 4 Investment Reason Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NAGPUR_INVESTMENT_REASONS.map((reason) => {
            const Icon = iconMap[reason.iconName] || TrendingUp;
            return (
              <div
                key={reason.id}
                className="bg-white/5 p-7 rounded-3xl border border-white/10 hover:border-brand-orange/60 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-brand-orange/20 text-brand-orange-light flex items-center justify-center font-bold border border-brand-orange/30 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-green/20 text-brand-green-light px-2.5 py-1 rounded-full border border-brand-green/30">
                      {reason.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-1 group-hover:text-brand-orange-light transition-colors">
                    {reason.title}
                  </h3>

                  <div className="text-xs font-mono font-bold text-stone-400 uppercase mb-3">
                    {reason.subtitle}
                  </div>

                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-sans">
                    {reason.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-1 text-xs font-bold text-brand-orange-light">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
                  <span>High Capital Growth Potential</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout Banner */}
        <div className="mt-14 bg-gradient-to-r from-brand-orange to-brand-orange-hover p-8 rounded-3xl shadow-glow-orange flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold">
              Secure Your Plot or Flat in Nagpur Today
            </h3>
            <p className="text-xs sm:text-sm opacity-90 font-sans">
              NATP sanctioned plots from ₹550/sq.ft and 2 & 3 BHK flats with 24 to 36 month installment terms.
            </p>
          </div>

          <button
            onClick={onExploreClick}
            className="px-7 py-3.5 rounded-2xl bg-white text-brand-charcoal text-xs font-bold shadow-soft-md hover:bg-stone-100 transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Explore Nagpur Opportunities</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
