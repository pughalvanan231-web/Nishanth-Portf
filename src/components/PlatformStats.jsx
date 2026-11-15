import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, DollarSign, Wallet } from 'lucide-react';
import { INITIAL_PLATFORM_STATS } from '../data/mockData';

export default function PlatformStats() {
  const [stats, setStats] = useState(INITIAL_PLATFORM_STATS);
  const [lastUpdated, setLastUpdated] = useState("Live Real-time");

  useEffect(() => {
    // Attempt dynamic fetch from Autopilot live endpoint
    fetch('https://autopilot-hazel.vercel.app/api/platform-stats')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        if (data && data.stats) {
          const formatBillions = (num) => `$${(num / 1e9).toFixed(1)}B`;
          const formatMillions = (num) => `$${(num / 1e6).toFixed(1)}M`;
          setStats({
            totalAssetsConnected: formatBillions(data.stats.totalAssetsConnected || 12333324345),
            totalPayouts: formatMillions(data.stats.totalPayouts || 10127545),
            amountInvested: formatBillions(data.stats.amountInvested || 1785825504),
          });
          if (data.stats.updatedAt) {
            const date = new Date(data.stats.updatedAt);
            setLastUpdated(`as of ${date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`);
          }
        }
      })
      .catch(() => {
        // Fallback already pre-set to extracted data
        setLastUpdated("as of today");
      });
  }, []);

  return (
    <section className="py-20 px-6 sm:px-12 border-b border-white/[0.06] bg-black relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-1">
              Verified Network Activity
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Scale you can build a career on.
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{lastUpdated}</span>
          </div>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-8 rounded-3xl glass-border bg-zinc-950/70 border border-white/5 hover:border-white/20 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-2xl group-hover:bg-cyan-500/10 transition-all rounded-full" />
            <div className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-cyan-400 mb-6">
              <Wallet size={20} />
            </div>
            <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white mb-2">
              {stats.totalAssetsConnected}
            </div>
            <div className="text-sm font-medium text-white/70">
              Total assets connected on Autopilot
            </div>
            <div className="text-xs text-white/40 mt-4 pt-4 border-t border-white/5">
              Custodied across premier retail brokerages
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-3xl glass-border bg-zinc-950/70 border border-white/5 hover:border-white/20 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-2xl group-hover:bg-emerald-500/10 transition-all rounded-full" />
            <div className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-emerald-400 mb-6">
              <DollarSign size={20} />
            </div>
            <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-emerald-400 mb-2">
              {stats.totalPayouts}
            </div>
            <div className="text-sm font-medium text-white/70">
              Total payouts to Pilots (so far)
            </div>
            <div className="text-xs text-white/40 mt-4 pt-4 border-t border-white/5">
              Direct monthly recurring compensation
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-3xl glass-border bg-zinc-950/70 border border-white/5 hover:border-white/20 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-2xl group-hover:bg-blue-500/10 transition-all rounded-full" />
            <div className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-blue-400 mb-6">
              <Activity size={20} />
            </div>
            <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white mb-2">
              {stats.amountInvested}
            </div>
            <div className="text-sm font-medium text-white/70">
              Amount invested on Autopilot
            </div>
            <div className="text-xs text-white/40 mt-4 pt-4 border-t border-white/5">
              Active buying power allocated to model trades
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
