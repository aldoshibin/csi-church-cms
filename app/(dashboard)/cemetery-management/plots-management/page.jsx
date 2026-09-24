"use client";

import Link from "next/link";
import { MapPin, Plus, ChevronDown, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { usePlotsManagement } from "@/hooks/usePlotsManagement";
import { PlotOccupancyDonutCard } from "@/components/cemetery-management/overview/PlotOccupancyDonutCard";
import { PlotsBySectionChart } from "@/components/cemetery-management/plots-management/PlotsBySectionChart";
import { PlotsTable } from "@/components/cemetery-management/plots-management/PlotsTable";
import { PlotsQuickActions } from "@/components/cemetery-management/plots-management/PlotsQuickActions";
import { PlotsHelpCard } from "@/components/cemetery-management/plots-management/PlotsHelpCard";
import { PLOT_STATUS_OPTIONS, PLOT_TYPE_SHORT_OPTIONS, SECTION_OPTIONS } from "@/lib/mock/vmCemeteryMockData";

export default function PlotsManagementPage() {
  const {
    plots, totalCount, isLoading, donut, plotsBySection,
    tabs, activeTab, setActiveTab,
    search, setSearch, sectionFilter, setSectionFilter, statusFilter, setStatusFilter,
    typeFilter, setTypeFilter, clearFilters,
    page, setPage, pageSize,
  } = usePlotsManagement();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-ink">Plots Management</h1>
          <p className="mt-1 text-sm text-ink-subtle">Manage cemetery plots, availability, and plot assignments.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/cemetery-management/plot-map">
            <Button variant="secondary" leftIcon={<MapPin className="h-4 w-4" />}>Plot Map View</Button>
          </Link>
          <Link href="/cemetery-management/plots-management/add">
            <Button variant="success" leftIcon={<Plus className="h-4 w-4" />} rightIcon={<ChevronDown className="h-3.5 w-3.5" />}>
              Add New Plot
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-6 border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab} type="button" onClick={() => setActiveTab(tab)}
                className={cn(
                  "border-b-2 pb-3 text-sm font-medium transition-colors",
                  activeTab === tab ? "border-success-500 text-success-600" : "border-transparent text-ink-subtle hover:text-ink"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
              <input
                value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by plot no., section, row..."
                className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
              />
            </div>
            <select value={sectionFilter} onChange={(e) => setSectionFilter(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
              <option>All Sections</option>
              {SECTION_OPTIONS.map((s) => <option key={s}>{s}</option>)}
            </select>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
              <option>All Status</option>
              {PLOT_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
            </select>
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
              <option>All Types</option>
              {PLOT_TYPE_SHORT_OPTIONS.map((t) => <option key={t}>{t}</option>)}
            </select>
            <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
            <button type="button" onClick={clearFilters} className="text-sm font-medium text-interactive-600 hover:underline">
              Clear
            </button>
          </div>

          <PlotsTable
            plots={plots} isLoading={isLoading}
            page={page} pageSize={pageSize} totalCount={totalCount} onPageChange={setPage}
          />
        </div>

        <div className="flex flex-col gap-6">
          <PlotOccupancyDonutCard data={donut} title="Plot Occupancy" viewMapHref="/cemetery-management/plot-map" />
          <PlotsBySectionChart data={plotsBySection} />
          <PlotsQuickActions />
          <PlotsHelpCard />
        </div>
      </div>
    </div>
  );
}
