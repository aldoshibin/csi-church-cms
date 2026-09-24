"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MoreVertical, Pencil, Copy, Ban, Trash2 } from "lucide-react";

const itemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function PaymentLinkRowActionsMenu({ link, onEdit, onDuplicate, onDeactivate, onDelete }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          onClick={(e) => e.stopPropagation()}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas"
          aria-label={`More actions for ${link.linkName}`}
        >
          <MoreVertical className="h-4 w-4" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-48 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
          <DropdownMenu.Item className={itemClass} onSelect={() => onEdit?.(link)}>
            <Pencil className="h-4 w-4" /> Edit Link
          </DropdownMenu.Item>
          <DropdownMenu.Item className={itemClass} onSelect={() => onDuplicate?.(link)}>
            <Copy className="h-4 w-4" /> Duplicate Link
          </DropdownMenu.Item>
          <DropdownMenu.Item className={itemClass} onSelect={() => onDeactivate?.(link)}>
            <Ban className="h-4 w-4" /> Deactivate Link
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item className={`${itemClass} text-danger-600 hover:text-danger-600`} onSelect={() => onDelete?.(link)}>
            <Trash2 className="h-4 w-4" /> Delete Link
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
