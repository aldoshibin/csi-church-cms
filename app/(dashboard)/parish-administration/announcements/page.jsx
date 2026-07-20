"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight, Send, CheckCircle2, Clock, Plus } from "lucide-react";

import { ANNOUNCEMENTS_MOCK } from "@/lib/mock/announcementsMockData";
import { ParishStatCard } from "@/components/parish-administration/ParishStatCard";
import { AnnouncementsList } from "@/components/announcements/AnnouncementsList";
import { AnnouncementsSidebar } from "@/components/announcements/AnnouncementsSidebar";
import { CreateAnnouncementModal } from "@/components/announcements/CreateAnnouncementModal";
import { cn } from "@/lib/utils";
import { FaBullhorn } from "react-icons/fa6";


export default function AnnouncementsPage() {
  const data = ANNOUNCEMENTS_MOCK;
  const [activeTab, setActiveTab] = React.useState("All Announcements");
  const [createModalOpen, setCreateModalOpen] = React.useState(false);

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Notifications &amp; Announcements</h1>
          <p className="mt-1 flex items-center gap-1.5 text-sm">
            <Link href="/parish-administration" className="text-interactive-500 hover:underline">
              Parish Administration
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-ink-subtle" />
            <span className="text-ink-subtle">Notifications &amp; Announcements</span>
          </p>
        </div>
        <button
          onClick={() => setCreateModalOpen(true)}
          className="flex items-center gap-2 rounded-md bg-interactive-500 px-3 py-2 text-sm font-semibold text-white shadow-card hover:bg-interactive-600"
        >
          <Plus className="h-4 w-4" />
          Create Announcement
        </button>
      </div>

      {/* 3 stat cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <ParishStatCard
          label="Total Announcements" value={data.cards.totalAnnouncements.value} sublabel={data.cards.totalAnnouncements.sublabel}
          icon={Send} href="#" viewLabel="View all announcements"
        />
        <ParishStatCard
          label="Published" value={data.cards.published.value} sublabel={data.cards.published.sublabel}
          icon={Send} href="#" viewLabel="View active announcements"
        />
        <ParishStatCard
          label="Scheduled" value={data.cards.scheduled.value} sublabel={data.cards.scheduled.sublabel}
          icon={Clock} href="#" viewLabel="View scheduled announcements"
        />
      </div>

      {/* Tabs + list (left) | Quick Actions + Filters (right) */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_300px]">
        <div className="space-y-4">
          {/* <div className="flex gap-6 rounded-lg border border-border bg-white px-4 pt-3 shadow-card">
            {data.tabs.map((tab) => {
              const isActive = tab === activeTab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "relative pb-3 text-sm font-medium transition-colors",
                    isActive ? "text-interactive-500" : "text-ink-muted hover:text-ink"
                  )}
                >
                  {tab}
                  {isActive && <span className="absolute -bottom-[1px] left-0 h-[2px] w-full rounded-full bg-interactive-500 bpo" />}
                </button>
              );
            })}
          </div> */}
          <div className="flex gap-6 rounded-lg border border-border bg-white px-4 pt-3 shadow-card">
  {data.tabs.map((tab) => {
    const isActive = tab === activeTab;
    return (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={cn(
          "relative pb-3 text-sm font-medium transition-colors",
          "border-b-[3px] border-transparent",
          isActive ? "text-interactive-500" : "text-ink-muted hover:text-ink"
        )}
      >
        {tab}
        {isActive && (
          <span
            className="absolute -bottom-[1px] left-0 h-2 w-full rounded-b-full border-b-2 border-l-2 border-r-2 border-[#007c72]"
          />
        )}
      </button>
    );
  })}
</div>

          <AnnouncementsList
            activeTab={activeTab}
            announcements={data.announcements}
            totalPages={data.totalPages}
            sortOptions={data.sortOptions}
          />
        </div>

        <AnnouncementsSidebar filters={data.filters} onCreateClick={() => setCreateModalOpen(true)} />
      </div>

      <CreateAnnouncementModal
        open={createModalOpen}
        onOpenChange={setCreateModalOpen}
        categories={data.categories}
        audiences={data.audiences}
      />
    </div>
  );
}
