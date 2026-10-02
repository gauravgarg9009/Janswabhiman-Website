import React from 'react';
import { X, Calendar, MapPin, Heart, Share2 } from 'lucide-react';

export default function StoryModal({ story, onClose, onOpenDonate }) {
  if (!story) return null;

  const imgSrc = story.heroImage || story.image || "/assets/image_141_9820.png";
  const title = story.title || "Seva Chronicle";
  const category = story.category || "Seva Story";
  const paragraphs = Array.isArray(story.content) ? story.content : [story.desc || story.details || ""];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: story.excerpt || paragraphs[0] || "",
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden my-6 border border-gray-100 max-h-[90vh] flex flex-col" 
        onClick={e => e.stopPropagation()}
      >
        
        {/* Story Header Image */}
        <div className="relative h-64 sm:h-80 bg-gray-900 shrink-0">
          <img 
            src={imgSrc} 
            alt={title} 
            className="w-full h-full object-cover opacity-90"
            onError={(e) => { e.target.src = "/assets/image_141_9820.png"; }}
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors z-10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-6 text-white text-left">
            <span className="bg-[#CC444B] text-white text-[11px] font-heading font-black uppercase tracking-wider px-3 py-1 rounded-full w-fit mb-2">
              {category}
            </span>
            <h3 className="font-heading font-black text-xl sm:text-3xl leading-tight">
              {title}
            </h3>
          </div>
        </div>

        {/* Content Body (Scrollable) */}
        <div className="p-6 sm:p-8 space-y-6 text-left overflow-y-auto flex-grow">
          
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-gray-500 pb-3 border-b border-gray-100 font-sans">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-[#CC444B]">
                <Calendar className="w-4 h-4" />
                <span>Verified Field Chronicle</span>
              </span>
              <span className="flex items-center gap-1.5 text-gray-600">
                <MapPin className="w-4 h-4 text-[#CC444B]" />
                <span>Bharat Ground Mission</span>
              </span>
            </div>

            <button 
              onClick={handleShare}
              className="flex items-center gap-1.5 text-gray-600 hover:text-[#CC444B] transition-colors cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>

          <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
            {paragraphs.map((para, idx) => (
              <p key={idx} className={idx === 0 ? "font-semibold text-gray-900" : ""}>
                {para}
              </p>
            ))}
          </div>

          {/* Gallery in Modal */}
          {story.gallery && story.gallery.length > 0 && (
            <div className="pt-4 space-y-2">
              <h4 className="font-heading font-bold text-sm text-gray-900">
                Field Photos:
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {story.gallery.slice(0, 3).map((gImg, idx) => (
                  <div key={idx} className="aspect-video rounded-xl overflow-hidden bg-gray-100">
                    <img src={gImg} alt="Gallery" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button 
              onClick={() => { onClose(); onOpenDonate(); }}
              className="w-full sm:w-auto bg-[#CC444B] hover:bg-red-700 text-white font-heading font-bold text-sm px-7 py-3 rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Support This Cause</span>
            </button>

            <button 
              onClick={onClose}
              className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-800 font-heading font-bold text-xs px-5 py-3 rounded-xl cursor-pointer"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
