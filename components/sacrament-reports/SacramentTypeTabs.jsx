"use client";

import { cn } from "@/lib/utils";


export function SacramentTypeTabs({ tabs = [], activeTab, onTabChange }) {
  return (
    <div className="flex flex-wrap gap-6 border-b border-border bg-white px-4 pt-4">
      {tabs.map((tab) => {
        const isActive = tab === activeTab;
        return (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={cn(
              "relative pb-3 text-sm font-medium transition-colors",
              isActive ? "text-interactive-500" : "text-ink-muted hover:text-ink"
            )}
          >
            {tab}
            {isActive && <span className="absolute -bottom-[1px] left-0 h-[2px] w-full rounded-full bg-interactive-500" />}
          </button>
        );
      })}
    </div>
  );
}
