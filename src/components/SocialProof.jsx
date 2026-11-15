import React from 'react';
import { Clock, Zap } from 'lucide-react';

export default function SocialProof() {
  return (
    <section id="proof" className="relative py-20 px-6 sm:px-12 border-t border-b border-white/[0.06] bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Comparison Header */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-border bg-white/[0.03] text-xs font-mono uppercase tracking-wider text-white/50 mb-10">
          A Paradigm Shift in Capital Formation
        </div>

        {/* Contrast Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch mb-8">
          {/* Traditional Wall Street */}
          <div className="rounded-3xl p-8 sm:p-10 glass-border bg-zinc-950/60 border border-white/5 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center gap-2 text-white/40 text-xs font-mono uppercase mb-4">
                <Clock size={14} />
                <span>Traditional Hedge Fund Incubation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white/70 leading-snug">
                Bill Ackman took <span className="text-white">10 years</span> to raise <span className="text-white font-mono">$56M</span>.
              </h3>
            </div>
            <p className="text-xs text-white/40 pt-6 border-t border-white/5 mt-6">
              Bound by roadshows, prime brokers, minimum checks, and gatekeepers.
            </p>
          </div>

          {/* Autopilot Pilot Velocity */}
          <div className="rounded-3xl p-8 sm:p-10 glass-border bg-gradient-to-br from-cyan-950/30 via-zinc-950/90 to-blue-950/30 border border-cyan-500/30 flex flex-col justify-between text-left relative overflow-hidden shadow-[0_0_50px_rgba(0,229,255,0.07)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 blur-3xl rounded-full" />
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase mb-4">
                <Zap size={14} />
                <span>The Autopilot Era</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                Users allocated <span className="text-cyan-300 font-mono underline decoration-cyan-400/50 decoration-2 underline-offset-4">$1B</span> to our Pilots in <span className="text-cyan-300">less than a year</span>.
              </h3>
            </div>
            <p className="text-xs text-cyan-400/80 pt-6 border-t border-cyan-500/20 mt-6 flex items-center justify-between">
              <span>Instant brokerage synchronization for millions of retail investors.</span>
            </p>
          </div>
        </div>

        {/* Footnotes */}
        <div className="space-y-1 text-center">
          <p className="text-[11px] text-white/35 font-normal">
            *Based on internal pilot data. Results may not be representative of all users or future outcomes.
          </p>
          <p className="text-[10px] text-white/25">
            Visuals are illustrative only.
          </p>
        </div>
      </div>
    </section>
  );
}
