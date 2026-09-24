"use client";

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AssignmentIcon } from "../AssignmentIcon";
import { formatDate } from "@/lib/utils";
import { ASSIGNMENT_STATUS_VARIANT } from "@/lib/mock/serviceAssignmentsMockData";

const GUIDELINES = [
  "Provide accurate service details and timings.",
  "Assign the appropriate role for volunteers.",
  "Ensure volunteers are available for the selected date and time.",
  "Add clear instructions to help volunteers prepare.",
  "You can edit or update this assignment anytime.",
];

export function AssignmentGuidelinesCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Guidelines</h3>
      <div className="flex flex-col gap-2.5">
        {GUIDELINES.map((g, i) => (
          <div key={i} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-500" />
            <p className="text-xs leading-relaxed text-ink-muted">{g}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AssignmentTemplatesCard({ templates = [], onUse }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Assignment Templates</h3>
        <button type="button" className="text-xs font-medium text-interactive-500 hover:underline">View All</button>
      </div>
      <div className="flex flex-col gap-3">
        {templates.map((t) => (
          <div key={t.name} className="flex items-center gap-3">
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${t.bg} ${t.color}`}>
              <AssignmentIcon name={t.icon} className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">{t.name}</p>
              <p className="truncate text-xs text-ink-subtle">{t.helper}</p>
            </div>
            <Button type="button" size="sm" variant="secondary" onClick={() => onUse?.(t)}>Use</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RecentAssignmentsFormCard({ assignments = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Recent Assignments</h3>
        <button type="button" className="text-xs font-medium text-interactive-500 hover:underline">View All</button>
      </div>
      <div className="flex flex-col gap-3.5">
        {assignments.map((a, i) => {
          const style = { bg: "bg-interactive-50", color: "text-interactive-600" };
          return (
            <div key={i} className="flex items-center gap-3">
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${style.bg} ${style.color}`}>
                <AssignmentIcon name="Church" className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{a.title}</p>
                <p className="truncate text-xs text-ink-subtle">{formatDate(a.date)} &bull; {a.time}</p>
              </div>
              <Badge variant={ASSIGNMENT_STATUS_VARIANT[a.status] ?? "default"}>{a.status}</Badge>
            </div>
          );
        })}
      </div>
    </div>
  );
}
