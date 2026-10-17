import React, { useState, useMemo } from 'react';
import { 
  ChevronRight, 
  ArrowLeft, 
  Share2, 
  Heart, 
  Tag, 
  BookOpen, 
  Users, 
  CheckCircle2, 
  Quote, 
  ZoomIn, 
  X, 
  Mail, 
  Search, 
  Building2, 
  Sparkles, 
  ShieldCheck, 
  AlertTriangle, 
  ExternalLink,
  Copy,
  Check,
  ChevronLeft
} from 'lucide-react';
import storiesData from '../data/stories.json';
import programsData from '../data/programs.json';

export default function StoryDetailPage({ slug, onOpenDonate, onNavigateBack, onSelectStory, onNavigateTo }) {
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Find current story
  const story = useMemo(() => {
    return storiesData.find(s => s.slug === slug) || storiesData[0];
  }, [slug]);

  // Find related mission if available
  const mission = useMemo(() => {
    if (!story.missionSlug) return null;
    return programsData.find(p => p.slug === story.missionSlug || p.id === story.missionSlug);
  }, [story.missionSlug]);

  // All photos for the lightbox (hero + gallery)
  const allPhotos = useMemo(() => {
    const list = [];
    if (story.heroImage) list.push({ src: story.heroImage, alt: story.title });
    if (story.gallery && Array.isArray(story.gallery)) {
      story.gallery.forEach((img, i) => {
        list.push({ src: img, alt: `${story.title} - Photo ${i + 1}` });
      });
    }
    return list;
  }, [story]);

  // Related & recent stories
  const relatedStories = useMemo(() => {
    return storiesData
      .filter(s => s.slug !== story.slug && (s.category === story.category || s.missionSlug === story.missionSlug))
      .slice(0, 3);
  }, [story]);

  const recentStories = useMemo(() => {
    return storiesData
      .filter(s => s.slug !== story.slug)
      .slice(0, 4);
  }, [story]);

  // Filtered stories if searching in sidebar
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return storiesData.filter(s => 
      s.title.toLowerCase().includes(q) || 
      (s.subtitle && s.subtitle.toLowerCase().includes(q)) ||
      (s.category && s.category.toLowerCase().includes(q))
    ).slice(0, 5);
  }, [searchQuery]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${story.title} · Jan Swabhiman Welfare Society`,
        text: story.subtitle || story.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleCopy = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  // Highlights/feature metric badges
  const highlights = story.highlightMetrics || [
    { value: "Free", label: "Education" },
    { value: "Dharmic", label: "Values Daily" },
    { value: "UP & RJ", label: "Shiksha Centres" },
    { value: "Hope", label: "Restored" }
  ];

  return (
    <div className="w-full bg-[#FAFAFA] text-slate-900 min-h-screen">
      
      {/* 1. Header Breadcrumbs & Action Bar */}
      <div className="border-b border-slate-200 bg-white sticky top-[72px] z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
          
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-600 font-medium overflow-x-auto">
            <button 
              onClick={() => onNavigateTo ? onNavigateTo('home') : window.location.href = '/'}
              className="text-slate-700 hover:text-[#CC444B] transition-colors whitespace-nowrap cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            
            {story.missionSlug && (
              <>
                <button
                  onClick={() => onNavigateTo ? onNavigateTo(`program-${story.missionSlug}`) : window.location.href = `/${story.missionSlug}`}
                  className="text-slate-700 hover:text-[#CC444B] transition-colors whitespace-nowrap font-semibold cursor-pointer"
                >
                  {story.missionName || mission?.navLabel || "Mission"}
                </button>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </>
            )}

            <button 
              onClick={onNavigateBack}
              className="text-slate-700 hover:text-[#CC444B] transition-colors whitespace-nowrap cursor-pointer"
            >
              Stories
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />

            <span className="text-slate-900 font-bold truncate max-w-[220px] sm:max-w-xs">
              {story.title}
            </span>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer"
              title="Copy Story Link"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-600" />}
              <span>{copiedLink ? "Link Copied!" : "Copy Link"}</span>
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-slate-600" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Article Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Story Column (8 cols) */}
          <article className="lg:col-span-8 space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm text-left">
            
            {/* Story Title & Meta */}
            <header className="space-y-4 border-b border-slate-100 pb-6">
              {/* Category pill */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-50 text-[#CC444B] border border-rose-100">
                  <Tag className="w-3 h-3" />
                  {story.category || "Field Chronicle"}
                </span>

                {story.missionSlug && (
                  <button
                    onClick={() => onNavigateTo ? onNavigateTo(`program-${story.missionSlug}`) : window.location.href = `/${story.missionSlug}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-violet-50 text-violet-700 border border-violet-100 hover:bg-violet-100 transition cursor-pointer"
                  >
                    <BookOpen className="w-3 h-3 text-violet-600" />
                    <span>View Mission Page</span>
                  </button>
                )}
              </div>

              {/* Title */}
              <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
                {story.title}
              </h1>

              {/* Subtitle */}
              {story.subtitle && (
                <p className="text-lg sm:text-xl font-medium text-slate-600 leading-snug">
                  {story.subtitle}
                </p>
              )}

              {/* Author & Verification Bar */}
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 font-sans pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#CC444B] text-white flex items-center justify-center font-bold text-xs">
                    JS
                  </div>
                  <span className="font-semibold text-slate-800">{story.author || "By Jan Swabhiman Team"}</span>
                </div>
                <span>•</span>
                <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Verified Ground Report
                </span>
              </div>
            </header>

            {/* Hero Image with Zoom cursor */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
              <div 
                className="aspect-[16/10] sm:aspect-[21/9] w-full bg-slate-100 cursor-zoom-in relative overflow-hidden"
                onClick={() => setActiveImageIndex(0)}
              >
                <img 
                  src={story.heroImage} 
                  alt={story.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = "/images/janswabhiman-hero.png";
                  }}
                />
                <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm pointer-events-none">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>

            {/* Alert / Inspiration Banner */}
            {(story.alertBox || story.subtitle) && (
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-sky-100 bg-[#EBF7FC] text-slate-900">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 text-[#0284C7]">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div className="text-sm sm:text-base font-semibold leading-relaxed">
                  {story.alertBox || story.subtitle}
                </div>
              </div>
            )}

            {/* 4 Feature/Impact Highlight Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 sm:p-4 rounded-2xl border border-violet-100 bg-[#F5EEFF] flex flex-col items-center text-center">
                <BookOpen className="w-5 h-5 text-violet-600 mb-1" />
                <span className="font-heading font-black text-lg sm:text-xl text-slate-900">{highlights[0]?.value || "Free"}</span>
                <span className="text-xs font-semibold text-slate-600">{highlights[0]?.label || "Education"}</span>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl border border-rose-100 bg-[#FFF0F5] flex flex-col items-center text-center">
                <Heart className="w-5 h-5 text-[#CC444B] mb-1" />
                <span className="font-heading font-black text-lg sm:text-xl text-slate-900">{highlights[1]?.value || "Dharmic"}</span>
                <span className="text-xs font-semibold text-slate-600">{highlights[1]?.label || "Values Daily"}</span>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl border border-sky-100 bg-[#EBF7FC] flex flex-col items-center text-center">
                <Users className="w-5 h-5 text-sky-600 mb-1" />
                <span className="font-heading font-black text-lg sm:text-xl text-slate-900">{highlights[2]?.value || "UP & RJ"}</span>
                <span className="text-xs font-semibold text-slate-600">{highlights[2]?.label || "Field Centres"}</span>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl border border-emerald-100 bg-[#EDFCF2] flex flex-col items-center text-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-1" />
                <span className="font-heading font-black text-lg sm:text-xl text-slate-900">{highlights[3]?.value || "Hope"}</span>
                <span className="text-xs font-semibold text-slate-600">{highlights[3]?.label || "Restored"}</span>
              </div>
            </div>

            {/* Main Narrative Paragraphs */}
            <div className="space-y-6 text-slate-800 font-sans text-base sm:text-lg leading-[32px] pt-4">
              {story.content && story.content.map((para, idx) => (
                <p 
                  key={idx}
                  className={idx === 0 ? "first-letter:text-5xl first-letter:font-heading first-letter:font-black first-letter:text-[#CC444B] first-letter:float-left first-letter:mr-3.5 first-letter:leading-none text-slate-900 font-medium" : ""}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Pull Quote */}
            {story.quote && (
              <blockquote className="relative my-6 p-6 sm:p-8 rounded-2xl border border-rose-100 bg-[#FFF5F7] overflow-hidden">
                <Quote className="absolute top-4 left-4 w-12 h-12 text-[#CC444B]/15" />
                <p className="relative z-10 font-heading font-bold text-lg sm:text-xl text-slate-900 italic leading-relaxed">
                  {story.quote}
                </p>
              </blockquote>
            )}

            {/* Field Photo Gallery (6 Images) */}
            {story.gallery && story.gallery.length > 0 && (
              <div className="pt-6 border-t border-slate-100 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-900">
                    Field Documentation Photos
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">Click any photo to enlarge</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {story.gallery.map((img, idx) => (
                    <div 
                      key={idx}
                      className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-slate-100 cursor-zoom-in shadow-sm hover:shadow-md transition"
                      onClick={() => setActiveImageIndex(idx + 1)} // idx + 1 because index 0 is hero
                    >
                      <img 
                        src={img} 
                        alt={`${story.title} - Photo ${idx + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.target.src = "/images/janswabhiman-hero.png";
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Share and Tags Footer */}
            <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Share this field chronicle
              </span>
              
              <div className="flex items-center gap-2.5">
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(story.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition font-bold text-sm shadow-sm"
                  aria-label="Share on X"
                >
                  𝕏
                </a>

                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${story.title} - ${typeof window !== 'undefined' ? window.location.href : ''}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20bd5a] transition text-sm shadow-sm"
                  aria-label="Share on WhatsApp"
                >
                  <Share2 className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:?subject=${encodeURIComponent(story.title)}&body=${encodeURIComponent(`Read this story from Jan Swabhiman Welfare Society: ${typeof window !== 'undefined' ? window.location.href : ''}`)}`}
                  className="w-10 h-10 rounded-full bg-[#EA4335] text-white flex items-center justify-center hover:bg-[#d9382b] transition text-sm shadow-sm"
                  aria-label="Share via Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Bottom Navigation: Return to Mission & All Stories */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={onNavigateBack}
                className="inline-flex items-center gap-2 text-sm font-heading font-bold text-[#CC444B] hover:text-red-700 transition cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Stories</span>
              </button>

              {story.missionSlug && (
                <button
                  onClick={() => onNavigateTo ? onNavigateTo(`program-${story.missionSlug}`) : window.location.href = `/${story.missionSlug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#CC444B] text-white font-heading font-bold text-xs uppercase tracking-wide hover:bg-red-700 transition cursor-pointer shadow-sm"
                >
                  <span>Explore {story.missionName || "Mission"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </article>

          {/* Right Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-6 text-left">
            
            {/* Search Card */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-800">
                Search Chronicles
              </h3>
              <div className="relative">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search stories, campaigns..."
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
                      onClick={() => onSelectStory(res)}
                      className="w-full text-left p-2 rounded-lg hover:bg-slate-50 transition text-xs font-semibold text-slate-800 flex items-center justify-between group cursor-pointer"
                    >
                      <span className="truncate group-hover:text-[#CC444B]">{res.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Donate / Make a Difference Box */}
            <div className="bg-gradient-to-br from-[#800E13] to-[#CC444B] text-white p-6 rounded-2xl shadow-md space-y-4 text-left">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-black text-xl text-white">
                  Make a Difference
                </h3>
                <p className="text-xs text-white/90 leading-relaxed font-sans">
                  Support this sacred mission. Every 80G tax-exempted contribution directly brings food, education, and shelter on the ground.
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={onOpenDonate}
                  className="w-full py-3 px-4 rounded-xl bg-white text-[#800E13] font-heading font-black text-sm uppercase tracking-wide hover:bg-orange-50 transition shadow-sm text-center cursor-pointer"
                >
                  Donate Online (80G Tax-Exempt)
                </button>

                <button
                  onClick={() => onNavigateTo ? onNavigateTo('csr') : window.location.href = '/csr-partnerships'}
                  className="w-full py-2.5 px-4 rounded-xl bg-black/20 text-white font-heading font-bold text-xs uppercase tracking-wide hover:bg-black/30 transition text-center cursor-pointer"
                >
                  CSR Partnerships
                </button>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-800 border-b border-slate-100 pb-2">
                Recent Ground Stories
              </h3>
              
              <div className="space-y-4">
                {recentStories.map(item => (
                  <button
                    key={item.slug}
                    onClick={() => onSelectStory(item)}
                    className="w-full flex items-start gap-3 text-left group cursor-pointer"
                  >
                    <div className="w-16 h-14 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                      <img 
                        src={item.heroImage} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                        onError={(e) => {
                          e.target.src = "/images/janswabhiman-hero.png";
                        }}
                      />
                    </div>
                    <div className="min-w-0 space-y-0.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#CC444B] block">
                        {item.category || "Mission"}
                      </span>
                      <h4 className="font-heading font-bold text-xs sm:text-sm text-slate-900 line-clamp-2 leading-snug group-hover:text-[#CC444B] transition">
                        {item.title}
                      </h4>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Our Missions & Categories */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-800 border-b border-slate-100 pb-2">
                Core Initiatives
              </h3>
              
              <div className="flex flex-wrap gap-2 pt-1">
                {programsData.map(prog => (
                  <button
                    key={prog.id}
                    onClick={() => onNavigateTo ? onNavigateTo(`program-${prog.slug}`) : window.location.href = `/${prog.slug}`}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-[#CC444B] hover:text-white text-slate-700 transition cursor-pointer"
                  >
                    {prog.navLabel}
                  </button>
                ))}
              </div>
            </div>

          </aside>

        </div>
      </div>

      {/* 3. Full-Screen Lightbox Modal for Zooming Images */}
      {activeImageIndex !== null && allPhotos[activeImageIndex] && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setActiveImageIndex(null)}
        >
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition cursor-pointer"
            aria-label="Close Preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous image */}
          {allPhotos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex((activeImageIndex - 1 + allPhotos.length) % allPhotos.length);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition cursor-pointer"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next image */}
          {allPhotos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex((activeImageIndex + 1) % allPhotos.length);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition cursor-pointer"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          <div 
            className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={allPhotos[activeImageIndex].src} 
              alt={allPhotos[activeImageIndex].alt} 
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
            />
            <p className="text-xs text-white/80 font-sans text-center">
              {allPhotos[activeImageIndex].alt} ({activeImageIndex + 1} of {allPhotos.length})
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
