import React from 'react';
import { Play } from 'lucide-react';

export default function HeroSection({ onOpenDonate, onOpenGlimpses }) {
  return (
    <section id="home" className="w-full bg-white pt-2 pb-8 md:pb-12 px-0 md:px-6 lg:px-0 overflow-hidden">
      
      {/* ========================================================================= */}
      {/* DESKTOP HERO: Exact Figma node 141:9525 with Group 3263 (node 158:1851)   */}
      {/* ========================================================================= */}
      <div className="hidden lg:block relative w-[1492px] max-w-full mx-auto h-[620px]">
        
        {/* Background Canvas: Exact Rendered Figma Container (node 141:9525) */}
        <div className="absolute left-0 top-0 w-full h-[561px] pointer-events-none">
          <img 
            src="/assets/hero_slider_container.png" 
            alt="Hero Background" 
            className="w-full h-full object-contain object-left-top"
          />
        </div>

        {/* Interactive Overlay: slider-content (Figma node 141:9540) */}
        {/* In Figma: left: 99px, top: 452px (which is top: 34px relative to slider-container top: 418px) */}
        <div className="absolute left-[99px] top-[34px] w-[682px] h-[387px] flex flex-col justify-between items-start text-left z-20">
          
          {/* Title: Nunito 60px 700 bold, line-height 72px */}
          <h1 className="font-heading font-bold text-[60px] leading-[72px] text-white tracking-tight whitespace-pre-line">
            Building Dignity.{"\n"}Creating Opportunity.{"\n"}Empowering Lives.
          </h1>

          {/* Description: Nunito Sans 18px, line-height 29px, max-w-[583px] */}
          <p className="font-sans font-normal text-[18px] leading-[29px] text-white max-w-[583px]">
            We work alongside underserved communities to create access to education, livelihoods, rehabilitation, and essential support—helping people build more secure and self-reliant futures.
          </p>

          {/* Frame 20: Buttons Row */}
          <div className="flex items-center gap-8 pt-2">
            
            {/* Donate Now Button (Figma Frame 15: width 154px, height 44px, bg #FFFFFF, rounded 8px) */}
            <button
              onClick={onOpenDonate}
              className="w-[154px] h-[44px] bg-white hover:bg-gray-50 text-[#243C4B] rounded-[8px] flex items-center justify-between px-[15px] shadow-[0px_4px_4px_-4px_rgba(12,12,13,0.05),0px_16px_16px_-8px_rgba(12,12,13,0.1)] hover:shadow-lg transition-all group cursor-pointer"
            >
              <span className="font-sans font-black text-[12px] leading-[18px] text-[#243C4B] uppercase tracking-wider">
                Donate Now
              </span>
              <div className="w-[36px] h-[35px] flex items-center justify-center shrink-0">
                <img 
                  src="/assets/frame_9_141_9547.svg" 
                  alt="Heart" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform" 
                />
              </div>
            </button>

            {/* Glimpses of Seva Button (Figma Frame 19: w 163px, h 38px) */}
            <button
              onClick={onOpenGlimpses}
              className="flex items-center gap-[10px] text-white hover:text-white/80 group transition-all cursor-pointer"
            >
              <div className="w-[38px] h-[38px] rounded-full bg-white text-[#243C4B] flex items-center justify-center shadow-[0px_4px_4px_-4px_rgba(12,12,13,0.05),0px_16px_16px_-8px_rgba(12,12,13,0.1)] group-hover:scale-105 transition-transform">
                <Play className="w-4 h-4 fill-[#243C4B] translate-x-0.5" />
              </div>
              <span className="font-heading font-semibold text-[14px] leading-[21px] text-white underline-offset-4 group-hover:underline">
                Glimpses of Seva
              </span>
            </button>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* EXACT FIGMA NODE 158:1851 (Group 3263) - Two Illustrated Avatar Heads      */}
        {/* Dimensions: 235px × 95px, position: left: 44px, top: 465px                */}
        {/* Sits right inside the bottom-left notch cutout of the red container!       */}
        {/* ========================================================================= */}
        <div 
          id="node-158-1851"
          className="absolute left-[44px] top-[465px] w-[235px] h-[95px] z-30 pointer-events-auto"
        >
          <img 
            src="/assets/group_3263_158_1851.svg" 
            alt="Group 3263 Donors" 
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE / TABLET HERO: Exact Figma node 158:417 with Group 3263            */}
      {/* ========================================================================= */}
      <div className="block lg:hidden px-4 sm:px-6">
        <div className="w-full bg-[#CC444B] rounded-[32px] p-6 sm:p-8 text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
          
          {/* Title */}
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-white leading-tight tracking-tight whitespace-pre-line">
            Building Dignity.{"\n"}Creating Opportunity.{"\n"}Empowering Lives.
          </h1>

          {/* Description */}
          <p className="font-sans font-normal text-sm sm:text-base text-white/95 leading-relaxed max-w-md mx-auto">
            We work alongside underserved communities to create access to education, livelihoods, rehabilitation, and essential support—helping people build more secure and self-reliant futures.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
            
            {/* Donate Now Button */}
            <button
              onClick={onOpenDonate}
              className="h-[44px] bg-white text-[#243C4B] rounded-[8px] flex items-center gap-3 px-4 shadow-md hover:bg-gray-50 transition-colors"
            >
              <span className="font-sans font-black text-xs uppercase tracking-wider">
                Donate Now
              </span>
              <img 
                src="/assets/frame_9_141_9547.svg" 
                alt="Heart" 
                className="w-7 h-7 object-contain" 
              />
            </button>

            {/* Glimpses of Seva Button */}
            <button
              onClick={onOpenGlimpses}
              className="flex items-center gap-2.5 text-white font-heading font-semibold text-sm hover:text-white/80 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-white text-[#243C4B] flex items-center justify-center shadow">
                <Play className="w-3.5 h-3.5 fill-[#243C4B] translate-x-0.5" />
              </div>
              <span>Glimpses of Seva</span>
            </button>

          </div>

          {/* Circular Collage Image */}
          <div className="pt-4 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-[0px_0px_15px_rgba(0,0,0,0.5)]">
              <img 
                src="/assets/ellipse_11_141_9539.png" 
                alt="JSWS Seva Collage" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Donors Counter Bottom Center with Group 3263 */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="w-[180px] h-[72px] shrink-0">
              <img 
                src="/assets/group_3263_158_1851.svg" 
                alt="Donors Avatars" 
                className="w-full h-full object-contain" 
              />
            </div>
            <div className="text-center sm:text-left">
              <span className="font-heading font-extrabold italic text-white text-sm block leading-tight">
                500+ Donors
              </span>
              <span className="text-white/85 text-xs block leading-tight">
                supporting seva that creates impact
              </span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
