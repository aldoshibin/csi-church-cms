"use client";

import { Users, Calendar, Download, Share2, FileText, Clock, DatabaseIcon, FolderCog } from "lucide-react";

export function ReportsOverviewPanel({ overview }) {
  const rows = [
    { label: "Total Reports Generated", value: overview.totalReportsGenerated, icon: Users, color: "text-interactive-600", bg: "bg-interactive-50" },
    { label: "Scheduled Reports", value: overview.scheduledReports, icon: Calendar, color: "text-[#7C3AED]", bg: "bg-[#F3E8FF]" },
    { label: "Downloaded Reports", value: overview.downloadedReports, icon: Download, color: "text-warning-600", bg: "bg-warning-50" },
    { label: "Shared Reports", value: overview.sharedReports, icon: Share2, color: "text-success-600", bg: "bg-success-50" },
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Reports Overview</h3>
      <p className="mb-3 text-xs text-ink-subtle">This Week Overview</p>
      <div className="flex flex-col divide-y divide-surface-muted">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center gap-3 py-2.5 first:pt-0 last:pb-0">
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${row.bg}`}>
              <row.icon className={`h-4 w-4 ${row.color}`} />
            </span>
            <span className="flex-1 text-sm text-ink-muted">{row.label}</span>
            <span className="font-display text-lg font-bold text-ink">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const ACTIONS = [
  { label: "Generate New Report", icon: FileText, accent: true },
  { label: "Schedule Report", icon: Clock },
  { label: "Export Data", icon: DatabaseIcon },
  { label: "Manage Templates", icon: FolderCog },
];

export function ReportsQuickActionsPanel() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Quick Actions</h3>
      <div className="flex flex-col gap-2.5">
        {ACTIONS.map((action) => (
          <button
            key={action.label}
            type="button"
            className={`flex items-center gap-2.5 rounded-lg border px-3 py-2.5 text-left text-sm font-medium transition-colors ${
              action.accent
                ? "border-success-200 bg-success-50 text-success-700 hover:bg-success-100"
                : "border-border text-ink-muted hover:bg-surface-canvas"
            }`}
          >
            <action.icon className="h-4 w-4 shrink-0" />
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}

const TIPS = [
  "Use date filters to get reports for specific time periods.",
  "You can export reports in PDF, Excel or CSV formats.",
  "Schedule reports to receive them automatically via email.",
];

export function ReportTipsPanel() {
  return (
    <div className="rounded-lg border border-interactive-100 bg-interactive-50 p-4">
      <h3 className="mb-3 text-sm font-semibold text-interactive-700">Report Tips</h3>
      <ul className="flex flex-col gap-2.5">
        {TIPS.map((tip, i) => (
          <li key={i} className="flex gap-2 text-sm text-interactive-700/90">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-interactive-600" />
            {tip}
          </li>
        ))}
      </ul>
      <button type="button" className="mt-3 text-xs font-medium text-interactive-600 hover:underline">Learn more about reports</button>
    </div>
  );
}
