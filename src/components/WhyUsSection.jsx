import React from 'react';
import { ShieldCheck, Heart, Award, ArrowUpRight, Compass } from 'lucide-react';

export default function WhyUsSection({ onOpenDonate }) {
  const diffPoints = [
    {
      title: "Processes, Not Photo Ops",
      desc: "We don't teach children or treat animals as a one-off Sunday event for social media clicks. We build permanent, daily operational centers.",
      icon: Compass
    },
    {
      title: "Rooted in Dharma & Integrity",
      desc: "Service is sacred (Seva with श्रद्धा). Every rupee donated is accounted for with complete transparency and local ground verification.",
      icon: Heart
    },
    {
      title: "Multi-Domain Ground Action",
      desc: "Simultaneously active across slum education, women skill empowerment, Hindu refugee rehabilitation, Gauseva, and disaster relief.",
      icon: ShieldCheck
    },
    {
      title: "Expanding to 500 Districts",
      desc: "Our vision is to expand our working footprint from 50 districts to 500 districts across Bharat with your monthly commitment.",
      icon: Award
    }
  ];

  return (
    <section id="whyus" className="py-16 md:py-24 px-4 md:px-16 bg-gradient-to-b from-orange-100/40 via-white to-orange-50/20 relative">
      <div className="max-w-[1440px] mx-auto text-center space-y-12">
        
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="bg-red-100 text-brand-red font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-md">
            Why Choose JSWS
          </span>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-gray-900 leading-tight">
            Turning Neglect into Care, Despair into <span className="text-brand-red">Strength</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            At Janswabhiman Welfare Society, we believe our country cannot afford theatrics in the name of activism. We need serious, long-term, professional efforts.
          </p>
        </div>

        {/* 4 Distinction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {diffPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-figma-card hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-left flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 bg-red-50 text-brand-red rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-brand-red group-hover:translate-x-1 transition-transform">
                  <span>Learn More</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Commitment Banner Box */}
        <div className="bg-gradient-to-r from-red-950 via-red-900 to-amber-950 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-left">
          <div className="space-y-3 max-w-2xl">
            <span className="bg-amber-400 text-gray-950 text-xs font-black px-3 py-1 rounded-md uppercase tracking-wider">
              Monthly Commitment
            </span>
            <h3 className="font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl text-white">
              Help us expand from 50 districts to 500.
            </h3>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              Every ₹500, ₹1000, or ₹2500 monthly pledge secures a child's education, shelters an injured Gaumata, and supports families in distress.
            </p>
          </div>

          <button 
            onClick={onOpenDonate}
            className="shrink-0 bg-amber-400 hover:bg-amber-300 text-gray-950 font-black text-lg px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all flex items-center gap-3"
          >
            <Heart className="w-5 h-5 fill-gray-950" />
            <span>Pledge Support Now</span>
          </button>
        </div>

      </div>
    </section>
  );
}
