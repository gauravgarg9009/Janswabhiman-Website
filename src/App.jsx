import React, { useState, useEffect } from 'react';
import TopHeader from './components/TopHeader';
import MainHeader from './components/MainHeader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhoWeAreSection from './components/WhoWeAreSection';
import ImpactCounterGrid from './components/ImpactCounterGrid';
import OurProjectsSection from './components/OurProjectsSection';
import CausesSection from './components/CausesSection';
import GetInvolvedSection from './components/GetInvolvedSection';
import Footer from './components/Footer';
import DonateModal from './components/DonateModal';
import VolunteerModal from './components/VolunteerModal';
import StoryModal from './components/StoryModal';
import GlimpsesModal from './components/GlimpsesModal';

// Dedicated Full Pages (Mobile exact node matching + Full Desktop views)
import AboutUsPage from './pages/AboutUsPage';
import WhyUsPage from './pages/WhyUsPage';
import GlimpsesPage from './pages/GlimpsesPage';
import OurImpactPage from './pages/OurImpactPage';

function getInitialPage() {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.toLowerCase();
  if (path.includes('about')) return 'about';
  if (path.includes('why-us') || path.includes('whyus')) return 'why-us';
  if (path.includes('glimpse') || path.includes('seva')) return 'glimpses';
  if (path.includes('impact')) return 'impact';
  return 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const [activeTab, setActiveTab] = useState('home');
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);
  const [isGlimpsesOpen, setIsGlimpsesOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sync with browser back/forward history navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialPage());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Central page & anchor navigation handler
  const navigateTo = (page, anchor) => {
    setCurrentPage(page);
    const targetPath = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    
    if (page === 'home' && anchor) {
      setActiveTab(anchor);
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      setActiveTab(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-[#CC444B] selection:text-white">
      {/* 1. Top Header (Social Links + Location, Phone, Time + Mobile Hamburger) */}
      <TopHeader 
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      {/* 2. Main Header (Logo, JSWS Title, Donate Now & Volunteer buttons) */}
      <MainHeader 
        onOpenDonate={() => setIsDonateOpen(true)} 
        onOpenVolunteer={() => setIsVolunteerOpen(true)}
        onNavigateHome={() => navigateTo('home')}
      />

      {/* 3. Sticky Navbar & Mobile Drawer matching Figma node 158:768 */}
      <Navbar 
        currentPage={currentPage}
        navigateTo={navigateTo}
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenDonate={() => setIsDonateOpen(true)}
        onOpenVolunteer={() => setIsVolunteerOpen(true)}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* 4. Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'about' && (
          <AboutUsPage 
            onOpenDonate={() => setIsDonateOpen(true)}
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {currentPage === 'why-us' && (
          <WhyUsPage 
            onOpenDonate={() => setIsDonateOpen(true)}
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {currentPage === 'glimpses' && (
          <GlimpsesPage 
            onOpenDonate={() => setIsDonateOpen(true)}
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {currentPage === 'impact' && (
          <OurImpactPage 
            onOpenDonate={() => setIsDonateOpen(true)}
            onNavigateHome={() => navigateTo('home')}
            onSelectStory={(story) => setSelectedStory(story)}
          />
        )}

        {currentPage === 'home' && (
          <>
            {/* Hero Section */}
            <HeroSection 
              onOpenDonate={() => setIsDonateOpen(true)} 
              onOpenGlimpses={() => navigateTo('glimpses')} 
            />

            {/* Who We Are / About Us */}
            <WhoWeAreSection 
              onOpenAboutModal={() => navigateTo('about')}
            />

            {/* From Seva to Change / Impact Counter Grid */}
            <ImpactCounterGrid 
              onOpenImpactPage={() => navigateTo('impact')}
            />

            {/* What We Do / Our Projects */}
            <OurProjectsSection 
              onSelectStory={(story) => setSelectedStory(story)}
            />

            {/* Causes that need a helping hand */}
            <CausesSection 
              onSelectStory={(story) => setSelectedStory(story)}
            />

            {/* Be part of the change / Get Involved */}
            <GetInvolvedSection 
              onOpenDonate={() => setIsDonateOpen(true)}
              onOpenVolunteer={() => setIsVolunteerOpen(true)}
            />
          </>
        )}
      </main>

      {/* 5. Footer matching Figma with full routing */}
      <Footer 
        setActiveTab={setActiveTab}
        navigateTo={navigateTo}
        onOpenDonate={() => setIsDonateOpen(true)}
        onOpenVolunteer={() => setIsVolunteerOpen(true)}
      />

      {/* 6. Interactive Dialogues & Modals */}
      <DonateModal 
        isOpen={isDonateOpen} 
        onClose={() => setIsDonateOpen(false)} 
      />

      <VolunteerModal 
        isOpen={isVolunteerOpen} 
        onClose={() => setIsVolunteerOpen(false)} 
      />

      <StoryModal 
        story={selectedStory} 
        onClose={() => setSelectedStory(null)} 
        onOpenDonate={() => setIsDonateOpen(true)}
      />

      <GlimpsesModal 
        isOpen={isGlimpsesOpen} 
        onClose={() => setIsGlimpsesOpen(false)} 
      />
    </div>
  );
}
