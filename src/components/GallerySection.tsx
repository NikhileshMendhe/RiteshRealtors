import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/propertyData';
import { GalleryItem } from '../types/realEstate';
import { LightboxModal } from './LightboxModal';
import { Maximize2, Image as ImageIcon, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-brand-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full bg-brand-orange-50 text-brand-orange text-xs font-extrabold uppercase tracking-widest border border-brand-orange/20">
            <ImageIcon className="w-3.5 h-3.5 inline mr-1" />
            VISUAL PRESENTATION
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal">
            See the <span className="text-brand-orange italic font-normal">Properties</span>
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-sans">
            Explore authentic property advertisements, road layout graphics, and plot overview presentations from Ritesh Realtors.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 group cursor-pointer hover:-translate-y-1.5 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-stone-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-brand-orange flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-brand-charcoal text-[10px] font-bold shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Title & Caption */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="font-serif text-base font-bold text-brand-charcoal group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-500 line-clamp-2 mt-1 font-sans">
                    {item.caption}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-brand-orange font-bold">
                  <span>Click to expand</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        items={GALLERY_ITEMS}
        onClose={() => setSelectedItem(null)}
        onSelect={(item) => setSelectedItem(item)}
      />
    </section>
  );
};
