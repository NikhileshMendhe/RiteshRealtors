import React from 'react';
import { CheckCircle2, ShieldCheck, MapPin, PhoneCall, Award } from 'lucide-react';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Owner & Developer Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Owner Photo Container */}
              <div className="rounded-3xl overflow-hidden shadow-soft-lg border-4 border-white bg-stone-100 relative group">
                <img
                  src="/images/owner.jpg"
                  alt="Developer Ritesh Realtors"
                  className="w-full h-[400px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent opacity-90" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-block px-3 py-1 rounded-md bg-brand-orange text-[10px] font-extrabold uppercase tracking-wider mb-1">
                    Promoter • Builder • Developer
                  </div>
                  <h3 className="font-serif text-2xl font-bold">Ritesh Realtors Leadership</h3>
                  <p className="text-xs text-stone-300 font-sans mt-0.5">Nagpur Real Estate Development</p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-white p-3.5 rounded-2xl border border-stone-200 shadow-soft-md flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-brand-orange-50 text-brand-orange flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-charcoal">Direct Promoter Assistance</div>
                  <div className="text-[11px] text-stone-500 font-medium">Clear Titles & NATP Sanction</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Owner Introduction & Vision */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-green-50 text-brand-green text-xs font-bold uppercase tracking-wider border border-brand-green/20">
              <Award className="w-3.5 h-3.5" />
              <span>ABOUT US & DEVELOPER VISION</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal leading-tight">
              Personalized Guidance, <br />
              <span className="text-brand-orange italic font-normal">Clear Titles & Planned</span> Growth.
            </h2>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-sans">
              Ritesh Realtors is a premier promoter, builder and developer bringing residential & commercial plot opportunities and modern apartments to customers around Nagpur.
            </p>

            <div className="bg-brand-ivory p-5 rounded-2xl border border-stone-200 space-y-2">
              <h4 className="text-xs font-bold text-brand-orange uppercase tracking-wider">Owner’s Commitment</h4>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                "We believe in complete transparency, structured 60ft/200ft road touch layouts, and flexible payment plans so every buyer can comfortably secure their property in Nagpur."
              </p>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'NATP Sanctioned Plot Layouts',
                'Mouza Chimnazari & Umred Road',
                '25% Down Payment & Easy EMI',
                '2 & 3 BHK Modern Apartments'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span className="text-xs font-bold text-stone-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold shadow-soft-md hover:shadow-glow-orange transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Talk Directly to Ritesh Realtors</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
