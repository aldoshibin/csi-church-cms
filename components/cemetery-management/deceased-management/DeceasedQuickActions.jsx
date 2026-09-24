"use client";

import Link from "next/link";
import { PlusCircle, ListChecks, FileBarChart, FileDown, ChevronRight } from "lucide-react";

const ACTIONS = [
  { label: "Add Deceased", description: "Add new deceased record", href: "/cemetery-management/deceased-management/add", icon: PlusCircle },
  { label: "View Burial Records", description: "View related burial records", href: "/cemetery-management/burial-records", icon: ListChecks },
  { label: "Generate Report", description: "Deceased reports", href: "/cemetery-management/reports", icon: FileBarChart },
  { label: "Export Deceased List", description: "Export all records", href: "#", icon: FileDown },
];

export function DeceasedQuickActions() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Quick Actions</h3>
      <div className="flex flex-col divide-y divide-border">
        {ACTIONS.map((a) => (
          <Link key={a.label} href={a.href} className="group flex items-center gap-3 py-2.5 first:pt-0 last:pb-0">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-interactive-50 text-interactive-600">
              <a.icon className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-ink">{a.label}</p>
              <p className="truncate text-xs text-ink-subtle">{a.description}</p>
            </div>
            <ChevronRight className="h-4 w-4 shrink-0 text-ink-subtle transition-colors group-hover:text-interactive-600" />
          </Link>
        ))}
      </div>
    </div>
  );
}
