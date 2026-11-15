import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 md:px-12 bg-black relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/70 mb-3">
              <HelpCircle size={13} className="text-cyan-400" />
              <span>Questions & Answers</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Most Asked Questions.
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-white/40">Showing 5 out of 20 items</span>
            <a
              href="https://launch.joinautopilot.com/faq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              <span>View all</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className="rounded-2xl glass-border bg-zinc-950/70 border border-white/5 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white/90">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-white/15 text-white' : ''
                  }`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-white/60 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
