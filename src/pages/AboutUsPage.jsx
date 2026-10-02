import React from 'react';
import { ArrowUpRight, Share2, Heart, ArrowLeft, Search, Mail, Twitter, ChevronRight } from 'lucide-react';

export default function AboutUsPage({ onOpenDonate, onNavigateHome, onNavigateTo }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'About Us - Jan Swabhiman Welfare Society',
        text: 'Learn about Jan Swabhiman Welfare Society (JSWS) and our mission of Seva and Swabhiman.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const categories = [
    { name: "Saraswati-Free Education for Slum Children", slug: "saraswati", count: 10 },
    { name: "Women Empowerment", slug: "women-empowerment", count: 7 },
    { name: "Pak Hindu Refugees Rehabilitation", slug: "pak-hindu-refugees-rehabilitation", count: 5 },
    { name: "Gauseva & Animal Welfare", slug: "gauseva-gaushala-animal-welfare", count: 5 },
    { name: "Gaushala", slug: "gaushala", count: 5 },
    { name: "Tribal Welfare", slug: "tribal-welfare", count: 12 },
    { name: "Relief Work", slug: "relief-work", count: 3 }
  ];

  return (
    <div className="w-full bg-white text-gray-900 min-h-screen">
      
      {/* Back to Home Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 pt-4 pb-2">
        <button 
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-sm font-heading font-bold text-[#CC444B] hover:text-red-700 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP VIEW: Full 1440px Canvas Layout                                   */}
      {/* ========================================================================= */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-16 py-8 space-y-16">
        
        {/* Page Heading */}
        <div className="text-left space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-heading font-medium text-[#CC444B] text-lg">
              Who We Are
            </span>
            <div className="h-[1.5px] w-14 bg-[#CC444B]" />
          </div>
          <h1 className="font-heading font-black text-6xl text-black tracking-tight">
            About <span className="text-[#CC444B]">Us</span>
          </h1>
        </div>

        {/* Hero Banner with Red Container & Real Photo */}
        <div className="grid grid-cols-12 gap-12 items-center bg-[#CC444B] rounded-[36px] p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Left Text */}
          <div className="col-span-7 space-y-6">
            <h2 className="font-heading font-black text-4xl text-white leading-tight">
              Reviving the Soul of Bharat through Dharma and Seva
            </h2>
            <p className="font-sans text-white/95 text-lg leading-relaxed">
              In the remote villages and forgotten belts of Bharat, life often unfolds as a struggle. Into this world of despair stepped Jan Swabhiman Welfare Society (JSWS), not with empty charity, but with Dharma, compassion, and unwavering action.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenDonate}
                className="bg-white hover:bg-gray-50 text-[#243C4B] font-heading font-bold text-base px-8 py-3.5 rounded-full shadow-lg flex items-center gap-3 transition-all cursor-pointer"
              >
                <span>Support Our Mission</span>
                <Heart className="w-5 h-5 text-[#CC444B] fill-[#CC444B]" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] rounded-[24px] overflow-hidden shadow-2xl border-4 border-white/20">
              <img 
                src="/assets/chatgpt_image_sep_10,_2026,_01_52_02_am_1_229_284.png" 
                alt="JSWS Classroom & Field Seva" 
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Narrative Sections & Sidebar */}
        <div className="grid grid-cols-12 gap-12 items-start">
          <div className="col-span-8 space-y-8 text-left font-sans text-gray-800 text-[17px] leading-[30px]">
            <p className="first-letter:text-5xl first-letter:font-heading first-letter:font-black first-letter:text-[#CC444B] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
              In the remote villages and forgotten belts of Bharat, life often unfolds as a struggle. Tribal children walk barefoot to schools that barely exist. Daughters wait silently, dreams dimmed by poverty, families worry about the next meal, and cows—the very embodiment of our culture—wander injured and neglected. Across the land, Pakistani Hindus who have fled persecution arrive with nothing but memories of home. In floods, storms, and disasters, hope often seems like a distant flame.
            </p>

            <div className="p-8 bg-gradient-to-r from-red-50 to-white rounded-2xl border-l-4 border-[#CC444B] my-6">
              <p className="font-heading font-bold text-xl text-gray-900 leading-snug">
                “Into this world of despair stepped Jan Swabhiman Welfare Society (JSWS), not with empty charity, but with Dharma, compassion, and unwavering action. Here, every initiative tells a story of revival, resilience, and respect for life.”
              </p>
            </div>

            <p>
              We strive to empower vulnerable communities — tribal, women, refugees, and animals — with education, livelihood, safety, and dignity, rooted in the timeless values of Dharma and seva. In Samuhik Vivah ceremonies, tribal daughters are honored not as burdens but as Shakti, celebrated with Kanya Poojan, Sanskar, and the blessings of Agni. In these sacred unions, families reclaim dignity, pride, and joy long denied to them.
            </p>

            <p>
              Children in remote villages are guided not only in vidya, but also in the wisdom of our Sanatan culture, ensuring that heritage and progress walk hand in hand. Gaumata and abandoned animals find safety and care through Gauseva, where every rescued life becomes a living testament to compassion. Pakistani Hindus receive shelter, stability, and ghar aur samman, reclaiming their lives with hope and dignity.
            </p>

            {/* In-Between Real Media Grid */}
            <div className="grid grid-cols-2 gap-6 my-8">
              <div className="rounded-2xl overflow-hidden shadow-lg h-64 bg-gray-100">
                <img src="/images/saraswati/children-studying-outdoors.png" alt="Classroom Education" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-64 bg-gray-100">
                <img src="/images/gauseva/gau-seva-collage.jpg" alt="Gaushala Seva" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Dr. Vashi Sharma Feature Card */}
            <div className="p-8 bg-gradient-to-br from-amber-50/70 via-white to-red-50/50 rounded-3xl border border-amber-200/80 shadow-md my-8">
              <div className="grid grid-cols-12 gap-6 items-center">
                <div className="col-span-4 flex justify-center">
                  <div className="relative w-44 h-56 rounded-2xl overflow-hidden shadow-lg border-2 border-[#CC444B]/20">
                    <img 
                      src="/images/about/dr-vashi-sharma.png" 
                      alt="Dr. Vashi Sharma" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className="col-span-8 space-y-3 text-left">
                  <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#CC444B] bg-[#CC444B]/10 px-3 py-1 rounded-full">
                    Visionary & Founder
                  </span>
                  <h3 className="font-heading font-black text-2xl text-gray-900">
                    Dr. Vashi Sharma
                  </h3>
                  <p className="font-sans text-gray-700 text-sm leading-relaxed">
                    At the heart of this movement is <strong>Dr. Vashi Sharma</strong>, a visionary whose life bridges science, service, and society. Under his guidance, JSWS has become a beacon of values-driven reform, where each act of seva transforms lives and communities, and every effort restores faith in humanity and culture.
                  </p>
                </div>
              </div>
            </div>

            <p>
              When floods or disasters strike, JSWS is there with timely relief—food, shelter, and care—restoring not just survival, but trust, confidence, and courage. Every ritual, rescue, and relief is a declaration: that dignity, respect, and hope are the birthright of every Jeev—human and animal alike. Through education, empowerment, cultural preservation, and compassionate care, JSWS is not just changing lives—it is reviving the soul of Bharat, one community at a time.
            </p>

            <p className="font-heading font-bold text-xl text-gray-900">
              Join us in this journey, for every hand extended, every life touched, and every heart uplifted becomes a living testament to Bharat's eternal Shakti, Swabhiman, and spirit of seva.
            </p>
          </div>

          {/* Sticky Sidebar */}
          <div className="col-span-4 sticky top-28 space-y-6">
            
            {/* Donate Card */}
            <div className="bg-[#F6F6F6] rounded-3xl p-8 text-left space-y-6 border border-gray-200">
              <div className="space-y-2">
                <span className="font-heading font-black text-2xl text-black block">
                  Support Our Seva
                </span>
                <p className="font-sans text-sm text-gray-600">
                  Every rupee goes directly to ground operations in slum schools, gaushalas, and refugee camps.
                </p>
              </div>

              <button
                onClick={onOpenDonate}
                className="w-full bg-[#CC444B] hover:bg-red-700 text-white font-heading font-bold text-base py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <span>Donate Now</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>

              <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500 font-sans">
                <span>Tax Exemptions Available</span>
                <span>80G Certified</span>
              </div>
            </div>

            {/* Categories Navigation */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 text-left space-y-4 shadow-sm">
              <h4 className="font-heading font-bold text-base text-gray-900 border-b border-gray-100 pb-3">
                Key Initiatives
              </h4>
              <ul className="space-y-2">
                {categories.map((cat, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => onNavigateTo ? onNavigateTo(`program-${cat.slug}`) : null}
                      className="w-full text-left text-sm font-sans text-gray-700 hover:text-[#CC444B] flex items-center justify-between py-1 transition-colors cursor-pointer group"
                    >
                      <span className="line-clamp-1 group-hover:underline">{cat.name}</span>
                      <span className="text-xs text-gray-400 font-mono">({cat.count})</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Share */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 space-y-4 text-left">
              <span className="font-heading font-bold text-sm text-gray-800 block">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://x.com/JanSwabh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-800 rounded-lg text-xs font-bold transition-colors"
                >
                  <Twitter className="w-3.5 h-3.5 text-[#CC444B]" />
                  <span>@JanSwabh</span>
                </a>
                <a
                  href="mailto:mailus@janswabhiman.org"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-800 rounded-lg text-xs font-bold transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#CC444B]" />
                  <span>Email Us</span>
                </a>
              </div>
              <button
                onClick={handleShare}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-xs font-bold text-gray-700 transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4 text-[#CC444B]" />
                <span>Share About Us</span>
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE VIEW                                                               */}
      {/* ========================================================================= */}
      <div className="block lg:hidden px-4 sm:px-6 py-4 space-y-6 max-w-md mx-auto text-center">
        
        {/* Heading */}
        <div className="text-center py-2">
          <h1 className="font-heading font-black text-[38px] leading-[44px] text-black tracking-tight">
            About <span className="text-[#CC444B]">Us</span>
          </h1>
        </div>

        {/* Hero Photo Container */}
        <div className="w-full bg-[#CC444B] rounded-[28px] p-5 shadow-xl relative overflow-hidden text-center">
          <div className="w-full h-[320px] rounded-[18px] overflow-hidden shadow-lg mx-auto bg-black/10">
            <img 
              src="/assets/chatgpt_image_sep_10,_2026,_01_52_02_am_1_229_284.png" 
              alt="JSWS Seva Work" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Narrative Paragraphs */}
        <div className="space-y-4 text-left font-sans text-[13px] leading-[21px] text-gray-800 px-1">
          <p>
            In the remote villages and forgotten belts of Bharat, life often unfolds as a struggle. Tribal children walk barefoot to schools that barely exist. Daughters wait silently, dreams dimmed by poverty, families worry about the next meal, and cows—the very embodiment of our culture—wander injured and neglected. Across the land, Pakistani Hindus who have fled persecution arrive with nothing but memories of home. In floods, storms, and disasters, hope often seems like a distant flame.
          </p>
          <p>
            Into this world of despair stepped Jan Swabhiman Welfare Society (JSWS), not with empty charity, but with Dharma, compassion, and unwavering action. Here, every initiative tells a story of revival, resilience, and respect for life. We strive to empower vulnerable communities — tribal, women, refugees, and animals — with education, livelihood, safety, and dignity, rooted in the timeless values of Dharma and seva.
          </p>
          
          {/* Dr. Vashi Sharma Mobile Card */}
          <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200 flex items-center gap-4 my-4">
            <img 
              src="/images/about/dr-vashi-sharma.png" 
              alt="Dr. Vashi Sharma" 
              className="w-16 h-20 object-cover rounded-xl shadow-sm shrink-0"
            />
            <div>
              <span className="text-[10px] font-extrabold uppercase text-[#CC444B]">Founder</span>
              <h4 className="font-heading font-black text-base text-gray-900 leading-tight">Dr. Vashi Sharma</h4>
              <p className="text-[11px] text-gray-600 leading-snug mt-1">Bridging science, service, and society under the banner of Dharma and Swabhiman.</p>
            </div>
          </div>

          <p>
            In Samuhik Vivah ceremonies, tribal daughters are honored not as burdens but as Shakti, celebrated with Kanya Poojan, Sanskar, and the blessings of Agni. In these sacred unions, families reclaim dignity, pride, and joy long denied to them. Children in remote villages are guided not only in vidya, but also in the wisdom of our Sanatan culture, ensuring that heritage and progress walk hand in hand.
          </p>
          <p>
            Gaumata and abandoned animals find safety and care through Gauseva, where every rescued life becomes a living testament to compassion. Pakistani Hindus receive shelter, stability, and ghar aur samman, reclaiming their lives with hope and dignity. When floods or disasters strike, JSWS is there with timely relief—food, shelter, and care—restoring not just survival, but trust, confidence, and courage.
          </p>
          <p className="font-bold text-gray-900">
            Join us in this journey, for every hand extended, every life touched, and every heart uplifted becomes a living testament to Bharat's eternal Shakti, Swabhiman, and spirit of seva.
          </p>
        </div>

        {/* Share Row */}
        <div className="pt-4 space-y-3">
          <div className="h-[1px] w-full bg-[#CC444B]/40" />
          <div className="flex items-center justify-between px-2">
            <span className="font-sans text-[12px] font-bold text-gray-700 tracking-wider">
              SHARE
            </span>
            <img 
              src="/assets/frame_3_141_10008.svg" 
              alt="Social Share" 
              className="h-7 object-contain cursor-pointer"
              onClick={handleShare}
            />
          </div>
          <div className="h-[1px] w-full bg-[#CC444B]/40" />
        </div>

        {/* Donate Now Button */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={onOpenDonate}
            className="w-[160px] h-[44px] bg-[#CC444B] hover:bg-red-700 text-white rounded-[10px] flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
          >
            <span className="font-heading font-bold text-sm">Donate Now</span>
            <Heart className="w-4 h-4 fill-white" />
          </button>
        </div>

      </div>

    </div>
  );
}
