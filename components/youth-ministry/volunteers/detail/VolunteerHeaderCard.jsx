"use client";

import { User, Phone, Mail, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { VOL_STATUS_VARIANT } from "@/lib/mock/ymVolunteersMockData";
import { formatDate } from "@/lib/utils";

export function VolunteerHeaderCard({ volunteer }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div className="flex items-start gap-4">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-success-50 text-lg font-semibold text-success-600">
            {volunteer.initials}
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-ink">{volunteer.name}</h2>
              <Badge variant={VOL_STATUS_VARIANT[volunteer.status] ?? "default"}>{volunteer.status}</Badge>
            </div>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-muted">
              <User className="h-3.5 w-3.5" /> {volunteer.role} · {volunteer.ministry}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-ink-muted">
              <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5 text-interactive-500" /> {volunteer.phone}</span>
              <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5 text-interactive-500" /> {volunteer.email}</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-interactive-500" /> Joined on {formatDate(volunteer.joinedOn)}</span>
            </div>
          </div>
        </div>

        <div className="min-w-[220px]">
          <h3 className="mb-2 text-sm font-semibold text-ink">Quick Info</h3>
          <div className="flex flex-col gap-1.5 text-sm">
            <div className="flex justify-between gap-4"><span className="text-ink-subtle">Volunteer ID</span><span className="font-medium text-ink">{volunteer.id}</span></div>
            <div className="flex justify-between gap-4"><span className="text-ink-subtle">Status</span><Badge variant={VOL_STATUS_VARIANT[volunteer.status] ?? "default"}>{volunteer.status}</Badge></div>
            <div className="flex justify-between gap-4"><span className="text-ink-subtle">Ministry / Department</span><span className="font-medium text-ink">{volunteer.ministry}</span></div>
            <div className="flex justify-between gap-4"><span className="text-ink-subtle">Role</span><span className="font-medium text-ink">{volunteer.role}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
