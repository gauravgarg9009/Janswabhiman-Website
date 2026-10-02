import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function GetInvolvedSection({ onOpenVolunteer, onOpenDonate }) {
  const cards = [
    {
      id: 'volunteer',
      title: "Join as a\nVolunteer",
      topIcon: "/assets/hands_1534393_1_141_9920.svg",
      tagLine1: "Time creates",
      tagLine2: "opportunity",
      action: onOpenVolunteer,
    },
    {
      id: 'intern',
      title: "Join as\nan Intern",
      topIcon: "/assets/identification_2622720_1_141_9938.svg",
      tagLine1: "Learning creates",
      tagLine2: "leaders",
      action: onOpenVolunteer,
    },
    {
      id: 'csr',
      title: "Become a\nCSR Partner",
      topIcon: "/assets/friends_2583068_1_141_9956.svg",
      tagLine1: "Partnership",
      tagLine2: "creates growth",
      action: onOpenVolunteer,
    },
    {
      id: 'donor',
      title: "Join Us as\na Donor",
      topIcon: "/assets/profit_4796920_1_141_9986.svg",
      tagLine1: "Support creates",
      tagLine2: "lasting change",
      action: onOpenDonate,
    }
  ];

  return (
    <section id="getinvolved" className="w-full bg-white relative overflow-hidden">
      
      {/* Top Background Panel (Figma Rectangle 2907: #F6F6F6, height: 463px) */}
      <div className="absolute top-0 left-0 w-full h-[463px] bg-[#F6F6F6] pointer-events-none z-0" />

      {/* ========================================================================= */}
      {/* DESKTOP VIEW: Exact Figma Node 141:9517 (Tree) & Node 141:9916 (Frame 3223) */}
      {/* ========================================================================= */}
      <div className="hidden xl:block relative w-[1440px] max-w-full mx-auto h-[955px] z-10">
        
        {/* Header (Figma 141:10218, 141:10221, 141:9907) */}
        <div className="absolute top-[81px] left-0 w-full flex flex-col items-center text-center z-10 pointer-events-auto">
          
          {/* Subtitle with Red Accent Lines */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-[1.5px] w-14 bg-[#CC444B]" />
            <span className="font-heading font-medium text-[#CC444B] text-[18px] leading-[24px]">
              Be part of the change
            </span>
            <div className="h-[1.5px] w-14 bg-[#CC444B]" />
          </div>

          {/* Main Title: Nunito 48px 900 bold */}
          <h2 className="font-heading font-black text-[48px] leading-[67px] text-black tracking-tight mb-2">
            There’s more than one <span className="text-[#CC444B]">way to serve.</span>
          </h2>

          {/* Subtitle Text: Nunito Sans 16px */}
          <p className="font-sans font-normal text-[16px] leading-[22px] text-gray-700 max-w-[701px]">
            Whether you give your time, skills, or support, every contribution helps create meaningful change.
          </p>

        </div>

        {/* ======================================================================= */}
        {/* Figma Node 141:9517 (Untitled design 1): The Seva Tree Asset            */}
        {/* Exact Dimensions: width: 1284.28px, height: 856.19px, top: 101.17px     */}
        {/* ======================================================================= */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 top-[101px] w-[1284px] h-[856px] pointer-events-none z-0"
          style={{
            backgroundImage: "url(/assets/untitled_design_1_141_9517.png)",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top"
          }}
        >
          {/* Tag 1: Time creates opportunity (Dead centered in Box 1) */}
          <div 
            style={{
              position: 'absolute',
              left: '10.64%',
              top: '71.55%',
              width: '10.16%',
              height: '9.68%',
            }}
            className="flex flex-col items-center justify-center text-center px-1 pt-1.5"
          >
            <span className="font-handwriting font-bold text-[19px] leading-[19px] text-[#2D231E] select-none tracking-tight">
              Time creates<br/>opportunity
            </span>
          </div>

          {/* Tag 2: Learning creates leaders (Dead centered in Box 2) */}
          <div 
            style={{
              position: 'absolute',
              left: '33.89%',
              top: '73.02%',
              width: '9.28%',
              height: '8.94%',
            }}
            className="flex flex-col items-center justify-center text-center px-1 pt-1.5"
          >
            <span className="font-handwriting font-bold text-[19px] leading-[19px] text-[#2D231E] select-none tracking-tight">
              Learning creates<br/>leaders
            </span>
          </div>

          {/* Tag 3: Partnership creates growth (Dead centered in Box 3) */}
          <div 
            style={{
              position: 'absolute',
              left: '56.64%',
              top: '73.02%',
              width: '9.28%',
              height: '8.94%',
            }}
            className="flex flex-col items-center justify-center text-center px-1 pt-1.5"
          >
            <span className="font-handwriting font-bold text-[19px] leading-[19px] text-[#2D231E] select-none tracking-tight">
              Partnership<br/>creates growth
            </span>
          </div>

          {/* Tag 4: Support creates lasting change (Dead centered in Box 4) */}
          <div 
            style={{
              position: 'absolute',
              left: '79.00%',
              top: '71.55%',
              width: '10.25%',
              height: '9.68%',
            }}
            className="flex flex-col items-center justify-center text-center px-1 pt-1.5"
          >
            <span className="font-handwriting font-bold text-[19px] leading-[19px] text-[#2D231E] select-none tracking-tight">
              Support creates<br/>lasting change
            </span>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* Figma Node 141:9916 (Frame 3223): 4 Project Cards Row                    */}
        {/* Exact Coordinates: left: calc(50% - 1336px/2), top: 275px, width: 1336px */}
        {/* ======================================================================= */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[275px] w-[1336px] flex justify-between gap-[32px] z-20 pointer-events-auto">
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-[310px] h-[344px] rounded-[20px] bg-white shadow-[0px_10px_25px_rgba(37,42,52,0.08)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Top Half: Red Box (254px tall) with Centered White Icon */}
              <div className="w-full h-[254px] bg-[#CC444B] rounded-t-[20px] flex items-center justify-center p-6 transition-colors group-hover:bg-[#bd3a41]">
                <img 
                  src={card.topIcon} 
                  alt={card.title} 
                  className="w-[113px] h-[113px] object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Bottom Half: White Box (90px tall) with Title & Apply Here Pill Button */}
              <div className="w-full h-[90px] px-5 bg-white rounded-b-[20px] flex items-center justify-between gap-2">
                <h3 className="font-heading font-extrabold text-[18px] leading-[22px] text-black whitespace-pre-line text-left">
                  {card.title}
                </h3>

                <button
                  onClick={card.action}
                  className="bg-[#CC444B] hover:bg-red-700 text-white rounded-[8px] px-3.5 py-2 flex items-center gap-1.5 shadow-[0px_4px_4px_-4px_rgba(12,12,13,0.05),0px_16px_16px_-8px_rgba(12,12,13,0.1)] hover:shadow-md transition-all group/btn cursor-pointer shrink-0"
                >
                  <span className="font-heading font-bold text-[12px] text-white">
                    Apply here
                  </span>
                  <div className="w-[18px] h-[18px] rounded-full bg-white text-[#CC444B] flex items-center justify-center shrink-0 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">
                    <ArrowUpRight className="w-3 h-3 stroke-[3]" />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE / TABLET VIEW: Exact Figma Frame 4083 (Node 170:320) Vertical Tree */}
      {/* ========================================================================= */}
      <div className="block xl:hidden py-14 px-4 relative z-10 max-w-lg mx-auto">
        
        {/* Header (Figma 170:323, 170:325, 170:321) */}
        <div className="text-center space-y-3 mb-12">
          {/* Subtitle with Red Accent Lines */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1.5px] w-12 bg-[#CC444B]" />
            <span className="font-heading font-medium text-[#CC444B] text-[18px] leading-[29px]">
              Be part of the change
            </span>
            <div className="h-[1.5px] w-12 bg-[#CC444B]" />
          </div>

          {/* Heading */}
          <h2 className="font-heading font-black text-[38px] leading-[42px] text-black tracking-tight">
            There’s more than one <br />
            <span className="text-[#CC444B]">way to serve.</span>
          </h2>

          {/* Subtitle text */}
          <p className="font-sans font-normal text-[12px] leading-[17px] text-gray-700 max-w-[291px] mx-auto text-center px-2">
            Whether you give your time, skills, or support, every contribution helps create meaningful change.
          </p>
        </div>

        {/* Tree & Stacked Cards Container */}
        <div className="relative w-full max-w-[360px] mx-auto pb-16">
          
          {/* Vertical Seva Tree Asset: Untitled design 2 (Node 172:422) */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 top-[120px] w-[390px] h-[1550px] pointer-events-none z-0"
            style={{
              backgroundImage: "url(/assets/untitled_design_2_172_422.png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center top"
            }}
          />

          {/* 4 Cards Stacked with Exact 58px Gap */}
          <div className="relative z-10 flex flex-col items-center gap-[58px]">
            {cards.map((card) => (
              <div
                key={`mob-${card.id}`}
                className="w-[292px] h-[324px] rounded-[19px] bg-white shadow-[0px_9.5px_23.9px_rgba(37,42,52,0.12)] overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all"
              >
                {/* Red Top Half with Centered White Icon (Figma 170:330) */}
                <div className="w-full h-[245px] bg-[#CC444B] flex items-center justify-center p-6">
                  <img 
                    src={card.topIcon} 
                    alt={card.title} 
                    className="w-[105px] h-[105px] object-contain"
                  />
                </div>

                {/* White Bottom Half with Title & Apply Here Pill Button (Figma 170:338) */}
                <div className="w-full h-[79px] px-4 bg-white flex items-center justify-between gap-2">
                  <h3 className="font-heading font-extrabold text-[16px] leading-[20px] text-black whitespace-pre-line text-left">
                    {card.title}
                  </h3>

                  <button
                    onClick={card.action}
                    className="bg-[#CC444B] hover:bg-red-700 text-white rounded-[8px] px-3.5 py-2 flex items-center gap-1.5 shadow-[0px_4px_4px_-4px_rgba(12,12,13,0.05),0px_16px_16px_-8px_rgba(12,12,13,0.1)] hover:shadow-md transition-all cursor-pointer shrink-0"
                  >
                    <span className="font-heading font-bold text-[12px] text-white">
                      Apply here
                    </span>
                    <div className="w-[18px] h-[18px] rounded-full bg-white text-[#CC444B] flex items-center justify-center shrink-0">
                      <ArrowUpRight className="w-3 h-3 stroke-[3]" />
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Root spacing buffer so roots are fully displayed below 4th card */}
          <div className="h-20" />

        </div>

      </div>

    </section>
  );
}
