"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MoreVertical, Eye, Pencil, Users, UserCog, CalendarClock, Ban, Trash2 } from "lucide-react";

const itemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function YouthGroupRowActionsMenu({ group, onView, onEdit, onManageMembers, onManageLeaders, onGroupAttendance, onDeactivate, onDelete }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          onClick={(e) => e.stopPropagation()}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas"
          aria-label={`More actions for ${group.name}`}
        >
          <MoreVertical className="h-4 w-4" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-52 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
          <DropdownMenu.Item className={itemClass} onSelect={() => onView?.(group)}>
            <Eye className="h-4 w-4" /> View Details
          </DropdownMenu.Item>
          <DropdownMenu.Item className={itemClass} onSelect={() => onEdit?.(group)}>
            <Pencil className="h-4 w-4" /> Edit Group
          </DropdownMenu.Item>
          <DropdownMenu.Item className={itemClass} onSelect={() => onManageMembers?.(group)}>
            <Users className="h-4 w-4" /> Manage Members
          </DropdownMenu.Item>
          <DropdownMenu.Item className={itemClass} onSelect={() => onManageLeaders?.(group)}>
            <UserCog className="h-4 w-4" /> Manage Leaders
          </DropdownMenu.Item>
          <DropdownMenu.Item className={itemClass} onSelect={() => onGroupAttendance?.(group)}>
            <CalendarClock className="h-4 w-4" /> Group Attendance
          </DropdownMenu.Item>
          <DropdownMenu.Item className={itemClass} onSelect={() => onDeactivate?.(group)}>
            <Ban className="h-4 w-4" /> Deactivate Group
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item className={`${itemClass} text-danger-600 hover:text-danger-600`} onSelect={() => onDelete?.(group)}>
            <Trash2 className="h-4 w-4" /> Delete Group
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
