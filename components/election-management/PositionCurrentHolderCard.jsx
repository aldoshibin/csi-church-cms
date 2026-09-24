"use client";

import { UserRound, Mail, Phone, CalendarCheck2 } from "lucide-react";
import { formatDate } from "@/lib/utils";

function initials(name) {
  return name.split(" ").filter((w) => /^[A-Za-z]/.test(w)).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

export function PositionCurrentHolderCard({ holder }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Current Holder</h3>

      {!holder ? (
        <p className="mt-4 text-sm text-ink-subtle">This position is currently vacant.</p>
      ) : (
        <>
          <div className="mt-4 flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-success-50 text-sm font-semibold text-success-600">
              {initials(holder.name) || <UserRound className="h-5 w-5" />}
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{holder.name}</p>
              <p className="text-xs text-ink-subtle">{holder.membership}</p>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-2.5 text-sm">
            <p className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-ink-subtle"><Mail className="h-3.5 w-3.5" /> Email</span>
              <span className="font-medium text-ink">{holder.email}</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-ink-subtle"><Phone className="h-3.5 w-3.5" /> Phone</span>
              <span className="font-medium text-ink">{holder.phone}</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-ink-subtle"><CalendarCheck2 className="h-3.5 w-3.5" /> Appointed On</span>
              <span className="font-medium text-ink">{formatDate(holder.appointedOn)}</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
