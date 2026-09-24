"use client";

import {
  Users2, Building2, User, MapPin, Calendar, Clock, Users, HeartHandshake, ShieldCheck, Coins, Globe2,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatDate, formatCurrency } from "@/lib/utils";
import { PROGRAM_STATUS_BADGE_MAP } from "@/lib/mock/vmMissionEvangelismMockData";

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

export function ProgramSummaryCard({ program }) {
  if (!program) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Program Summary</h3>
      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-4">
          <Row icon={Users2} label="Program Name" value={program.name} />
          <Row icon={Building2} label="Category" value={program.category} />
          <Row icon={User} label="Organized By" value={program.organizedBy} />
          <Row icon={User} label="In-Charge / Coordinator" value={program.coordinatorName} />
          <Row icon={MapPin} label="Location" value={program.location} />
          <Row icon={Calendar} label="Date" value={formatDate(program.date)} />
          <Row icon={Clock} label="Time" value={`${program.startTime} - ${program.endTime}`} />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-surface-canvas text-ink-subtle">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs text-ink-subtle">Status</p>
              <div className="mt-1">
                <Badge variant={PROGRAM_STATUS_BADGE_MAP[program.status] ?? "info"}>{program.status}</Badge>
              </div>
            </div>
          </div>
          <Row icon={Users} label="Target Audience" value={program.targetAudience} />
          <Row icon={Users2} label="Expected Participants" value={program.expectedParticipants} />
          <Row icon={HeartHandshake} label="People Reached" value={program.peopleReached} />
          <Row icon={Users2} label="Volunteers Involved" value={program.volunteersInvolved} />
          <Row icon={Coins} label="Total Expenditure" value={formatCurrency(program.totalExpenditure)} />
          <Row icon={Globe2} label="Visibility" value={program.visibility} />
        </div>
      </div>
    </div>
  );
}
