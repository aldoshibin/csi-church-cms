"use client";

import { Info, FileCheck, UserCheck, Bell } from "lucide-react";

const GUIDELINES = [
  { icon: Info, text: "Ensure the transfer certificate is original and valid." },
  { icon: FileCheck, text: "Verify member details before submitting." },
  { icon: UserCheck, text: "Approval will be required from the Parish Priest." },
  { icon: Bell, text: "You will be notified once the transfer is approved." },
];

export function TransferGuidelinesPanel() {
  return (
    <section className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h2 className="mb-4 text-sm font-semibold text-interactive-500">Transfer Guidelines</h2>
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
