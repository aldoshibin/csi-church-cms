"use client";

import { CheckCircle2, ExternalLink } from "lucide-react";
import { formatDate } from "@/lib/utils";

function Row({ label, children }) {
  return (
    <div className="flex items-start justify-between gap-3 text-sm">
      <span className="text-ink-subtle">{label}</span>
      <span className="text-right font-medium text-ink">{children}</span>
    </div>
  );
}

export function ServiceDetailsCard({ service }) {
  return (
    <div className="rounded-lg border border-border p-4">
      <h4 className="mb-3 text-sm font-semibold text-ink">Details</h4>
      <div className="flex flex-col gap-3">
        <Row label="Service Type">{service.type}</Row>
        <Row label="Date">{formatDate(service.date)}{service.day ? ` (${service.day})` : ""}</Row>
        <Row label="Time">{service.timeRange}</Row>
        <Row label="Location">
          <span className="flex items-center justify-end gap-1">
            {service.location}
            <a href="#" className="flex items-center gap-0.5 text-xs font-medium text-interactive-500 hover:underline">View on Map <ExternalLink className="h-3 w-3" /></a>
          </span>
        </Row>
        <Row label="Language">{service.language}</Row>
        <Row label="Dress Code">{service.dressCode}</Row>
        <Row label="Livestream">
          {service.livestream ? (
            <span className="flex items-center justify-end gap-1 text-success-600"><CheckCircle2 className="h-3.5 w-3.5" /> Yes</span>
          ) : "No"}
        </Row>
      </div>
    </div>
  );
}
