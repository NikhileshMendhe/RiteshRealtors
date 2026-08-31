import React from 'react';
import { CheckCircle2, ShieldCheck, Map, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onExploreClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreClick }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-green-50 text-brand-green text-xs font-bold uppercase tracking-wider border border-brand-green/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Promoter • Builder • Developers</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal leading-[1.2]">
              Local Knowledge. <br />
              <span className="text-brand-orange italic font-normal">Real Opportunities.</span> <br />
              A Better Way to Find Your Plot.
            </h2>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-sans">
              Ritesh Realtors is a promoter, builder and developer focused on bringing residential and commercial plot opportunities to customers around Nagpur.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
              Our goal is to present well-planned property options — such as NATP sanctioned layouts, 60 ft and 200 ft road-touch developments, and interest-free installment plans — so buyers can make clear, confident decisions for their family and financial future.
            </p>

            {/* Key Pillars Checklist */}
            <div className="pt-4 space-y-3">
              {[
                'Focus on prime Nagpur sectors including Mouza Chimnazari and Umred Road corridor',
                'NATP Sanctioned layouts with planned DP roads and boundary demarcations',
                'Structured payment solutions including 25% down payment and up to 36-month installment options',
                'Direct promoter assistance for site visits and property information'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-stone-700 leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-charcoal text-white text-sm font-bold shadow-soft-md hover:bg-brand-orange transition-colors duration-300"
              >
                <span>Explore Available Layouts</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Layered Visual Composition */}
          <div className="lg:col-span-6 relative">
            
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Main Image Frame */}
              <div className="rounded-3xl overflow-hidden shadow-soft-lg border-4 border-white bg-stone-100 relative group">
                <img
                  src="/images/samarth1.jpg"
                  alt="Samarth Nagari 1 Mouza Chimnazari"
                  className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-mono font-bold text-brand-orange-light uppercase tracking-wider mb-1">
                    Featured Layout Presentation
                  </div>
                  <h3 className="font-serif text-xl font-bold">Samarth Nagari – 1 @ Mouza Chimnazari</h3>
                </div>
              </div>

              {/* Secondary Layered Image Overlay */}
              <div className="absolute -bottom-10 -left-6 sm:-left-10 w-[220px] sm:w-[280px] rounded-2xl overflow-hidden shadow-soft-lg border-4 border-white hidden sm:block">
                <img
                  src="/images/indravan.jpg"
                  alt="Indravan City Layout"
                  className="w-full h-[160px] sm:h-[200px] object-cover"
                />
                <div className="absolute bottom-2 left-3 right-3 text-white">
                  <span className="text-[10px] font-bold bg-brand-green/90 px-2 py-0.5 rounded text-white uppercase">
                    Indravan City
                  </span>
                </div>
              </div>

              {/* Floating Badge Card */}
              <div className="absolute top-6 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-stone-200 shadow-soft-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-orange-50 text-brand-orange flex items-center justify-center font-bold">
                  <Map className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-charcoal">Nagpur Metro Region</div>
                  <div className="text-[11px] text-stone-500">Residential & Commercial Plots</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
