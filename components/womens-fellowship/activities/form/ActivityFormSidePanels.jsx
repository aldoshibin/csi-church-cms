"use client";

import { Heart, BookOpen, Users, Cross, HandHeart, Star, MoreHorizontal, MapPin } from "lucide-react";
import { ACT_TYPE_OPTIONS } from "@/lib/mock/fellowshipActivitiesMockData";
import { formatDate } from "@/lib/utils";

const ICON_MAP = { heart: Heart, book: BookOpen, users: Users, cross: Cross, handHeart: HandHeart, star: Star, moreHorizontal: MoreHorizontal };

export function ActivityTypePanel({ value, onChange }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-1 text-sm font-semibold text-ink">Activity Type</h3>
      <p className="mb-3 text-xs text-ink-subtle">Select the type of activity.</p>
      <div className="flex flex-col gap-2.5">
        {ACT_TYPE_OPTIONS.map((option) => {
          const Icon = ICON_MAP[option.icon] ?? Heart;
          const selected = value === option.value;
          return (
            <label
              key={option.value}
              className={`flex cursor-pointer items-center gap-3 rounded-lg border p-2.5 transition-colors ${selected ? "border-interactive-400 bg-interactive-50" : "border-border hover:bg-surface-canvas"}`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${option.color}1A` }}>
                <Icon className="h-4 w-4" style={{ color: option.color }} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-ink">{option.label}</p>
                <p className="truncate text-xs text-ink-subtle">{option.desc}</p>
              </div>
              <input type="radio" name="activity-type" className="h-4 w-4 accent-interactive-500" checked={selected} onChange={() => onChange(option.value)} />
            </label>
          );
        })}
      </div>
    </div>
  );
}

export function ActivityPreviewPanel({ form }) {
  const typeOption = ACT_TYPE_OPTIONS.find((t) => t.value === form.activityType);
  const Icon = ICON_MAP[typeOption?.icon] ?? Heart;

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-1 text-sm font-semibold text-ink">Preview</h3>
      <p className="mb-3 text-xs text-ink-subtle">This is how the activity will appear in the list.</p>
      <div className="flex items-start gap-3 rounded-lg border border-border p-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${typeOption?.color ?? "#94A3B8"}1A` }}>
          <Icon className="h-5 w-5" style={{ color: typeOption?.color ?? "#94A3B8" }} />
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink">{form.title || "Women's Prayer Meeting"}</p>
          {form.activityType && <span className="mt-1 inline-flex rounded-sm bg-[#FCE7F3] px-2 py-0.5 text-xs font-medium text-[#DB2777]">{form.activityType}</span>}
          <p className="mt-1.5 text-xs text-ink-subtle">
            {form.date ? formatDate(form.date) : "May 25, 2026"}{form.startTime ? ` • ${form.startTime}${form.endTime ? ` - ${form.endTime}` : ""}` : " • 6:00 PM - 7:30 PM"}
          </p>
          <p className="flex items-center gap-1 text-xs text-ink-subtle"><MapPin className="h-3 w-3" /> {form.venue || "Fellowship Hall"}</p>
        </div>
      </div>
    </div>
  );
}

const TIPS = [
  "Provide clear and concise details.",
  "Add a description to help members understand.",
  "Set reminders to increase participation.",
  "Attach flyers or documents if needed.",
];

export function ActivityTipsPanel() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Tips</h3>
      <ul className="flex flex-col gap-2.5">
        {TIPS.map((tip, i) => (
          <li key={i} className="flex gap-2 text-sm text-ink-muted">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-subtle" />
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}
