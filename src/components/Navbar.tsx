import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'about', 'projects', 'why-nagpur', 'contact', 'social'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'projects', label: 'Plots & Flats' },
    { id: 'why-nagpur', label: 'Why Nagpur' },
    { id: 'contact', label: 'Contact' },
    { id: 'social', label: 'Social' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft-sm py-2.5 border-b border-stone-200/80'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
          >
            <Logo size={scrolled ? 'sm' : 'md'} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-stone-200 shadow-soft-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-orange text-white shadow-sm'
                      : 'text-brand-charcoal hover:text-brand-orange hover:bg-brand-orange-50/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="tel:+919876543210"
              className="p-2 rounded-full text-brand-charcoal hover:text-brand-orange hover:bg-brand-orange-50 transition-colors"
              title="Call Ritesh Realtors"
            >
              <PhoneCall className="w-4 h-4 text-brand-orange" />
            </a>

            <button
              onClick={() => handleLinkClick('projects')}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white text-xs font-bold shadow-soft-sm hover:shadow-glow-orange transition-all duration-300"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white border border-stone-200 shadow-soft-sm text-brand-charcoal hover:text-brand-orange transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-stone-200 shadow-soft-lg transition-all duration-300">
          <div className="px-5 pt-3 pb-6 space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-brand-orange/10 text-brand-orange font-bold border-l-4 border-brand-orange'
                      : 'text-brand-charcoal hover:bg-stone-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-brand-orange" />}
                </button>
              );
            })}

            <div className="pt-4 border-t border-stone-100 flex flex-col gap-2.5">
              <button
                onClick={() => handleLinkClick('projects')}
                className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white text-sm font-bold shadow-glow-orange"
              >
                Explore Projects
              </button>
              <a
                href="tel:+919876543210"
                className="w-full text-center py-2.5 rounded-xl border border-brand-green/30 text-brand-green text-xs font-semibold flex items-center justify-center gap-2 hover:bg-brand-green-50"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Ritesh Realtors</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
