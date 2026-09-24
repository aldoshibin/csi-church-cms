"use client";

import { Bell, Mail, MessageSquareText, Globe, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { COMMUNICATION_CHANNEL_OPTIONS } from "@/lib/mock/vmAnnouncementsMockData";

const CHANNEL_ICON = { inApp: Bell, email: Mail, sms: MessageSquareText, website: Globe };

export function CommunicationChannelsSection({ channels, onToggle }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <label className="text-sm font-medium text-ink">
        Communication Channels <span className="text-danger-500">*</span>
      </label>
      <p className="mt-0.5 text-xs text-ink-subtle">Choose how you want to send or publish this announcement.</p>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {COMMUNICATION_CHANNEL_OPTIONS.map((c) => {
          const Icon = CHANNEL_ICON[c.key] ?? Bell;
          const active = channels[c.key];
          return (
            <button
              key={c.key} type="button" onClick={() => onToggle(c.key)}
              className={cn(
                "flex items-start gap-2.5 rounded-lg border p-3.5 text-left transition-colors",
                active ? "border-interactive-500 bg-interactive-50/40" : "border-border hover:bg-surface-canvas"
              )}
            >
              <span className={cn(
                "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border",
                active ? "border-interactive-500 bg-interactive-500 text-white" : "border-border"
              )}>
                {active && <Check className="h-3 w-3" />}
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <Icon className="h-3.5 w-3.5 text-ink-subtle" />
                  <p className="text-sm font-medium text-ink">{c.label}</p>
                </div>
                <p className="text-xs text-ink-subtle">{c.helper}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
