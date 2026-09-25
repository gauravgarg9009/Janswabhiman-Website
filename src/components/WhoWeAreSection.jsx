import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function WhoWeAreSection({ onOpenAboutModal }) {
  return (
    <section id="whoweare" className="w-full bg-white py-12 md:py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Overlapping Photos & 2 Lakh+ Badge */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[540px]">
            
            {/* Top Slum Classroom Photo (Figma node 141:9678: Subtract) */}
            <div className="relative rounded-[28px] overflow-hidden shadow-xl z-10 w-full sm:w-[90%] ml-auto">
              <img 
                src="/assets/subtract_141_9678.png" 
                alt="JSWS Free Education Centre" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Overlapping Cow / Gaushala Photo (Figma node 141:9677: image) */}
            <div className="absolute left-0 bottom-[-20px] sm:bottom-[-30px] w-[50%] sm:w-[55%] rounded-[24px] overflow-hidden shadow-2xl border-4 border-white z-20">
              <img 
                src="/assets/image_141_9677.png" 
                alt="JSWS Gaushala Seva" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Overlapping Red Badge: 2 Lakh+ Lives Impacted */}
            <div className="absolute left-[35%] sm:left-[40%] bottom-[-40px] sm:bottom-[-50px] bg-[#CC444B] text-white p-5 sm:p-6 rounded-[22px] shadow-2xl z-30 text-left min-w-[160px] sm:min-w-[190px]">
              <div className="font-heading font-black text-3xl sm:text-4xl leading-none">
                2 <span className="text-xl sm:text-2xl font-bold">Lakh+</span>
              </div>
              <div className="font-heading font-bold text-sm sm:text-base text-white/95 mt-1">
                Lives Impacted
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Narrative & Know More Button */}
        <div className="lg:col-span-6 space-y-6 text-left pt-12 lg:pt-0">
          
          {/* Subtitle with Horizontal Red Line */}
          <div className="flex items-center gap-3">
            <span className="font-heading font-bold text-[#CC444B] text-lg sm:text-xl">
              Who We Are
            </span>
            <div className="h-[2px] w-16 bg-[#CC444B]"></div>
          </div>

          {/* Heading: About Us */}
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-black tracking-tight leading-none">
            About <span className="text-[#CC444B]">Us</span>
          </h2>

          {/* Body Paragraphs from Figma */}
          <div className="space-y-4 text-gray-800 font-sans text-sm sm:text-base leading-relaxed">
            <p>
              In the remote villages and forgotten belts of Bharat, life often unfolds as a struggle. Tribal children walk barefoot to schools that barely exist. Daughters wait silently, dreams dimmed by poverty, families worry about the next meal, and cows—the very embodiment of our culture—wander injured and neglected. Across the land, Pakistani Hindus who have fled persecution arrive with nothing but memories of home. In floods, storms, and disasters, hope often seems like a distant flame.
            </p>
            <p>
              Into this world of despair stepped Jan Swabhiman Welfare Society (JSWS), not with empty charity, but with Dharma, compassion, and unwavering action. Here, every initiative tells a story of revival, resilience, and respect for life. We strive to empower vulnerable communities — tribal, women, refugees, and animals — with education, livelihood, safety, and dignity, rooted in the timeless values of Dharma and seva.
            </p>
          </div>

          {/* Know More Pill Button with Circular Arrow */}
          <div className="pt-2">
            <button 
              onClick={onOpenAboutModal}
              className="inline-flex items-center gap-3 bg-[#CC444B] hover:bg-red-700 text-white font-heading font-bold text-base px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all group"
            >
              <span>Know More</span>
              <div className="w-8 h-8 rounded-full bg-white text-[#CC444B] flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </div>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
