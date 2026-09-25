import React from 'react';
import { X, Calendar, MapPin, Heart, Share2 } from 'lucide-react';

export default function StoryModal({ story, onClose, onOpenDonate }) {
  if (!story) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 border border-gray-100" onClick={e => e.stopPropagation()}>
        
        {/* Story Header Image */}
        <div className="relative h-72 sm:h-96 bg-gray-900">
          <img 
            src={story.image} 
            alt={story.title} 
            className="w-full h-full object-cover opacity-90"
          />
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
            <span className="bg-brand-red text-white text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-md w-fit mb-2">
              {story.category}
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl leading-tight">
              {story.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 text-left">
          
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-gray-500 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-brand-red">
                <Calendar className="w-4 h-4" />
                {story.date || 'Active Process'}
              </span>
              <span className="flex items-center gap-1.5 text-gray-700">
                <MapPin className="w-4 h-4 text-brand-red" />
                Delhi • UP • Assam • Rajasthan
              </span>
            </div>

            <button 
              onClick={() => alert("Share link copied to clipboard!")}
              className="flex items-center gap-1.5 text-gray-600 hover:text-brand-red transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Story</span>
            </button>
          </div>

          <div className="space-y-4 text-gray-700 text-base leading-relaxed">
            <p className="font-medium text-lg text-gray-900">
              {story.desc}
            </p>
            <p>
              {story.details || "Every day, our dedicated karyakartas work on the frontlines to ensure continuous support. Unlike short-term events, this initiative operates 6 days a week with structured reporting and transparent financial records."}
            </p>
            <p>
              Your support directly covers educational supplies, medical kits, daily nutritious meals, and operational expenses to keep this process active.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button 
              onClick={() => { onClose(); onOpenDonate(); }}
              className="w-full sm:w-auto bg-brand-red hover:bg-red-700 text-white font-black text-base px-8 py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5 fill-white" />
              <span>Support This Cause Now</span>
            </button>

            <button 
              onClick={onClose}
              className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-sm px-6 py-3.5 rounded-xl"
            >
              Back to Home
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
