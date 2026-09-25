import React from 'react';

export default function ImpactCounterGrid() {
  const metrics = [
    {
      number: "2,000+",
      line1: "Children",
      line2: "educated",
      icon: "/assets/read_5519429_1_141_9697.svg"
    },
    {
      number: "20,000+",
      line1: "Women",
      line2: "empowered",
      icon: "/assets/reward_4086326_1_141_9717.svg"
    },
    {
      number: "1,500+",
      line1: "Refugee children",
      line2: "supported",
      icon: "/assets/childcare_17983864_1_141_9727.svg"
    },
    {
      number: "100+",
      line1: "Families",
      line2: "sheltered",
      icon: "/assets/family_6289430_1_141_9705.svg"
    },
    {
      number: "50,000+",
      line1: "Animals",
      line2: "rescued",
      icon: "/assets/pet_care_2076220_1_141_9732.svg"
    },
    {
      number: "100+",
      line1: "Gaumatas",
      line2: "sheltered",
      icon: "/assets/cow_2396601_1_141_9754.svg"
    },
    {
      number: "50,000+",
      line1: "Tribal & Dalit",
      line2: "lives uplifted",
      icon: "/assets/growth_9477432_1_141_9766.svg"
    },
    {
      number: "5,000+",
      line1: "Lives touched",
      line2: "through relief",
      icon: "/assets/people_6197491_1_141_9740.svg"
    }
  ];

  return (
    <section id="impact" className="w-full bg-white py-14 md:py-24 px-6 md:px-16">
      <div className="max-w-[1440px] mx-auto text-center space-y-12">
        
        {/* Header from Figma 141:9771 */}
        <div className="max-w-3xl mx-auto space-y-3">
          
          {/* Subtitle with lines */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1.5px] w-14 bg-[#CC444B]"></div>
            <span className="font-heading font-medium text-[#CC444B] text-base md:text-lg">
              From Seva to Change
            </span>
            <div className="h-[1.5px] w-14 bg-[#CC444B]"></div>
          </div>

          {/* Heading */}
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-black leading-tight tracking-tight">
            Impact measured in <br className="hidden sm:inline" />
            <span className="text-[#CC444B]">lives changed.</span>
          </h2>

          {/* Description */}
          <p className="font-sans text-gray-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We work alongside underserved communities to create access to education, livelihoods, rehabilitation, and essential support —helping people build more secure and self-reliant futures.
          </p>

        </div>

        {/* 8 Cards in 4-Column Grid (Figma Frames 21-28) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="w-full max-w-[292px] h-[137px] bg-white rounded-[16px] border-[1.5px] border-[#CC444B] shadow-sm hover:shadow-lg transition-all p-4 flex items-center justify-between text-left group"
            >
              {/* Left Icon (Figma ~74px) */}
              <div className="w-[74px] h-[74px] flex items-center justify-center shrink-0">
                <img 
                  src={item.icon} 
                  alt={item.line1} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform" 
                />
              </div>

              {/* Right: Number and 2-line Label */}
              <div className="flex flex-col justify-center pl-2 flex-grow">
                <div className="font-heading font-black text-3xl md:text-[34px] text-black leading-tight">
                  {item.number}
                </div>
                <div className="font-sans text-sm md:text-base text-gray-900 leading-[1.2] mt-0.5">
                  <div>{item.line1}</div>
                  <div>{item.line2}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
