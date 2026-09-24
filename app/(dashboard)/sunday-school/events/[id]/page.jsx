"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Pencil, Trash2, MoreHorizontal } from "lucide-react";

import { useEventDetail } from "@/hooks/useEventDetail";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { EVENT_STATUS_VARIANT } from "@/lib/mock/eventsMockData";
import { EventDetailsTabs } from "@/components/sunday-school/events/detail/EventDetailsTabs";
import { EventOverviewTab } from "@/components/sunday-school/events/detail/EventOverviewTab";
import { EventTabPlaceholder } from "@/components/sunday-school/events/detail/EventTabPlaceholder";
import { EventQuickInfoPanel, EventVenuePanel, EventRegistrationPanel, EventRelatedActionsPanel } from "@/components/sunday-school/events/detail/EventDetailSidePanels";
import { formatDate } from "@/lib/utils";

export default function EventDetailsPage() {
  const { id } = useParams();
  const { event } = useEventDetail(id);
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="space-y-5 pb-10">
      <Link href="/sunday-school/events" className="flex w-fit items-center gap-1.5 text-sm font-medium text-interactive-500 hover:underline">
        <ArrowLeft className="h-4 w-4" /> Back to Events
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">{event.title}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-ink-muted">
            <Badge variant={EVENT_STATUS_VARIANT[event.status] ?? "default"}>{event.status}</Badge>
            <span className="flex items-center gap-1.5">{formatDate(event.date)}</span>
            <span className="flex items-center gap-1.5">{event.time}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<Pencil className="h-4 w-4" />}>Edit Event</Button>
          <Button type="button" variant="secondary" leftIcon={<Trash2 className="h-4 w-4 text-danger-500" />} className="text-danger-600">Cancel Event</Button>
          <Button type="button" variant="secondary" leftIcon={<MoreHorizontal className="h-4 w-4" />} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <div className="rounded-lg border border-border bg-white p-6 shadow-card">
            <EventDetailsTabs active={activeTab} onChange={setActiveTab} />
            <div className="mt-5">
              {activeTab === "Overview" ? <EventOverviewTab event={event} /> : <EventTabPlaceholder label={activeTab} />}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <EventQuickInfoPanel event={event} />
          <EventVenuePanel event={event} />
          <EventRegistrationPanel event={event} onViewRegistrations={() => console.log("View registrations", event.id)} />
          <EventRelatedActionsPanel onViewReport={() => console.log("View report", event.id)} onPrint={() => window.print()} />
        </div>
      </div>
    </div>
  );
}
