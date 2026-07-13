"use client";

import Link from "next/link";
import { Plus, UserPlus, Upload, RefreshCw, BookOpen, Search } from "lucide-react";

const ICON_MAP = {
  "Add New Member": Plus,
  "Add New Family": UserPlus,
  "Import Members": Upload,
  "Bulk Update Members": RefreshCw,
  "Member Directory": BookOpen,
  "Advanced Search": Search,
};

const HREF_MAP = {
  "Add New Member": "/members?new=1",
  "Add New Family": "/families?new=1",
  "Member Directory": "/members/directory",
};

export function MemberQuickActions({ actions = [], onAddMember }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-interactive-500">Quick Actions</h3>
      <ul className="space-y-2.5">
        {actions.map((action) => {
          const Icon = ICON_MAP[action] ?? Plus;
          if (action === "Add New Member") {
            return (
              <li key={action}>
                <button onClick={onAddMember} className="flex items-center gap-2 text-sm font-medium text-interactive-500 hover:underline">
                  <Icon className="h-4 w-4" />
                  {action}
                </button>
              </li>
            );
          }
          const href = HREF_MAP[action];
          return (
            <li key={action}>
              {href ? (
                <Link href={href} className="flex items-center gap-2 text-sm font-medium text-interactive-500 hover:underline">
                  <Icon className="h-4 w-4" />
                  {action}
                </Link>
              ) : (
                <button className="flex items-center gap-2 text-sm font-medium text-interactive-500 hover:underline">
                  <Icon className="h-4 w-4" />
                  {action}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
