import React from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export default function CausesSection({ onSelectStory }) {
  const featuredCause = {
    title: "Janswabhiman's Classrooms of Hope",
    category: "FEATURED CAUSE",
    subCategory: "Education",
    image: "/assets/image_141_9820.png",
    desc: "The blackboard may be small, but the dreams of the children it holds are infinite. At Janswabhiman Welfare Society's Shiksha Centres, education is not just a privilege — it is a rebirth, a re-awakening of self-worth, dignity and hope."
  };

  const cause1 = {
    title: "Kanya Poojan",
    category: "Women & Children",
    image: "/assets/frame_61_141_10114.png",
    desc: "On Navratris, tribal girls are honoured as embodiments of Shakti — dignity uplifted, myths of exclusion shattered.-"
  };

  const cause2 = {
    title: "July 2026 Floods",
    category: "Disaster Relief",
    image: "/assets/frame_61_141_10184.png",
    desc: "Rescue, cooked meals and medical aid when flash floods devastated Khambaliya village in Vansda, Gujarat."
  };

  const cause3 = {
    title: "When Illness Silences the Innocent",
    category: "Health",
    image: "/assets/frame_61_141_10091.png",
    desc: "No visible wound — only fever, weakness and silent agony — until Gausevaks arrive with relief."
  };

  return (
    <section id="causes" className="w-full bg-white py-14 md:py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto space-y-12">
        
        {/* Header from Figma */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          {/* Subtitle */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1.5px] w-14 bg-[#CC444B]"></div>
            <span className="font-heading font-medium text-[#CC444B] text-base md:text-lg">
              Seva in Action
            </span>
            <div className="h-[1.5px] w-14 bg-[#CC444B]"></div>
          </div>

          {/* Heading */}
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-black leading-tight tracking-tight">
            Causes that need a <br className="hidden sm:inline" />
            <span className="text-[#CC444B]">helping hand</span>
          </h2>

          {/* Description */}
          <p className="font-sans text-gray-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The work takes many forms, but the purpose remains the same: to make life better where it matters.
          </p>
        </div>

        {/* Causes Layout: Featured Card on Left, 3 Sub-Cards on Right (Figma Frame 4070, 4074, 4075, 4076) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Big Featured Card: Frame 4070 (7 Cols) */}
          <div className="lg:col-span-6 xl:col-span-6 bg-white rounded-[28px] border border-gray-200/80 shadow-figma-card overflow-hidden text-left flex flex-col justify-between group">
            <div>
              {/* Photo with Floating Red Arrow Button */}
              <div className="relative">
                <img 
                  src={featuredCause.image} 
                  alt={featuredCause.title} 
                  className="w-full h-64 sm:h-80 md:h-[340px] object-cover" 
                />
                
                {/* Floating Red Arrow Cutout Button (Figma sec_causes_card.png) */}
                <button 
                  onClick={() => onSelectStory(featuredCause)}
                  className="absolute top-4 right-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#CC444B] hover:bg-red-700 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                  aria-label="Open story"
                >
                  <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
                </button>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-heading font-extrabold uppercase tracking-wider">
                  <span className="text-[#CC444B]">{featuredCause.category}</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-black">{featuredCause.subCategory}</span>
                </div>

                <h3 className="font-heading font-black text-2xl sm:text-3xl md:text-[34px] text-black leading-tight">
                  {featuredCause.title}
                </h3>

                <p className="font-sans text-gray-700 text-sm sm:text-base leading-relaxed">
                  {featuredCause.desc}
                </p>
              </div>
            </div>

            {/* Read Story Pill Button */}
            <div className="p-6 sm:p-8 pt-0">
              <button 
                onClick={() => onSelectStory(featuredCause)}
                className="inline-flex items-center gap-3 bg-[#CC444B] hover:bg-red-700 text-white font-heading font-bold text-sm sm:text-base px-6 py-3 rounded-full shadow transition-all group"
              >
                <span>Read Story</span>
                <div className="w-6 h-6 rounded-full bg-white text-[#CC444B] flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: 3 Cards (Frame 4074, 4075, 4076) (6 Cols) */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6">
            
            {/* Top Row: Cards 1 & 2 Side-by-Side (Frame 4074 & 4075) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card 1: Kanya Poojan (Frame 4074) */}
              <div className="bg-white rounded-[24px] border border-gray-200/80 shadow-figma-card overflow-hidden text-left flex flex-col justify-between group">
                <div>
                  <div className="relative">
                    <img src={cause1.image} alt={cause1.title} className="w-full h-44 sm:h-48 object-cover" />
                    <button 
                      onClick={() => onSelectStory(cause1)}
                      className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[#CC444B] hover:bg-red-700 text-white flex items-center justify-center shadow"
                    >
                      <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                    </button>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-gray-500 uppercase">
                        <strong className="text-[#CC444B]">DATE</strong> | {cause1.category}
                      </span>
                      <button 
                        onClick={() => onSelectStory(cause1)}
                        className="text-[#CC444B] underline font-extrabold hover:text-red-700"
                      >
                        Read Story
                      </button>
                    </div>

                    <h4 className="font-heading font-extrabold text-xl sm:text-2xl text-black leading-tight pt-1">
                      {cause1.title}
                    </h4>

                    <p className="font-sans text-gray-700 text-xs sm:text-sm leading-relaxed">
                      {cause1.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: July 2026 Floods (Frame 4075) */}
              <div className="bg-white rounded-[24px] border border-gray-200/80 shadow-figma-card overflow-hidden text-left flex flex-col justify-between group">
                <div>
                  <div className="relative">
                    <img src={cause2.image} alt={cause2.title} className="w-full h-44 sm:h-48 object-cover" />
                    <button 
                      onClick={() => onSelectStory(cause2)}
                      className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[#CC444B] hover:bg-red-700 text-white flex items-center justify-center shadow"
                    >
                      <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                    </button>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-gray-500 uppercase">
                        <strong className="text-[#CC444B]">DATE</strong> | {cause2.category}
                      </span>
                      <button 
                        onClick={() => onSelectStory(cause2)}
                        className="text-[#CC444B] underline font-extrabold hover:text-red-700"
                      >
                        Read Story
                      </button>
                    </div>

                    <h4 className="font-heading font-extrabold text-xl sm:text-2xl text-black leading-tight pt-1">
                      {cause2.title}
                    </h4>

                    <p className="font-sans text-gray-700 text-xs sm:text-sm leading-relaxed">
                      {cause2.desc}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Row: Card 3 Horizontal (Frame 4076) */}
            <div className="bg-white rounded-[24px] border border-gray-200/80 shadow-figma-card overflow-hidden text-left flex flex-col sm:flex-row items-center group">
              <div className="relative w-full sm:w-1/2 h-48 sm:h-56 shrink-0">
                <img src={cause3.image} alt={cause3.title} className="w-full h-full object-cover" />
                <button 
                  onClick={() => onSelectStory(cause3)}
                  className="absolute top-3 right-3 sm:right-auto sm:top-1/2 sm:-right-6 sm:-translate-y-1/2 w-11 h-11 rounded-full bg-[#CC444B] hover:bg-red-700 text-white flex items-center justify-center shadow-lg z-10"
                >
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              <div className="p-5 sm:p-6 space-y-2 flex-grow">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-gray-500 uppercase">
                    <strong className="text-[#CC444B]">DATE</strong> | {cause3.category}
                  </span>
                  <button 
                    onClick={() => onSelectStory(cause3)}
                    className="text-[#CC444B] underline font-extrabold hover:text-red-700"
                  >
                    Read Story
                  </button>
                </div>

                <h4 className="font-heading font-extrabold text-xl sm:text-2xl text-black leading-tight pt-1">
                  {cause3.title}
                </h4>

                <p className="font-sans text-gray-700 text-xs sm:text-sm leading-relaxed">
                  {cause3.desc}
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* View All Causes CTA (Figma node 141:9908) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <button
            onClick={() => onSelectStory(featuredCause)}
            className="bg-[#CC444B] hover:bg-red-700 text-white font-heading font-bold text-base px-8 py-3.5 rounded-full shadow-lg flex items-center gap-3 transition-all"
          >
            <span>View all causes</span>
            <div className="w-6 h-6 rounded-full bg-white text-[#CC444B] flex items-center justify-center">
              <Eye className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
