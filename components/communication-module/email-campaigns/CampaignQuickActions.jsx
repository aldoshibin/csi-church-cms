"use client";

import Link from "next/link";
import { Send, FileText, Users2, Upload, BarChart3 } from "lucide-react";

const ACTIONS = [
  { key: "create", label: "Create Campaign", sub: "Design a new email campaign", icon: Send, href: "/communication-module/email-campaigns/add" },
  { key: "templates", label: "Manage Templates", sub: "Use pre-designed email templates", icon: FileText, href: "/communication-module/templates" },
  { key: "subscribers", label: "View Subscribers", sub: "Manage your email subscribers", icon: Users2, href: "/communication-module/email-campaigns" },
  { key: "import", label: "Import Subscribers", sub: "Import email subscribers", icon: Upload, href: "/communication-module/email-campaigns" },
  { key: "reports", label: "Reports & Analytics", sub: "View detailed campaign reports", icon: BarChart3, href: "/reports-analytics" },
];

export function CampaignQuickActions() {
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
