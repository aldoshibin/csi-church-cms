"use client";

import Link from "next/link";
import { Mail, MessageSquare, FolderKanban } from "lucide-react";

const ACTIONS = [
  { key: "email", label: "Create Email Template", sub: "Design a new email template", icon: Mail, href: "/communication-module/templates/add" },
  { key: "sms", label: "Create SMS Template", sub: "Design a new SMS template", icon: MessageSquare, href: "/communication-module/templates/add" },
  { key: "categories", label: "Manage Categories", sub: "Organize template categories", icon: FolderKanban, href: "/communication-module/templates" },
];

export function TemplateQuickActions() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Quick Actions</h3>
      <div className="flex flex-col gap-1">
        {ACTIONS.map((a) => (
          <Link key={a.key} href={a.href} className="flex items-center gap-3 rounded-md px-2 py-2 transition-colors hover:bg-surface-canvas">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
              <a.icon className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-ink">{a.label}</p>
              <p className="truncate text-xs text-ink-subtle">{a.sub}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
