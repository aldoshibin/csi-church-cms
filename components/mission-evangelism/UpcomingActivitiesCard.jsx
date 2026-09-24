"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function UpcomingActivitiesCard({ activities = [], title = "Upcoming Activities", viewAllLabel = "View All Activities" }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">{title}</h3>
      <div className="mt-3 flex flex-col gap-4">
        {activities.map((item) => {
          const [month, day] = item.label.split(" ");
          return (
            <div key={item.id} className="flex items-start gap-3">
              <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-md bg-[#DCFCE7] text-[#16A34A]">
                <span className="text-[10px] font-semibold uppercase leading-none">{month}</span>
                <span className="text-sm font-bold leading-tight">{day}</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-ink">{item.title}</p>
                <p className="text-xs text-ink-subtle">{item.dateTimeText}</p>
                <p className="text-xs text-ink-subtle">{item.location}</p>
              </div>
              <Link href={`/mission-evangelism/outreach-programs/${item.id}`}>
                <Button type="button" variant="secondary" size="sm">View</Button>
              </Link>
            </div>
          );
        })}
      </div>
      <Link href="/mission-evangelism/outreach-programs" className="mt-4 flex items-center justify-center gap-1 text-sm font-medium text-interactive-600 hover:underline">
        {viewAllLabel} <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
