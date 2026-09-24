"use client";

import { Mail, MessageSquareText, Bell, Globe } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const CHANNEL_META = {
  email: { label: "Email", icon: Mail, bg: "bg-interactive-50", color: "text-interactive-600" },
  sms: { label: "SMS", icon: MessageSquareText, bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  inApp: { label: "In-App", icon: Bell, bg: "bg-warning-50", color: "text-warning-600" },
  website: { label: "Website", icon: Globe, bg: "bg-success-50", color: "text-success-600" },
};

const STATUS_VARIANT = { Sent: "success", Published: "success", Scheduled: "info", Failed: "danger" };

export function AnnouncementChannelsCard({ channels }) {
  if (!channels) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Communication Channels</h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(channels).map(([key, data]) => {
          const meta = CHANNEL_META[key];
          if (!meta) return null;
          const Icon = meta.icon;
          return (
            <div key={key} className="rounded-lg border border-border p-3.5">
              <div className="flex items-center justify-between">
                <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${meta.bg} ${meta.color}`}>
                  <Icon className="h-4 w-4" />
                </span>
                <Badge variant={STATUS_VARIANT[data.status] ?? "default"}>{data.status}</Badge>
              </div>
              <p className="mt-2 text-sm font-medium text-ink">{meta.label}</p>
              <p className="text-xs text-ink-subtle">{data.detail}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
