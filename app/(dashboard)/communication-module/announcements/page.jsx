"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { useAnnouncements } from "@/hooks/useAnnouncements";
import { Button } from "@/components/ui/Button";
import { AnnouncementStatsRow } from "@/components/communication-module/announcements/AnnouncementStatsRow";
import { AnnouncementsTable } from "@/components/communication-module/announcements/AnnouncementsTable";
import { AnnouncementCategoriesCard } from "@/components/communication-module/announcements/AnnouncementCategoriesCard";
import { AnnouncementQuickActions } from "@/components/communication-module/announcements/AnnouncementQuickActions";
import { AnnouncementTipsCard } from "@/components/communication-module/announcements/AnnouncementTipsCard";

export default function AnnouncementsPage() {
  const router = useRouter();
  const {
    announcements, totalCount, isLoading, stats, categories,
    tabs, activeTab, setActiveTab,
    search, setSearch, statusFilter, setStatusFilter, categoryFilter, setCategoryFilter, audienceFilter, setAudienceFilter,
    page, setPage, pageSize, resetFilters,
  } = useAnnouncements();

  const openDetails = (row) => router.push(`/communication-module/announcements/${row.id}`);

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Announcements</h1>
          <p className="mt-1 text-sm text-ink-subtle">Create, manage and share important announcements with your church community.</p>
        </div>
        <Link href="/communication-module/announcements/add">
          <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Create Announcement</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="flex flex-col gap-5 xl:col-span-2">
          <AnnouncementStatsRow stats={stats} />
          <AnnouncementsTable
            announcements={announcements}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab}
            search={search} onSearchChange={setSearch}
            statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
            categoryFilter={categoryFilter} onCategoryFilterChange={setCategoryFilter}
            audienceFilter={audienceFilter} onAudienceFilterChange={setAudienceFilter}
            onReset={resetFilters}
            onViewDetails={openDetails}
            onEdit={(row) => console.log("Edit", row.id)}
            onDuplicate={(row) => console.log("Duplicate", row.id)}
            onSchedule={(row) => console.log("Schedule again", row.id)}
            onDelete={(row) => console.log("Delete", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <AnnouncementCategoriesCard categories={categories} />
          <AnnouncementQuickActions />
          <AnnouncementTipsCard />
        </div>
      </div>
    </div>
  );
}
