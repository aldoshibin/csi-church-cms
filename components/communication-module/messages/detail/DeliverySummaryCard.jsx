"use client";

import { Send, MailOpen, MousePointerClick, MailWarning } from "lucide-react";

export function DeliverySummaryCard({ message }) {
  const tiles = [
    { key: "delivered", label: "Delivered", value: message.delivered, pct: message.deliveredPct, icon: Send, bg: "bg-success-50", color: "text-success-600" },
    { key: "opened", label: "Opened", value: message.opened, pct: message.openedPct, icon: MailOpen, bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
    { key: "clicked", label: "Clicked", value: message.clicked, pct: message.clickedPct, icon: MousePointerClick, bg: "bg-warning-50", color: "text-warning-600" },
    { key: "bounced", label: "Bounced", value: message.bounced, pct: message.bouncedPct, icon: MailWarning, bg: "bg-danger-50", color: "text-danger-600" },
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Delivery Summary</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {tiles.map(({ key, label, value, pct, icon: Icon, bg, color }) => (
          <div key={key} className="flex flex-col items-center gap-1.5 rounded-lg border border-border p-4 text-center">
            <span className={`flex h-10 w-10 items-center justify-center rounded-full ${bg} ${color}`}>
              <Icon className="h-5 w-5" />
            </span>
            <p className="font-display text-xl font-bold text-ink">{value}</p>
            <p className="text-xs text-ink-subtle">{label}</p>
            <p className="text-[11px] text-ink-subtle">{pct}%</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-ink-subtle">Note: Statistics may take a few minutes to update.</p>
    </div>
  );
}
