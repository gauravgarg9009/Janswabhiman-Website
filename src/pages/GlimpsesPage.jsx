import React, { useState } from 'react';
import { ArrowUpRight, Share2, Heart, ArrowLeft, ChevronLeft, ChevronRight, Eye, X } from 'lucide-react';
import allGalleryPhotos from '../data/galleryPhotos.json';

export default function GlimpsesPage({ onOpenDonate, onNavigateHome }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const categories = [
    { id: 'ALL', label: 'ALL' },
    { id: 'Saraswati-Free Education for Slum Children', label: 'SARASWATI-FREE EDUCATION' },
    { id: 'Women Empowerment', label: 'WOMEN EMPOWERMENT' },
    { id: 'Gaushala', label: 'GAUSHALA' },
    { id: 'Pak Hindu Refugees Rehabilitation', label: 'PAK HINDU REFUGEES' },
    { id: 'Tribal Welfare', label: 'TRIBAL WELFARE' },
    { id: 'Relief Work', label: 'RELIEF WORK' },
    { id: 'Gauseva & Animal Welfare', label: 'GAUSEVA & ANIMAL WELFARE' }
  ];

  const photos = allGalleryPhotos.map((p, idx) => ({
    id: idx + 1,
    image: p.src,
    title: p.title,
    category: p.category,
    location: 'Bharat Ground Mission'
  }));

  const filteredPhotos = activeCategory === 'ALL' 
    ? photos 
    : photos.filter(p => p.category === activeCategory || p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const photosPerPage = 12;
  const totalPages = Math.ceil(filteredPhotos.length / photosPerPage) || 1;
  const displayedPhotos = filteredPhotos.slice((currentPage - 1) * photosPerPage, currentPage * photosPerPage);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Glimpses of Seva - Janswabhiman Welfare Society',
        text: 'A visual journal of real seva on the ground by JSWS across India.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

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
      <div className="hidden lg:block max-w-[1440px] mx-auto px-16 py-8 space-y-12">
        
        {/* Hero Header */}
        <div className="bg-[#CC444B] rounded-[36px] p-12 text-white text-center space-y-4 shadow-2xl relative overflow-hidden">
          <div className="inline-block bg-white/20 text-white text-xs uppercase font-extrabold px-4 py-1.5 rounded-full">
            Visual Journal of Seva
          </div>
          <h1 className="font-heading font-black text-5xl text-white tracking-tight">
            Glimpses of Seva
          </h1>
          <p className="font-sans text-white/90 text-base max-w-2xl mx-auto leading-relaxed">
            A visual journal of our work across Saraswati-Free Education for Slum Children, Women Empowerment, Pak Hindu Refugees Rehabilitation, Gauseva & Animal Welfare, Gaushala, Tribal Welfare, and Relief Work.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setCurrentPage(1); }}
              className={`px-4 py-2 rounded-full font-heading font-bold text-xs uppercase tracking-wider transition-all cursor-pointer border ${
                activeCategory === cat.id
                  ? 'bg-[#CC444B] text-white border-[#CC444B] shadow-md scale-105'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-[#CC444B] hover:text-[#CC444B]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Desktop Photos Grid */}
        <div className="grid grid-cols-3 gap-8">
          {displayedPhotos.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-figma-card hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 text-left flex flex-col justify-between cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-[#CC444B] flex items-center justify-center shadow-lg">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-2">
                <div className="flex items-center justify-between text-xs font-heading font-extrabold text-[#CC444B] uppercase tracking-wider">
                  <span>{item.category}</span>
                  <span className="text-gray-400 font-normal">{item.location}</span>
                </div>
                <h3 className="font-heading font-extrabold text-lg text-black leading-snug group-hover:text-[#CC444B] transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-6 pt-4">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-5 py-2.5 rounded-full border border-gray-300 text-sm font-heading font-bold text-gray-700 hover:border-[#CC444B] hover:text-[#CC444B] disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-2 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>PREV</span>
          </button>

          <span className="font-heading font-black text-sm text-gray-800">
            PAGE {currentPage} OF {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-5 py-2.5 rounded-full border border-gray-300 text-sm font-heading font-bold text-gray-700 hover:border-[#CC444B] hover:text-[#CC444B] disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>NEXT</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE VIEW: Exact Figma Node 238:446 (Glimpses of Seva Page)             */}
      {/* ========================================================================= */}
      <div className="block lg:hidden px-4 sm:px-6 py-4 space-y-6 max-w-md mx-auto text-center">
        
        {/* Red Hero Banner: Subtract (238:559) */}
        <div className="w-full bg-[#CC444B] rounded-[28px] p-6 text-white text-center space-y-3 shadow-xl relative overflow-hidden">
          <h1 className="font-heading font-black text-2xl text-white tracking-tight">
            Glimpses of Seva
          </h1>
          <p className="font-sans text-[11px] leading-[17px] text-white/95 max-w-[296px] mx-auto">
            A visual journal of our work across Saraswati-Free Education for Slum Children, Women Empowerment, Pak Hindu Refugees Rehabilitation, Gauseva & Animal Welfare, Gaushala, Tribal Welfare, and Relief Work.
          </p>
        </div>

        {/* Mobile Horizontal Scrolling Filter Tabs (Figma 238:615 to 238:634) */}
        <div className="overflow-x-auto no-scrollbar py-1">
          <div className="flex items-center gap-2 w-max px-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setCurrentPage(1); }}
                className={`px-3 py-1.5 rounded-[4px] font-heading font-bold text-[10px] uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border ${
                  activeCategory === cat.id
                    ? 'bg-[#CC444B] text-white border-[#CC444B]'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-black'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Stacked Photos (Figma images 9, 10, 11, 12 / 238:650-656) */}
        <div className="space-y-4">
          {displayedPhotos.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="w-full bg-white rounded-[18px] overflow-hidden shadow-[0px_4px_4px_rgba(0,0,0,0.23)] text-left cursor-pointer border border-gray-100"
            >
              <div className="w-full h-[220px] bg-gray-100 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-3.5 space-y-1">
                <span className="text-[10px] font-heading font-extrabold text-[#CC444B] uppercase block">
                  {item.category}
                </span>
                <h4 className="font-heading font-bold text-sm text-black leading-snug">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Pagination Bar (Figma Frame 4079 / 238:658) */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 disabled:opacity-30 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="font-heading font-bold text-xs text-black">
            PAGE {currentPage} OF {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 disabled:opacity-30 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Share Row (Figma Line 4, Frame 3, SHARE, Line 5) */}
        <div className="pt-2 space-y-3">
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

        {/* Donate Now Button: Frame 17 (238:478) */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={onOpenDonate}
            className="w-[150px] h-[44px] bg-[#CC444B] hover:bg-red-700 text-white rounded-[8px] flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
          >
            <span className="font-heading font-bold text-sm">Donate Now</span>
            <img 
              src="/assets/frame_9_141_10058.svg" 
              alt="Donate Heart" 
              className="w-5 h-5 object-contain" 
            />
          </button>
        </div>

      </div>

      {/* Full Photo Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={selectedPhoto.image} 
              alt={selectedPhoto.title} 
              className="w-full max-h-[70vh] object-contain bg-black" 
            />
            <div className="p-6 text-left space-y-1">
              <span className="text-xs font-heading font-bold text-[#CC444B] uppercase tracking-wider">
                {selectedPhoto.category}
              </span>
              <h3 className="font-heading font-black text-xl text-black">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs text-gray-500 font-sans">
                Location: {selectedPhoto.location}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
