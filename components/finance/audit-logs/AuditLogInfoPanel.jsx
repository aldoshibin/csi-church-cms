"use client";

import { Info, Clock, FileClock, ShieldCheck } from "lucide-react";

const POINTS = [
  { icon: Clock, text: "All times are shown in Asia/Kolkata (IST)" },
  { icon: FileClock, text: "Logs are retained for 1 year from the activity date" },
  { icon: ShieldCheck, text: "Only records that you have access to are shown" },
];

export function AuditLogInfoPanel() {
  return (
    <div className="rounded-lg border border-border bg-surface-canvas p-4">
      <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-accent-700">
        <Info className="h-4 w-4" /> Audit Log Information
      </h3>
      <p className="mb-3 text-xs text-ink-subtle">
        Audit logs help you monitor all important actions performed in the system for security and accountability.
      </p>
      <ul className="flex flex-col gap-3">
        {POINTS.map((p) => (
          <li key={p.text} className="flex gap-2.5 text-sm">
            <p.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
            <span className="text-ink-muted">{p.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
