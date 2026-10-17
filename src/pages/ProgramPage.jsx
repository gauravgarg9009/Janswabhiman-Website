import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowUpRight, Heart, Share2, CheckCircle2, Building, 
  ShieldCheck, Mail, Copy, Check, Sparkles, Laptop, BookOpen, 
  HeartPulse, Activity, Users, Briefcase, Flame, GraduationCap, 
  Home, ShoppingBag, FileCheck, Truck, Utensils, HeartHandshake, 
  LifeBuoy, X, ChevronRight, Award, Compass
} from 'lucide-react';
import programsData from '../data/programs.json';

const iconMap = {
  BookOpen, Laptop, Sparkles, HeartPulse, Activity, Users,
  Briefcase, Flame, GraduationCap, ShieldCheck, Home, ShoppingBag,
  FileCheck, Truck, Utensils, Heart, HeartHandshake, LifeBuoy,
  Award, Compass
};

export default function ProgramPage({ slug, onOpenDonate, onNavigateHome, onNavigateTo }) {
  const program = programsData.find(p => p.slug === slug) || programsData[0];
  const [copiedField, setCopiedField] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [lightboxImage, setLightboxImage] = useState(null);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${program.title} - Jan Swabhiman Welfare Society`,
        text: program.subtitle || program.description || program.sanskrit,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard?.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const scrollToSection = (sectionId) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full bg-[#FCFDFE] text-gray-900 min-h-screen">
      
      {/* 1. Breadcrumb & Navigation Bar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 pt-5 pb-3 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-heading font-bold">
          <button 
            onClick={onNavigateHome}
            className="inline-flex items-center gap-1.5 text-gray-500 hover:text-[#CC444B] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Home</span>
          </button>
          <span className="text-gray-300">/</span>
          <span className="text-gray-400">Initiatives</span>
          <span className="text-gray-300">/</span>
          <span className="text-[#CC444B] truncate max-w-[180px] sm:max-w-xs">{program.title}</span>
        </div>

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-black transition-colors px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Share</span>
        </button>
      </div>

      {/* 2. Hero Banner */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 py-6">
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-gradient-to-r from-red-950 via-[#CC444B] to-red-900 text-white p-6 sm:p-10 lg:p-14 shadow-2xl">
          
          <div className="relative z-10 max-w-3xl space-y-4 sm:space-y-6 text-left">
            {/* Sanskrit Motto Badge */}
            {program.sanskrit && (
              <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                <span className="font-heading font-extrabold text-amber-200 text-base sm:text-lg">
                  "{program.sanskrit}"
                </span>
                {program.meaning && (
                  <span className="text-white/85 text-xs sm:text-sm font-sans italic">
                    — {program.meaning}
                  </span>
                )}
              </div>
            )}

            <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-5xl text-white tracking-tight leading-tight">
              {program.title}
            </h1>

            <p className="font-sans text-sm sm:text-lg text-white/95 leading-relaxed max-w-2xl">
              {program.subtitle || program.description || "Committed to creating lasting ground change through seva, dignity, and empowerment."}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenDonate}
                className="bg-white hover:bg-gray-100 text-[#243C4B] font-heading font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 cursor-pointer"
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
            <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-20 lg:opacity-35 pointer-events-none">
              <img 
                src={program.heroImage} 
                alt={program.title} 
                className="w-full h-full object-cover object-center"
              />
            </div>
          )}
        </div>
      </div>

      {/* 3. Impact Stats Bar (Live Numbers) */}
      {program.stats && program.stats.length > 0 && (
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 pb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
            {program.stats.map((stat, idx) => (
              <div key={idx} className="text-left border-l-4 border-[#CC444B] pl-4 space-y-1">
                <span className="font-heading font-black text-2xl sm:text-4xl text-[#CC444B] block tracking-tight">
                  {stat.value}
                </span>
                <span className="font-sans text-xs sm:text-sm font-semibold text-gray-700 block leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Interactive Section Navigation Pills */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-y border-gray-200 shadow-xs">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
          {[
            { id: 'overview', label: 'Overview & Story' },
            { id: 'pillars', label: 'Core Pillars' },
            { id: 'sponsorship', label: 'Ways to Sponsor (80G)' },
            ...(program.mentors?.length ? [{ id: 'mentors', label: 'Mentors' }] : []),
            ...(program.images?.length ? [{ id: 'gallery', label: 'Photo Gallery' }] : []),
            { id: 'bank', label: 'Bank Transfer' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`px-4 py-2 rounded-full font-heading font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#CC444B] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 5. Main Content Area */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (8 cols): Rich Structured Content */}
          <div className="lg:col-span-8 space-y-12 text-left">
            
            {/* SECTION A: Sacred Mantra / Dharmic Inspiration Callout */}
            {program.mantraBox && (
              <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-red-50 rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs relative overflow-hidden">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-200/60 text-[#CC444B] flex items-center justify-center shrink-0">
                    <Sparkles className="w-6 h-6 fill-[#CC444B]" />
                  </div>
                  <div className="space-y-2">
                    <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#CC444B]">
                      Dharmic Guiding Shloka · {program.mantraBox.source}
                    </span>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-gray-900 leading-snug">
                      "{program.mantraBox.devnagari}"
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed italic">
                      {program.mantraBox.english}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION B: Overview & Ground Reality Story */}
            <div id="overview" className="space-y-6 pt-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#CC444B]" />
                  <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#CC444B]">
                    The Ground Reality
                  </span>
                </div>
                <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900 tracking-tight">
                  Why This Mission Exists
                </h2>
              </div>

              {program.story ? (
                <div className="space-y-4">
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-3">
                    <h3 className="font-heading font-black text-xl text-gray-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                      The Deep-Rooted Challenge
                    </h3>
                    <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
                      {program.story.challenge}
                    </p>
                  </div>

                  <div className="bg-red-50/50 rounded-3xl p-6 sm:p-8 border border-red-100 shadow-sm space-y-3">
                    <h3 className="font-heading font-black text-xl text-[#CC444B] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#CC444B]" />
                      Our Direct Ground Action
                    </h3>
                    <p className="font-sans text-base sm:text-lg text-gray-800 leading-relaxed">
                      {program.story.action}
                    </p>
                  </div>

                  <div className="bg-emerald-50/50 rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-sm space-y-3">
                    <h3 className="font-heading font-black text-xl text-emerald-800 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      The Transformative Outcome
                    </h3>
                    <p className="font-sans text-base sm:text-lg text-gray-800 leading-relaxed">
                      {program.story.impact}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 font-sans text-base sm:text-lg text-gray-800 leading-relaxed">
                  <p>{program.description}</p>
                </div>
              )}
            </div>

            {/* SECTION C: Core Operational Pillars */}
            {program.pillars && program.pillars.length > 0 && (
              <div id="pillars" className="space-y-6 pt-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#CC444B]" />
                    <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#CC444B]">
                      Operational Strategy
                    </span>
                  </div>
                  <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900 tracking-tight">
                    Core Initiatives & Pillars
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-gray-600">
                    How our teams structure and execute daily ground operations for maximum sustainable impact.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                  {program.pillars.map((pillar, idx) => {
                    const IconComp = iconMap[pillar.icon] || CheckCircle2;
                    return (
                      <div 
                        key={idx}
                        className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all space-y-3 flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#CC444B] flex items-center justify-center">
                            <IconComp className="w-6 h-6 stroke-[2.2]" />
                          </div>
                          <h3 className="font-heading font-extrabold text-xl text-gray-900 leading-snug">
                            {pillar.title}
                          </h3>
                          <p className="font-sans text-sm text-gray-600 leading-relaxed">
                            {pillar.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* SECTION D: Sponsorship Tiers (Clear 80G Options) */}
            {program.sponsorshipTiers && program.sponsorshipTiers.length > 0 && (
              <div id="sponsorship" className="space-y-6 pt-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#CC444B]" />
                    <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#CC444B]">
                      Direct Support Options
                    </span>
                  </div>
                  <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900 tracking-tight">
                    Sponsor This Seva (80G Tax-Exempted)
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-gray-600">
                    Choose an exact contribution tier. Every single rupee is backed by local verification and an instant online 80G certificate.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  {program.sponsorshipTiers.map((tier, idx) => (
                    <div 
                      key={idx}
                      className={`rounded-3xl p-6 sm:p-7 text-left flex flex-col justify-between transition-all relative ${
                        tier.popular
                          ? 'bg-gradient-to-br from-red-950 via-[#CC444B] to-red-900 text-white shadow-xl ring-4 ring-red-100'
                          : 'bg-white text-gray-900 border border-gray-200 shadow-sm hover:shadow-md'
                      }`}
                    >
                      {tier.popular && (
                        <div className="absolute top-4 right-4 bg-amber-400 text-gray-950 text-[10px] font-heading font-extrabold uppercase px-2.5 py-1 rounded-full shadow-xs">
                          Most Impactful
                        </div>
                      )}

                      <div className="space-y-3">
                        <span className={`text-xs font-heading font-bold uppercase tracking-wider block ${tier.popular ? 'text-amber-200' : 'text-[#CC444B]'}`}>
                          {tier.period}
                        </span>
                        
                        <div className="flex items-baseline gap-1">
                          <span className="font-heading font-black text-3xl sm:text-4xl">
                            ₹{tier.amount.toLocaleString('en-IN')}
                          </span>
                        </div>

                        <h3 className="font-heading font-bold text-lg leading-snug">
                          {tier.title}
                        </h3>

                        <p className={`font-sans text-xs sm:text-sm leading-relaxed ${tier.popular ? 'text-white/90' : 'text-gray-600'}`}>
                          {tier.desc}
                        </p>
                      </div>

                      <div className="pt-6">
                        <button
                          onClick={onOpenDonate}
                          className={`w-full py-3 px-5 rounded-xl font-heading font-extrabold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm ${
                            tier.popular
                              ? 'bg-white hover:bg-gray-100 text-[#243C4B]'
                              : 'bg-[#CC444B] hover:bg-red-700 text-white'
                          }`}
                        >
                          <span>Sponsor This Tier</span>
                          <Heart className="w-4 h-4 fill-current" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SECTION E: Mentors (Where Applicable) */}
            {program.mentors && program.mentors.length > 0 && (
              <div id="mentors" className="space-y-6 pt-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#CC444B]" />
                    <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#CC444B]">
                      Leadership & Mentorship
                    </span>
                  </div>
                  <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900 tracking-tight">
                    Our Guiding Mentors & Patrons
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-gray-600">
                    Experienced educationists, scientists, and social leaders who steer our curriculum and ground seva.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {program.mentors.map((m, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center space-y-3"
                    >
                      <div className="w-24 h-24 rounded-full overflow-hidden shadow-md border-3 border-red-100">
                        <img src={m.image} alt={m.name} className="w-full h-full object-cover object-top" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-heading font-black text-lg text-gray-900 leading-snug">{m.name}</h4>
                        <span className="text-xs font-semibold text-[#CC444B] block">{m.role}</span>
                      </div>
                      <p className="font-sans text-xs text-gray-600 leading-relaxed">
                        {m.bio}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SECTION F: Ground Photo Gallery */}
            {program.images && program.images.length > 0 && (
              <div id="gallery" className="space-y-6 pt-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#CC444B]" />
                    <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#CC444B]">
                      Visual Evidence
                    </span>
                  </div>
                  <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900 tracking-tight">
                    Glimpses from the Ground
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-gray-600">
                    Real, unedited photos from our daily field operations, classrooms, and rescue centers.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {program.images.slice(0, 9).map((img, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setLightboxImage(img)}
                      className="group rounded-2xl overflow-hidden shadow-sm aspect-video bg-gray-100 relative cursor-pointer"
                    >
                      <img 
                        src={img} 
                        alt={`${program.title} Field Seva ${idx + 1}`} 
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                        onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-heading font-bold">
                        <span>Click to Enlarge</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SECTION G: Direct Bank Transfer Details */}
            <div id="bank" className="p-8 sm:p-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 text-white rounded-3xl shadow-xl space-y-6 relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-300 flex items-center justify-center">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-2xl text-white">
                    Direct Bank Transfer Details
                  </h3>
                  <p className="text-xs text-slate-300">
                    Instant NEFT / RTGS / IMPS bank transfer directly into registered society account.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1 font-sans">
                <div className="p-4 bg-white/10 rounded-2xl border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Beneficiary Name</span>
                    <strong className="text-white text-sm block mt-1">Jan Swabhiman Welfare Society</strong>
                  </div>
                  <button 
                    onClick={() => copyToClipboard('Jan Swabhiman Welfare Society', 'name')}
                    className="mt-3 text-xs text-amber-300 hover:text-amber-200 flex items-center gap-1 cursor-pointer font-heading font-bold"
                  >
                    {copiedField === 'name' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedField === 'name' ? 'Copied!' : 'Copy Name'}</span>
                  </button>
                </div>

                <div className="p-4 bg-white/10 rounded-2xl border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Account & Bank</span>
                    <strong className="text-white text-sm block mt-1">IDFC FIRST Bank</strong>
                    <span className="text-xs text-slate-300 block">Barakhamba Rd, New Delhi</span>
                  </div>
                  <button 
                    onClick={() => copyToClipboard('IDFC FIRST Bank, Barakhamba Road', 'bank')}
                    className="mt-3 text-xs text-amber-300 hover:text-amber-200 flex items-center gap-1 cursor-pointer font-heading font-bold"
                  >
                    {copiedField === 'bank' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedField === 'bank' ? 'Copied!' : 'Copy Bank'}</span>
                  </button>
                </div>

                <div className="p-4 bg-white/10 rounded-2xl border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">IFSC Code</span>
                    <strong className="text-amber-300 font-mono text-base block mt-1">IDFB0020101</strong>
                  </div>
                  <button 
                    onClick={() => copyToClipboard('IDFB0020101', 'ifsc')}
                    className="mt-3 text-xs text-amber-300 hover:text-amber-200 flex items-center gap-1 cursor-pointer font-heading font-bold"
                  >
                    {copiedField === 'ifsc' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedField === 'ifsc' ? 'Copied IFSC!' : 'Copy IFSC'}</span>
                  </button>
                </div>
              </div>

              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between flex-wrap gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Email transaction receipt & PAN to <strong>mailus@janswabhiman.org</strong> for 80G receipt.</span>
                </div>
                <span className="text-emerald-400 font-bold">100% Tax Deductible under Sec 80G</span>
              </div>
            </div>

          </div>

          {/* Right Column (4 cols): Sticky Quick Donate & Navigation */}
          <div className="lg:col-span-4 sticky top-36 space-y-6">
            
            {/* Quick Donation Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 text-left space-y-6 border border-gray-200 shadow-lg">
              <div className="space-y-2">
                <span className="bg-red-50 text-[#CC444B] text-[11px] font-heading font-extrabold uppercase px-3 py-1 rounded-full tracking-wider inline-block">
                  Direct Field Impact
                </span>
                <h3 className="font-heading font-black text-2xl text-gray-900 leading-snug">
                  Support {program.title}
                </h3>
                <p className="font-sans text-xs text-gray-600 leading-relaxed">
                  Your direct contribution empowers our daily field operations with complete transparency and 80G tax exemption.
                </p>
              </div>

              <button
                onClick={onOpenDonate}
                className="w-full bg-[#CC444B] hover:bg-red-700 active:scale-98 text-white font-heading font-bold text-base py-3.5 px-6 rounded-2xl shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>Donate to this Cause</span>
                <Heart className="w-5 h-5 fill-white" />
              </button>

              <div className="space-y-2.5 pt-4 border-t border-gray-100 text-xs text-gray-600 font-sans">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>80G Tax Exemption Certificate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Instant Razorpay Online Receipts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Ground Verification</span>
                </div>
              </div>
            </div>

            {/* Other 6 Initiatives Switcher */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm text-left space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <h4 className="font-heading font-bold text-sm text-gray-900 uppercase tracking-wider">
                  Other 6 Initiatives
                </h4>
                <span className="text-xs text-gray-400 font-sans">Explore All</span>
              </div>
              <ul className="space-y-2">
                {programsData.filter(p => p.slug !== slug).map((other) => (
                  <li key={other.slug}>
                    <button
                      onClick={() => onNavigateTo ? onNavigateTo(`program-${other.slug}`) : null}
                      className="w-full text-left text-xs sm:text-sm font-heading font-bold text-gray-700 hover:text-[#CC444B] hover:bg-red-50 p-2.5 rounded-xl flex items-center justify-between transition-all cursor-pointer group"
                    >
                      <span className="line-clamp-1">{other.title}</span>
                      <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#CC444B] group-hover:translate-x-1 transition-transform shrink-0" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* Lightbox Modal for Photo Gallery */}
      {lightboxImage && (
        <div 
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer animate-fadeIn"
        >
          <button 
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={lightboxImage} 
            alt="Ground Seva Preview" 
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

    </div>
  );
}
