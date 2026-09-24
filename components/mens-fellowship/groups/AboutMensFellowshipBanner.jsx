"use client";

import { UsersRound, Target, Eye, Heart } from "lucide-react";

export function AboutMensFellowshipBanner({ about }) {
  const cards = [
    { title: "About Men's Fellowship", text: about.about, icon: UsersRound },
    { title: "Our Mission", text: about.mission, icon: Target },
    { title: "Our Vision", text: about.vision, icon: Eye },
    { title: "Our Values", text: about.values, icon: Heart },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 rounded-lg border border-border bg-white p-5 shadow-card sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div key={card.title} className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-success-50">
            <card.icon className="h-5 w-5 text-success-600" />
          </span>
          <div>
            <p className="text-sm font-semibold text-ink">{card.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-ink-subtle">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
