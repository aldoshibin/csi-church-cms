"use client";

import Link from "next/link";
import { Plus, Mail, MessageSquareText, FileText } from "lucide-react";

const ACTIONS = [
  { key: "create", label: "Create Announcement", sub: "Create a new announcement", icon: Plus, href: "/communication-module/announcements/add" },
  { key: "email", label: "Email Announcement", sub: "Send announcement via email", icon: Mail, href: "/communication-module/email-campaigns" },
  { key: "sms", label: "SMS Announcement", sub: "Send announcement via SMS", icon: MessageSquareText, href: "/communication-module/sms-campaigns" },
  { key: "templates", label: "View Templates", sub: "Use pre-designed templates", icon: FileText, href: "/communication-module/templates" },
];

export function AnnouncementQuickActions() {
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
