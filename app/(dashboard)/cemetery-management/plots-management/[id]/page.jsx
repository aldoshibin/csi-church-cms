"use client";

import { useParams, useRouter } from "next/navigation";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ArrowLeft, Pencil, MoreHorizontal, ChevronDown, Printer, ArrowLeftRight, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { usePlotDetail } from "@/hooks/usePlotDetail";
import { PlotInformationCard } from "@/components/cemetery-management/plots-management/detail/PlotInformationCard";
import { PlotLocationInformationCard } from "@/components/cemetery-management/plots-management/detail/PlotLocationInformationCard";
import { PlotBurialInformationCard } from "@/components/cemetery-management/plots-management/detail/PlotBurialInformationCard";
import { PlotFamilyContactCard } from "@/components/cemetery-management/plots-management/detail/PlotFamilyContactCard";
import { SectionAvailabilityDonutCard } from "@/components/cemetery-management/plots-management/detail/SectionAvailabilityDonutCard";
import { PlotMapGridCard } from "@/components/cemetery-management/plots-management/detail/PlotMapGridCard";
import { PlotDocumentsCard } from "@/components/cemetery-management/plots-management/detail/PlotDocumentsCard";
import { PlotDetailQuickActionsCard } from "@/components/cemetery-management/plots-management/detail/PlotDetailQuickActionsCard";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export default function PlotDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { plot, sectionAvailability, isLoading } = usePlotDetail(id);

  if (isLoading) {
    return <div className="h-64 animate-pulse rounded-lg border border-border bg-surface-muted" />;
  }

  const isOccupied = plot.status === "Occupied" && plot.burial;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Button type="button" variant="ghost" size="sm" onClick={() => router.back()} leftIcon={<ArrowLeft className="h-4 w-4" />}>
            Back to Plots
          </Button>
          <h1 className="mt-1 text-2xl font-semibold text-ink">Plot Details - {plot.plotNumber}</h1>
          <p className="text-sm text-ink-subtle">View complete information about this cemetery plot.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button type="button" variant="secondary" leftIcon={<Pencil className="h-4 w-4" />}>
            Edit Plot
          </Button>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button type="button" variant="secondary" leftIcon={<MoreHorizontal className="h-4 w-4" />} rightIcon={<ChevronDown className="h-3.5 w-3.5" />}>
                More Actions
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-48 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
                <DropdownMenu.Item className={menuItemClass}><Printer className="h-4 w-4" /> Print Details</DropdownMenu.Item>
                <DropdownMenu.Item className={menuItemClass}><ArrowLeftRight className="h-4 w-4" /> Move Plot</DropdownMenu.Item>
                <DropdownMenu.Separator className="my-1 h-px bg-border" />
                <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}><Trash2 className="h-4 w-4" /> Delete Plot</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-5">
          <PlotInformationCard plot={plot} />
          <PlotLocationInformationCard plot={plot} />
          {isOccupied && <PlotBurialInformationCard burial={plot.burial} />}
          {isOccupied && <PlotFamilyContactCard familyContact={plot.familyContact} />}
        </div>

        <div className="flex flex-col gap-6">
          <SectionAvailabilityDonutCard data={sectionAvailability} />
          <PlotMapGridCard plotMap={plot.plotMap} />
          <PlotDocumentsCard documents={plot.documents} />
          <PlotDetailQuickActionsCard />
        </div>
      </div>
    </div>
  );
}
