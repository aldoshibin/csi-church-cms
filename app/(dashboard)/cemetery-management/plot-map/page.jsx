"use client";

import Link from "next/link";
import { Info, Plus, ChevronDown, List, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { usePlotMap } from "@/hooks/usePlotMap";
import { SectionsListCard } from "@/components/cemetery-management/plot-map/SectionsListCard";
import { ZoomControlsCard } from "@/components/cemetery-management/plot-map/ZoomControlsCard";
import { MapNavigationCard } from "@/components/cemetery-management/plot-map/MapNavigationCard";
import { MapLegend } from "@/components/cemetery-management/plot-map/MapLegend";
import { PlotMapGrid } from "@/components/cemetery-management/plot-map/PlotMapGrid";
import { MapTipBar } from "@/components/cemetery-management/plot-map/MapTipBar";
import { MapOverviewDonutCard } from "@/components/cemetery-management/plot-map/MapOverviewDonutCard";
import { SectionSummaryTable } from "@/components/cemetery-management/plot-map/SectionSummaryTable";
import { PlotMapQuickActions } from "@/components/cemetery-management/plot-map/PlotMapQuickActions";
import { PLOT_TYPE_SHORT_OPTIONS, SECTION_OPTIONS } from "@/lib/mock/vmCemeteryMockData";

export default function PlotMapPage() {
  const {
    sections, sectionSearch, setSectionSearch, selectedSection, setSelectedSection, sectionMap,
    donut, sectionSummary,
  } = usePlotMap();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-ink">Plot Map</h1>
          <p className="mt-1 text-sm text-ink-subtle">Visual overview of cemetery plots by section, row and grave number.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" leftIcon={<Info className="h-4 w-4" />}>Map Guide</Button>
          <Link href="/cemetery-management/plots-management/add">
            <Button variant="success" leftIcon={<Plus className="h-4 w-4" />} rightIcon={<ChevronDown className="h-3.5 w-3.5" />}>
              Add New Plot
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <select className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Sections</option>
          {SECTION_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </select>
        <select className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Plot Types</option>
          {PLOT_TYPE_SHORT_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </select>
        <div className="flex items-center gap-3 rounded-md border border-border bg-white px-3 py-1.5">
          <MapLegend />
        </div>
        <Link href="/cemetery-management/plots-management">
          <Button variant="secondary" leftIcon={<List className="h-4 w-4" />}>List View</Button>
        </Link>
        <Button variant="secondary" leftIcon={<RotateCw className="h-4 w-4" />}>Reset View</Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr_300px]">
        <div className="flex flex-col gap-6">
          <SectionsListCard
            sections={sections} search={sectionSearch} onSearchChange={setSectionSearch}
            selectedSection={selectedSection} onSelectSection={setSelectedSection}
          />
          <ZoomControlsCard />
          <MapNavigationCard />
        </div>

        <div className="flex flex-col gap-4">
          <PlotMapGrid sectionMap={sectionMap} />
          <MapTipBar />
        </div>

        <div className="flex flex-col gap-6">
          <MapOverviewDonutCard data={donut} />
          <SectionSummaryTable summary={sectionSummary} />
          <PlotMapQuickActions />
        </div>
      </div>
    </div>
  );
}
