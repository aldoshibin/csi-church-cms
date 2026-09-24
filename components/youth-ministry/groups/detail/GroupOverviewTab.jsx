"use client";

import Link from "next/link";
import { UsersRound, User, Calendar, MapPin, Music, BookOpen, HandHeart } from "lucide-react";
import { formatDate } from "@/lib/utils";

const ACTIVITY_ICON = { music: Music, book: BookOpen, group: HandHeart };

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-xs text-ink-subtle">{label}</p>
        <p className="mt-0.5 text-sm font-medium text-ink">{value}</p>
      </div>
    </div>
  );
}

export function GroupOverviewTab({ group }) {
  return (
    <div>
      <div className="rounded-lg bg-surface-canvas p-5">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-success-50">
            <UsersRound className="h-6 w-6 text-success-600" />
          </span>
          <div className="grid flex-1 grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div>
              <p className="text-xs text-ink-subtle">Group Name</p>
              <p className="mt-0.5 text-sm font-semibold text-ink">{group.name}</p>
            </div>
            <InfoItem icon={User} label="Leader" value={group.leader} />
            <div>
              <p className="text-xs text-ink-subtle">Age Group</p>
              <p className="mt-0.5 text-sm font-medium text-ink">{group.ageGroup}</p>
            </div>
            <InfoItem icon={Calendar} label="Meeting Day & Time" value={group.meetingDayTime} />
            <div>
              <p className="text-xs text-ink-subtle">Group Type</p>
              <p className="mt-0.5 text-sm font-medium text-ink">{group.groupType}</p>
            </div>
            <InfoItem icon={MapPin} label="Location" value={group.location} />
            <div className="sm:col-span-2">
              <p className="text-xs text-ink-subtle">Description</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">{group.description}</p>
            </div>
            <InfoItem icon={Calendar} label="Created On" value={formatDate(group.createdOn)} />
            <InfoItem icon={Calendar} label="Last Updated" value={`${formatDate(group.lastUpdated)} by ${group.lastUpdatedBy}`} />
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-border pt-5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-base font-semibold text-ink">Members Preview</h3>
          <Link href="/youth-ministry/youth-groups" className="text-sm font-medium text-interactive-500 hover:underline">View All Members</Link>
        </div>
        <div className="flex flex-wrap gap-6">
          {group.membersPreview.map((m) => (
            <div key={m.name} className="flex flex-col items-center gap-1.5 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-interactive-50 text-sm font-semibold text-interactive-600">{m.initials}</span>
              <p className="text-xs font-medium text-ink">{m.name}</p>
              <p className="text-xs text-ink-subtle">Age {m.age}</p>
            </div>
          ))}
          {group.moreMembersCount > 0 && (
            <div className="flex flex-col items-center gap-1.5 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-surface-muted text-sm font-semibold text-ink-subtle">+{group.moreMembersCount}</span>
              <p className="text-xs font-medium text-ink">More Members</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 border-t border-border pt-5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-base font-semibold text-ink">Recent Activities</h3>
          <Link href="/youth-ministry/youth-groups" className="text-sm font-medium text-interactive-500 hover:underline">View All Activities</Link>
        </div>
        <div className="flex flex-col divide-y divide-surface-muted">
          {group.recentActivities.map((a, i) => {
            const Icon = ACTIVITY_ICON[a.icon] ?? Music;
            return (
              <div key={i} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${a.color}1A` }}>
                  <Icon className="h-4 w-4" style={{ color: a.color }} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-ink">{a.title}</p>
                  <p className="text-xs text-ink-subtle">{formatDate(a.date)} · {a.time}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-ink">{a.attendees}</p>
                  <p className="text-xs text-ink-subtle">Attendees</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
