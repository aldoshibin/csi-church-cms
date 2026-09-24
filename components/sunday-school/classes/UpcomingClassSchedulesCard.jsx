"use client";

import Link from "next/link";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

export function UpcomingClassSchedulesCard({ schedules = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Upcoming Class Schedules</h3>
        <Link href="/sunday-school/classes" className="flex items-center gap-1 text-xs font-medium text-interactive-500 hover:underline">
          <Calendar className="h-3.5 w-3.5" /> View Calendar
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {schedules.map((s, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex w-12 shrink-0 flex-col items-center justify-center rounded-lg border border-border py-1.5 text-center">
              <span className="text-[10px] font-semibold uppercase text-danger-600">{s.month}</span>
              <span className="text-sm font-bold text-ink">{s.day}</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-semibold text-ink">{s.className}</p>
                <span className="shrink-0 rounded-sm px-2 py-0.5 text-[10.5px] font-medium" style={{ backgroundColor: `${s.color}1A`, color: s.color }}>
                  {s.ageGroupBadge}
                </span>
              </div>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-subtle">
                <Clock className="h-3 w-3" /> {s.time}
              </p>
              <p className="mt-0.5 flex items-center gap-1.5 text-xs text-ink-subtle">
                <MapPin className="h-3 w-3" /> {s.room}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Link href="/sunday-school/classes" className="mt-4 flex items-center justify-center gap-1.5 text-sm font-medium text-interactive-500 hover:underline">
        View Full Schedule <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
