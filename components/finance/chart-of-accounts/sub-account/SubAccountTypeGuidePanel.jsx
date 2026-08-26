"use client";

import { Info, Share2, Tag, FileText } from "lucide-react";

const TYPES = [
  { label: "Header", desc: "Used as a main category to group accounts. Transactions are not recorded directly.", icon: Share2, iconBg: "bg-success-50", iconColor: "text-success-600" },
  { label: "Detail", desc: "Used to record transactions. Has balance.", icon: Tag, iconBg: "bg-warning-50", iconColor: "text-warning-600" },
  { label: "Sub-Detail", desc: "Used for more detailed classification under Detail accounts.", icon: FileText, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
];

export function SubAccountTypeGuidePanel() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-accent-700">
        <Info className="h-4 w-4" /> Sub Account Type Guide
      </h3>
      <ul className="flex flex-col gap-4">
        {TYPES.map((t) => (
          <li key={t.label} className="flex gap-3">
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${t.iconBg}`}>
              <t.icon className={`h-4 w-4 ${t.iconColor}`} />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{t.label}</p>
              <p className="text-xs text-ink-subtle">{t.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
