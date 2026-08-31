import React from 'react';
import { ArrowRight, ShieldCheck, MapPin, Sparkles, Building, PhoneCall } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  return (
    <section id="home" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-brand-ivory to-white">
      {/* Background Decorative Ambient Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange-50/70 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-brand-green-50/60 blur-[120px] rounded-full pointer-events-none" />

      {/* Abstract Background Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e8e4d915_1px,transparent_1px),linear-gradient(to_bottom,#e8e4d915_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Trust Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-orange/20 shadow-soft-sm text-brand-charcoal text-xs font-bold tracking-wide">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
              </span>
              <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
              <span>Promoter • Builder • Developer</span>
            </div>

            {/* Editorial Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-charcoal leading-[1.15]">
              Find a Place <br />
              <span className="italic font-normal text-brand-orange underline decoration-brand-orange/30 underline-offset-8">
                Where Your Future
              </span>{' '}
              Begins.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-brand-charcoal-muted max-w-xl leading-relaxed font-sans font-normal">
              Premium residential and commercial plots around Nagpur, thoughtfully planned for better living and long-term value.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white text-sm font-bold shadow-soft-md hover:shadow-glow-orange hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white border border-stone-200 text-brand-charcoal text-sm font-semibold hover:border-brand-green/40 hover:bg-brand-green-50/50 hover:text-brand-green transition-all duration-300"
              >
                <PhoneCall className="w-4 h-4 text-brand-green" />
                <span>Talk to Ritesh Realtors</span>
              </button>
            </div>

            {/* Mini Trust Highlights */}
            <div className="pt-6 border-t border-stone-200/60 grid grid-cols-3 gap-4">
              <div>
                <div className="text-xs text-brand-charcoal-light font-medium">Location Focus</div>
                <div className="text-sm font-bold text-brand-charcoal flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Nagpur Region</span>
                </div>
              </div>
              <div>
                <div className="text-xs text-brand-charcoal-light font-medium">Layout Types</div>
                <div className="text-sm font-bold text-brand-charcoal flex items-center gap-1 mt-0.5">
                  <Building className="w-3.5 h-3.5 text-brand-green" />
                  <span>Resi & Commercial</span>
                </div>
              </div>
              <div>
                <div className="text-xs text-brand-charcoal-light font-medium">Approval</div>
                <div className="text-sm font-bold text-brand-charcoal flex items-center gap-1 mt-0.5">
                  <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                  <span>NATP Sanctioned</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Presentation */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame with Subtle Glow */}
              <div className="relative rounded-3xl overflow-hidden shadow-soft-lg border-4 border-white bg-stone-100 group">
                <img
                  src="/images/hero.jpg"
                  alt="Ritesh Realtors Nagpur Plot Development"
                  className="w-full h-[400px] sm:h-[480px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent opacity-80" />

                {/* Bottom Image Tag */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-block px-3 py-1 rounded-md bg-brand-orange/90 text-[11px] font-bold uppercase tracking-wider mb-1">
                    Master Planned Layout
                  </div>
                  <h3 className="font-serif text-lg font-bold">Mouza Chimnazari & Umred Road Sector</h3>
                </div>
              </div>

              {/* Floating Information Card (Top-Right Accent) */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-brand-ivory-border shadow-soft-md max-w-[210px] hidden sm:block animate-bounce-slow">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-brand-green" />
                  <span className="text-[10px] font-bold tracking-wider text-brand-green uppercase">Nagpur Opportunities</span>
                </div>
                <div className="text-xs font-bold text-brand-charcoal leading-tight">
                  Residential & Commercial Plots
                </div>
              </div>

              {/* Floating Stat Chip (Bottom-Left Accent) */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 bg-white p-4 rounded-2xl border border-stone-100 shadow-soft-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-orange-50 border border-brand-orange/20 flex items-center justify-center text-brand-orange font-bold text-lg">
                  60′
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-charcoal">NATP Sanctioned Layouts</div>
                  <div className="text-[11px] text-brand-charcoal-light font-medium">60ft & 200ft Road Touch Options</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
