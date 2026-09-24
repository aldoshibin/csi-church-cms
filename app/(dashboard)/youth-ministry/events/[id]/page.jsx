"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Pencil, Trash2 } from "lucide-react";

import { useYmEventDetail } from "@/hooks/useYmEventDetail";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { YME_STATUS_VARIANT } from "@/lib/mock/ymEventsMockData";
import { YmEventDetailsTabs } from "@/components/youth-ministry/events/detail/YmEventDetailsTabs";
import { YmEventOverviewTab } from "@/components/youth-ministry/events/detail/YmEventOverviewTab";
import { YmEventTabPlaceholder } from "@/components/youth-ministry/events/detail/YmEventTabPlaceholder";
import { YmRegistrationSummaryCard, YmEventTimelineCard, YmEventQuickActionsList } from "@/components/youth-ministry/events/detail/YmEventDetailSidePanels";

export default function YmEventDetailsPage() {
  const { id } = useParams();
  const { event } = useYmEventDetail(id);
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="space-y-5 pb-10">
      <nav className="flex items-center gap-1.5 text-xs text-interactive-500">
        <Link href="/youth-ministry/events" className="hover:underline">Events</Link>
        <span className="text-ink-subtle">›</span>
        <span className="font-medium text-ink">Event Details</span>
      </nav>

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">{event.title}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-ink-muted">
            <Badge variant={YME_STATUS_VARIANT[event.status] ?? "default"}>{event.status}</Badge>
            <span className="text-ink-subtle">·</span>
            <span>Organized by <Link href="/youth-ministry" className="font-medium text-interactive-500 hover:underline">{event.organizer}</Link></span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/youth-ministry/events">
            <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />}>Back to Events</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Pencil className="h-4 w-4" />}>Edit Event</Button>
          <Button type="button" variant="secondary" leftIcon={<Trash2 className="h-4 w-4 text-danger-500" />} className="text-danger-600">Delete Event</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <div className="rounded-lg border border-border bg-white p-6 shadow-card">
            <YmEventDetailsTabs active={activeTab} onChange={setActiveTab} />
            <div className="mt-5">
              {activeTab === "Overview" ? <YmEventOverviewTab event={event} /> : <YmEventTabPlaceholder label={activeTab} />}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <YmRegistrationSummaryCard summary={event.registrationSummary} />
          <YmEventTimelineCard timeline={event.timeline} />
          <YmEventQuickActionsList />
        </div>
      </div>
    </div>
  );
}
