"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { UserRound, Pencil, MoreVertical, Download, Ban } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { usePositionDetail } from "@/hooks/usePositionDetail";
import { PositionInfoCard } from "@/components/election-management/PositionInfoCard";
import { PositionUsageCard } from "@/components/election-management/PositionUsageCard";
import { PositionResponsibilitiesCard } from "@/components/election-management/PositionResponsibilitiesCard";
import { PositionCurrentHolderCard } from "@/components/election-management/PositionCurrentHolderCard";
import { PositionHistoryTable } from "@/components/election-management/PositionHistoryTable";
import { QuickActionsCard } from "@/components/election-management/QuickActionsCard";
import { PositionAuditTrailCard } from "@/components/election-management/PositionAuditTrailCard";
import { POSITION_VIEW_QUICK_ACTIONS } from "@/lib/mock/vmPositionsMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function PositionDetailView({ id }) {
  const { position, isLoading } = usePositionDetail(id);

  if (isLoading || !position) {
    return <div className="h-64 animate-pulse rounded-lg bg-surface-muted" />;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
            <UserRound className="h-6 w-6" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold text-ink">{position.name}</h1>
              <Badge variant={position.status === "Active" ? "success" : "danger"}>{position.status}</Badge>
            </div>
            <p className="mt-1 text-sm text-ink-subtle">{position.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<Pencil className="h-4 w-4" />}>Edit Position</Button>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button type="button" variant="secondary" leftIcon={<MoreVertical className="h-4 w-4" />}>More</Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-52 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
                <DropdownMenu.Item className={menuItemClass}><Download className="h-4 w-4" /> Export Position</DropdownMenu.Item>
                <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}>
                  <Ban className="h-4 w-4" /> Deactivate Position
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <PositionInfoCard position={position} />
            <PositionUsageCard elections={position.usedInElections} />
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <PositionResponsibilitiesCard responsibilities={position.responsibilities} />
            <PositionCurrentHolderCard holder={position.currentHolder} />
          </div>
          <PositionHistoryTable history={position.history} />
        </div>

        <div className="flex flex-col gap-6">
          <QuickActionsCard actions={POSITION_VIEW_QUICK_ACTIONS} />
          <PositionAuditTrailCard auditTrail={position.auditTrail} />
        </div>
      </div>
    </div>
  );
}
