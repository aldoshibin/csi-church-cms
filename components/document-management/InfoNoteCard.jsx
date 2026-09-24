"use client";

export function InfoNoteCard({ icon: Icon, title, children, action }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        {Icon && <Icon className="h-4 w-4 text-interactive-600" />}
        <h3 className="text-sm font-semibold text-ink">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-ink-muted">{children}</p>
      {action}
    </div>
  );
}
