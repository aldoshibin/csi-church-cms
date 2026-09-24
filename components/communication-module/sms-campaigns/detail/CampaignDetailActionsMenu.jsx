"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MoreVertical, RotateCcw, Copy, Download, Trash2 } from "lucide-react";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function CampaignDetailActionsMenu({ onResend, onDuplicate, onDownload, onDelete }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button type="button" className="flex h-10 items-center gap-1.5 rounded-md border border-border bg-white px-3 text-sm font-medium text-ink hover:bg-surface-canvas">
          <MoreVertical className="h-4 w-4" /> Actions
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-56 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
          <DropdownMenu.Item className={menuItemClass} onSelect={onResend}><RotateCcw className="h-4 w-4" /> Resend Campaign</DropdownMenu.Item>
          <DropdownMenu.Item className={menuItemClass} onSelect={onDuplicate}><Copy className="h-4 w-4" /> Duplicate Campaign</DropdownMenu.Item>
          <DropdownMenu.Item className={menuItemClass} onSelect={onDownload}><Download className="h-4 w-4" /> Download Report</DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`} onSelect={onDelete}><Trash2 className="h-4 w-4" /> Delete Campaign</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
