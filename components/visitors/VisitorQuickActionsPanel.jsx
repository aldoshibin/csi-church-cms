"use client";

import { UserPlus, CalendarClock, LogIn, Printer } from "lucide-react";

export function VisitorQuickActionsPanel({ onAddVisitor, onScrollToCheckIn }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-interactive-500">Quick Actions</h3>
      <ul className="space-y-2.5">
        <li>
          <button onClick={onAddVisitor} className="flex items-center gap-2 text-sm font-medium text-interactive-500 hover:underline">
            <UserPlus className="h-4 w-4" /> Add New Visitor
          </button>
        </li>
        <li>
          <button disabled title="No follow-up scheduling endpoint yet" className="flex cursor-not-allowed items-center gap-2 text-sm font-medium text-ink-subtle">
            <CalendarClock className="h-4 w-4" /> Schedule Follow-up
          </button>
        </li>
        <li>
          <button onClick={onScrollToCheckIn} className="flex items-center gap-2 text-sm font-medium text-interactive-500 hover:underline">
            <LogIn className="h-4 w-4" /> Visitor Check-in
          </button>
        </li>
        <li>
          <button disabled title="No export endpoint yet for visitor logs" className="flex cursor-not-allowed items-center gap-2 text-sm font-medium text-ink-subtle">
            <Printer className="h-4 w-4" /> Print Visitor Log
          </button>
        </li>
      </ul>
    </div>
  );
}
