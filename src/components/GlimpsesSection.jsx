import React from 'react';
import { ArrowUpRight, Camera } from 'lucide-react';
import galleryData from '../data/galleryPhotos.json';

export default function GlimpsesSection({ onNavigateToGallery }) {
  // Take 6 featured photos from across the causes
  const previewPhotos = galleryData.slice(0, 6);

  return (
    <section id="glimpses" className="w-full bg-[#FAF9F6] py-16 md:py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 text-left max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="h-[1.5px] w-12 bg-[#CC444B]" />
              <span className="font-heading font-medium text-[#CC444B] text-lg">
                Visual Evidence
              </span>
              <div className="h-[1.5px] w-12 bg-[#CC444B]" />
            </div>

            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-gray-900 tracking-tight">
              Glimpses of <span className="text-[#CC444B]">Seva</span>
            </h2>

            <p className="font-sans text-gray-600 text-base leading-relaxed">
              Real moments captured from our daily ground work — classrooms, cow rescues, relief camps, and tribal celebrations across Bharat.
            </p>
          </div>

          <button
            onClick={onNavigateToGallery}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white hover:bg-gray-50 text-[#CC444B] border-2 border-[#CC444B] rounded-full font-heading font-bold text-sm shadow-sm hover:shadow-md transition-all self-start md:self-end cursor-pointer group"
          >
            <Camera className="w-4 h-4 text-[#CC444B]" />
            <span>View All 229 Photos</span>
            <ArrowUpRight className="w-4 h-4 text-[#CC444B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 6-Photo Masonry / Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {previewPhotos.map((photo, idx) => (
            <div
              key={idx}
              onClick={onNavigateToGallery}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer bg-gray-200 border border-gray-100"
            >
              <img
                src={photo.src}
                alt={photo.title || `Seva Moment ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-end text-left">
                <span className="text-[10px] font-heading font-extrabold text-amber-300 uppercase tracking-wider line-clamp-1">
                  {photo.category}
                </span>
                <span className="text-xs font-heading font-bold text-white line-clamp-1">
                  {photo.title}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
