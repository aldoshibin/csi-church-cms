"use client";

import { cn } from "@/lib/utils";


export function MemberDirectoryTabs({ tabs, activeTab, onChange }) {
  return (
    <div className="flex flex-wrap gap-6 border-b border-border">
      {tabs.map((tab) => {
        const isActive = tab.key === activeTab;
        return (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={cn(
              "relative pb-3 text-sm font-medium transition-colors",
              isActive ? "text-interactive-500" : "text-ink-muted hover:text-ink"
            )}
          >
            {tab.label} <span className="text-ink-subtle">({tab.count.toLocaleString()})</span>
            {isActive && <span className="absolute -bottom-[1px] left-0 h-[2px] w-full rounded-full bg-interactive-500" />}
          </button>
        );
      })}
    </div>
  );
}
