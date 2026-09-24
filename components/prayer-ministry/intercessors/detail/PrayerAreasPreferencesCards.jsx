"use client";

import { Phone, EyeOff, Clock, Users2 } from "lucide-react";

export function AssignedPrayerAreasCard({ areas = [] }) {
  return (
    <div className="rounded-lg border border-border p-4">
      <h4 className="mb-3 text-sm font-semibold text-ink">Assigned Prayer Areas</h4>
      <ul className="flex flex-col gap-2">
        {areas.map((a, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-ink-muted">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-interactive-500" /> {a}
          </li>
        ))}
      </ul>
    </div>
  );
}

const ICONS = [Phone, EyeOff, Clock, Users2];

export function PrayerPreferencesCard({ preferences = [] }) {
  return (
    <div className="rounded-lg border border-border p-4">
      <h4 className="mb-3 text-sm font-semibold text-ink">Prayer Preferences</h4>
      <div className="flex flex-col gap-2.5">
        {preferences.map((p, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <div key={i} className="flex items-center justify-between gap-3 text-sm">
              <span className="flex items-center gap-2 text-ink-muted">
                <Icon className="h-3.5 w-3.5 shrink-0 text-ink-subtle" /> {p.label}
              </span>
              <span className="shrink-0 font-medium text-ink">{p.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
