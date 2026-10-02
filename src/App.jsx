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

// Modals
import DonateModal from './components/DonateModal';
import VolunteerModal from './components/VolunteerModal';
import StoryModal from './components/StoryModal';
import GlimpsesModal from './components/GlimpsesModal';

// Dedicated Pages
import AboutUsPage from './pages/AboutUsPage';
import WhyUsPage from './pages/WhyUsPage';
import GlimpsesPage from './pages/GlimpsesPage';
import OurImpactPage from './pages/OurImpactPage';
import ProgramPage from './pages/ProgramPage';
import StoriesPage from './pages/StoriesPage';
import StoryDetailPage from './pages/StoryDetailPage';
import CsrPage from './pages/CsrPage';
import DonatePage from './pages/DonatePage';
import VolunteerPage from './pages/VolunteerPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';

function parseUrl() {
  if (typeof window === 'undefined') return { page: 'home' };
  const path = window.location.pathname.toLowerCase().replace(/\/$/, '');
  
  if (!path || path === '/' || path === '/home') return { page: 'home' };
  if (path.includes('about')) return { page: 'about' };
  if (path.includes('why-us') || path.includes('whyus')) return { page: 'why-us' };
  if (path.includes('glimpse') || path.includes('gallery')) return { page: 'glimpses' };
  if (path.includes('impact') || path.includes('our-impact')) return { page: 'impact' };
  if (path === '/blog' || path === '/stories') return { page: 'stories' };
  if (path.startsWith('/blog/')) {
    const slug = path.replace('/blog/', '');
    return { page: 'story-detail', slug };
  }
  if (path.includes('csr')) return { page: 'csr' };
  if (path === '/donate') return { page: 'donate' };
  if (path === '/volunteer') return { page: 'volunteer' };
  if (path.includes('contact')) return { page: 'contact' };
  
  // 7 Programmes
  const programSlugs = [
    'saraswati',
    'women-empowerment',
    'pak-hindu-refugees-rehabilitation',
    'gauseva-gaushala-animal-welfare',
    'gaushala',
    'tribal-welfare',
    'relief-work'
  ];
  for (const p of programSlugs) {
    if (path.includes(p)) return { page: 'program', slug: p };
  }

  // Legal Policies
  for (const pol of ['privacy-policy', 'terms-conditions', 'refund-policy', 'disclaimer']) {
    if (path.includes(pol)) return { page: 'policy', policyKey: pol };
  }

  return { page: 'home' };
}

export default function App() {
  const [route, setRoute] = useState(parseUrl);
  const [activeTab, setActiveTab] = useState('home');
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);
  const [isGlimpsesOpen, setIsGlimpsesOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setRoute(parseUrl());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Central Router
  const navigateTo = (target, param) => {
    let newRoute = { page: target };
    let path = '/';

    if (target === 'home') {
      newRoute = { page: 'home' };
      path = '/';
    } else if (target === 'about') {
      newRoute = { page: 'about' };
      path = '/about-us';
    } else if (target === 'why-us') {
      newRoute = { page: 'why-us' };
      path = '/why-us';
    } else if (target === 'glimpses' || target === 'gallery') {
      newRoute = { page: 'glimpses' };
      path = '/gallery';
    } else if (target === 'impact' || target === 'our-impact') {
      newRoute = { page: 'impact' };
      path = '/our-impact';
    } else if (target === 'stories' || target === 'blog') {
      newRoute = { page: 'stories' };
      path = '/blog';
    } else if (target === 'story-detail') {
      newRoute = { page: 'story-detail', slug: param };
      path = `/blog/${param}`;
    } else if (target === 'csr') {
      newRoute = { page: 'csr' };
      path = '/csr-partnerships';
    } else if (target === 'donate') {
      newRoute = { page: 'donate' };
      path = '/donate';
    } else if (target === 'volunteer') {
      newRoute = { page: 'volunteer' };
      path = '/volunteer';
    } else if (target === 'contact') {
      newRoute = { page: 'contact' };
      path = '/contact-us';
    } else if (target.startsWith('program-')) {
      const slug = target.replace('program-', '');
      newRoute = { page: 'program', slug };
      path = `/${slug}`;
    } else if (target.startsWith('policy-')) {
      const policyKey = target.replace('policy-', '');
      newRoute = { page: 'policy', policyKey };
      path = `/${policyKey}`;
    }

    setRoute(newRoute);

    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }

    if (target === 'home' && param) {
      setActiveTab(param);
      setTimeout(() => {
        const el = document.getElementById(param);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setActiveTab(target);
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
        onOpenVolunteer={() => navigateTo('volunteer')}
        onNavigateHome={() => navigateTo('home')}
      />

      {/* 3. Sticky Navbar & Mobile Drawer matching Figma node 158:768 */}
      <Navbar 
        currentPage={route.page}
        navigateTo={navigateTo}
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenDonate={() => setIsDonateOpen(true)}
        onOpenVolunteer={() => navigateTo('volunteer')}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* 4. Main Page Rendering Area */}
      <main className="flex-grow">
        {route.page === 'about' && (
          <AboutUsPage 
            onOpenDonate={() => setIsDonateOpen(true)}
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {route.page === 'why-us' && (
          <WhyUsPage 
            onOpenDonate={() => setIsDonateOpen(true)}
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {route.page === 'glimpses' && (
          <GlimpsesPage 
            onOpenDonate={() => setIsDonateOpen(true)}
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {route.page === 'impact' && (
          <OurImpactPage 
            onOpenDonate={() => setIsDonateOpen(true)}
            onNavigateHome={() => navigateTo('home')}
            onSelectStory={(story) => setSelectedStory(story)}
          />
        )}

        {route.page === 'program' && (
          <ProgramPage 
            slug={route.slug}
            onOpenDonate={() => setIsDonateOpen(true)}
            onNavigateHome={() => navigateTo('home')}
            onNavigateTo={navigateTo}
          />
        )}

        {route.page === 'stories' && (
          <StoriesPage 
            onSelectStory={(story) => navigateTo('story-detail', story.slug)}
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {route.page === 'story-detail' && (
          <StoryDetailPage 
            slug={route.slug}
            onOpenDonate={() => setIsDonateOpen(true)}
            onNavigateBack={() => navigateTo('stories')}
            onSelectStory={(story) => navigateTo('story-detail', story.slug)}
          />
        )}

        {route.page === 'csr' && (
          <CsrPage 
            onNavigateHome={() => navigateTo('home')}
            onOpenDonate={() => setIsDonateOpen(true)}
          />
        )}

        {route.page === 'donate' && (
          <DonatePage 
            onNavigateHome={() => navigateTo('home')}
            onNavigateTo={navigateTo}
          />
        )}

        {route.page === 'volunteer' && (
          <VolunteerPage 
            onNavigateHome={() => navigateTo('home')}
            onOpenDonate={() => setIsDonateOpen(true)}
          />
        )}

        {route.page === 'contact' && (
          <ContactPage 
            onNavigateHome={() => navigateTo('home')}
            onOpenDonate={() => setIsDonateOpen(true)}
          />
        )}

        {route.page === 'policy' && (
          <LegalPage 
            policyKey={route.policyKey}
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {route.page === 'home' && (
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

            {/* What We Do / All 7 Programs */}
            <OurProjectsSection 
              onSelectStory={(story) => setSelectedStory(story)}
              onNavigateToProgram={(slug) => navigateTo(`program-${slug}`)}
            />

            {/* Causes that need a helping hand / Stories */}
            <CausesSection 
              onSelectStory={(story) => {
                if (story && story.slug) navigateTo('story-detail', story.slug);
                else setSelectedStory(story);
              }}
              onNavigateToBlog={() => navigateTo('stories')}
            />

            {/* Be part of the change / Get Involved */}
            <GetInvolvedSection 
              onOpenDonate={() => setIsDonateOpen(true)}
              onOpenVolunteer={() => navigateTo('volunteer')}
            />
          </>
        )}
      </main>

      {/* 5. Footer matching Figma with complete routing */}
      <Footer 
        setActiveTab={setActiveTab}
        navigateTo={navigateTo}
        onOpenDonate={() => setIsDonateOpen(true)}
        onOpenVolunteer={() => navigateTo('volunteer')}
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
