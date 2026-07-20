"use client";

import { Church, Wine, Bird, Heart, Cross, HeartHandshake, ArrowRight } from "lucide-react";

const ICONS = { church: Church, wine: Wine, dove: Bird, rings: Heart, cross: Cross, "heart-hands": HeartHandshake };
const TONE = {
  teal: "bg-interactive-50 text-interactive-600",
  purple: "bg-[#F3EEFE] text-[#8B5CF6]",
  red: "bg-[#FDECEC] text-[#EF4444]",
  blue: "bg-[#EAF2FE] text-[#3B82F6]",
  orange: "bg-accent-50 text-accent-600",
  green: "bg-success-50 text-success-600",
};

export function SacramentStatCards({ cards, onViewDetails }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {cards.map((card) => {
        const Icon = ICONS[card.icon] ?? Church;
        return (
          <div key={card.key} className="rounded-lg border border-border bg-white p-4 shadow-card">
            <div className={`mb-3 flex h-11 w-11 items-center justify-center rounded-full ${TONE[card.tone] ?? TONE.teal}`}>
              <Icon className="h-5 w-5" />
            </div>
            <p className="text-sm font-semibold text-ink">{card.label}</p>
            <p className="mt-0.5 text-xl font-bold text-ink font-display">{card.value}</p>
            <p className="text-xs text-ink-subtle">{card.sublabel}</p>
            <button
              type="button"
              onClick={() => onViewDetails(card)}
              className="mt-2 flex items-center gap-1 text-xs font-medium text-interactive-500 hover:underline"
            >
              View Details <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
