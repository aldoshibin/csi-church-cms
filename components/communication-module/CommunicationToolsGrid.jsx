"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { CommunicationIcon } from "./CommunicationIcon";

const ICON_STYLE = {
  announcements: { bg: "bg-success-50", color: "text-success-600" },
  messages: { bg: "bg-interactive-50", color: "text-interactive-600" },
  emailCampaigns: { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  smsCampaigns: { bg: "bg-warning-50", color: "text-warning-600" },
  templates: { bg: "bg-warning-50", color: "text-warning-600" },
  groups: { bg: "bg-success-50", color: "text-success-600" },
};

export function CommunicationToolsGrid({ tools = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Communication Tools</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => {
          const style = ICON_STYLE[tool.key] ?? ICON_STYLE.announcements;
          return (
            <Link
              key={tool.key} href={tool.href}
              className="flex items-start gap-3 rounded-lg border border-border p-4 text-left transition-colors hover:bg-surface-canvas"
            >
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${style.bg} ${style.color}`}>
                <CommunicationIcon name={tool.icon} className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-ink">{tool.title}</p>
                <p className="mt-0.5 text-xs text-ink-subtle">{tool.description}</p>
              </div>
              <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-ink-subtle" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
