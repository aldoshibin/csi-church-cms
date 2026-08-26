"use client";

import { Lightbulb, Tag, Coins, Hash, Paperclip } from "lucide-react";

const DEFAULT_TIPS = [
  { icon: Tag, iconBg: "bg-success-50", iconColor: "text-success-600", title: "Select the correct income category", desc: "This helps in accurate reporting and financial analysis." },
  { icon: Coins, iconBg: "bg-interactive-50", iconColor: "text-interactive-600", title: "Enter accurate amount", desc: "Re-check the amount before proceeding to next step." },
  { icon: Hash, iconBg: "bg-success-50", iconColor: "text-success-600", title: "Add reference number", desc: "Using a reference or receipt number helps in easy tracking." },
  { icon: Paperclip, iconBg: "bg-interactive-50", iconColor: "text-interactive-600", title: "Save receipt", desc: "You can attach the scanned receipt for future reference." },
];

export function IncomeIconTipsPanel({ title = "Tips", tips = DEFAULT_TIPS }) {
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
