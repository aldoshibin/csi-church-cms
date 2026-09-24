"use client";

import { HandHeart } from "lucide-react";
import { SlideOverDrawer } from "@/components/ui/SlideOverDrawer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PRAYER_STATUS_VARIANT } from "@/lib/mock/prayerRequestsMockData";
import { PrayerRequestInfoGrid } from "./PrayerRequestInfoGrid";
import { PrayerUpdatesTimeline } from "./PrayerUpdatesTimeline";
import { AssignedIntercessorsCard } from "./AssignedIntercessorsCard";

export function PrayerRequestDetailsDrawer({ open, onOpenChange, request, isLoading, onAddUpdate, onEdit, onMarkAnswered }) {
  return (
    <SlideOverDrawer open={open} onOpenChange={onOpenChange} title="Prayer Request Details" width="620px">
      {isLoading || !request ? (
        <div className="py-16 text-center text-sm text-ink-subtle">Loading…</div>
      ) : (
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-3">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#F3E8FF] text-[#7C3AED]">
              <HandHeart className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-ink">{request.title}</h3>
              <div className="mt-1"><Badge variant={PRAYER_STATUS_VARIANT[request.status] ?? "default"}>{request.status}</Badge></div>
              <p className="mt-1 text-xs text-ink-subtle">Request ID: {request.id}</p>
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <PrayerRequestInfoGrid request={request} />
          </div>

          <div className="border-t border-border pt-5">
            <h4 className="mb-2 text-sm font-semibold text-ink">Prayer Request</h4>
            <p className="text-sm leading-relaxed text-ink-muted">{request.description}</p>
          </div>

          <div className="border-t border-border pt-5">
            <PrayerUpdatesTimeline updates={request.updates} onAddUpdate={onAddUpdate} />
          </div>

          <div className="border-t border-border pt-5">
            <AssignedIntercessorsCard intercessors={request.assignedIntercessors} />
          </div>

          <div className="flex flex-wrap justify-end gap-2 border-t border-border pt-4">
            <Button type="button" variant="secondary" onClick={() => onEdit?.(request)}>Edit Request</Button>
            <Button
              type="button" variant="secondary"
              className="border-success-200 text-success-700 hover:bg-success-50"
              disabled={request.status === "Answered"}
              onClick={onMarkAnswered}
            >
              Mark as Answered
            </Button>
            <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>Close</Button>
          </div>
        </div>
      )}
    </SlideOverDrawer>
  );
}
