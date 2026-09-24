"use client";

import { Sun, MapPinned, CalendarDays, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { INTERCESSOR_STATUS_VARIANT } from "@/lib/mock/intercessorsMockData";
import { formatDate } from "@/lib/utils";

function Card({ label, children }) {
  return (
    <div className="rounded-lg border border-border p-3">
      <p className="mb-1.5 text-xs text-ink-subtle">{label}</p>
      {children}
    </div>
  );
}

export function IntercessorMiniCardsRow({ intercessor }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      <Card label="Availability">
        <p className="flex items-center gap-1.5 text-sm font-semibold text-ink"><Sun className="h-3.5 w-3.5 text-warning-500" /> {intercessor.availability}</p>
        <p className="mt-0.5 text-xs text-ink-subtle">{intercessor.availabilityTime}</p>
      </Card>
      <Card label="Assigned Prayer Areas">
        <p className="flex items-center gap-1.5 text-sm font-semibold text-ink"><MapPinned className="h-3.5 w-3.5 text-interactive-600" /> {intercessor.assignedAreasPreview}</p>
      </Card>
      <Card label="Joined On">
        <p className="flex items-center gap-1.5 text-sm font-semibold text-ink"><CalendarDays className="h-3.5 w-3.5 text-ink-subtle" /> {formatDate(intercessor.joinedOn)}</p>
      </Card>
      <Card label="Status">
        <p className="flex items-center gap-1.5 text-sm font-semibold text-ink">
          <ShieldCheck className="h-3.5 w-3.5 text-success-500" /> <Badge variant={INTERCESSOR_STATUS_VARIANT[intercessor.status] ?? "default"}>{intercessor.status}</Badge>
        </p>
      </Card>
    </div>
  );
}
