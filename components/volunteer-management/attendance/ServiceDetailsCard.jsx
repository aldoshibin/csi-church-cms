"use client";

import { Church, Users2, Calendar, MapPin, Users } from "lucide-react";
import { formatDate } from "@/lib/utils";

function Row({ icon: Icon, label, children }) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <p className="text-xs text-ink-subtle">{label}</p>
        <p className="truncate text-sm font-medium text-ink">{children}</p>
      </div>
    </div>
  );
}

export function ServiceDetailsCard({ details }) {
  if (!details) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Service Details</h3>
      <div className="flex flex-col gap-3.5">
        <Row icon={Church} label="Service / Event">{details.service}</Row>
        <Row icon={Users2} label="Ministry / Team">{details.ministry}</Row>
        <Row icon={Calendar} label="Date">{formatDate(details.date)}</Row>
        <Row icon={MapPin} label="Location">{details.location}</Row>
        <Row icon={Users} label="Total Assigned">{details.totalAssigned} Volunteers</Row>
      </div>
    </div>
  );
}
