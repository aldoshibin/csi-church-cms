"use client";

import { Phone, Mail, Users, MapPin, Laptop } from "lucide-react";
import { GROUP_TYPE_BADGE } from "@/lib/mock/prayerGroupsMockData";

function Card({ label, children }) {
  return (
    <div className="rounded-lg border border-border p-3">
      <p className="mb-1.5 text-xs text-ink-subtle">{label}</p>
      {children}
    </div>
  );
}

export function PrayerGroupInfoGrid({ group }) {
  const typeStyle = GROUP_TYPE_BADGE[group.type] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <Card label="Leader">
        <p className="text-sm font-semibold text-ink">{group.leader}</p>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-subtle"><Phone className="h-3 w-3" /> {group.leaderPhone}</p>
        <p className="mt-0.5 flex items-center gap-1.5 text-xs text-ink-subtle"><Mail className="h-3 w-3" /> {group.leaderEmail}</p>
      </Card>
      <Card label="Group Type">
        <span className={`inline-flex rounded-sm px-2.5 py-1 text-xs font-medium ${typeStyle.bg} ${typeStyle.color}`}>{group.type}</span>
      </Card>
      <Card label="Meeting Day &amp; Time">
        <p className="text-sm font-semibold text-ink">{group.meetingDay}</p>
        <p className="mt-0.5 text-xs text-ink-subtle">{group.meetingTime}</p>
      </Card>
      <Card label="Location">
        <p className="flex items-center gap-1.5 text-sm font-semibold text-ink"><MapPin className="h-3.5 w-3.5 text-ink-subtle" /> {group.location}</p>
        <p className="mt-0.5 text-xs text-ink-subtle">{group.locationDetail}</p>
      </Card>

      <Card label="Members">
        <p className="flex items-center gap-1.5 text-sm font-semibold text-ink"><Users className="h-3.5 w-3.5 text-ink-subtle" /> {group.members} Members</p>
      </Card>
      <Card label="Meeting Mode">
        <p className="flex items-center gap-1.5 text-sm font-semibold text-ink"><Laptop className="h-3.5 w-3.5 text-ink-subtle" /> {group.meetingMode}</p>
      </Card>
      <Card label="Language">
        <p className="text-sm font-semibold text-ink">{group.language}</p>
      </Card>
      <div />
    </div>
  );
}
