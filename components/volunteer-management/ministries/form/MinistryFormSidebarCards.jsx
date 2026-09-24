"use client";

import { CheckCircle2 } from "lucide-react";
import { MinistryIcon } from "../MinistryIcon";

const GUIDELINES = [
  "Ministry name should be meaningful and easy to understand.",
  "Provide a clear description of the ministry's purpose and goals.",
  "Assign a responsible ministry head or leader.",
  "Choose the appropriate category for better organization.",
  "Set the status to Active to make it available for use.",
];

export function MinistryGuidelinesCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Guidelines</h3>
      <div className="flex flex-col gap-2.5">
        {GUIDELINES.map((g, i) => (
          <div key={i} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-500" />
            <p className="text-xs leading-relaxed text-ink-muted">{g}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const CATEGORY_EXAMPLES = [
  { label: "Worship", helper: "Worship and music related ministries", icon: "Music", bg: "bg-[#FCE7F3]", color: "text-[#DB2777]" },
  { label: "Discipleship", helper: "Teaching and spiritual growth ministries", icon: "Users", bg: "bg-interactive-50", color: "text-interactive-600" },
  { label: "Outreach", helper: "Community outreach and evangelism", icon: "Heart", bg: "bg-danger-50", color: "text-danger-600" },
  { label: "Hospitality", helper: "Welcoming and hospitality ministries", icon: "UsersRound", bg: "bg-success-50", color: "text-success-600" },
  { label: "Youth", helper: "Youth and young adults ministries", icon: "Sparkles", bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  { label: "Other", helper: "Other ministry categories", icon: "Church", bg: "bg-surface-muted", color: "text-ink-subtle" },
];

export function MinistryCategoryExamplesCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Category Examples</h3>
      <div className="flex flex-col gap-3">
        {CATEGORY_EXAMPLES.map((c) => (
          <div key={c.label} className="flex items-center gap-3">
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${c.bg} ${c.color}`}>
              <MinistryIcon name={c.icon} className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-medium text-ink">{c.label}</p>
              <p className="truncate text-xs text-ink-subtle">{c.helper}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
