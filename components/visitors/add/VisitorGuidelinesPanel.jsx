"use client";

import { Camera, Users, ShieldCheck, Heart } from "lucide-react";

const GUIDELINES = [
  { icon: Camera, text: "Thank you for visiting St. John's Church." },
  { icon: Users, text: "Your information helps us connect with you and serve you better." },
  { icon: ShieldCheck, text: "All information provided will be kept confidential." },
  { icon: Heart, text: "You are always welcome here!" },
];

export function VisitorGuidelinesPanel() {
  return (
    <section className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h2 className="mb-4 text-sm font-semibold text-interactive-500">Visitor Guidelines</h2>
      <ul className="space-y-3.5">
        {GUIDELINES.map((g, idx) => (
          <li key={idx} className="flex items-start gap-2.5">
            <g.icon className="mt-0.5 h-4 w-4 shrink-0 text-interactive-500" />
            <span className="text-xs leading-relaxed text-ink-muted">{g.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
