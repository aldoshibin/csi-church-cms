"use client";

import Link from "next/link";
import { Upload, UserCheck, Download, History } from "lucide-react";

export function MarkAttendanceQuickActions({ onBulkMarkPresent }) {
  const actions = [
    { key: "import", label: "Import from Check-in", sub: "Import check-in data", icon: Upload, onClick: undefined, href: "#" },
    { key: "bulk", label: "Bulk Mark as Present", sub: "Mark all as present", icon: UserCheck, onClick: onBulkMarkPresent },
    { key: "download", label: "Download Attendance Report", sub: "Generate report for this service", icon: Download, href: "/volunteer-management/reports" },
    { key: "history", label: "Attendance History", sub: "View attendance history", icon: History, href: "/volunteer-management/attendance" },
  ];
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Quick Actions</h3>
      <div className="flex flex-col gap-1">
        {actions.map((a) => {
          const content = (
            <>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
                <a.icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-ink">{a.label}</p>
                <p className="truncate text-xs text-ink-subtle">{a.sub}</p>
              </div>
            </>
          );
          return a.href ? (
            <Link key={a.key} href={a.href} className="flex items-center gap-3 rounded-md px-2 py-2 transition-colors hover:bg-surface-canvas">
              {content}
            </Link>
          ) : (
            <button key={a.key} type="button" onClick={a.onClick} className="flex items-center gap-3 rounded-md px-2 py-2 text-left transition-colors hover:bg-surface-canvas">
              {content}
            </button>
          );
        })}
      </div>
    </div>
  );
}
