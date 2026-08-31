import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showText = true }) => {
  const sizeConfig = {
    sm: { img: 'w-10 h-10', text: 'text-base', sub: 'text-[9px]' },
    md: { img: 'w-12 h-12', text: 'text-xl', sub: 'text-[10px]' },
    lg: { img: 'w-16 h-16', text: 'text-2xl', sub: 'text-[11px]' },
  }[size];

  return (
    <div className={`flex items-center gap-3 group cursor-pointer select-none ${className}`}>
      {/* Authentic Circular Logo Image */}
      <div className={`relative ${sizeConfig.img} shrink-0 rounded-full overflow-hidden shadow-soft-sm border-2 border-brand-green/30 group-hover:border-brand-orange group-hover:shadow-glow-orange transition-all duration-300 bg-white`}>
        <img
          src="/images/logo.png"
          alt="Ritesh Realtors Logo"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-none">
            <span className={`font-serif font-extrabold tracking-tight text-red-700 group-hover:text-brand-orange transition-colors ${sizeConfig.text}`}>
              RITESH
            </span>
            <span className={`font-serif font-extrabold tracking-tight text-red-600 ${sizeConfig.text}`}>
              REALTORS
            </span>
          </div>
          <span className={`font-sans font-semibold tracking-wider text-brand-green uppercase mt-0.5 ${sizeConfig.sub}`}>
            Promoter • Builder • Developers
          </span>
        </div>
      )}
    </div>
  );
};
