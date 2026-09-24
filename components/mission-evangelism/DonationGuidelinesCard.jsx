"use client";

import * as Icons from "lucide-react";
import { Info } from "lucide-react";
import { DONATION_GUIDELINES_MOCK } from "@/lib/mock/vmMissionEvangelismMockData";

export function DonationGuidelinesCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <Info className="h-4 w-4 text-interactive-600" />
        <h3 className="text-sm font-semibold text-ink">Donation Guidelines</h3>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {DONATION_GUIDELINES_MOCK.map((tip) => {
          const Icon = Icons[tip.icon] ?? Icons.Info;
          return (
            <div key={tip.key} className="flex items-start gap-3">
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${tip.iconBg} ${tip.iconColor}`}>
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{tip.title}</p>
                <p className="text-sm text-ink-subtle">{tip.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
