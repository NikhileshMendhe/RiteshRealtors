import React from 'react';
import { MapPin, LayoutGrid, HeartHandshake } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const statCards = [
    {
      icon: MapPin,
      title: 'Local Focus',
      highlight: 'Nagpur & Surrounding Areas',
      description: 'Deep understanding of Mouza Chimnazari, Umred Road, and the New Nagpur Metro corridor.',
      color: 'orange'
    },
    {
      icon: LayoutGrid,
      title: 'Property Options',
      highlight: 'Residential & Commercial',
      description: 'Versatile plots tailored for immediate home building or long-term commercial value.',
      color: 'green'
    },
    {
      icon: HeartHandshake,
      title: 'Customer First',
      highlight: 'Guided Property Selection',
      description: 'Transparent down payments, easy EMI options, and direct promoter assistance.',
      color: 'charcoal'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-brand-ivory-accent/50 border-y border-stone-200/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-orange-50 text-brand-orange text-[11px] font-extrabold uppercase tracking-widest border border-brand-orange/20">
            BUILT AROUND TRUST
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal leading-tight">
            Helping You Take the <br />
            <span className="text-brand-orange italic font-normal">Right Step</span> Toward Property Ownership.
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
            At Ritesh Realtors, we focus on presenting residential and commercial plot opportunities around Nagpur with absolute clarity, transparent information, and a customer-first approach.
          </p>
        </div>

        {/* 3 Premium Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-soft-sm hover:shadow-soft-md hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Decorative Top Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 ${
                    card.color === 'orange'
                      ? 'bg-brand-orange'
                      : card.color === 'green'
                      ? 'bg-brand-green'
                      : 'bg-brand-charcoal'
                  }`}
                />

                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300 ${
                      card.color === 'orange'
                        ? 'bg-brand-orange-50 text-brand-orange'
                        : card.color === 'green'
                        ? 'bg-brand-green-50 text-brand-green'
                        : 'bg-stone-100 text-brand-charcoal'
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono font-bold text-stone-300">0{idx + 1}</span>
                </div>

                <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">
                  {card.title}
                </div>

                <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-3">
                  {card.highlight}
                </h3>

                <p className="text-sm text-stone-600 leading-relaxed font-sans">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
