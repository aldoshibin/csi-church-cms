"use client";

import { Phone, Mail } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PRAYER_STATUS_VARIANT, PRAYER_CATEGORY_BADGE } from "@/lib/mock/prayerRequestsMockData";
import { formatDate } from "@/lib/utils";

function Field({ label, children }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <div className="mt-0.5 text-sm font-medium text-ink">{children}</div>
    </div>
  );
}

export function PrayerRequestInfoGrid({ request }) {
  const categoryStyle = PRAYER_CATEGORY_BADGE[request.category] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold text-ink">Request Information</h4>
      <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
        <Field label="Requested By">
          {request.requestedBy}
          <p className="mt-0.5 text-xs font-normal text-ink-subtle">{request.requestedByRole}</p>
        </Field>
        <Field label="Contact">
          <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5 text-ink-subtle" /> {request.phone}</span>
          <span className="mt-1 flex items-center gap-1.5"><Mail className="h-3.5 w-3.5 text-ink-subtle" /> {request.email}</span>
        </Field>

        <Field label="Category"><span className={`inline-flex rounded-sm px-2.5 py-1 text-xs font-medium ${categoryStyle.bg} ${categoryStyle.color}`}>{request.category}</span></Field>
        <Field label="Preferred Contact Method">
          <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5 text-ink-subtle" /> {request.preferredContactMethod}</span>
        </Field>

        <Field label="Prayer Group">{request.prayerGroup}</Field>
        <Field label="Status"><Badge variant={PRAYER_STATUS_VARIANT[request.status] ?? "default"}>{request.status}</Badge></Field>

        <Field label="Date Requested">{formatDate(request.dateRequestedOn)} - {request.dateRequestedTime}</Field>
        <Field label="Last Updated">{formatDate(request.lastUpdatedOn)} - {request.lastUpdatedTime}</Field>
      </div>
    </div>
  );
}
