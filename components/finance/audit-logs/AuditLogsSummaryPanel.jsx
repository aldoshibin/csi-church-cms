"use client";

export function AuditLogsSummaryPanel({ summary }) {
  const rows = [
    ["Total Logs", summary.totalLogs],
    ["Users", summary.users],
    ["Modules", summary.modules],
    ["Create Actions", summary.createActions],
    ["Update Actions", summary.updateActions],
    ["Delete Actions", summary.deleteActions],
    ["Report Generated", summary.reportGenerated],
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Summary (This Period)</h3>
      <div className="flex flex-col gap-2.5">
        {rows.map(([label, value], i) => (
          <div key={label} className={`flex items-center justify-between text-sm ${i === 0 ? "border-b border-surface-muted pb-2.5" : ""}`}>
            <span className="text-ink-subtle">{label}</span>
            <span className="font-semibold text-interactive-600">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
