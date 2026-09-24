"use client";

import {
  FileText, Shield, Building2, User, Calendar, Clock, MapPin, Users, Users2, HeartHandshake, ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { OUTREACH_STATUS_BADGE_MAP } from "@/lib/mock/vmMissionEvangelismMockData";

function Row({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-surface-canvas text-ink-subtle">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-xs text-ink-subtle">{label}</p>
        <p className="text-sm font-medium text-ink">{value ?? "–"}</p>
      </div>
    </div>
  );
}

export function ActivitySummaryCard({ activity }) {
  if (!activity) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Activity Summary</h3>
      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-4">
          <Row icon={FileText} label="Activity Name" value={activity.name} />
          <Row icon={Shield} label="Category" value={activity.category} />
          <Row icon={Building2} label="Organized By" value={activity.organizedBy} />
          <Row icon={User} label="In-Charge / Coordinator" value={activity.coordinatorName} />
          <Row icon={Calendar} label="Date" value={formatDate(activity.date)} />
          <Row icon={Clock} label="Time" value={`${activity.startTime} - ${activity.endTime}`} />
        </div>
        <div className="flex flex-col gap-4">
          <Row icon={MapPin} label="Location" value={activity.location} />
          <Row icon={Users} label="Target Audience" value={activity.targetAudience} />
          <Row icon={Users2} label="Expected Participants" value={activity.expectedParticipants} />
          <Row icon={HeartHandshake} label="People Reached" value={activity.peopleReached} />
          <Row icon={Users2} label="Volunteers Involved" value={activity.volunteersInvolved} />
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-surface-canvas text-ink-subtle">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs text-ink-subtle">Status</p>
              <div className="mt-1">
                <Badge variant={OUTREACH_STATUS_BADGE_MAP[activity.status] ?? "info"}>{activity.status}</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
