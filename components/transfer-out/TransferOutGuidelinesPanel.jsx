"use client";

import { FileCheck, UserCheck, ShieldAlert, Bell } from "lucide-react";

const GUIDELINES = [
  { icon: FileCheck, text: "Verify member details before submitting." },
  { icon: ShieldAlert, text: "Ensure all required documents are uploaded." },
  { icon: UserCheck, text: "Approval will be required from the Parish Priest." },
  { icon: Bell, text: "The member's status will be updated once the transfer is approved." },
];

export function TransferOutGuidelinesPanel() {
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
