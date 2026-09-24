"use client";

import { useParams, useRouter } from "next/navigation";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ArrowLeft, Printer, Pencil, MoreHorizontal, Copy, Trash2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useBurialRecordDetail } from "@/hooks/useBurialRecordDetail";
import { DeceasedInformationCard } from "@/components/cemetery-management/burial-records/detail/DeceasedInformationCard";
import { BurialInformationCard } from "@/components/cemetery-management/burial-records/detail/BurialInformationCard";
import { FamilyContactInformationCard } from "@/components/cemetery-management/burial-records/detail/FamilyContactInformationCard";
import { BurialStatusSidebarCard } from "@/components/cemetery-management/burial-records/detail/BurialStatusSidebarCard";
import { PlotLocationSidebarCard } from "@/components/cemetery-management/burial-records/detail/PlotLocationSidebarCard";
import { PlotMapMiniCard } from "@/components/cemetery-management/burial-records/detail/PlotMapMiniCard";
import { DocumentsSidebarCard } from "@/components/cemetery-management/burial-records/detail/DocumentsSidebarCard";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export default function BurialRecordDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { record, isLoading } = useBurialRecordDetail(id);

  if (isLoading) {
    return <div className="h-64 animate-pulse rounded-lg border border-border bg-surface-muted" />;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Button type="button" variant="ghost" size="sm" onClick={() => router.back()} leftIcon={<ArrowLeft className="h-4 w-4" />}>
            Back to Burial Records
          </Button>
          <h1 className="mt-1 text-2xl font-semibold text-ink">Burial Record Details</h1>
          <p className="text-sm text-ink-subtle">View detailed information about the burial record.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button type="button" variant="secondary" leftIcon={<Pencil className="h-4 w-4" />}>
            Edit Record
          </Button>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button type="button" variant="secondary" leftIcon={<MoreHorizontal className="h-4 w-4" />} rightIcon={<ChevronDown className="h-3.5 w-3.5" />}>
                More Actions
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-48 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
                <DropdownMenu.Item className={menuItemClass}><Printer className="h-4 w-4" /> Print Record</DropdownMenu.Item>
                <DropdownMenu.Item className={menuItemClass}><Copy className="h-4 w-4" /> Duplicate Record</DropdownMenu.Item>
                <DropdownMenu.Separator className="my-1 h-px bg-border" />
                <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}><Trash2 className="h-4 w-4" /> Delete Record</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-5">
          <DeceasedInformationCard deceased={record.deceased} photoUrl={record.photoUrl} />
          <BurialInformationCard burial={record.burial} recordNumber={record.recordNumber} status={record.status} />
          <FamilyContactInformationCard familyContacts={record.familyContacts} address={record.address} email={record.email} />

          <div className="flex items-center justify-between">
            <Button type="button" variant="secondary" onClick={() => router.back()} leftIcon={<ArrowLeft className="h-4 w-4" />}>
              Back to Burial Records
            </Button>
            <Button type="button" variant="secondary" leftIcon={<Printer className="h-4 w-4" />}>
              Print Record
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <BurialStatusSidebarCard status={record.status} createdOn={record.createdOn} updatedOn={record.updatedOn} />
          <PlotLocationSidebarCard plot={record.plot} />
          <PlotMapMiniCard plotMap={record.plotMap} />
          <DocumentsSidebarCard documents={record.documents} />
        </div>
      </div>
    </div>
  );
}
