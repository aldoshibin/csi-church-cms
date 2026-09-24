"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MoreVertical, ChevronDown, RotateCcw, Mail, Copy, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function MessageDetailActionsMenu({ onResend, onFollowUp, onDuplicate, onDelete }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button type="button" variant="secondary" leftIcon={<MoreVertical className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
          Actions
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-56 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
          <DropdownMenu.Item className={menuItemClass} onSelect={onResend}><RotateCcw className="h-4 w-4" /> Resend Message</DropdownMenu.Item>
          <DropdownMenu.Item className={menuItemClass} onSelect={onFollowUp}><Mail className="h-4 w-4" /> Create Follow-up Message</DropdownMenu.Item>
          <DropdownMenu.Item className={menuItemClass} onSelect={onDuplicate}><Copy className="h-4 w-4" /> Duplicate Message</DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`} onSelect={onDelete}><Trash2 className="h-4 w-4" /> Delete Message</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
