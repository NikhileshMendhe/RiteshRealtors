import React, { useState } from 'react';
import { EnquiryFormData } from '../types/realEstate';
import { PhoneCall, Mail, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  onFormSubmit: (data: EnquiryFormData) => void;
  prefilledProperty?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onFormSubmit, prefilledProperty = '' }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    propertyInterest: prefilledProperty || 'Samarth Nagari – 1',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phoneNumber) return;
    
    onFormSubmit(formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
        propertyInterest: 'Samarth Nagari – 1',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-brand-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact & Info */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange-50 text-brand-orange text-xs font-extrabold uppercase tracking-widest border border-brand-orange/20">
                GET IN TOUCH
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal leading-tight">
                Your Next Property <br />
                Could Start With <br />
                <span className="text-brand-orange italic font-normal">a Conversation.</span>
              </h2>

              <p className="text-stone-600 text-base leading-relaxed font-sans">
                Looking for a residential or commercial plot around Nagpur? Get in touch with Ritesh Realtors to explore available opportunities.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              
              <a
                href="tel:+919876543210"
                className="p-5 rounded-2xl bg-white border border-stone-200 shadow-soft-sm hover:shadow-soft-md hover:border-brand-orange/40 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-orange-50 text-brand-orange flex items-center justify-center font-bold shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                    Direct Phone Support
                  </div>
                  <div className="text-base font-extrabold text-brand-charcoal group-hover:text-brand-orange transition-colors">
                    Call Ritesh Realtors Team
                  </div>
                </div>
              </a>

              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-soft-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-green-50 text-brand-green flex items-center justify-center font-bold shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                    Location Focus
                  </div>
                  <div className="text-sm font-bold text-brand-charcoal">
                    Mouza Chimnazari & Umred Road Sector
                  </div>
                  <div className="text-xs text-stone-500 font-medium">Nagpur, Maharashtra</div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-soft-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-stone-100 text-brand-charcoal flex items-center justify-center font-bold shrink-0">
                  <MessageSquare className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                    Social Channel
                  </div>
                  <div className="text-sm font-bold text-brand-charcoal">
                    Instagram: @riteshrealtors
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Frontend Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-soft-lg">
            
            <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-2">
              Send an Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mb-6 font-sans">
              Fill out the form below to receive detailed layout information, pricing, and site visit arrangements.
            </p>

            {submitted ? (
              <div className="bg-brand-green-50 border border-brand-green/30 p-8 rounded-2xl text-center space-y-3 animate-in zoom-in-95 my-8">
                <div className="w-16 h-16 bg-brand-green text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-xl font-bold text-brand-charcoal">
                  Thank You!
                </h4>
                <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Our team has received your enquiry and will get in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Nikhilesh Mendhe"
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1.5">
                      Property Interest
                    </label>
                    <select
                      value={formData.propertyInterest}
                      onChange={(e) => setFormData({ ...formData, propertyInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all bg-white"
                    >
                      <option value="Samarth Nagari – 1">Samarth Nagari – 1 (Mouza Chimnazari)</option>
                      <option value="Indravan City">Indravan City (Umred Road / Metro Region)</option>
                      <option value="Samarth Nagari Layout Phase 2">Samarth Nagari Layout Phase 2</option>
                      <option value="General Plot Inquiry">General Plot Inquiry (Nagpur)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1.5">
                    Your Message / Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us your preferred plot type, budget or installment questions..."
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white text-sm font-bold flex items-center justify-center gap-2 shadow-soft-md hover:shadow-glow-orange transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
