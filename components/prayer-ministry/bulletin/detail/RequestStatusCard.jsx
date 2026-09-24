"use client";

import { ShieldCheck, Clock, ShieldX } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { BULLETIN_STATUS_VARIANT } from "@/lib/mock/bulletinRequestsMockData";
import { formatDate } from "@/lib/utils";

const STATUS_META = {
  Approved: { icon: ShieldCheck, bg: "bg-success-50", color: "text-success-600", text: "This request is approved and will be published." },
  Pending: { icon: Clock, bg: "bg-warning-50", color: "text-warning-600", text: "This request is awaiting review by the parish office." },
  Rejected: { icon: ShieldX, bg: "bg-danger-50", color: "text-danger-500", text: "This request was not approved for publication." },
};

function Field({ label, children }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-ink">{children}</p>
    </div>
  );
}

export function RequestStatusCard({ request }) {
  const meta = STATUS_META[request.status] ?? STATUS_META.Pending;
  const Icon = meta.icon;
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className={`flex items-start gap-3 rounded-lg ${meta.bg} p-3`}>
        <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${meta.color}`} />
        <div>
          <p className={`text-sm font-semibold ${meta.color}`}>{request.status}</p>
          <p className="mt-0.5 text-xs text-ink-muted">{meta.text}</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <Field label="Status"><Badge variant={BULLETIN_STATUS_VARIANT[request.status] ?? "default"}>{request.status}</Badge></Field>
        <Field label="Reviewed By">{request.reviewedBy}</Field>
        <Field label="Reviewed On">{formatDate(request.reviewedOn)} {request.reviewedTime}</Field>
        <Field label="Visible In Bulletin">{request.visibleInBulletin ? "Yes" : "No"}</Field>
      </div>
    </div>
  );
}
