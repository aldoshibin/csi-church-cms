"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MoreVertical, Eye, Pencil, Users2, Megaphone, Ban, Trash2 } from "lucide-react";

const itemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function ActivityRowActionsMenu({ activity, onViewDetails, onEdit, onManageParticipants, onSendAnnouncement, onCancel, onDelete }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          onClick={(e) => e.stopPropagation()}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas"
          aria-label={`More actions for ${activity.title}`}
        >
          <MoreVertical className="h-4 w-4" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-52 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
          <DropdownMenu.Item className={itemClass} onSelect={() => onViewDetails?.(activity)}>
            <Eye className="h-4 w-4" /> View Details
          </DropdownMenu.Item>
          <DropdownMenu.Item className={itemClass} onSelect={() => onEdit?.(activity)}>
            <Pencil className="h-4 w-4" /> Edit Activity
          </DropdownMenu.Item>
          <DropdownMenu.Item className={itemClass} onSelect={() => onManageParticipants?.(activity)}>
            <Users2 className="h-4 w-4" /> Manage Participants
          </DropdownMenu.Item>
          <DropdownMenu.Item className={itemClass} onSelect={() => onSendAnnouncement?.(activity)}>
            <Megaphone className="h-4 w-4" /> Send Announcement
          </DropdownMenu.Item>
          <DropdownMenu.Item className={itemClass} onSelect={() => onCancel?.(activity)}>
            <Ban className="h-4 w-4" /> Cancel Activity
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item className={`${itemClass} text-danger-600 hover:text-danger-600`} onSelect={() => onDelete?.(activity)}>
            <Trash2 className="h-4 w-4" /> Delete Activity
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
