import React, { useState } from 'react';
import { Project } from '../types/realEstate';
import { X, MapPin, ShieldCheck, CalendarCheck, Wallet, Route, Zap, Trees, Droplets, PhoneCall, Send, Check } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onSubmitEnquiry: (propertyName: string, name: string, phone: string, message: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onSubmitEnquiry,
}) => {
  if (!project) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(`Interested in learning more about ${project.name} layout options.`);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    onSubmitEnquiry(project.name, name, phone, message);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-charcoal/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-stone-200 relative my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 shadow-soft-sm flex items-center justify-center text-brand-charcoal hover:bg-brand-orange hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto flex-1">
          {/* Header Visual Banner */}
          <div className="relative h-64 sm:h-80 bg-stone-900">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                {project.badge && (
                  <span className="px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-bold uppercase tracking-wider">
                    {project.badge}
                  </span>
                )}
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold">
                  {project.type} Plots
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold">{project.name}</h2>
              <div className="flex items-center gap-1.5 text-stone-300 text-sm font-medium mt-1">
                <MapPin className="w-4 h-4 text-brand-orange" />
                <span>{project.location}</span>
              </div>
            </div>
          </div>

          {/* Modal Content Grid */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Details Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <h3 className="text-xs font-bold text-brand-green uppercase tracking-wider mb-1">
                  {project.tagline}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>

              {/* Specs Grid */}
              <div>
                <h4 className="text-sm font-bold text-brand-charcoal mb-3">Key Project Specifications</h4>
                <div className="grid grid-cols-2 gap-3">
                  {project.specs.map((spec, idx) => (
                    <div key={idx} className="bg-stone-50 p-3 rounded-xl border border-stone-200/60">
                      <div className="text-[10px] font-bold text-stone-400 uppercase">{spec.label}</div>
                      <div className="text-xs font-bold text-brand-charcoal mt-0.5">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* All Highlights */}
              <div>
                <h4 className="text-sm font-bold text-brand-charcoal mb-3">Promotional Highlights</h4>
                <div className="space-y-2">
                  {project.keyHighlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-stone-700 font-medium">
                      <ShieldCheck className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Terms Box */}
              {project.paymentTerms && (
                <div className="bg-brand-orange-50/60 border border-brand-orange/20 p-4 rounded-2xl">
                  <div className="text-xs font-bold text-brand-orange uppercase tracking-wider mb-1">
                    Flexible Payment Structure
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed font-medium">
                    {project.paymentTerms}
                  </p>
                </div>
              )}

            </div>

            {/* Right Quick Inquiry Form */}
            <div className="lg:col-span-5 bg-stone-50 p-6 rounded-2xl border border-stone-200 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center gap-2 text-brand-orange mb-2">
                  <PhoneCall className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Quick Inquiry</span>
                </div>
                <h4 className="font-serif text-xl font-bold text-brand-charcoal mb-1">
                  Ask About {project.name}
                </h4>
                <p className="text-xs text-stone-500 mb-4">
                  Fill in your details below and our team will get in touch with you shortly.
                </p>

                {submitted ? (
                  <div className="bg-brand-green-50 border border-brand-green/30 p-6 rounded-2xl text-center space-y-2 animate-in zoom-in-95">
                    <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h5 className="font-bold text-brand-charcoal text-sm">Enquiry Sent!</h5>
                    <p className="text-xs text-stone-600">
                      Thank you! Our team will get in touch with you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label className="text-[11px] font-bold text-stone-600 block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-stone-600 block mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-stone-600 block mb-1">
                        Message
                      </label>
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold flex items-center justify-center gap-2 shadow-soft-sm transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Enquiry Now</span>
                    </button>
                  </form>
                )}
              </div>

              <div className="pt-4 border-t border-stone-200 text-center mt-4">
                <span className="text-[11px] text-stone-400 font-medium">Or speak directly:</span>
                <a
                  href="tel:+919876543210"
                  className="block text-xs font-bold text-brand-orange hover:underline mt-0.5"
                >
                  Call Ritesh Realtors Team
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
