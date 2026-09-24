"use client";

import {
  Users2, IdCard, Map, MapPinned, FileText, BadgeCheck, IndianRupee, BarChart3, PieChart, Users, Cross, Clock, Eye, Download,
} from "lucide-react";

const ICONS = { Users2, IdCard, Map, MapPinned, FileText, BadgeCheck, IndianRupee, BarChart3, PieChart, Users, Cross, Clock };

export function ReportCard({ report }) {
  const Icon = ICONS[report.icon] ?? FileText;
  return (
    <div className="flex flex-col justify-between rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-start gap-3">
        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${report.bg} ${report.color}`}>
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-semibold text-ink">{report.title}</p>
          <p className="mt-1 text-xs text-ink-subtle">{report.description}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
        <button type="button" className="flex items-center gap-1.5 text-sm font-medium text-interactive-600 hover:underline">
          <Eye className="h-4 w-4" /> View Report
        </button>
        <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="Download report">
          <Download className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
