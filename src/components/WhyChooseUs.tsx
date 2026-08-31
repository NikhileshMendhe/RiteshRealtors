import React from 'react';
import { WHY_CHOOSE_US_ITEMS } from '../data/propertyData';
import { Compass, Layout, Building2, WalletCards, UserCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const icons = [Compass, Layout, Building2, WalletCards, UserCheck];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-green-50 text-brand-green text-xs font-extrabold uppercase tracking-widest border border-brand-green/20">
            OUR COMMITMENT
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal">
            Why Choose <span className="text-brand-orange italic font-normal">Ritesh Realtors?</span>
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-sans">
            We simplify land ownership around Nagpur by focusing on layout quality, location potential, and customer-first support.
          </p>
        </div>

        {/* 5 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US_ITEMS.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={item.number}
                className="bg-brand-ivory p-8 rounded-3xl border border-stone-200/80 shadow-soft-sm hover:shadow-soft-md hover:-translate-y-1.5 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-brand-orange shadow-soft-sm group-hover:bg-brand-orange group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xl font-extrabold text-stone-300 group-hover:text-brand-orange transition-colors">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-3">
                    {item.title}
                  </h3>

                  <p className="text-stone-600 text-sm leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-200/60 flex items-center gap-1.5 text-xs font-bold text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more with our team</span>
                </div>
              </div>
            );
          })}

          {/* Highlight Callout Box to complete 6th card slot in 3-col grid */}
          <div className="bg-gradient-to-br from-brand-orange to-brand-orange-hover p-8 rounded-3xl shadow-glow-orange text-white flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-widest opacity-80 mb-4">
                DIRECT CONSULTATION
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3">
                Ready to explore plot layouts in Nagpur?
              </h3>
              <p className="text-xs sm:text-sm opacity-90 leading-relaxed font-sans">
                Get direct access to layout plans, pricing terms, and guided site visits with Ritesh Realtors.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-white text-brand-charcoal text-xs font-bold shadow-soft-sm hover:bg-stone-100 transition-colors"
              >
                Schedule Site Visit
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
