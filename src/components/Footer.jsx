import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#030303] text-white/60 text-xs pt-16 pb-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Directory */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/[0.08]">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-black font-black text-xs">
                ▲
              </div>
              <span className="font-bold text-white text-base tracking-tight">Autopilot</span>
            </div>
            <p className="text-white/50 text-xs max-w-sm leading-relaxed">
              Autonomous social fund infrastructure. Mirroring strategies, empowering independent pilots, and bringing institutional transparency to modern retail investing.
            </p>
            <div className="pt-2">
              <a
                href="https://www.itsoffbrand.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors"
              >
                <span>Site by OFF+BRAND</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#steps" className="hover:text-white transition-colors">Monetization</a>
              </li>
              <li>
                <a href="#hall-of-fame" className="hover:text-white transition-colors">Hall of Fame</a>
              </li>
              <li>
                <a href="https://joinautopilot.com/news" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">News & Press</a>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">Get In Touch</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://twitter.com/joinautopilot" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>X / Twitter</span>
                  <ArrowUpRight size={11} />
                </a>
              </li>
              <li>
                <a href="mailto:support@joinautopilot.com" className="hover:text-white transition-colors">Contact Support</a>
              </li>
              <li>
                <a href="https://joinautopilot.com/careers" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Careers (We're Hiring)</a>
              </li>
              <li>
                <a href="https://joinautopilot.com/app" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">Become a Pilot</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory & SEC Disclaimers */}
        <div className="pt-10 space-y-4 text-[11px] leading-relaxed text-white/40">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/60 font-medium">
            <span>© Autopilot Holdings Corporation 2026 — All rights reserved.</span>
            <a href="https://joinautopilot.com/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://joinautopilot.com/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="https://joinautopilot.com/adv" className="hover:text-white transition-colors">Form ADV Part 2A</a>
            <a href="https://adviserinfo.sec.gov/firm/summary/331749" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              <span>SEC BrokerCheck / CRS (CRD #331749)</span>
              <ArrowUpRight size={10} />
            </a>
          </div>

          <p>
            "Autopilot" refers to Autopilot Holdings Corporation and its wholly-owned, and separately managed subsidiaries, including Autopilot Advisers, LLC, an SEC-registered investment adviser. Registration with the SEC does not imply a certain level of skill or training.
          </p>

          <p>
            All investing is subject to investment risks, including possible loss of the principal invested, and past performance is not indicative of future results. Visuals are illustrative only.
          </p>

          <p>
            Pilots are not employees or agents of, or supervised by Autopilot. Third-Party Pilots are not investment advisers or regulated or licensed by the SEC or other regulators, owe you no fiduciary duty, and do not provide personalized recommendations or investment advice or ensure suitability for your circumstances. Third-Party Pilots may trade the same securities they publish and could buy or sell before or after you act, may trade for their own accounts in ways that are adverse to or inconsistent with an investment in their Portfolios and receive a percentage of your subscription fees as compensation from Autopilot, creating potential conflicts of interest. Autopilot does not provide tax or legal advice and you are encouraged to consult with professionals before making investment decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
