import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, ArrowUpRight, Award, Shield } from 'lucide-react';
import { PILOT_STORIES } from '../data/mockData';

export default function PilotStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const currentPilot = PILOT_STORIES[currentIndex];

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % PILOT_STORIES.length);
  };

  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + PILOT_STORIES.length) % PILOT_STORIES.length);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="stories" className="py-24 px-6 md:px-12 relative overflow-hidden bg-black">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/70 mb-3">
              <Award size={13} className="text-cyan-400" />
              <span>Pilot Stories</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              The next Warren Buffett <br className="hidden sm:inline" />
              will be found on Autopilot.
            </h2>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous Pilot Story"
              className="w-11 h-11 rounded-full glass-border bg-white/[0.04] hover:bg-white/10 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-xs font-mono text-white/40">
              {currentIndex + 1} / {PILOT_STORIES.length}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next Pilot Story"
              className="w-11 h-11 rounded-full glass-border bg-white/[0.04] hover:bg-white/10 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Featured Video Card */}
        <div className="rounded-3xl glass-border bg-zinc-950/80 border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Video Player Column */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-white/10 group">
                <video
                  ref={videoRef}
                  poster={currentPilot.thumbnail}
                  src={`https://stream.mux.com/${currentPilot.playbackId}/high.mp4`}
                  loop
                  playsInline
                  muted={isMuted}
                  className="w-full h-full object-cover"
                  onEnded={() => setIsPlaying(false)}
                />

                {/* Video Overlay Controls */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 flex flex-col justify-between p-4 sm:p-6 transition-opacity">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-medium text-white/90 border border-white/10">
                      {currentPilot.badge}
                    </span>
                    <button
                      onClick={toggleMute}
                      className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white border border-white/10 transition-colors"
                      aria-label="Toggle Mute"
                    >
                      {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                    </button>
                  </div>

                  {/* Center Play Button if paused */}
                  <div className="flex items-center justify-center">
                    <button
                      onClick={togglePlay}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 hover:bg-white text-black flex items-center justify-center shadow-2xl hover:scale-105 transition-all"
                      aria-label={isPlaying ? "Pause Video" : "Play Video"}
                    >
                      {isPlaying ? <Pause size={24} /> : <Play size={24} className="translate-x-0.5" />}
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-xs text-white/70">
                    <span>Mux Verified Stream</span>
                    <span className="font-mono">4K / 60 FPS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pilot Stats & Info Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                {/* Pilot Profile Head */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={currentPilot.avatar}
                    alt={currentPilot.name}
                    className="w-16 h-16 rounded-2xl object-cover border border-white/20 shadow-md"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80";
                    }}
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      <span>{currentPilot.name}</span>
                      <Shield size={16} className="text-cyan-400" />
                    </h3>
                    <p className="text-xs text-white/50">{currentPilot.bio}</p>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 my-6">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                    <div className="text-[11px] uppercase tracking-wider text-white/40">Assets Mirrored</div>
                    <div className="text-xl font-bold font-mono text-cyan-300 mt-0.5">{currentPilot.aum}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                    <div className="text-[11px] uppercase tracking-wider text-white/40">Subscribers</div>
                    <div className="text-xl font-bold font-mono text-white mt-0.5">{currentPilot.subscribers.toLocaleString()}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                    <div className="text-[11px] uppercase tracking-wider text-white/40">Model Portfolios</div>
                    <div className="text-xl font-bold font-mono text-white mt-0.5">{currentPilot.portfolios}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                    <div className="text-[11px] uppercase tracking-wider text-white/40">Piloting Since</div>
                    <div className="text-xl font-bold font-mono text-white/80 mt-0.5">{currentPilot.since}</div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-2 border-t border-white/10">
                <a
                  href="https://joinautopilot.com/app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-all shadow-lg"
                >
                  <span>Become a Pilot</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="flex gap-4 mt-6 overflow-x-auto pb-2 scrollbar-none">
          {PILOT_STORIES.map((pilot, idx) => (
            <button
              key={pilot.id}
              onClick={() => {
                setIsPlaying(false);
                setCurrentIndex(idx);
              }}
              className={`flex items-center gap-3 p-2 pr-4 rounded-xl border transition-all shrink-0 ${
                currentIndex === idx
                  ? 'border-cyan-400 bg-white/10 shadow-[0_0_15px_rgba(0,229,255,0.15)]'
                  : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05]'
              }`}
            >
              <img
                src={pilot.avatar}
                alt={pilot.name}
                className="w-8 h-8 rounded-lg object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80";
                }}
              />
              <div className="text-left">
                <div className="text-xs font-semibold text-white">{pilot.name}</div>
                <div className="text-[10px] text-cyan-400 font-mono">{pilot.aum} AUM</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
