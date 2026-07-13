"use client";

import { Gift } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function UpcomingMilestonesTab({ milestones, onAddMilestone, onView }) {
  return (
    <div className="p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-display text-lg font-bold text-ink">Upcoming Milestones</h3>
        <Button type="button" size="sm" leftIcon={<Gift className="h-4 w-4" />} onClick={onAddMilestone}>
          Add Milestone
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {milestones.map((m) => (
          <div key={m.id} className="flex items-center justify-between gap-4 rounded-lg border border-border p-4">
            <div className="flex items-center gap-4">
              <div className="flex w-14 shrink-0 flex-col items-center rounded-md bg-interactive-50 py-1.5">
                <span className="text-lg font-bold text-interactive-600">{m.day}</span>
                <span className="text-xs font-semibold text-interactive-500">{m.month}</span>
              </div>
              <div>
                <p className="font-semibold text-interactive-600">{m.title}</p>
                <p className="text-sm text-ink-subtle">{m.description}</p>
              </div>
            </div>
            <Button type="button" variant="secondary" size="sm" onClick={() => onView(m)}>
              View
            </Button>
          </div>
        ))}
        {milestones.length === 0 && (
          <p className="py-8 text-center text-sm text-ink-subtle md:col-span-2">No upcoming milestones.</p>
        )}
      </div>
    </div>
  );
}
