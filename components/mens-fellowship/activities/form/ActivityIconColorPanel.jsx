"use client";

import { Check } from "lucide-react";
import { ACTIVITY_ICON_COMPONENTS } from "../activityIcons";
import { ACTIVITY_ICON_OPTIONS, ACTIVITY_COLOR_OPTIONS } from "@/lib/mock/activitiesMockData";

export function ActivityIconColorPanel({ icon, color, onIconChange, onColorChange }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Activity Icon &amp; Color</h3>
      <p className="mb-2 text-xs font-medium text-ink-muted">Choose an Icon</p>
      <div className="grid grid-cols-4 gap-2">
        {ACTIVITY_ICON_OPTIONS.map((key) => {
          const Icon = ACTIVITY_ICON_COMPONENTS[key];
          const active = icon === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => onIconChange(key)}
              className={`flex h-11 w-11 items-center justify-center rounded-lg border transition-colors ${
                active ? "border-success-500 bg-success-50 text-success-600" : "border-border text-ink-subtle hover:bg-surface-canvas"
              }`}
              aria-label={key}
            >
              <Icon className="h-5 w-5" />
            </button>
          );
        })}
      </div>

      <p className="mb-2 mt-4 text-xs font-medium text-ink-muted">Choose a Color</p>
      <div className="flex flex-wrap gap-2">
        {ACTIVITY_COLOR_OPTIONS.map((c) => {
          const active = color === c;
          return (
            <button
              key={c}
              type="button"
              onClick={() => onColorChange(c)}
              className="flex h-8 w-8 items-center justify-center rounded-full"
              style={{ backgroundColor: c }}
              aria-label={c}
            >
              {active && <Check className="h-4 w-4 text-white" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
