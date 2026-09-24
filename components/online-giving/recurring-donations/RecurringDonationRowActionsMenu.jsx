"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MoreVertical, Pencil, PauseCircle, XCircle, CreditCard } from "lucide-react";

const itemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function RecurringDonationRowActionsMenu({ subscription, onEdit, onPause, onCancel, onUpdatePaymentMethod }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          onClick={(e) => e.stopPropagation()}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas"
          aria-label={`More actions for ${subscription.id}`}
        >
          <MoreVertical className="h-4 w-4" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-52 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
          <DropdownMenu.Item className={itemClass} onSelect={() => onEdit?.(subscription)}>
            <Pencil className="h-4 w-4" /> Edit Subscription
          </DropdownMenu.Item>
          <DropdownMenu.Item className={itemClass} onSelect={() => onPause?.(subscription)}>
            <PauseCircle className="h-4 w-4" /> Pause Subscription
          </DropdownMenu.Item>
          <DropdownMenu.Item className={itemClass} onSelect={() => onUpdatePaymentMethod?.(subscription)}>
            <CreditCard className="h-4 w-4" /> Update Payment Method
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item className={`${itemClass} text-danger-600 hover:text-danger-600`} onSelect={() => onCancel?.(subscription)}>
            <XCircle className="h-4 w-4" /> Cancel Subscription
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
