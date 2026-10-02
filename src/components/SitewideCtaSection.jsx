import React from 'react';
import { Heart, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function SitewideCtaSection({ onOpenDonate }) {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 sm:px-6 md:px-16" aria-labelledby="sitewide-donate-cta-heading">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-r from-red-950 via-[#CC444B] to-red-900 p-8 sm:p-14 text-white text-center shadow-2xl overflow-hidden">
          
          {/* Subtle Decorative Elements */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-black/10 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-heading font-extrabold uppercase tracking-widest text-amber-200 border border-white/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Tax-Deductible 80G Seva</span>
            </span>

            <h2 id="sitewide-donate-cta-heading" className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              From classrooms to gaushalas, your seva reaches far
            </h2>

            <p className="font-sans text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              One gift supports free education, refugee shelter, cow rescue, tribal welfare, women's empowerment, and relief when disaster strikes.
            </p>

            <div className="pt-3 flex justify-center">
              <button
                onClick={onOpenDonate}
                className="bg-white hover:bg-gray-100 text-[#243C4B] font-heading font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg flex items-center gap-2.5 transition-all hover:scale-105 cursor-pointer"
              >
                <span>Donate to All Causes</span>
                <Heart className="w-5 h-5 text-[#CC444B] fill-[#CC444B]" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
