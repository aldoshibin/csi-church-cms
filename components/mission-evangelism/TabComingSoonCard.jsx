"use client";

export function TabComingSoonCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-border bg-white p-12 text-center shadow-card">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
        <Icon className="h-6 w-6" />
      </span>
      <p className="text-sm font-semibold text-ink">{title}</p>
      <p className="max-w-sm text-sm text-ink-subtle">{description}</p>
    </div>
  );
}
