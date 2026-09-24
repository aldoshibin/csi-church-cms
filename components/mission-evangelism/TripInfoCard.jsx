"use client";

import {
  Plane, Building2, MapPin, Flag, Calendar, CalendarDays, ShieldCheck, User, Users2, HeartHandshake, Coins, Globe2,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatDate, formatCurrency } from "@/lib/utils";
import { TRIP_STATUS_BADGE_MAP } from "@/lib/mock/vmMissionEvangelismMockData";

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

export function TripInfoCard({ trip }) {
  if (!trip) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Trip Information</h3>
      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-4">
          <Row icon={Plane} label="Trip Name" value={trip.name} />
          <Row icon={Building2} label="Category" value={trip.category} />
          <Row icon={MapPin} label="Destination" value={trip.destination} />
          <Row icon={Flag} label="Purpose" value={trip.purpose} />
          <Row icon={Calendar} label="Start Date" value={formatDate(trip.startDate)} />
          <Row icon={Calendar} label="End Date" value={formatDate(trip.endDate)} />
          <Row icon={CalendarDays} label="Days of Outreach" value={trip.daysOfOutreach} />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-surface-canvas text-ink-subtle">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs text-ink-subtle">Status</p>
              <div className="mt-1">
                <Badge variant={TRIP_STATUS_BADGE_MAP[trip.status] ?? "info"}>{trip.status}</Badge>
              </div>
            </div>
          </div>
          <Row icon={User} label="Organized By" value={trip.organizedBy} />
          <Row icon={User} label="Coordinator" value={trip.coordinatorName} />
          <Row icon={Users2} label="Total Participants" value={trip.totalParticipants} />
          <Row icon={HeartHandshake} label="Volunteers" value={trip.volunteers} />
          <Row icon={Coins} label="Total Expenditure" value={formatCurrency(trip.totalExpenditure)} />
          <Row icon={Globe2} label="Visibility" value={trip.visibility} />
        </div>
      </div>
    </div>
  );
}
