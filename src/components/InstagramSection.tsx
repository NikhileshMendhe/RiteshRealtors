import React from 'react';
import { INSTAGRAM_INFO } from '../data/propertyData';
import { Instagram, ArrowUpRight, Heart, MessageCircle, PhoneCall } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  const posts = [
    { image: '/images/samarth1.jpg', likes: '14', comments: '3' },
    { image: '/images/flats.jpg', likes: '31', comments: '6' },
    { image: '/images/indravan.jpg', likes: '22', comments: '5' },
    { image: '/images/hero.jpg', likes: '29', comments: '7' },
  ];

  return (
    <section id="social" className="py-20 lg:py-28 bg-white border-t border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Card Header */}
        <div className="bg-brand-ivory p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-soft-sm max-w-4xl mx-auto mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-1 shadow-md shrink-0">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-brand-orange">
                <Instagram className="w-9 h-9 text-rose-600" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-2xl font-bold text-brand-charcoal">
                  {INSTAGRAM_INFO.handle}
                </h3>
                <span className="w-2 h-2 rounded-full bg-brand-green" />
              </div>

              <p className="text-xs font-bold text-brand-orange uppercase tracking-wider mt-0.5">
                {INSTAGRAM_INFO.tagline}
              </p>

              <p className="text-stone-600 text-xs sm:text-sm mt-1 font-sans">
                {INSTAGRAM_INFO.description}
              </p>

              <div className="flex items-center gap-5 pt-3 text-xs font-bold text-stone-700">
                <div>
                  <span className="text-brand-charcoal font-extrabold">{INSTAGRAM_INFO.postsCount}</span>{' '}
                  <span className="text-stone-400 font-normal">posts</span>
                </div>
                <div>
                  <span className="text-brand-charcoal font-extrabold">{INSTAGRAM_INFO.followersCount}</span>{' '}
                  <span className="text-stone-400 font-normal">followers</span>
                </div>
                <div>
                  <span className="text-brand-charcoal font-extrabold">{INSTAGRAM_INFO.followingCount}</span>{' '}
                  <span className="text-stone-400 font-normal">following</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 to-amber-500 text-white text-xs font-bold shadow-soft-md hover:shadow-lg transition-all"
            >
              <Instagram className="w-4 h-4" />
              <span>Visit Instagram</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/919876543210?text=Hi%20Ritesh%20Realtors"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-brand-green text-white text-xs font-bold shadow-soft-md hover:bg-brand-green-hover transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

        </div>

        {/* Instagram Post Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {posts.map((post, idx) => (
            <a
              key={idx}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 group shadow-soft-sm"
            >
              <img
                src={post.image}
                alt={`Ritesh Realtors Instagram post ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
              
              <div className="absolute inset-0 bg-brand-charcoal/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white font-bold text-sm">
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 fill-white" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
