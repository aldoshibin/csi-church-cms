"use client";

import { CheckCircle2, Circle } from "lucide-react";
import { formatDate } from "@/lib/utils";

export function ApprovalHistoryCard({ history = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Approval History</h3>
      <div className="flex flex-col gap-5">
        {history.map((h, i) => (
          <div key={i} className="flex gap-3">
            <div className="flex flex-col items-center">
              {h.status === "Approved" ? (
                <CheckCircle2 className="h-5 w-5 shrink-0 text-success-500" />
              ) : (
                <Circle className="h-5 w-5 shrink-0 text-ink-subtle" />
              )}
              {i < history.length - 1 && <span className="mt-1 w-px flex-1 bg-border" />}
            </div>
            <div className="flex min-w-0 flex-1 items-start justify-between gap-3 pb-1">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-ink">{h.status}</p>
                <p className="text-sm text-ink-muted">{h.note}</p>
              </div>
              <div className="flex shrink-0 items-center gap-2 text-right">
                <div>
                  <p className="text-sm font-medium text-ink">{h.by}</p>
                  <p className="text-xs text-ink-subtle">{formatDate(h.date)} {h.time}</p>
                </div>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
                  {h.by.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
