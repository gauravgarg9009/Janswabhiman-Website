import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowUpRight, Heart, Share2, CheckCircle2, Building, 
  ShieldCheck, Mail, Copy, Check, Sparkles, Laptop, BookOpen, 
  HeartPulse, Activity, Users, Briefcase, Flame, GraduationCap, 
  Home, ShoppingBag, FileCheck, Truck, Utensils, HeartHandshake, 
  LifeBuoy, X, ChevronRight, Award, Compass, Wheat, Shield, 
  Smile, Trophy, Stethoscope, Droplets, Soup, ShieldAlert,
  Search, ExternalLink, ChevronLeft, ZoomIn
} from 'lucide-react';
import programsData from '../data/programs.json';
import storiesData from '../data/stories.json';

const iconMap = {
  BookOpen, Laptop, Sparkles, HeartPulse, Activity, Users,
  Briefcase, Flame, GraduationCap, ShieldCheck, Home, ShoppingBag,
  FileCheck, Truck, Utensils, Heart, HeartHandshake, LifeBuoy,
  Award, Compass, Wheat, Shield, Smile, Trophy, Stethoscope,
  Droplets, Soup, ShieldAlert
};

export default function ProgramPage({ slug, onOpenDonate, onNavigateHome, onNavigateTo }) {
  const program = programsData.find(p => p.slug === slug) || programsData[0];
  const [copiedField, setCopiedField] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${program.title} · Jan Swabhiman Welfare Society`,
        text: program.leadText || program.sanskritTitle,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      setCopiedField('share-link');
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard?.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Other initiatives for sidebar/bottom
  const otherPrograms = programsData.filter(p => p.slug !== program.slug);

  // Search filtered stories for sidebar
  const searchResults = searchQuery.trim() 
    ? storiesData.filter(s => s.title.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 4)
    : [];

  return (
    <div className="w-full bg-[#FAFAFA] text-slate-900 min-h-screen">
      
      {/* 1. Header Breadcrumbs & Action Bar */}
      <div className="border-b border-slate-200 bg-white sticky top-[72px] z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
          
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-600 font-medium overflow-x-auto">
            <button 
              onClick={onNavigateHome}
              className="text-slate-700 hover:text-[#CC444B] transition-colors whitespace-nowrap cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-400 whitespace-nowrap">What We Do</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-900 font-bold truncate max-w-[200px] sm:max-w-xs">
              {program.navLabel || program.title}
            </span>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-slate-600" />
              <span>{copiedField === 'share-link' ? 'Link Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={onOpenDonate}
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#CC444B] hover:bg-red-700 text-white transition shadow-sm cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Donate</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Top Hero Section: Split 2-Column Banner */}
      <section className="bg-white border-b border-slate-200 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Sanskrit Badge, Title, Lead, Stats, and Donation Buttons */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Sanskrit Devnagari Badge */}
              {program.sanskritTitle && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/60 text-[#D95D39] text-xs sm:text-sm font-semibold tracking-wide" lang="sa">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>{program.sanskritTitle}</span>
                </div>
              )}

              {/* Main Heading */}
              <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-[2.65rem] text-slate-900 tracking-tight leading-[1.18]">
                {program.title}
              </h1>

              {/* Lead Text */}
              <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
                {program.leadText}
              </p>

              {/* Numerical Impact Metrics Bar */}
              {program.stats && program.stats.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 border-y border-slate-100">
                  {program.stats.map((st, i) => (
                    <div key={i} className="text-left space-y-0.5">
                      <span className="font-heading font-black text-xl sm:text-2xl text-[#CC444B] block tracking-tight">
                        {st.value}
                      </span>
                      <span className="text-[11px] sm:text-xs font-semibold text-slate-600 block leading-tight">
                        {st.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Direct Razorpay Sponsorship Buttons (High-Visibility) */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Quick 80G Tax-Exempt Sponsorship Options
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {program.sponsorshipTiers && program.sponsorshipTiers.map((tier, idx) => (
                    <a
                      key={idx}
                      href={tier.rzpUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between p-3 rounded-xl bg-[#D95D39] hover:bg-[#c24f2d] text-white font-heading font-bold text-xs uppercase tracking-wide transition shadow-sm hover:shadow hover:-translate-y-0.5 group cursor-pointer"
                    >
                      <span className="truncate pr-2">{tier.title} – {tier.amountLabel}</span>
                      <ArrowUpRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                    </a>
                  ))}
                </div>

                {/* Secondary Actions */}
                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <button
                    onClick={onOpenDonate}
                    className="px-4 py-2 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 font-heading font-bold text-xs uppercase tracking-wide transition cursor-pointer"
                  >
                    Choose Any Custom Amount
                  </button>

                  <button
                    onClick={() => onNavigateTo ? onNavigateTo('csr') : window.location.href = '/csr-partnerships'}
                    className="px-4 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 font-heading font-bold text-xs uppercase tracking-wide transition cursor-pointer"
                  >
                    CSR – Partner With Us In A Big Way
                  </button>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Cover Photo */}
            <div className="lg:col-span-5">
              <div 
                className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl aspect-[4/3] bg-slate-100 cursor-zoom-in group"
                onClick={() => setLightboxImage(program.heroImage)}
              >
                <img 
                  src={program.heroImage} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = "/images/janswabhiman-hero.png";
                  }}
                />
                <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm pointer-events-none">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Enlarge Photo</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Main Body Container with 2-Column Editorial Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Editorial Articles (8 cols) */}
          <main className="lg:col-span-8 space-y-12 text-left">
            
            {/* Sacred Shloka & Inspiration Card */}
            {program.mantraBox && (
              <section className="p-6 sm:p-8 rounded-3xl border border-amber-200/70 bg-gradient-to-br from-[#FFFDF8] to-[#FFF9EE] shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Dharmic Inspiration · {program.mantraBox.source}</span>
                </div>

                <p className="font-heading font-bold text-lg sm:text-2xl text-slate-900 tracking-tight leading-snug" lang="sa">
                  "{program.mantraBox.shloka}"
                </p>

                <p className="font-sans italic text-slate-700 text-sm sm:text-base leading-relaxed border-l-2 border-amber-400 pl-4">
                  {program.mantraBox.translation}
                </p>

                {program.introParas && (
                  <div className="space-y-3 pt-3 text-slate-700 font-sans text-sm sm:text-base leading-relaxed border-t border-amber-100">
                    {program.introParas.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                )}
              </section>
            )}

            {/* Why This Initiative Is Unique */}
            {program.whyUnique && (
              <section className="space-y-5">
                <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
                  {program.whyUnique.title}
                </h2>
                
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
                  {program.whyUnique.text}
                </p>

                {program.secondaryImage && (
                  <div 
                    className="rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[16/9] bg-slate-100 cursor-zoom-in group"
                    onClick={() => setLightboxImage(program.secondaryImage)}
                  >
                    <img 
                      src={program.secondaryImage} 
                      alt={program.whyUnique.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = "/images/janswabhiman-hero.png";
                      }}
                    />
                  </div>
                )}
              </section>
            )}

            {/* Key Pillars / Core Operational Focus Cards */}
            {program.pillars && program.pillars.length > 0 && (
              <section className="space-y-6">
                <div>
                  <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
                    Our Comprehensive Approach: Nurturing Minds, Body & Soul
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 mt-1">
                    Delivering structured, holistic, and transparent ground operations six days a week.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {program.pillars.map((pillar, idx) => {
                    const IconComp = iconMap[pillar.icon] || Sparkles;
                    return (
                      <div 
                        key={idx}
                        className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition space-y-2.5 text-left"
                      >
                        <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 text-[#D95D39] flex items-center justify-center">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h3 className="font-heading font-bold text-base text-slate-900">
                          {pillar.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                          {pillar.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Transformation / Before & After Reality */}
            {program.transformation && (
              <section className="space-y-6 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
                  {program.transformation.title}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {program.transformation.points && program.transformation.points.map((pt, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                      <div className="w-8 h-8 rounded-lg bg-[#CC444B]/10 text-[#CC444B] flex items-center justify-center font-bold text-xs font-heading">
                        0{i + 1}
                      </div>
                      <h4 className="font-heading font-bold text-sm text-slate-900">
                        {pt.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">
                        {pt.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Special Focus (Refugees / Ambulances / Villages) */}
            {program.specialFocus && (
              <section className="p-6 sm:p-8 rounded-3xl bg-[#EBF7FC] border border-sky-200 text-slate-900 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-800">
                  <ShieldCheck className="w-4 h-4 text-sky-600" />
                  <span>Special Ground Focus</span>
                </div>
                <h3 className="font-heading font-black text-xl text-slate-900">
                  {program.specialFocus.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                  {program.specialFocus.desc}
                </p>
              </section>
            )}

            {/* 80G Tax-Exempt Sponsorship Tiers */}
            <section className="space-y-6 pt-4">
              <div className="border-b border-slate-200 pb-3">
                <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
                  Sponsor This Initiative (80G Tax-Exempted)
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  All donations are 80G eligible. Tax exemption receipts are issued immediately.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {program.sponsorshipTiers && program.sponsorshipTiers.map((tier, idx) => (
                  <div 
                    key={idx}
                    className={`p-6 rounded-2xl border transition text-left flex flex-col justify-between space-y-4 ${
                      tier.popular 
                        ? 'border-[#D95D39] bg-orange-50/40 shadow-md ring-2 ring-[#D95D39]/20' 
                        : 'border-slate-200 bg-white shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-black text-2xl sm:text-3xl text-[#D95D39]">
                          {tier.amountLabel}
                        </span>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-full">
                          {tier.usdLabel}
                        </span>
                      </div>
                      
                      <h3 className="font-heading font-bold text-base text-slate-900 leading-snug">
                        {tier.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                        {tier.desc}
                      </p>
                    </div>

                    <a
                      href={tier.rzpUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-[#D95D39] hover:bg-[#c24f2d] text-white font-heading font-bold text-xs uppercase tracking-wide text-center transition flex items-center justify-center gap-1.5 shadow-sm group cursor-pointer"
                    >
                      <span>Sponsor Online</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Direct Bank Transfer Box */}
            {program.bankDetails && (
              <section className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 text-left">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-[#CC444B]" />
                    <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900">
                      Direct Bank Transfer Details
                    </h3>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                    Official 80G Account
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-sans">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-slate-500 block text-[11px]">Account Name</span>
                      <strong className="text-slate-900 font-semibold">{program.bankDetails.accountName}</strong>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-slate-500 block text-[11px]">Bank & Branch</span>
                      <strong className="text-slate-900 font-semibold">{program.bankDetails.bankName}, {program.bankDetails.branch}</strong>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-slate-500 block text-[11px]">Savings Account Number</span>
                      <strong className="text-slate-900 font-mono font-bold text-sm">{program.bankDetails.accountNumber}</strong>
                    </div>
                    <button
                      onClick={() => copyToClipboard(program.bankDetails.accountNumber, 'acc')}
                      className="px-2.5 py-1 text-xs rounded bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      {copiedField === 'acc' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-slate-500" />}
                      <span>{copiedField === 'acc' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-slate-500 block text-[11px]">IFSC Code</span>
                      <strong className="text-slate-900 font-mono font-bold text-sm">{program.bankDetails.ifscCode}</strong>
                    </div>
                    <button
                      onClick={() => copyToClipboard(program.bankDetails.ifscCode, 'ifsc')}
                      className="px-2.5 py-1 text-xs rounded bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      {copiedField === 'ifsc' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-slate-500" />}
                      <span>{copiedField === 'ifsc' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                <p className="text-xs text-slate-600 font-sans pt-1">
                  After initiating a bank transfer, kindly email your transaction screenshot, PAN, and address to{' '}
                  <a href={`mailto:${program.bankDetails.emailForPan}`} className="text-[#CC444B] font-semibold underline underline-offset-2">
                    {program.bankDetails.emailForPan}
                  </a>{' '}
                  for your 80G tax exemption certificate.
                </p>
              </section>
            )}

            {/* Mentors & Patrons Showcase */}
            {program.mentors && program.mentors.length > 0 && (
              <section className="space-y-4 pt-4">
                <div className="border-b border-slate-200 pb-2">
                  <h2 className="font-heading font-black text-2xl text-slate-900 tracking-tight">
                    Our Mentors & Advisors
                  </h2>
                  <p className="text-xs text-slate-600">Guided by leaders from IITs, research institutions, and industry.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {program.mentors.map((mentor, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center text-center space-y-2">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#D95D39] bg-slate-100 shadow-inner">
                        <img 
                          src={mentor.image} 
                          alt={mentor.name} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = "/images/about/dr-vashi-sharma.png";
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-sm text-slate-900 leading-tight">
                          {mentor.name}
                        </h4>
                        <span className="text-[11px] text-slate-600 font-sans leading-tight block mt-0.5">
                          {mentor.role}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Glimpses of Seva (Gallery) */}
            {program.gallery && program.gallery.length > 0 && (
              <section className="space-y-4 pt-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <h2 className="font-heading font-black text-2xl text-slate-900 tracking-tight">
                    Glimpses of Seva
                  </h2>
                  <span className="text-xs text-slate-500">Click photo to zoom</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {program.gallery.map((img, i) => (
                    <div 
                      key={i}
                      className="aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-slate-100 cursor-zoom-in group shadow-sm hover:shadow-md transition"
                      onClick={() => setLightboxImage(img)}
                    >
                      <img 
                        src={img} 
                        alt={`${program.title} Photo ${i + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.target.src = "/images/janswabhiman-hero.png";
                        }}
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Related Stories & Field Chronicles (Links directly to blog/classrooms-of-hope etc.) */}
            {program.relatedStories && program.relatedStories.length > 0 && (
              <section className="space-y-4 pt-6 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-heading font-black text-2xl text-slate-900 tracking-tight">
                      Related Ground Stories
                    </h2>
                    <p className="text-xs text-slate-600">Chronicles of hope, transformation, and impact from our centers.</p>
                  </div>
                  
                  <button
                    onClick={() => onNavigateTo ? onNavigateTo('stories') : window.location.href = '/blog'}
                    className="text-xs font-bold text-[#CC444B] hover:text-red-700 transition flex items-center gap-1 cursor-pointer"
                  >
                    <span>View All Stories</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {program.relatedStories.map((st, i) => (
                    <div 
                      key={i}
                      onClick={() => onNavigateTo ? onNavigateTo('story-detail', st.slug) : window.location.href = `/blog/${st.slug}`}
                      className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between cursor-pointer text-left"
                    >
                      <div className="aspect-[16/10] bg-slate-100 overflow-hidden relative">
                        <img 
                          src={st.image} 
                          alt={st.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                          onError={(e) => {
                            e.target.src = "/images/janswabhiman-hero.png";
                          }}
                        />
                      </div>
                      
                      <div className="p-4 space-y-2 flex-grow flex flex-col justify-between">
                        <div className="space-y-1">
                          <h4 className="font-heading font-bold text-sm text-slate-900 group-hover:text-[#CC444B] transition leading-snug line-clamp-2">
                            {st.title}
                          </h4>
                          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-sans">
                            {st.subtitle}
                          </p>
                        </div>

                        <span className="inline-flex items-center gap-1 text-xs font-bold text-[#CC444B] pt-2">
                          <span>Read Field Story</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </main>

          {/* Right Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-6 text-left">
            
            {/* Quick Search */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-800">
                Search Initiatives & Stories
              </h3>
              <div className="relative">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search keywords..."
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#CC444B]/20 focus:border-[#CC444B]"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              </div>

              {searchResults.length > 0 && (
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <span className="text-xs font-semibold text-slate-500">Matching Stories:</span>
                  {searchResults.map(res => (
                    <button
                      key={res.slug}
                      onClick={() => onNavigateTo ? onNavigateTo('story-detail', res.slug) : window.location.href = `/blog/${res.slug}`}
                      className="w-full text-left p-2 rounded-lg hover:bg-slate-50 transition text-xs font-semibold text-slate-800 flex items-center justify-between group cursor-pointer"
                    >
                      <span className="truncate group-hover:text-[#CC444B]">{res.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Donate Card */}
            <div className="bg-gradient-to-br from-[#800E13] to-[#CC444B] text-white p-6 rounded-2xl shadow-md space-y-4 text-left">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-black text-xl text-white">
                  Support {program.navLabel}
                </h3>
                <p className="text-xs text-white/90 leading-relaxed font-sans">
                  Join hundreds of patrons supporting this initiative. 100% of your tax-deductible contribution goes directly into ground work.
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={onOpenDonate}
                  className="w-full py-3 px-4 rounded-xl bg-white text-[#800E13] font-heading font-black text-sm uppercase tracking-wide hover:bg-orange-50 transition shadow-sm text-center cursor-pointer"
                >
                  Donate Online Now
                </button>

                <button
                  onClick={() => onNavigateTo ? onNavigateTo('csr') : window.location.href = '/csr-partnerships'}
                  className="w-full py-2.5 px-4 rounded-xl bg-black/20 text-white font-heading font-bold text-xs uppercase tracking-wide hover:bg-black/30 transition text-center cursor-pointer"
                >
                  CSR Partnerships
                </button>
              </div>
            </div>

            {/* Other 6 Initiatives Switcher */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-800 border-b border-slate-100 pb-2">
                Other Seva Initiatives
              </h3>
              
              <div className="space-y-2">
                {otherPrograms.map(op => (
                  <button
                    key={op.id}
                    onClick={() => onNavigateTo ? onNavigateTo(`program-${op.slug}`) : window.location.href = `/${op.slug}`}
                    className="w-full text-left p-2.5 rounded-xl border border-slate-100 hover:border-[#CC444B]/40 hover:bg-slate-50 transition flex items-center justify-between group cursor-pointer"
                  >
                    <span className="font-heading font-bold text-xs sm:text-sm text-slate-800 group-hover:text-[#CC444B] transition truncate pr-2">
                      {op.navLabel || op.title}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#CC444B] group-hover:translate-x-0.5 transition shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Contact / Ground Support */}
            <div className="bg-slate-100 p-5 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                Direct Field Support
              </span>
              <p className="text-xs text-slate-700 leading-relaxed font-sans">
                Want to visit our centers in UP, Delhi NCR, or Rajasthan? Reach our volunteer coordinator:
              </p>
              <a 
                href="mailto:mailus@janswabhiman.org" 
                className="text-xs font-bold text-[#CC444B] flex items-center gap-1.5 hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>mailus@janswabhiman.org</span>
              </a>
            </div>

          </aside>

        </div>
      </div>

      {/* 4. Fullscreen Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition cursor-pointer"
            aria-label="Close Preview"
          >
            <X className="w-6 h-6" />
          </button>

          <div 
            className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={lightboxImage} 
              alt="Enlarged Ground Preview" 
              className="max-w-full max-h-[78vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}

    </div>
  );
}
