"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/navigation";
import { Eye, MoreVertical, Download, HandCoins } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Table } from "@/components/ui/Table";
import { formatDate, formatCurrency, getInitials } from "@/lib/utils";
import { DONATION_PAYMENT_METHOD_BADGE_MAP } from "@/lib/mock/vmMissionEvangelismMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

const AVATAR_COLORS = [
  "bg-[#DCFCE7] text-[#16A34A]",
  "bg-[#F3E8FF] text-[#7C3AED]",
  "bg-[#DBEAFE] text-[#2563EB]",
  "bg-[#FFEDD5] text-[#EA580C]",
];

export function DonationsTable({ donations, isLoading, page, pageSize, totalCount, onPageChange, emptyMessage = "No donations found." }) {
  const router = useRouter();
  const handleView = (d) => router.push(`/mission-evangelism/donations/${d.id}`);

  const columns = [
    { key: "date", header: "Date", render: (d) => <span className="text-ink">{formatDate(d.date)}</span> },
    { key: "donor", header: "Donor", render: (d, index) => (
      <button type="button" onClick={() => handleView(d)} className="flex items-center gap-2 text-left">
        <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${AVATAR_COLORS[index % AVATAR_COLORS.length]}`}>
          {getInitials(d.donorName)}
        </span>
        <span className="font-medium text-interactive-600 hover:underline">{d.donorName}</span>
      </button>
    ) },
    { key: "fund", header: "Fund / Purpose", render: (d) => <span className="text-ink">{d.fund}</span> },
    { key: "amount", header: "Amount", render: (d) => <span className="font-medium text-ink">{formatCurrency(d.amount)}</span> },
    { key: "method", header: "Payment Method", render: (d) => <Badge variant={DONATION_PAYMENT_METHOD_BADGE_MAP[d.method] ?? "info"}>{d.method}</Badge> },
    { key: "receipt", header: "Receipt No.", render: (d) => <span className="text-ink">{d.id}</span> },
    { key: "actions", header: "Actions", render: (d) => (
      <div className="flex items-center gap-1">
        <button type="button" onClick={() => handleView(d)} className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="View donation">
          <Eye className="h-4 w-4" />
        </button>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
              <MoreVertical className="h-4 w-4" />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-48 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
              <DropdownMenu.Item className={menuItemClass} onSelect={() => handleView(d)}><Eye className="h-4 w-4" /> View Donation</DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass}><Download className="h-4 w-4" /> Download Receipt</DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass}><HandCoins className="h-4 w-4" /> Issue Refund</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    ) },
  ];

  return (
    <Table
      columns={columns} data={donations} isLoading={isLoading}
      emptyMessage={emptyMessage}
      pagination={{ page, pageSize, totalCount, onPageChange }}
    />
  );
}
