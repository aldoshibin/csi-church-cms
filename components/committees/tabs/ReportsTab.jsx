"use client";

import { FileBarChart, Download } from "lucide-react";


export function ReportsTab() {
  const reports = [
    { id: 1, title: "Committee Activity Summary", description: "All committee activities and completion rates for the selected period." },
    { id: 2, title: "Member Participation Report", description: "Attendance and engagement levels across all committees." },
    { id: 3, title: "Meeting Minutes Log", description: "A consolidated log of all committee meetings and outcomes." },
    { id: 4, title: "Task Completion Report", description: "Assigned tasks, owners, and completion status." },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="p-4">
        <h3 className="text-sm font-semibold text-interactive-500">Reports</h3>
        <p className="text-xs text-ink-subtle">best-guess layout based on the "Export Report" / "Generate Report" actions.</p>
      </div>
      <ul className="divide-y divide-border">
        {reports.map((report) => (
          <li key={report.id} className="flex items-center gap-3 p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
              <FileBarChart className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-ink">{report.title}</p>
              <p className="text-xs text-ink-subtle">{report.description}</p>
            </div>
            <button className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted" aria-label={`Download ${report.title}`}>
              <Download className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
