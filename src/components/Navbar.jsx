import React, { useState } from 'react';
import { X, ArrowUpRight, Compass, DollarSign, Newspaper, HelpCircle, Briefcase, Mail } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Hall of Fame", href: "#hall-of-fame", icon: Compass },
    { label: "Monetization", href: "#steps", icon: DollarSign },
    { label: "Pilot Stories", href: "#stories", icon: Newspaper },
    { label: "FAQ", href: "#faq", icon: HelpCircle },
    { label: "Careers", href: "https://careers.joinautopilot.com/", icon: Briefcase, external: true },
    { label: "Contact", href: "mailto:support@joinautopilot.com", icon: Mail },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 py-5 pointer-events-none">
        {/* Left: Steering Wheel Badge + Menu Toggle */}
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* Autopilot Steering Wheel Pill */}
          <a
            href="/"
            aria-label="Autopilot Home"
            className="w-10 h-10 rounded-full glass-pill bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center transition-all duration-200 border border-white/10 shadow-sm"
          >
            {/* Minimalist Steering Wheel Icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f1f2f3"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="3.2" />
              <line x1="2" y1="12" x2="8.8" y2="12" />
              <line x1="15.2" y1="12" x2="22" y2="12" />
              <line x1="12" y1="15.2" x2="12" y2="22" />
            </svg>
          </a>

          {/* = Menu Pill */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-pill bg-white/[0.06] hover:bg-white/[0.12] text-xs font-medium text-white/90 transition-all duration-200 border border-white/10"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X size={14} className="text-white" />
            ) : (
              <span className="font-mono text-sm tracking-tighter leading-none opacity-80">=</span>
            )}
            <span className="tracking-wide">Menu</span>
          </button>
        </div>

        {/* Right: Disclaimer footnote + Launch a Fund CTA */}
        <div className="flex items-center gap-4 sm:gap-6 pointer-events-auto">
          <span className="hidden md:inline-block text-[11px] text-white/40 tracking-tight font-normal">
            * Visuals are illustrative only
          </span>

          <a
            href="https://pilot.joinautopilot.com/onboarding/welcome"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2 text-xs font-bold text-black bg-[#f1f2f3] hover:bg-white transition-all duration-200 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.45)] transform hover:-translate-y-0.5"
          >
            Launch a Fund
          </a>
        </div>
      </header>

      {/* Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-2xl flex flex-col justify-between p-8 sm:p-14 animate-in fade-in duration-300">
          <div className="pt-20 max-w-xl mx-auto w-full">
            <p className="text-xs uppercase tracking-widest text-white/40 mb-6 font-semibold">
              Explore Autopilot
            </p>
            <div className="space-y-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between py-3 border-b border-white/10 group hover:border-white/30 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-white/10 transition-colors">
                        <Icon size={16} />
                      </div>
                      <span className="text-xl sm:text-2xl font-medium text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all">
                        {link.label}
                      </span>
                    </div>
                    <ArrowUpRight size={18} className="text-white/40 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="max-w-xl mx-auto w-full pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 border-t border-white/10">
            <span>© 2026 Autopilot Holdings Corporation</span>
            <div className="flex items-center gap-4">
              <a href="https://x.com/JoinAutopilot" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                X / Twitter
              </a>
              <a href="https://joinautopilot.com/legal" className="hover:text-white transition-colors">
                Legal
              </a>
              <a href="mailto:support@joinautopilot.com" className="hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
