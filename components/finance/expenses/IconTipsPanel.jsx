"use client";

import { Lightbulb, Target, Coins, Paperclip, Hash } from "lucide-react";

const DEFAULT_TIPS = [
  { icon: Target, iconBg: "bg-interactive-50", iconColor: "text-interactive-600", title: "Choose the correct category", desc: "Selecting the right category helps in accurate reporting." },
  { icon: Coins, iconBg: "bg-warning-50", iconColor: "text-warning-600", title: "Enter accurate amount", desc: "Double-check the amount before proceeding." },
  { icon: Paperclip, iconBg: "bg-accent-50", iconColor: "text-accent-600", title: "Attach supporting document", desc: "Upload invoice or receipt for future reference." },
  { icon: Hash, iconBg: "bg-interactive-50", iconColor: "text-interactive-600", title: "Add reference number", desc: "Helps in easy tracking and verification of expenses." },
];

export function IconTipsPanel({ title = "Tips", tips = DEFAULT_TIPS }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
        <Lightbulb className="h-4 w-4 text-warning-500" /> {title}
      </h3>
      <ul className="flex flex-col gap-4">
        {tips.map((tip) => (
          <li key={tip.title} className="flex gap-3">
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${tip.iconBg}`}>
              <tip.icon className={`h-4 w-4 ${tip.iconColor}`} />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{tip.title}</p>
              <p className="text-xs text-ink-subtle">{tip.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
