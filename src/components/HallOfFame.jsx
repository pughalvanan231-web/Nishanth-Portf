import React, { useState } from 'react';
import { Compass, ArrowUpRight, Trophy, Sparkles } from 'lucide-react';
import { HALL_OF_FAME } from '../data/mockData';

export default function HallOfFame() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="hall-of-fame" className="py-24 px-6 md:px-12 bg-zinc-950 relative overflow-hidden border-b border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 mb-3">
            <Trophy size={13} />
            <span>Investing Legends</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Investor Hall of Fame.
          </h2>
          <p className="text-sm sm:text-base text-white/60 leading-relaxed">
            We want to honor legendary investors and take the world of investing to new heights.
          </p>
        </div>

        {/* 5 Legendary Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {HALL_OF_FAME.map((legend, index) => (
            <div
              key={legend.name}
              onMouseEnter={() => setHoveredIdx(index)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`p-6 rounded-3xl glass-border transition-all duration-300 flex flex-col justify-between relative group cursor-pointer ${
                hoveredIdx === index
                  ? 'bg-gradient-to-b from-amber-950/40 via-zinc-900 to-black border-amber-400/40 transform -translate-y-2 shadow-[0_15px_30px_rgba(245,158,11,0.1)]'
                  : 'bg-zinc-900/60 border-white/5 hover:border-white/20'
              }`}
            >
              {/* Top Avatar squircle */}
              <div>
                <div className="relative w-20 h-20 mx-auto mb-5 rounded-2xl overflow-hidden border border-white/10 group-hover:border-amber-400/50 transition-colors shadow-lg">
                  <img
                    src={legend.squircle}
                    alt={legend.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                <div className="text-center">
                  <h4 className="text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                    {legend.name}
                  </h4>
                  <div className="text-xs text-white/50 mt-0.5">{legend.title}</div>
                  <div className="text-[11px] font-mono text-white/40">{legend.firm}</div>
                </div>
              </div>

              {/* Quote & Performance */}
              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 font-mono text-xs font-bold mb-2">
                  {legend.cagr}
                </span>
                <p className="text-[11px] text-white/50 italic line-clamp-3">
                  "{legend.quote}"
                </p>
                <div className="text-[10px] text-white/30 font-mono mt-2">{legend.period}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Hall of Fame CTA */}
        <div className="text-center">
          <a
            href="https://launch.joinautopilot.com/hall-of-fame"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-border bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-xs sm:text-sm transition-all"
          >
            <span>Explore investor Hall of Fame</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
