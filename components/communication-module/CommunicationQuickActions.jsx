"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Megaphone, MessageSquareText, Mail, Phone, FileText } from "lucide-react";

const ACTIONS = [
  { key: "announcement", label: "Create Announcement", icon: Megaphone, href: "/communication-module/announcements" },
  { key: "message", label: "Send Message", icon: MessageSquareText, href: "/communication-module/messages" },
  { key: "email", label: "New Email Campaign", icon: Mail, href: "/communication-module/email-campaigns" },
  { key: "sms", label: "New SMS Campaign", icon: Phone, href: "/communication-module/sms-campaigns" },
  { key: "templates", label: "Manage Templates", icon: FileText, href: "/communication-module/templates" },
];

export function CommunicationQuickActions() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Quick Actions</h3>
      <div className="flex flex-col gap-1">
        {ACTIONS.map((a) => (
          <Link
            key={a.key} href={a.href}
            className="flex items-center gap-3 rounded-md px-2 py-2 transition-colors hover:bg-surface-canvas"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
              <a.icon className="h-4 w-4" />
            </span>
            <p className="flex-1 text-sm font-medium text-ink">{a.label}</p>
            <ChevronRight className="h-4 w-4 shrink-0 text-ink-subtle" />
          </Link>
        ))}
      </div>
    </div>
  );
}
