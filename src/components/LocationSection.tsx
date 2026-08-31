import React, { useState } from 'react';
import { CONNECTIVITY_LANDMARKS } from '../data/propertyData';
import { MapPin, Navigation, ArrowRight, Compass } from 'lucide-react';

interface LocationSectionProps {
  onAskLocation: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onAskLocation }) => {
  const [selectedLandmark, setSelectedLandmark] = useState<number>(1);

  return (
    <section id="location" className="py-20 lg:py-28 bg-stone-900 text-white relative overflow-hidden">
      {/* Abstract Background Map Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [bg-size:24px_24px] opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-green/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Landmarks List */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/20 text-brand-orange-light text-xs font-bold uppercase tracking-wider border border-brand-orange/30">
              <Navigation className="w-3.5 h-3.5" />
              <span>NAGPUR CONNECTIVITY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Connected to Where <br />
              <span className="text-brand-orange italic font-normal">Nagpur Is Growing</span>
            </h2>

            <p className="text-stone-300 text-base leading-relaxed font-sans">
              Our plot projects — including Samarth Nagari – 1 and Indravan City — are strategically situated along the key growth arteries of Mouza Chimnazari, Umred Road, and the New Nagpur Metro corridor.
            </p>

            {/* Landmark Buttons */}
            <div className="space-y-3 pt-2">
              {CONNECTIVITY_LANDMARKS.map((landmark, idx) => {
                const isSelected = selectedLandmark === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedLandmark(idx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                      isSelected
                        ? 'bg-white/10 border-brand-orange shadow-glow-orange'
                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                          isSelected ? 'bg-brand-orange text-white' : 'bg-white/10 text-stone-300'
                        }`}
                      >
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">{landmark.name}</div>
                        <div className="text-xs text-stone-400 font-medium">{landmark.tag}</div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-mono font-bold text-brand-orange-light bg-brand-orange/20 px-2.5 py-1 rounded-md">
                        {landmark.distance}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-4">
              <button
                onClick={onAskLocation}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold shadow-glow-orange transition-all"
              >
                <span>Ask About Available Locations</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Stylized Vector Route / Map Illustration */}
          <div className="lg:col-span-6">
            
            <div className="bg-stone-800/90 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-md">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-brand-orange" />
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-300">
                    Nagpur Layout Connectivity Map
                  </span>
                </div>
                <span className="text-[10px] font-mono bg-brand-green/20 text-brand-green-light px-2.5 py-1 rounded-full">
                  Mouza Chimnazari Zone
                </span>
              </div>

              {/* Vector Map Diagram */}
              <div className="relative h-[320px] sm:h-[380px] bg-stone-950/80 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center">
                
                {/* Abstract Highway Lines */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Umred Road Line */}
                  <path
                    d="M-20 80 Q 200 150 450 320"
                    stroke="#F97316"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="6 6"
                    className="animate-pulse"
                  />
                  {/* Samruddhi Highway Corridor */}
                  <path
                    d="M 50 380 Q 250 200 520 40"
                    stroke="#16A34A"
                    strokeWidth="4"
                    fill="none"
                  />
                  {/* Metro Connecting Spur */}
                  <path
                    d="M 120 120 L 320 220"
                    stroke="#E2E8F0"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    fill="none"
                  />
                </svg>

                {/* Map Node Pins */}
                {/* Node 1: Nagpur City */}
                <div className="absolute top-10 left-8 bg-white text-stone-900 px-3 py-1.5 rounded-xl shadow-lg border border-stone-300 text-xs font-extrabold flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
                  <span>Nagpur City Core</span>
                </div>

                {/* Node 2: Samarth Nagari 1 */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white px-4 py-2 rounded-2xl shadow-glow-orange border-2 border-white text-xs font-bold flex flex-col items-center animate-bounce-slow">
                  <span className="text-[10px] uppercase font-extrabold tracking-wider">Site Location</span>
                  <span className="text-sm font-serif">Samarth Nagari – 1</span>
                  <span className="text-[10px] opacity-90">Mouza Chimnazari</span>
                </div>

                {/* Node 3: Indravan City */}
                <div className="absolute bottom-12 right-8 bg-brand-green text-white px-3.5 py-2 rounded-2xl shadow-glow-green border border-white/40 text-xs font-bold">
                  <span className="block font-serif text-xs">Indravan City</span>
                  <span className="text-[9px] block opacity-90">200ft Road Touch</span>
                </div>

                {/* Node 4: Metro Corridor */}
                <div className="absolute top-16 right-10 bg-stone-900/90 text-stone-200 border border-white/20 px-2.5 py-1 rounded-lg text-[10px] font-mono">
                  New Nagpur Metro Region
                </div>
              </div>

              {/* Map Footer Note */}
              <div className="mt-4 text-center">
                <p className="text-[11px] text-stone-400 font-medium">
                  Direct arterial access to 60ft DP roads and 200ft road touch locations.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
