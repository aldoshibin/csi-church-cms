"use client";

import { Users, BookOpen, DollarSign, Calendar, Cross, FileText, ChevronRight } from "lucide-react";
import { WFR_CATEGORY_CARDS_MOCK } from "@/lib/mock/fellowshipReportsMockData";

const ICON_MAP = { users: Users, bookOpen: BookOpen, dollarSign: DollarSign, calendar: Calendar, cross: Cross, fileText: FileText };

export function ReportCategoryCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {WFR_CATEGORY_CARDS_MOCK.map((card) => {
        const Icon = ICON_MAP[card.icon] ?? FileText;
        return (
          <button
            key={card.label}
            type="button"
            className="flex items-start gap-3 rounded-lg border border-border bg-white p-4 text-left shadow-card transition-colors hover:bg-surface-canvas"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${card.color}1A` }}>
              <Icon className="h-5 w-5" style={{ color: card.color }} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-ink">{card.label}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-ink-subtle">{card.desc}</p>
            </div>
            <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-ink-subtle" />
          </button>
        );
      })}
    </div>
  );
}
