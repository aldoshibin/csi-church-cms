"use client";

import { Plus, CalendarPlus, FilePlus, ClipboardList, FileBarChart } from "lucide-react";

const ICON_MAP = {
  "Add New Committee": Plus,
  "Schedule Meeting": CalendarPlus,
  "Add New Activity": FilePlus,
  "Assign Task": ClipboardList,
  "Generate Report": FileBarChart,
};


export function CommitteeQuickActions({ actions = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-interactive-500">Quick Actions</h3>
      <ul className="space-y-2.5">
        {actions.map((action) => {
          const Icon = ICON_MAP[action] ?? Plus;
          return (
            <li key={action}>
              <button className="flex items-center gap-2 text-sm font-medium text-interactive-500 hover:underline">
                <Icon className="h-4 w-4" />
                {action}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
