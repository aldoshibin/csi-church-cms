"use client";

import { Users2, MoreVertical, Pencil } from "lucide-react";
import { SlideOverDrawer } from "@/components/ui/SlideOverDrawer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GROUP_STATUS_VARIANT } from "@/lib/mock/prayerGroupsMockData";
import { PrayerGroupInfoGrid } from "./PrayerGroupInfoGrid";
import { GroupFocusCard, RecentPrayerTopicsCard } from "./GroupFocusTopicsCards";
import { GroupMembersCard, GroupDetailUpcomingMeetingsCard } from "./GroupMembersMeetingsCards";

export function PrayerGroupDetailsDrawer({ open, onOpenChange, group, isLoading, onEdit, onDeactivate }) {
  return (
    <SlideOverDrawer open={open} onOpenChange={onOpenChange} title="Prayer Group Details" width="700px">
      {isLoading || !group ? (
        <div className="py-16 text-center text-sm text-ink-subtle">Loading…</div>
      ) : (
        <div className="flex flex-col gap-6">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-interactive-50 text-interactive-600">
                <Users2 className="h-6 w-6" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-ink">{group.name}</h3>
                  <Badge variant={GROUP_STATUS_VARIANT[group.status] ?? "default"}>{group.status}</Badge>
                </div>
                <p className="mt-0.5 text-xs text-ink-subtle">{group.type} Group · Group ID: {group.id}</p>
                <p className="mt-1 text-sm text-ink-muted">{group.tagline}</p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <Button type="button" variant="secondary" size="sm" leftIcon={<Pencil className="h-3.5 w-3.5" />} onClick={() => onEdit?.(group)}>Edit Group</Button>
              <button type="button" className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
                <MoreVertical className="h-4 w-4" />
              </button>
            </div>
          </div>

          <PrayerGroupInfoGrid group={group} />

          <div>
            <h4 className="mb-2 text-sm font-semibold text-ink">About This Group</h4>
            <p className="text-sm leading-relaxed text-ink-muted">{group.description}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <GroupFocusCard focus={group.focus} />
            <RecentPrayerTopicsCard topics={group.recentTopics} />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <GroupMembersCard count={group.memberAvatarsCount} extra={group.memberAvatarsExtra} />
            <GroupDetailUpcomingMeetingsCard meetings={group.upcomingMeetings} />
          </div>

          <div className="flex flex-wrap justify-between gap-2 border-t border-border pt-4">
            <Button
              type="button" variant="secondary"
              className="border-danger-200 text-danger-600 hover:bg-danger-50"
              disabled={group.status === "Inactive"}
              onClick={onDeactivate}
            >
              Deactivate Group
            </Button>
            <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>Close</Button>
          </div>
        </div>
      )}
    </SlideOverDrawer>
  );
}
