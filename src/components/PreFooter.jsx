import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function PreFooter() {
  return (
    <section className="relative py-28 sm:py-36 px-6 text-center overflow-hidden bg-black border-t border-white/[0.06]">
      {/* Signature Prefooter Cyan/Blue Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-r from-cyan-600/20 via-blue-600/25 to-indigo-600/15 blur-[160px] pointer-events-none rounded-full" 
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-border bg-white/[0.04] mb-8 text-xs font-medium text-white/80">
          <Sparkles size={13} className="text-cyan-400" />
          <span>Start in Under 5 Minutes</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.05]">
          Access the world’s capital with a tap.
        </h2>

        <p className="text-base sm:text-xl text-white/60 mb-10 max-w-xl mx-auto font-normal">
          Join leading fund managers, algorithmic traders, and market forecasters distributing on Autopilot.
        </p>

        <div>
          <a
            href="https://joinautopilot.com/app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#f1f2f3] hover:bg-white text-black font-bold text-sm sm:text-base transition-all duration-300 shadow-[0_0_35px_rgba(255,255,255,0.35)] hover:shadow-[0_0_50px_rgba(255,255,255,0.6)] transform hover:-translate-y-0.5"
          >
            <span>Launch your fund</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
