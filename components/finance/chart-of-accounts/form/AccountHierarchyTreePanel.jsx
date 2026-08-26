"use client";

import { Network, Folder } from "lucide-react";
import { OFFERING_ACCOUNT_HIERARCHY_MOCK } from "@/lib/mock/chartOfAccountsMockData";

export function AccountHierarchyTreePanel({ newAccountCode, title = "Account Hierarchy", icon: Icon = Network }) {
  const parent = OFFERING_ACCOUNT_HIERARCHY_MOCK;

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-accent-700">
        <Icon className="h-4 w-4" /> {title}
      </h3>
      <div className="flex items-center gap-2 text-sm font-medium text-ink">
        <Folder className="h-4 w-4 text-accent-600" />
        {parent.code} - {parent.name} ({parent.type})
      </div>
      <div className="ml-2 mt-2 flex flex-col gap-2 border-l border-border pl-4">
        {parent.children.map((child) => {
          const isNew = child.code === newAccountCode;
          return (
            <div
              key={child.code}
              className={`rounded-md px-2.5 py-1.5 text-sm ${isNew ? "bg-success-50 font-semibold text-success-700" : "text-ink-muted"}`}
            >
              {child.code} - {child.name} ({child.type})
            </div>
          );
        })}
      </div>
    </div>
  );
}
