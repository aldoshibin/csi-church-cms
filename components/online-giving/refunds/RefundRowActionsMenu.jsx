"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MoreVertical, CreditCard, Download, Receipt, XCircle } from "lucide-react";

const itemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function RefundRowActionsMenu({ refund, onViewPayment, onDownloadInvoice, onRefundReceipt, onCancel }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          onClick={(e) => e.stopPropagation()}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas"
          aria-label={`More actions for ${refund.id}`}
        >
          <MoreVertical className="h-4 w-4" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-48 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
          <DropdownMenu.Item className={itemClass} onSelect={() => onViewPayment?.(refund)}>
            <CreditCard className="h-4 w-4" /> View Payment
          </DropdownMenu.Item>
          <DropdownMenu.Item className={itemClass} onSelect={() => onDownloadInvoice?.(refund)}>
            <Download className="h-4 w-4" /> Download Invoice
          </DropdownMenu.Item>
          <DropdownMenu.Item className={itemClass} onSelect={() => onRefundReceipt?.(refund)}>
            <Receipt className="h-4 w-4" /> Refund Receipt
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item className={`${itemClass} text-danger-600 hover:text-danger-600`} onSelect={() => onCancel?.(refund)}>
            <XCircle className="h-4 w-4" /> Cancel Refund
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
