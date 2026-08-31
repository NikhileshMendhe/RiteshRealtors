import React, { useState, useEffect } from 'react';
import { PhoneCall, MessageCircle, Send, ArrowUp, X, Sparkles } from 'lucide-react';

interface FloatingContactProps {
  onOpenEnquiry: () => void;
}

export const FloatingContact: React.FC<FloatingContactProps> = ({ onOpenEnquiry }) => {
  const [open, setOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Expanded Menu */}
      {open && (
        <div className="bg-white p-4 rounded-3xl border border-stone-200 shadow-soft-lg w-64 space-y-2 animate-in zoom-in-95 origin-bottom-right">
          <div className="flex items-center justify-between pb-2 border-b border-stone-100">
            <span className="text-xs font-bold text-brand-charcoal flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span>Talk to Ritesh Realtors</span>
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-stone-400 hover:text-stone-700 text-xs font-bold p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <a
            href="tel:+919876543210"
            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-stone-50 text-xs font-bold text-brand-charcoal transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-orange-50 text-brand-orange flex items-center justify-center">
              <PhoneCall className="w-4 h-4" />
            </div>
            <span>Call Us Directly</span>
          </a>

          <a
            href="https://wa.me/919876543210?text=Hi%20Ritesh%20Realtors,%20I%20am%20interested%20in%20learning%20more%20about%20your%20plots."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-stone-50 text-xs font-bold text-brand-charcoal transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-green-50 text-brand-green flex items-center justify-center">
              <MessageCircle className="w-4 h-4" />
            </div>
            <span>WhatsApp Enquiry</span>
          </a>

          <button
            onClick={() => {
              setOpen(false);
              onOpenEnquiry();
            }}
            className="w-full flex items-center gap-3 p-2.5 rounded-xl bg-brand-orange text-white text-xs font-bold shadow-soft-sm hover:bg-brand-orange-hover transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <Send className="w-4 h-4" />
            </div>
            <span>Send Quick Form</span>
          </button>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="flex items-center gap-2">
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white text-brand-charcoal border border-stone-200 shadow-soft-md hover:bg-stone-100 flex items-center justify-center transition-colors"
            title="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white text-xs font-bold shadow-soft-lg hover:shadow-glow-orange hover:-translate-y-0.5 transition-all duration-300"
        >
          <PhoneCall className="w-4 h-4" />
          <span className="hidden sm:inline">Need Help?</span>
          <span className="sm:hidden">Help</span>
        </button>
      </div>

    </div>
  );
};
