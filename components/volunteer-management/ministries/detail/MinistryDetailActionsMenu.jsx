"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Eye, UsersRound, UserPlus, Users2, ClipboardList, Ban, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function MinistryDetailActionsMenu({ onViewDetails, onAddTeam, onAssignVolunteers, onViewVolunteers, onViewAssignments, onDeactivate, onDelete }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button type="button" variant="secondary" rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>Actions</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-56 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
          <DropdownMenu.Item className={menuItemClass} onSelect={onViewDetails}><Eye className="h-4 w-4" /> View Details</DropdownMenu.Item>
          <DropdownMenu.Item className={menuItemClass} onSelect={onAddTeam}><UsersRound className="h-4 w-4" /> Add Team</DropdownMenu.Item>
          <DropdownMenu.Item className={menuItemClass} onSelect={onAssignVolunteers}><UserPlus className="h-4 w-4" /> Assign Volunteers</DropdownMenu.Item>
          <DropdownMenu.Item className={menuItemClass} onSelect={onViewVolunteers}><Users2 className="h-4 w-4" /> View Volunteers</DropdownMenu.Item>
          <DropdownMenu.Item className={menuItemClass} onSelect={onViewAssignments}><ClipboardList className="h-4 w-4" /> View Assignments</DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`} onSelect={onDeactivate}><Ban className="h-4 w-4" /> Deactivate Ministry</DropdownMenu.Item>
          <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`} onSelect={onDelete}><Trash2 className="h-4 w-4" /> Delete Ministry</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
