import React from 'react';
import { ArrowRight, ShieldCheck, MapPin, Building, PhoneCall, Sparkles, Home, Layers } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
  onSelectCategory: (category: 'Plots' | 'Flats') => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick, onSelectCategory }) => {
  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-brand-ivory via-white to-brand-ivory-accent/30">
      
      {/* Background Decorative Gradient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-orange-50/80 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-brand-green-50/70 blur-[140px] rounded-full pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e8e4d915_1px,transparent_1px),linear-gradient(to_bottom,#e8e4d915_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Floating Trust Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-brand-orange/30 shadow-soft-sm text-brand-charcoal text-xs font-extrabold tracking-wide animate-bounce-slow">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
            </span>
            <ShieldCheck className="w-4 h-4 text-brand-orange" />
            <span>RITESH REALTORS • PROMOTER BUILDER DEVELOPERS</span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-brand-charcoal leading-[1.1]">
            Building Trust, <br />
            <span className="italic font-normal text-brand-orange underline decoration-brand-orange/30 underline-offset-8">
              Developing Your
            </span>{' '}
            Future.
          </h1>

          <p className="text-stone-600 text-base sm:text-xl max-w-2xl mx-auto font-sans font-normal leading-relaxed">
            Premium residential & commercial plots and luxury flats around Nagpur, planned for better living and long-term investment.
          </p>

          {/* Quick Property Filter Selector Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                onSelectCategory('Plots');
                onExploreClick();
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-stone-200 shadow-soft-sm hover:border-brand-orange hover:bg-brand-orange-50 text-brand-charcoal text-xs font-bold transition-all group"
            >
              <Layers className="w-4 h-4 text-brand-orange group-hover:scale-110 transition-transform" />
              <span>Explore Plots (Mouza Chimnazari)</span>
            </button>

            <button
              onClick={() => {
                onSelectCategory('Flats');
                onExploreClick();
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-stone-200 shadow-soft-sm hover:border-brand-green hover:bg-brand-green-50 text-brand-charcoal text-xs font-bold transition-all group"
            >
              <Home className="w-4 h-4 text-brand-green group-hover:scale-110 transition-transform" />
              <span>View Flats (2 & 3 BHK)</span>
            </button>
          </div>

          {/* Primary Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white text-sm font-bold shadow-soft-md hover:shadow-glow-orange hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <span>Explore Properties</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onContactClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white border border-stone-200 text-brand-charcoal text-sm font-semibold hover:border-brand-green/40 hover:bg-brand-green-50/50 hover:text-brand-green transition-all"
            >
              <PhoneCall className="w-4 h-4 text-brand-green" />
              <span>Talk to Ritesh Realtors</span>
            </button>
          </div>
        </div>

        {/* Visual Showcase Card Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Showcase Card 1: Plotted Layout */}
          <div
            onClick={() => {
              onSelectCategory('Plots');
              onExploreClick();
            }}
            className="group relative rounded-3xl overflow-hidden shadow-soft-lg border-4 border-white bg-stone-900 cursor-pointer h-72 sm:h-80"
          >
            <img
              src="/images/hero.jpg"
              alt="Plotted Layouts Nagpur"
              className="w-full h-full object-cover opacity-85 group-hover:scale-108 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/30 to-transparent" />
            
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-brand-orange text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                Plotted Layouts
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 text-white">
              <h3 className="font-serif text-2xl font-bold group-hover:text-brand-orange-light transition-colors">
                Residential & Commercial Plots
              </h3>
              <p className="text-xs text-stone-300 font-sans mt-1">
                NATP Sanctioned • 60ft & 200ft Road Touch • Starting ₹550/sq.ft
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange">
                <span>Browse Plotted Layouts</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Showcase Card 2: Modern Flats */}
          <div
            onClick={() => {
              onSelectCategory('Flats');
              onExploreClick();
            }}
            className="group relative rounded-3xl overflow-hidden shadow-soft-lg border-4 border-white bg-stone-900 cursor-pointer h-72 sm:h-80"
          >
            <img
              src="/images/flats.jpg"
              alt="Residential Flats Nagpur"
              className="w-full h-full object-cover opacity-85 group-hover:scale-108 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/30 to-transparent" />

            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-brand-green text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                Flats & Apartments
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 text-white">
              <h3 className="font-serif text-2xl font-bold group-hover:text-brand-green-light transition-colors">
                Samarth Residency (2 & 3 BHK)
              </h3>
              <p className="text-xs text-stone-300 font-sans mt-1">
                Modern Apartments • Gated Security • Landscaped Park • Metro Corridor
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-brand-green">
                <span>View Flat Options</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
