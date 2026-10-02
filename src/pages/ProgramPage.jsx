import React from 'react';
import { ArrowLeft, ArrowUpRight, Heart, Share2, CheckCircle2, Building, ShieldCheck, Mail } from 'lucide-react';
import programsData from '../data/programs.json';

export default function ProgramPage({ slug, onOpenDonate, onNavigateHome, onNavigateTo }) {
  const program = programsData.find(p => p.slug === slug) || programsData[0];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${program.title} - Jan Swabhiman Welfare Society`,
        text: program.description || program.sanskrit,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="w-full bg-white text-gray-900 min-h-screen">
      
      {/* Breadcrumb Navigation */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 pt-5 pb-3 flex items-center justify-between">
        <button 
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-sm font-heading font-bold text-[#CC444B] hover:text-red-700 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-black transition-colors p-2 rounded-lg bg-gray-100 cursor-pointer"
        >
          <Share2 className="w-4 h-4" />
          <span>Share</span>
        </button>
      </div>

      {/* Hero Banner */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 py-4">
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-gradient-to-r from-red-950 via-[#CC444B] to-red-900 text-white p-6 sm:p-12 lg:p-16 shadow-2xl">
          
          <div className="relative z-10 max-w-3xl space-y-4 sm:space-y-6 text-left">
            {/* Sanskrit Motto Badge */}
            {program.sanskrit && (
              <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                <span className="font-heading font-bold text-amber-200 text-base sm:text-lg">
                  "{program.sanskrit}"
                </span>
                {program.meaning && (
                  <span className="text-white/80 text-xs sm:text-sm font-sans italic">
                    — {program.meaning}
                  </span>
                )}
              </div>
            )}

            <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              {program.title}
            </h1>

            <p className="font-sans text-sm sm:text-lg text-white/90 leading-relaxed max-w-2xl">
              {program.description || "Committed to creating lasting ground change through seva, dignity, and empowerment."}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenDonate}
                className="bg-white hover:bg-gray-100 text-[#243C4B] font-heading font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg flex items-center gap-2.5 transition-all cursor-pointer"
              >
                <span>Support This Seva</span>
                <Heart className="w-5 h-5 text-[#CC444B] fill-[#CC444B]" />
              </button>

              <button
                onClick={() => onNavigateTo ? onNavigateTo('csr') : null}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-heading font-bold text-sm sm:text-base px-6 py-3.5 rounded-full transition-all cursor-pointer"
              >
                <span>CSR Partnership</span>
              </button>
            </div>
          </div>

          {/* Background Illustration / Photo */}
          {program.heroImage && (
            <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-25 lg:opacity-40 pointer-events-none">
              <img 
                src={program.heroImage} 
                alt={program.title} 
                className="w-full h-full object-cover object-center"
              />
            </div>
          )}
        </div>
      </div>

      {/* Main Content & Sidebar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Full Content */}
          <div className="lg:col-span-8 space-y-10 text-left">
            
            {/* Story Paragraphs */}
            <div className="space-y-6 text-gray-800 font-sans text-base sm:text-lg leading-[32px]">
              {program.fullText && program.fullText.map((para, idx) => (
                <p 
                  key={idx}
                  className={idx === 0 ? "first-letter:text-5xl first-letter:font-heading first-letter:font-black first-letter:text-[#CC444B] first-letter:float-left first-letter:mr-3 first-letter:leading-none text-gray-900" : ""}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Key Pillars / Headings Section */}
            {program.headings && program.headings.length > 0 && (
              <div className="pt-8 border-t border-gray-100 space-y-4">
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-gray-900">
                  Core Initiatives & Ground Focus
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {program.headings.map(([tag, text], idx) => (
                    <div 
                      key={idx}
                      className="p-5 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-3.5 hover:shadow-md transition-shadow"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#CC444B] shrink-0 mt-0.5" />
                      <span className="font-heading font-bold text-base text-gray-900 leading-snug">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mentors Section (For Saraswati & programs with mentors) */}
            {program.mentors && program.mentors.length > 0 && (
              <div className="pt-10 border-t border-gray-100 space-y-6">
                <div>
                  <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#CC444B]">
                    Guiding Wisdom
                  </span>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-gray-900 mt-1">
                    Our Mentors & Patrons
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {program.mentors.map((m, idx) => (
                    <div key={idx} className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center space-y-3">
                      <div className="w-24 h-24 rounded-full overflow-hidden shadow-md border-2 border-[#CC444B]/20">
                        <img src={m.image} alt={m.name} className="w-full h-full object-cover object-top" />
                      </div>
                      <div>
                        <h4 className="font-heading font-black text-lg text-gray-900 leading-snug">{m.name}</h4>
                        <span className="text-xs font-semibold text-[#CC444B] block mt-0.5">{m.role}</span>
                      </div>
                      <p className="font-sans text-xs text-gray-600 leading-relaxed">
                        {m.bio}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Direct Bank Transfer Support Box */}
            <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <Building className="w-6 h-6 text-amber-400" />
                <h3 className="font-heading font-black text-2xl text-white">
                  Direct Bank Transfer Details
                </h3>
              </div>
              <p className="text-sm text-slate-300">
                You can also transfer directly via NEFT / RTGS / IMPS to our official registered society account:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-sm font-sans">
                <div className="p-4 bg-white/10 rounded-xl">
                  <span className="text-xs text-slate-400 block">Beneficiary Name</span>
                  <strong className="text-white text-base">Jan Swabhiman Welfare Society</strong>
                </div>
                <div className="p-4 bg-white/10 rounded-xl">
                  <span className="text-xs text-slate-400 block">Account Number & Bank</span>
                  <strong className="text-white text-base">IDFC FIRST Bank, Barakhamba Rd</strong>
                </div>
                <div className="p-4 bg-white/10 rounded-xl">
                  <span className="text-xs text-slate-400 block">IFSC Code</span>
                  <strong className="text-amber-300 font-mono text-base">IDFB0020101</strong>
                </div>
              </div>
              <p className="text-xs text-slate-400 pt-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                Kindly email transaction details and PAN to <strong>mailus@janswabhiman.org</strong> for 80G tax exemption receipt.
              </p>
            </div>

            {/* Photo Gallery Grid for this Program */}
            {program.images && program.images.length > 0 && (
              <div className="pt-8 border-t border-gray-100 space-y-6">
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-gray-900">
                  Glimpses from the Ground
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {program.images.slice(0, 9).map((img, idx) => (
                    <div key={idx} className="rounded-2xl overflow-hidden shadow-sm aspect-video bg-gray-100">
                      <img 
                        src={img} 
                        alt={`${program.title} Photo ${idx + 1}`} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Sticky Seva Card & Other Programs */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            
            {/* Donation Card */}
            <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 text-left space-y-6 border border-gray-200 shadow-sm">
              <div className="space-y-2">
                <span className="font-heading font-black text-2xl text-black block">
                  Support {program.title}
                </span>
                <p className="font-sans text-xs sm:text-sm text-gray-600">
                  Your direct contribution empowers our daily field seva with 100% ground transparency and 80G tax benefits.
                </p>
              </div>

              <button
                onClick={onOpenDonate}
                className="w-full bg-[#CC444B] hover:bg-red-700 text-white font-heading font-bold text-base py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <span>Donate to this Cause</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>

              <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500 font-sans">
                <span>Tax Exemption 80G</span>
                <span>Direct Ground Impact</span>
              </div>
            </div>

            {/* Other Programs Navigation List */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm text-left space-y-4">
              <h4 className="font-heading font-bold text-base text-gray-900 border-b border-gray-100 pb-3">
                Other Programmes
              </h4>
              <ul className="space-y-2.5">
                {programsData.filter(p => p.slug !== slug).map((other) => (
                  <li key={other.slug}>
                    <button
                      onClick={() => onNavigateTo ? onNavigateTo(`program-${other.slug}`) : null}
                      className="w-full text-left text-sm font-sans font-semibold text-gray-700 hover:text-[#CC444B] flex items-center justify-between py-1 transition-colors cursor-pointer"
                    >
                      <span className="line-clamp-1">{other.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
