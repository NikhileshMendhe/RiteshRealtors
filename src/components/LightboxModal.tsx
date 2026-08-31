import React, { useEffect } from 'react';
import { GalleryItem } from '../types/realEstate';
import { X, ChevronLeft, ChevronRight, MapPin, Tag } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelect,
}) => {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIdx]);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % items.length;
    onSelect(items[nextIdx]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
      
      {/* Top Header Bar */}
      <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-20 text-white">
        <div>
          <div className="text-xs font-mono font-bold text-brand-orange">
            {item.category} • {currentIndex + 1} of {items.length}
          </div>
          <h3 className="font-serif text-lg font-bold">{item.title}</h3>
        </div>

        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Prev Navigation Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-brand-orange text-white flex items-center justify-center transition-colors z-20"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      {/* Main Image Frame */}
      <div className="relative max-w-5xl max-h-[75vh] mx-auto overflow-hidden rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="max-h-[65vh] w-auto object-contain rounded-t-2xl select-none"
        />

        {/* Caption & Details Footer */}
        <div className="w-full bg-stone-900/95 p-4 sm:p-6 text-white border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2 text-xs text-brand-orange-light font-bold">
              <MapPin className="w-3.5 h-3.5" />
              <span>{item.projectRef}</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
              {item.caption}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 shrink-0">
            {item.details.map((detail, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-white/10 text-[11px] font-semibold text-stone-200"
              >
                {detail}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Next Navigation Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-brand-orange text-white flex items-center justify-center transition-colors z-20"
        aria-label="Next image"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

    </div>
  );
};
