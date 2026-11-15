import React, { useState } from 'react';
import { Check, ShieldCheck, TrendingUp, Users, DollarSign, ArrowRight, BarChart3, Sparkles } from 'lucide-react';
import { STEPS_DATA } from '../data/mockData';

export default function ScrollytellingSteps() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="steps" className="relative py-24 px-6 md:px-12 bg-black/60 border-t border-white/[0.06]">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3">
            Autonomous Fund Engine
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Become a Pilot in three steps.
          </h2>
          <p className="text-sm sm:text-base text-white/60">
            From algorithmic models to thesis-driven portfolios, Autopilot handles custody, compliance, execution, and billing.
          </p>
        </div>

        {/* Stepper Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full glass-border bg-black/50 gap-1 sm:gap-2">
            {STEPS_DATA.map((step, index) => (
              <button
                key={step.step}
                onClick={() => setActiveStep(index)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-white text-black font-semibold shadow-lg'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="font-mono text-[10px] opacity-70">
                  {step.step}
                </span>
                <span>{step.tag}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Step Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
              <span>Step {STEPS_DATA[activeStep].step}</span>
              {STEPS_DATA[activeStep].eyebrow && (
                <>
                  <span className="opacity-40">•</span>
                  <span>{STEPS_DATA[activeStep].eyebrow}</span>
                </>
              )}
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              {STEPS_DATA[activeStep].title}
            </h3>

            <p className="text-base text-white/70 leading-relaxed">
              {STEPS_DATA[activeStep].description}
            </p>

            {STEPS_DATA[activeStep].highlight && (
              <p className="text-lg font-medium text-cyan-300 pt-2">
                {STEPS_DATA[activeStep].highlight}
              </p>
            )}

            <div className="pt-4">
              <a
                href="https://joinautopilot.com/app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-gray-100 text-black font-semibold text-sm transition-all shadow-md group"
              >
                <span>{STEPS_DATA[activeStep].cta || "Continue to Next Step"}</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Interactive Mock Display */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-border bg-zinc-950/80 p-6 sm:p-8 shadow-2xl border border-white/10 relative overflow-hidden">
              {/* Subtle top glare */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

              {activeStep === 0 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-xs font-mono uppercase text-white/80">Active Model Weights</span>
                    </div>
                    <span className="text-xs text-white/50">4 Holdings Allocated</span>
                  </div>

                  <div className="space-y-2.5">
                    {STEPS_DATA[0].items.map((stock, i) => (
                      <div
                        key={stock.name}
                        className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-colors border border-white/[0.04]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-mono font-bold text-xs text-white">
                            {stock.name.split(' ')[0][0]}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white">{stock.name}</div>
                            <div className="text-xs text-white/40">{stock.type}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-mono text-xs font-bold">
                            {stock.weight}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-xs text-white/40 flex items-center gap-2">
                    <ShieldCheck size={14} className="text-emerald-400" />
                    <span>Real-time webhook synchronization enabled</span>
                  </div>
                </div>
              )}

              {activeStep === 1 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs font-mono uppercase text-white/80">Live Subscriber Funnel</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-medium">Public Status: Active</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                      <div className="text-xs text-white/50 mb-1 flex items-center gap-1.5">
                        <Users size={14} className="text-cyan-400" />
                        <span>Copiers</span>
                      </div>
                      <div className="text-2xl font-bold text-white font-mono">{STEPS_DATA[1].stats.subscribers}</div>
                      <div className="text-[11px] text-emerald-400 mt-1">{STEPS_DATA[1].stats.followersGrowth}</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                      <div className="text-xs text-white/50 mb-1 flex items-center gap-1.5">
                        <DollarSign size={14} className="text-cyan-400" />
                        <span>Avg Brokerage Allocation</span>
                      </div>
                      <div className="text-2xl font-bold text-white font-mono">{STEPS_DATA[1].stats.averageAllocation}</div>
                      <div className="text-[11px] text-white/40 mt-1">Direct via Robinhood & Webull</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/40 to-cyan-950/30 border border-cyan-500/20 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                      <BarChart3 size={20} />
                    </div>
                    <div className="text-xs text-white/80 leading-relaxed">
                      Instant execution order routing mirrors your trades with sub-second latencies across thousands of retail brokerages.
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs font-mono uppercase text-white/80">Creator Economics Simulator</span>
                    <span className="text-xs text-emerald-400 font-mono">Monthly Recurring Revenue</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-white/10 text-center">
                    <div className="text-xs text-white/50 uppercase tracking-widest mb-1">Estimated Monthly Payout</div>
                    <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight my-2">
                      $24,500<span className="text-lg text-white/50">/mo</span>
                    </div>
                    <div className="text-xs text-emerald-400">Based on 1,000 active copiers ($29.99/mo subscription)</div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center text-xs">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <div className="text-white/40">Payout Speed</div>
                      <div className="text-white font-semibold mt-1">Instant ACH / Wire</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <div className="text-white/40">Custody Headaches</div>
                      <div className="text-emerald-400 font-semibold mt-1">Zero (0%)</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <div className="text-white/40">SEC Reporting</div>
                      <div className="text-white font-semibold mt-1">Automated</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
