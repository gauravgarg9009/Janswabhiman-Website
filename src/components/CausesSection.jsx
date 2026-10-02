import React, { useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import storiesData from '../data/stories.json';

export default function CausesSection({ onSelectStory, onNavigateToBlog }) {
  const [currentCauseIndex, setCurrentCauseIndex] = useState(0);

  const featuredCause = storiesData.find(s => s.slug === 'classrooms-of-hope') || {
    title: "Janswabhiman's Classrooms of Hope",
    category: "FEATURED CAUSE",
    subCategory: "Education",
    image: "/images/blog/classrooms-of-hope/hero.webp",
    desc: "The blackboard may be small, but the dreams of the children it holds are infinite. At Janswabhiman Welfare Society's Shiksha Centres, education is not just a privilege — it is a rebirth, a re-awakening of self-worth, dignity and hope."
  };

  const cause1 = storiesData.find(s => s.slug === 'kanya-poojan-tribal') || {
    title: "Kanya Poojan",
    category: "Women & Children",
    image: "/images/blog/kanya-poojan-tribal/hero.webp",
    desc: "On Navratris, tribal girls are honoured as embodiments of Shakti — dignity uplifted, myths of exclusion shattered."
  };

  const cause2 = storiesData.find(s => s.slug === 'khambaliya-vansda-floods-2026') || {
    title: "July 2026 Floods",
    category: "Disaster Relief",
    image: "/images/blog/khambaliya-vansda-floods-2026/hero.webp",
    desc: "Rescue, cooked meals and medical aid when flash floods devastated Khambaliya village in Vansda, Gujarat."
  };

  const cause3 = storiesData.find(s => s.slug === 'when-illness-silences-the-innocent') || {
    title: "When Illness Silences the Innocent",
    category: "Health & Animal Care",
    image: "/images/blog/when-illness-silences-the-innocent/hero.webp",
    desc: "No visible wound — only fever, weakness and silent agony — until Gausevaks arrive with relief."
  };

  const mobileCauses = [cause1, featuredCause, cause2, cause3];

  const handleNextCause = () => {
    setCurrentCauseIndex((prev) => (prev + 1) % mobileCauses.length);
  };

  const handlePrevCause = () => {
    setCurrentCauseIndex((prev) => (prev === 0 ? mobileCauses.length - 1 : prev - 1));
  };

  return (
    <section id="causes" className="w-full bg-white py-14 md:py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto space-y-12">
        
        {/* Header from Figma */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          {/* Subtitle */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1.5px] w-12 sm:w-14 bg-[#CC444B]"></div>
            <span className="font-heading font-medium text-[#CC444B] text-[18px] leading-[29px]">
              Seva in Action
            </span>
            <div className="h-[1.5px] w-12 sm:w-14 bg-[#CC444B]"></div>
          </div>

          {/* Heading */}
          <h2 className="font-heading font-black text-[38px] sm:text-4xl md:text-5xl text-black leading-[42px] sm:leading-tight tracking-tight">
            Causes that need a <br className="hidden sm:inline" />
            <span className="text-[#CC444B]">helping hand</span>
          </h2>

          {/* Description */}
          <p className="font-sans text-gray-700 text-[12px] sm:text-base max-w-2xl mx-auto leading-[18px] sm:leading-relaxed px-4">
            The work takes many forms, but the purpose remains the same: to make life better where it matters.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: Featured Card (7 Cols) + 3 Sub-Cards (5 Cols)               */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          
          {/* Big Featured Card: Frame 4070 (6 Cols) */}
          <div className="col-span-6 bg-white rounded-[28px] border border-gray-200/80 shadow-figma-card overflow-hidden text-left flex flex-col justify-between group">
            <div>
              {/* Photo with Floating Red Arrow Button */}
              <div className="relative">
                <img 
                  src={featuredCause.image} 
                  alt={featuredCause.title} 
                  className="w-full h-80 md:h-[340px] object-cover" 
                />
                
                {/* Floating Red Arrow Cutout Button */}
                <button 
                  onClick={() => onSelectStory(featuredCause)}
                  className="absolute top-4 right-4 w-14 h-14 rounded-full bg-[#CC444B] hover:bg-red-700 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer"
                  aria-label="Open story"
                >
                  <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
                </button>
              </div>

              {/* Content Body */}
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-2 text-sm font-heading font-extrabold uppercase tracking-wider">
                  <span className="text-[#CC444B]">{featuredCause.category}</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-black">{featuredCause.subCategory}</span>
                </div>

                <h3 className="font-heading font-black text-3xl md:text-[34px] text-black leading-tight">
                  {featuredCause.title}
                </h3>

                <p className="font-sans text-gray-700 text-base leading-relaxed">
                  {featuredCause.desc}
                </p>
              </div>
            </div>

            {/* Read Story Pill Button */}
            <div className="p-8 pt-0">
              <button 
                onClick={() => onSelectStory(featuredCause)}
                className="inline-flex items-center gap-3 bg-[#CC444B] hover:bg-red-700 text-white font-heading font-bold text-base px-6 py-3 rounded-full shadow transition-all group cursor-pointer"
              >
                <span>Read Story</span>
                <div className="w-6 h-6 rounded-full bg-white text-[#CC444B] flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: 3 Cards (Frame 4074, 4075, 4076) (6 Cols) */}
          <div className="col-span-6 space-y-6">
            
            {/* Top Row: Cards 1 & 2 Side-by-Side (Frame 4074 & 4075) */}
            <div className="grid grid-cols-2 gap-6">
              
              {/* Card 1: Kanya Poojan (Frame 4074) */}
              <div className="bg-white rounded-[24px] border border-gray-200/80 shadow-figma-card overflow-hidden text-left flex flex-col justify-between group">
                <div>
                  <div className="relative">
                    <img src={cause1.image} alt={cause1.title} className="w-full h-48 object-cover" />
                    <button 
                      onClick={() => onSelectStory(cause1)}
                      className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[#CC444B] hover:bg-red-700 text-white flex items-center justify-center shadow cursor-pointer"
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
                        className="text-[#CC444B] underline font-extrabold hover:text-red-700 cursor-pointer"
                      >
                        Read Story
                      </button>
                    </div>

                    <h4 className="font-heading font-extrabold text-2xl text-black leading-tight pt-1">
                      {cause1.title}
                    </h4>

                    <p className="font-sans text-gray-700 text-sm leading-relaxed">
                      {cause1.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: July 2026 Floods (Frame 4075) */}
              <div className="bg-white rounded-[24px] border border-gray-200/80 shadow-figma-card overflow-hidden text-left flex flex-col justify-between group">
                <div>
                  <div className="relative">
                    <img src={cause2.image} alt={cause2.title} className="w-full h-48 object-cover" />
                    <button 
                      onClick={() => onSelectStory(cause2)}
                      className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[#CC444B] hover:bg-red-700 text-white flex items-center justify-center shadow cursor-pointer"
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
                        className="text-[#CC444B] underline font-extrabold hover:text-red-700 cursor-pointer"
                      >
                        Read Story
                      </button>
                    </div>

                    <h4 className="font-heading font-extrabold text-2xl text-black leading-tight pt-1">
                      {cause2.title}
                    </h4>

                    <p className="font-sans text-gray-700 text-sm leading-relaxed">
                      {cause2.desc}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Row: Card 3 Horizontal (Frame 4076) */}
            <div className="bg-white rounded-[24px] border border-gray-200/80 shadow-figma-card overflow-hidden text-left flex items-center group">
              <div className="relative w-1/2 h-56 shrink-0">
                <img src={cause3.image} alt={cause3.title} className="w-full h-full object-cover" />
                <button 
                  onClick={() => onSelectStory(cause3)}
                  className="absolute top-1/2 -right-5 -translate-y-1/2 w-11 h-11 rounded-full bg-[#CC444B] hover:bg-red-700 text-white flex items-center justify-center shadow-lg z-10 cursor-pointer"
                >
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              <div className="p-6 space-y-2 flex-grow">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-gray-500 uppercase">
                    <strong className="text-[#CC444B]">DATE</strong> | {cause3.category}
                  </span>
                  <button 
                    onClick={() => onSelectStory(cause3)}
                    className="text-[#CC444B] underline font-extrabold hover:text-red-700 cursor-pointer"
                  >
                    Read Story
                  </button>
                </div>

                <h4 className="font-heading font-extrabold text-2xl text-black leading-tight pt-1">
                  {cause3.title}
                </h4>

                <p className="font-sans text-gray-700 text-sm leading-relaxed">
                  {cause3.desc}
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Desktop View All Causes CTA */}
        <div className="hidden lg:flex items-center justify-center pt-4">
          <button
            onClick={() => onNavigateToBlog ? onNavigateToBlog() : onSelectStory(featuredCause)}
            className="bg-[#CC444B] hover:bg-red-700 text-white font-heading font-bold text-base px-8 py-3.5 rounded-full shadow-lg flex items-center gap-3 transition-all cursor-pointer group"
          >
            <span>Explore All 29 Ground Stories</span>
            <div className="w-7 h-7 rounded-full bg-white text-[#CC444B] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW: Exact Figma Frame 4082 (Node 168:2165) Single-Card Carousel  */}
        {/* ========================================================================= */}
        <div className="block lg:hidden max-w-sm mx-auto space-y-6">
          
          {/* Active Cause Card: Frame 4077 (Figma 170:267: 337px, rounded 25px, shadow) */}
          <div className="w-[337px] mx-auto bg-white rounded-[25px] shadow-[0px_0px_8px_rgba(0,0,0,0.18)] overflow-hidden text-left relative transition-all duration-300">
            {/* Top Photo Frame 61 (170:268: 209px tall) */}
            <div className="relative w-full h-[209px]">
              <img
                src={mobileCauses[currentCauseIndex].image}
                alt={mobileCauses[currentCauseIndex].title}
                className="w-full h-full object-cover rounded-t-[25px]"
              />

              {/* Floating Red Cutout Arrow Button (Group 15 / 170:275) */}
              <button
                onClick={() => onSelectStory(mobileCauses[currentCauseIndex])}
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[#CC444B] hover:bg-red-700 text-white flex items-center justify-center shadow-md active:scale-95 transition-transform cursor-pointer"
                aria-label="Read cause"
              >
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Card Content (227px - 380px) */}
            <div className="p-5 space-y-2.5">
              {/* Category & Read Story Link */}
              <div className="flex items-center justify-between text-xs">
                <span className="font-sans text-gray-800">
                  <strong className="text-[#CC444B] font-extrabold">DATE</strong> | {mobileCauses[currentCauseIndex].category}
                </span>

                <button
                  onClick={() => onSelectStory(mobileCauses[currentCauseIndex])}
                  className="font-sans text-[#CC444B] font-bold text-xs underline cursor-pointer"
                >
                  Read Story
                </button>
              </div>

              {/* Title: 28px Nunito font-black */}
              <h3 className="font-heading font-black text-[24px] text-black leading-tight pt-0.5">
                {mobileCauses[currentCauseIndex].title}
              </h3>

              {/* Description: 12px Nunito Sans line-height 19px */}
              <p className="font-sans font-normal text-[12px] leading-[19px] text-gray-700">
                {mobileCauses[currentCauseIndex].desc}
              </p>
            </div>
          </div>

          {/* Navigation Controls: Frame 3221 (Figma 170:310) Circular < and > */}
          <div className="flex items-center justify-center gap-6 pt-1">
            <button
              onClick={handlePrevCause}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
              aria-label="Previous cause"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            
            <button
              onClick={handleNextCause}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
              aria-label="Next cause"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile CTA: View all causes Pill Button */}
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => onNavigateToBlog ? onNavigateToBlog() : onSelectStory(mobileCauses[currentCauseIndex])}
              className="bg-[#CC444B] hover:bg-red-700 text-white font-heading font-bold text-sm px-7 py-3 rounded-full shadow-md flex items-center gap-2.5 transition-all cursor-pointer"
            >
              <span>Explore All 29 Stories</span>
              <div className="w-5 h-5 rounded-full bg-white text-[#CC444B] flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
