"use client";

import { RotateCcw, Copy, Users2, Download } from "lucide-react";

export function CampaignQuickActionsSidebarCard({ onResend, onDuplicate, onViewRecipients, onDownload }) {
  const actions = [
    { key: "resend", label: "Resend Campaign", sub: "Resend this campaign to non-openers", icon: RotateCcw, onClick: onResend },
    { key: "duplicate", label: "Duplicate Campaign", sub: "Create a copy of this campaign", icon: Copy, onClick: onDuplicate },
    { key: "recipients", label: "View Recipients", sub: "See the list of recipients", icon: Users2, onClick: onViewRecipients },
    { key: "download", label: "Download Report", sub: "Download detailed campaign report", icon: Download, onClick: onDownload },
  ];
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Quick Actions</h3>
      <div className="flex flex-col gap-1">
        {actions.map((a) => (
          <button
            key={a.key} type="button" onClick={a.onClick}
            className="flex items-center gap-3 rounded-md px-2 py-2 text-left transition-colors hover:bg-surface-canvas"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
              <a.icon className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-ink">{a.label}</p>
              <p className="truncate text-xs text-ink-subtle">{a.sub}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
