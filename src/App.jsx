import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollytellingSteps from './components/ScrollytellingSteps';
import SocialProof from './components/SocialProof';
import PilotStories from './components/PilotStories';
import PlatformStats from './components/PlatformStats';
import HallOfFame from './components/HallOfFame';
import FAQ from './components/FAQ';
import PreFooter from './components/PreFooter';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll matching OFF+BRAND specifications
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#f1f2f3] relative overflow-x-hidden selection:bg-[#f1f2f3] selection:text-black">
      {/* Global Background Dot Texture */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20 z-0 dot-grid" 
        aria-hidden="true" 
      />

      {/* Main Page Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <ScrollytellingSteps />
          <SocialProof />
          <PilotStories />
          <PlatformStats />
          <HallOfFame />
          <FAQ />
          <PreFooter />
        </main>
        <Footer />
      </div>
    </div>
  );
}
