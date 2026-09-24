"use client";

import { Users2, UserCog, Building2, CircleDot, Users, UserCheck, CalendarPlus, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ServiceInfoCard } from "./ServiceInfoCard";
import { ServiceDetailsCard } from "./ServiceDetailsCard";
import { TeamInvolvedCard } from "./TeamInvolvedCard";
import { ServiceNotesCard, ServiceAttachmentsCard } from "./ServiceNotesAttachmentsCards";
import { SERVICE_STATUS_VARIANT } from "@/lib/mock/servicesMockData";
import { formatDate } from "@/lib/utils";

export function ServiceOverviewTab({ service }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <ServiceInfoCard label="Service Type">
          <span className="flex items-center gap-1.5"><Users2 className="h-4 w-4 text-interactive-600" /> {service.type}</span>
        </ServiceInfoCard>
        <ServiceInfoCard label="Led By">
          <span className="flex items-center gap-1.5"><UserCog className="h-4 w-4 text-interactive-600" /> {service.leadBy}</span>
          <p className="mt-0.5 text-xs font-normal text-ink-subtle">{service.leadRole}</p>
        </ServiceInfoCard>
        <ServiceInfoCard label="Organized By">
          <span className="flex items-center gap-1.5"><Building2 className="h-4 w-4 text-interactive-600" /> {service.organizedBy}</span>
        </ServiceInfoCard>
        <ServiceInfoCard label="Status">
          <Badge variant={SERVICE_STATUS_VARIANT[service.status] ?? "default"}>{service.status}</Badge>
        </ServiceInfoCard>

        <ServiceInfoCard label="Expected Attendance">
          <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-interactive-600" /> {service.expectedAttendance}</span>
        </ServiceInfoCard>
        <ServiceInfoCard label="Actual Attendance">
          <span className="flex items-center gap-1.5"><UserCheck className="h-4 w-4 text-interactive-600" /> {service.actualAttendance ?? "-"}</span>
        </ServiceInfoCard>
        <ServiceInfoCard label="Created On">
          <span className="flex items-center gap-1.5"><CalendarPlus className="h-4 w-4 text-interactive-600" /> {formatDate(service.createdOn)}</span>
          <p className="mt-0.5 text-xs font-normal text-ink-subtle">by {service.createdBy}</p>
        </ServiceInfoCard>
        <ServiceInfoCard label="Last Updated">
          <span className="flex items-center gap-1.5"><RefreshCw className="h-4 w-4 text-interactive-600" /> {formatDate(service.lastUpdatedOn)}</span>
          <p className="mt-0.5 text-xs font-normal text-ink-subtle">by {service.lastUpdatedBy}</p>
        </ServiceInfoCard>
      </div>

      <div>
        <h4 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-ink"><CircleDot className="h-3.5 w-3.5 text-interactive-600" /> Description</h4>
        <p className="text-sm leading-relaxed text-ink-muted">{service.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ServiceDetailsCard service={service} />
        <TeamInvolvedCard team={service.teamInvolved} teamCount={service.teamCount} />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ServiceNotesCard notes={service.notes} />
        <ServiceAttachmentsCard attachments={service.attachments} />
      </div>
    </div>
  );
}
