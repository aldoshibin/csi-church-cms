"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SENIOR_MILESTONES_MOCK } from "@/lib/mock/seniorMilestonesMock";

export function UpcomingMilestonesTab({ onAddMilestone, onView }) {
  return (
    <div className="p-5">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-ink">Upcoming Milestones</h3>
          <p className="text-sm text-ink-subtle">Birthdays and pastoral care milestones for senior members.</p>
        </div>
        <Button type="button" size="sm" leftIcon={<Plus className="h-4 w-4" />} onClick={onAddMilestone}>
          Add Milestone
        </Button>
      </div>

      <ul className="space-y-3">
        {SENIOR_MILESTONES_MOCK.map((item) => (
          <li key={item.id} className="flex items-center gap-4 rounded-lg border border-border p-4">
            <div className="flex w-14 shrink-0 flex-col items-center rounded-md bg-interactive-50 py-1.5 text-interactive-600">
              <span className="text-xs font-semibold uppercase">{item.month}</span>
              <span className="text-lg font-bold leading-tight">{item.day}</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-interactive-600">{item.title}</p>
              <p className="text-sm text-ink-subtle">{item.subtitle}</p>
            </div>
            <Button type="button" variant="secondary" size="sm" onClick={() => onView(item)}>
              View
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
