"use client";

import { CheckCircle2, Clock, XCircle, HelpCircle } from "lucide-react";
import { formatDate } from "@/lib/utils";

function shortDate(dateString) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "—";
  return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short" }).format(date);
}

const STATUS_STYLE = {
  Available: { icon: CheckCircle2, bg: "bg-success-50", color: "text-success-600" },
  Limited: { icon: Clock, bg: "bg-warning-50", color: "text-warning-600" },
  Unavailable: { icon: XCircle, bg: "bg-danger-50", color: "text-danger-600" },
  "Not Set": { icon: HelpCircle, bg: "bg-surface-muted", color: "text-ink-subtle" },
};

export function WeeklyAvailabilityCard({ weeklyAvailability = [], week }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">
        Weekly Availability {week ? `(${formatDate(week.start)} – ${formatDate(week.end)})` : ""}
      </h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
        {weeklyAvailability.map((d) => {
          const style = STATUS_STYLE[d.status] ?? STATUS_STYLE["Not Set"];
          const Icon = style.icon;
          return (
            <div key={d.day} className="flex flex-col items-center gap-1.5 border-b border-border pb-3 text-center sm:border-b-0 sm:pb-0">
              <p className="text-xs font-medium text-ink">{d.day.slice(0, 3)}</p>
              <p className="text-[11px] text-ink-subtle">{shortDate(d.date)}</p>
              <span className={`mt-1 flex h-8 w-8 items-center justify-center rounded-full ${style.bg} ${style.color}`}>
                <Icon className="h-4 w-4" />
              </span>
              <p className={`text-xs font-medium ${style.color}`}>{d.status}</p>
              <p className="text-[11px] text-ink-subtle">{d.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
