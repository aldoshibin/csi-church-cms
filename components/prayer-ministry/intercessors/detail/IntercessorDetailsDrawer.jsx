"use client";

import { Phone, Mail, MoreVertical, Pencil } from "lucide-react";
import { SlideOverDrawer } from "@/components/ui/SlideOverDrawer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { INTERCESSOR_STATUS_VARIANT, INTERCESSOR_MINISTRY_BADGE } from "@/lib/mock/intercessorsMockData";
import { IntercessorMiniCardsRow } from "./IntercessorMiniCardsRow";
import { MinistryInfoCard, ContactInfoCard } from "./MinistryContactCards";
import { AssignedPrayerAreasCard, PrayerPreferencesCard } from "./PrayerAreasPreferencesCards";

export function IntercessorDetailsDrawer({ open, onOpenChange, intercessor, isLoading, onEdit, onDeactivate }) {
  return (
    <SlideOverDrawer open={open} onOpenChange={onOpenChange} title="Intercessor Details" width="700px">
      {isLoading || !intercessor ? (
        <div className="py-16 text-center text-sm text-ink-subtle">Loading…</div>
      ) : (
        <div className="flex flex-col gap-6">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-lg font-semibold text-interactive-600">
                {intercessor.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-ink">{intercessor.name}</h3>
                  <Badge variant={INTERCESSOR_STATUS_VARIANT[intercessor.status] ?? "default"}>{intercessor.status}</Badge>
                </div>
                <div className="mt-1">
                  {(() => {
                    const style = INTERCESSOR_MINISTRY_BADGE[intercessor.ministry] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };
                    return <span className={`inline-flex rounded-sm px-2.5 py-1 text-xs font-medium ${style.bg} ${style.color}`}>{intercessor.ministry}</span>;
                  })()}
                </div>
                <div className="mt-2 flex flex-col gap-1 text-sm text-ink-muted sm:flex-row sm:items-center sm:gap-4">
                  <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" /> {intercessor.email}</span>
                  <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> {intercessor.phone}</span>
                </div>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <Button type="button" variant="secondary" size="sm" leftIcon={<Pencil className="h-3.5 w-3.5" />} onClick={() => onEdit?.(intercessor)}>Edit Intercessor</Button>
              <button type="button" className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
                <MoreVertical className="h-4 w-4" />
              </button>
            </div>
          </div>

          <IntercessorMiniCardsRow intercessor={intercessor} />

          <div>
            <h4 className="mb-2 text-sm font-semibold text-ink">About {intercessor.name}</h4>
            <p className="text-sm leading-relaxed text-ink-muted">{intercessor.about}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <MinistryInfoCard intercessor={intercessor} />
            <ContactInfoCard intercessor={intercessor} />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <AssignedPrayerAreasCard areas={intercessor.assignedAreas} />
            <PrayerPreferencesCard preferences={intercessor.preferences} />
          </div>

          <div>
            <h4 className="mb-2 text-sm font-semibold text-ink">Notes</h4>
            <p className="text-sm leading-relaxed text-ink-muted">{intercessor.notes}</p>
          </div>

          <div className="flex flex-wrap justify-between gap-2 border-t border-border pt-4">
            <Button
              type="button" variant="secondary"
              className="border-danger-200 text-danger-600 hover:bg-danger-50"
              disabled={intercessor.status === "Inactive"}
              onClick={onDeactivate}
            >
              Deactivate Intercessor
            </Button>
            <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>Close</Button>
          </div>
        </div>
      )}
    </SlideOverDrawer>
  );
}
