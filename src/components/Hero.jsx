import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-10 px-6 sm:px-12 overflow-hidden bg-black selection:bg-white selection:text-black">
      {/* Center 3D Pilot Character & Holographic Trading Cards Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none">
        {/* Background character visual */}
        <div className="relative w-full h-full max-w-[1920px] mx-auto flex items-center justify-center">
          <img
            src="/nishanth_hero_texture.png"
            alt="Nishanth with 3D Holographic Chart Cards"
            className="w-full h-full object-cover sm:object-contain object-center opacity-90 sm:opacity-95 transform scale-105 sm:scale-100 transition-transform duration-1000 ease-out"
          />

          {/* Vignette Gradients for seamless black edge blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>
      </div>

      {/* Hero Left Content Column */}
      <div className="relative z-10 max-w-xl pt-6 sm:pt-12 text-left">
        {/* Top Ticker Chips */}
        <div className="flex items-center gap-4 text-xs font-mono tracking-wider text-white/50 mb-6 uppercase">
          <span className="hover:text-white transition-colors cursor-pointer">TSLA</span>
          <span className="hover:text-white transition-colors cursor-pointer">META</span>
          <span className="hover:text-white transition-colors cursor-pointer">MSFT</span>
          <span className="hover:text-white transition-colors cursor-pointer text-white font-semibold">NVDA</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-white tracking-tight leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
          Instant access to<br />the world’s capital.
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-white/75 font-normal mt-5 max-w-md leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          Become a Pilot and launch your first fund in minutes.
        </p>
      </div>

      {/* Hero Bottom Row: Large 'Autopilot' Watermark + 'Launch ->' Pill + Vertical Slide Indicator */}
      <div className="relative z-10 flex items-end justify-between w-full pt-16">
        {/* Left: Giant 'Autopilot' Wordmark + 'Launch ->' Button */}
        <div className="flex flex-wrap items-end gap-5 sm:gap-8">
          <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white select-none leading-none drop-shadow-2xl">
            Autopilot
          </div>

          <a
            href="https://pilot.joinautopilot.com/onboarding/welcome"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-1.5 sm:mb-3 inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-pill bg-black/60 hover:bg-black/90 text-white font-medium text-sm transition-all duration-300 border border-white/20 shadow-[0_0_25px_rgba(0,0,0,0.8)] hover:scale-105 group"
          >
            <span className="font-medium text-sm tracking-wide">Launch</span>
            <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-white/25 flex items-center justify-center transition-colors">
              <ArrowRight size={13} className="text-white transform group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>
        </div>

        {/* Right: Vertical Page/Slide Indicator Dips */}
        <div className="hidden sm:flex flex-col items-center gap-2 pb-2" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`w-1 rounded-full transition-all duration-300 ${
                activeSlide === idx
                  ? 'h-6 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]'
                  : 'h-3 bg-white/25 hover:bg-white/50'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
