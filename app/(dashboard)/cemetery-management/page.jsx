"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCemeteryOverview } from "@/hooks/useCemeteryOverview";
import { OverviewTabs } from "@/components/cemetery-management/overview/OverviewTabs";
import { OverviewTabPlaceholder } from "@/components/cemetery-management/overview/OverviewTabPlaceholder";
import { RecentBurialsTab } from "@/components/cemetery-management/overview/RecentBurialsTab";
import { PlotOccupancyDonutCard } from "@/components/cemetery-management/overview/PlotOccupancyDonutCard";
import { BurialsByYearChart } from "@/components/cemetery-management/overview/BurialsByYearChart";
import { MaintenanceRemindersCard } from "@/components/cemetery-management/overview/MaintenanceRemindersCard";
import { RecentDocumentsCard } from "@/components/cemetery-management/overview/RecentDocumentsCard";
import { CemeteryQuickActions } from "@/components/cemetery-management/overview/CemeteryQuickActions";

export default function CemeteryManagementOverviewPage() {
  const { donut, burialsByYear, maintenanceReminders, recentDocuments } = useCemeteryOverview();
  const [activeTab, setActiveTab] = useState("Recent Burials");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-ink">Cemetery Management</h1>
          <p className="mt-1 text-sm text-ink-subtle">Manage burial records, plots, and cemetery information.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/cemetery-management/plot-map">
            <Button variant="secondary" leftIcon={<MapPin className="h-4 w-4" />}>Plot Map View</Button>
          </Link>
          <Link href="/cemetery-management/burial-records/add">
            <Button variant="success" leftIcon={<Plus className="h-4 w-4" />} rightIcon={<ChevronDown className="h-3.5 w-3.5" />}>
              Add Burial Record
            </Button>
          </Link>
        </div>
      </div>

      <OverviewTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div>
          {activeTab === "Recent Burials" && <RecentBurialsTab />}
          {activeTab === "Plots" && <OverviewTabPlaceholder label="Plots" />}
          {activeTab === "Upcoming Burials" && <OverviewTabPlaceholder label="Upcoming Burials" />}
          {activeTab === "Maintenance Due" && <OverviewTabPlaceholder label="Maintenance Due" />}
        </div>

        <div className="flex flex-col gap-6">
          <PlotOccupancyDonutCard data={donut} viewMapHref="/cemetery-management/plot-map" />
          <BurialsByYearChart data={burialsByYear} />
          <CemeteryQuickActions />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <MaintenanceRemindersCard reminders={maintenanceReminders} />
        <RecentDocumentsCard documents={recentDocuments} />
      </div>
    </div>
  );
}
