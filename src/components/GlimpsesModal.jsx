import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GlimpsesModal({ isOpen, onClose }) {
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!isOpen) return null;

  const photos = [
    {
      image: "/assets/image_9_238_650.png",
      title: "Saraswati Slum Education Centre",
      desc: "Daily free classes, notebooks, and value education for underprivileged children."
    },
    {
      image: "/assets/image_10_238_652.png",
      title: "Women Vocational Sewing Centre",
      desc: "Empowering young girls and mothers with livelihood and self-reliance skills."
    },
    {
      image: "/assets/image_11_238_654.png",
      title: "Pak Hindu Refugee Camp Seva",
      desc: "Distributing ration kits, solar lighting, and winter blankets in refugee camps."
    },
    {
      image: "/assets/image_12_238_656.png",
      title: "Gaushala & Injured Gaumata Care",
      desc: "24/7 rescue, emergency surgeries, and daily green fodder for stray cattle."
    }
  ];

  const current = photos[photoIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Photo Display */}
        <div className="relative h-[400px] sm:h-[480px] bg-black flex items-center justify-center">
          <img 
            src={current.image} 
            alt={current.title} 
            className="w-full h-full object-contain"
          />

          {/* Navigation Arrows */}
          <button 
            onClick={() => setPhotoIndex(prev => (prev === 0 ? photos.length - 1 : prev - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center shadow"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          <button 
            onClick={() => setPhotoIndex(prev => (prev + 1) % photos.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center shadow"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>
        </div>

        {/* Caption */}
        <div className="p-6 bg-white text-left flex justify-between items-center">
          <div>
            <h4 className="font-heading font-extrabold text-xl text-black">
              {current.title}
            </h4>
            <p className="font-sans text-sm text-gray-600 mt-1">
              {current.desc}
            </p>
          </div>

          <span className="font-heading font-bold text-sm text-gray-400">
            {photoIndex + 1} / {photos.length}
          </span>
        </div>

      </div>
    </div>
  );
}
