import React from 'react';
import { ArrowLeft, ArrowUpRight, Heart, Share2, Calendar, Tag, BookOpen } from 'lucide-react';
import storiesData from '../data/stories.json';

export default function StoryDetailPage({ slug, onOpenDonate, onNavigateBack, onSelectStory }) {
  const story = storiesData.find(s => s.slug === slug) || storiesData[0];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${story.title} - Jan Swabhiman Welfare Society`,
        text: story.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const relatedStories = storiesData.filter(s => s.slug !== story.slug && s.category === story.category).slice(0, 3);

  return (
    <div className="w-full bg-white text-gray-900 min-h-screen">
      
      {/* Top Bar Navigation */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 pt-5 pb-3 flex items-center justify-between">
        <button 
          onClick={onNavigateBack}
          className="inline-flex items-center gap-2 text-sm font-heading font-bold text-[#CC444B] hover:text-red-700 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Stories</span>
        </button>

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-700 hover:text-black transition-colors px-3 py-1.5 rounded-full bg-gray-100 cursor-pointer"
        >
          <Share2 className="w-4 h-4" />
          <span>Share</span>
        </button>
      </div>

      {/* Main Article Container */}
      <article className="max-w-[1000px] mx-auto px-4 sm:px-6 py-6 space-y-8 text-left">
        
        {/* Category & Title */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-red-50 text-[#CC444B] px-3.5 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5" />
            <span>{story.category}</span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-5xl text-black tracking-tight leading-tight">
            {story.title}
          </h1>

          <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-500 font-sans border-b border-gray-100 pb-4">
            <span>Jan Swabhiman Welfare Society Field Chronicle</span>
            <span>•</span>
            <span>Verified Ground Report</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full rounded-3xl overflow-hidden shadow-xl aspect-[16/9] bg-gray-100">
          <img 
            src={story.heroImage} 
            alt={story.title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "/assets/image_141_9820.png";
            }}
          />
        </div>

        {/* Story Body Paragraphs */}
        <div className="space-y-6 text-gray-800 font-sans text-base sm:text-lg leading-[32px] pt-4">
          {story.content && story.content.map((para, idx) => (
            <p 
              key={idx}
              className={idx === 0 ? "first-letter:text-5xl first-letter:font-heading first-letter:font-black first-letter:text-[#CC444B] first-letter:float-left first-letter:mr-3 first-letter:leading-none text-gray-900 font-medium" : ""}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Gallery Photos from the field */}
        {story.gallery && story.gallery.length > 0 && (
          <div className="pt-8 border-t border-gray-100 space-y-4">
            <h3 className="font-heading font-black text-2xl text-gray-900">
              Field Documentation Photos
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {story.gallery.map((img, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden shadow-sm aspect-video bg-gray-100">
                  <img 
                    src={img} 
                    alt={`Field Photo ${idx + 1}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Donation CTA Box */}
        <div className="my-10 bg-gradient-to-r from-red-900 to-[#CC444B] text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
              Be Part of Stories Like This
            </h3>
            <p className="font-sans text-white/90 text-sm sm:text-base max-w-xl">
              Your support powers rescues, books for slum children, rehabilitation for refugee families, and Gaushala fodder.
            </p>
          </div>
          <button
            onClick={onOpenDonate}
            className="shrink-0 bg-white hover:bg-gray-100 text-[#243C4B] font-heading font-bold text-base px-8 py-3.5 rounded-full shadow-lg flex items-center gap-2.5 transition-all cursor-pointer"
          >
            <span>Donate Now</span>
            <Heart className="w-5 h-5 text-[#CC444B] fill-[#CC444B]" />
          </button>
        </div>

        {/* Related Stories */}
        {relatedStories.length > 0 && (
          <div className="pt-8 border-t border-gray-100 space-y-6">
            <h3 className="font-heading font-black text-2xl text-gray-900">
              More Stories in {story.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedStories.map((rel) => (
                <div 
                  key={rel.id}
                  onClick={() => onSelectStory(rel)}
                  className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all p-4 cursor-pointer group"
                >
                  <div className="aspect-video rounded-xl overflow-hidden mb-3 bg-gray-200">
                    <img src={rel.heroImage} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-gray-900 group-hover:text-[#CC444B] transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        )}

      </article>

    </div>
  );
}
