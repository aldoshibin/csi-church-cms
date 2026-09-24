"use client";

import { useState } from "react";
import { CalendarDays, MapPin, Clock } from "lucide-react";
import { SlideOverDrawer } from "@/components/ui/SlideOverDrawer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SERVICE_STATUS_VARIANT } from "@/lib/mock/servicesMockData";
import { ServiceDetailTabs } from "./ServiceDetailTabs";
import { ServiceOverviewTab } from "./ServiceOverviewTab";
import { ServiceTabPlaceholder } from "./ServiceTabPlaceholder";
import { formatDate } from "@/lib/utils";

export function ServiceDetailsDrawer({ open, onOpenChange, service, isLoading, onEdit, onDuplicate }) {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <SlideOverDrawer open={open} onOpenChange={onOpenChange} title="Service Details" width="720px">
      {isLoading || !service ? (
        <div className="py-16 text-center text-sm text-ink-subtle">Loading…</div>
      ) : (
        <div className="flex flex-col gap-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#F3E8FF] text-[#7C3AED]">
                <CalendarDays className="h-6 w-6" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-ink">{service.title}</h3>
                  <Badge variant={SERVICE_STATUS_VARIANT[service.status] ?? "default"}>{service.status}</Badge>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-ink-muted">
                  <span className="flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" /> {formatDate(service.date)}{service.day ? ` (${service.day})` : ""}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {service.timeRange}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {service.location}</span>
                </div>
              </div>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-xs text-ink-subtle">Service ID</p>
              <p className="text-sm font-semibold text-ink">{service.id}</p>
            </div>
          </div>

          <ServiceDetailTabs active={activeTab} onChange={setActiveTab} />

          <div>
            {activeTab === "Overview" && <ServiceOverviewTab service={service} />}
            {activeTab !== "Overview" && <ServiceTabPlaceholder label={activeTab} />}
          </div>

          <div className="flex justify-end gap-2 border-t border-border pt-4">
            <Button type="button" variant="secondary" onClick={() => onEdit?.(service)}>Edit Service</Button>
            <Button type="button" onClick={() => onDuplicate?.(service)}>Duplicate Service</Button>
          </div>
        </div>
      )}
    </SlideOverDrawer>
  );
}
