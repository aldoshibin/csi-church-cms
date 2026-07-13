"use client";
import Link from "next/link";

import { CalendarDays, Trophy, HandHeart, Megaphone, Users, Landmark, ChevronDown } from "lucide-react";

import { PARISH_ADMIN_MOCK } from "@/lib/mock/parishAdministrationMockData";
import { ParishStatCard } from "@/components/parish-administration/ParishStatCard";
import { UpcomingEventsServicesWidget } from "@/components/parish-administration/UpcomingEventsServicesWidget";
import { EventsCalendarWidget } from "@/components/parish-administration/EventsCalendarWidget";
import { RecentAnnouncementsWidget } from "@/components/parish-administration/RecentAnnouncementsWidget";
import { PrayerRequestSummaryWidget } from "@/components/parish-administration/PrayerRequestSummaryWidget";
import { BirthdaysThisWeekWidget } from "@/components/parish-administration/BirthdaysThisWeekWidget";
import { AnniversariesThisWeekWidget } from "@/components/parish-administration/AnniversariesThisWeekWidget";
import { CommitteeActivityWidget } from "@/components/parish-administration/CommitteeActivityWidget";
import { BranchChurchOverviewTable } from "@/components/parish-administration/BranchChurchOverviewTable";

export default function ParishAdministrationPage() {
  const data = PARISH_ADMIN_MOCK;

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Parish Administration</h1>
          <p className="mt-1 text-sm text-ink-subtle">
            Manage parish activities, communications, committees and church overview.
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-md border border-border bg-white px-3 py-2 text-sm text-ink shadow-card hover:bg-surface-muted">
          <CalendarDays className="h-4 w-4 text-interactive-500" />
          18 May 2025
          <ChevronDown className="h-4 w-4 text-ink-subtle" />
        </button>
      </div>

      {/* 6 stat cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <ParishStatCard
          label="Upcoming Events" value={data.cards.upcomingEvents.value} sublabel={data.cards.upcomingEvents.sublabel}
          icon={CalendarDays} href="/events" viewLabel="View Calendar"
        />
        <ParishStatCard
          label="Sacraments This Year" value={data.cards.sacramentsThisYear.value} sublabel={data.cards.sacramentsThisYear.sublabel}
          icon={Trophy} href="/reports" viewLabel="View Reports"
        />
        <ParishStatCard
          label="Prayer Requests" value={data.cards.prayerRequests.value} sublabel={data.cards.prayerRequests.sublabel}
          icon={HandHeart} href="/prayers" viewLabel="View Summary"
        />
        <ParishStatCard
          label="Announcements" value={data.cards.announcements.value} sublabel={data.cards.announcements.sublabel}
          icon={Megaphone} href="/communication" viewLabel="View All"
        />
        <ParishStatCard
          label="Active Committees" value={data.cards.activeCommittees.value} sublabel={data.cards.activeCommittees.sublabel}
          icon={Users} href="/committees" viewLabel="View Overview"
        />
        <ParishStatCard
          label="Branch Churches" value={data.cards.branchChurches.value} sublabel={data.cards.branchChurches.sublabel}
          icon={Landmark} href="/parish-administration/branches" viewLabel="View Overview"
        />
      </div>

      {/* Upcoming Events & Services + Calendar (one shared card) | Recent Announcements (separate card) */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2.3fr_1fr]">
        <div className="grid grid-cols-1 gap-4 rounded-lg border border-border bg-white p-4 shadow-card sm:grid-cols-[1fr_1.3fr]">
          <div>
            <h3 className="mb-10 text-sm font-semibold text-interactive-500">Upcoming Events &amp; Services</h3>
            <UpcomingEventsServicesWidget events={data.upcomingEvents} />
          </div>

          <div className=" mb-10 sm:border-l sm:border-border sm:pl-4 ">
            <EventsCalendarWidget monthLabel={data.calendarMonth} days={data.calendarDays} />
          </div>
        </div>

        <div className="rounded-lg border border-border bg-white p-4 shadow-card">
          <h3 className="mb-3 text-sm font-semibold text-interactive-500">Recent Announcements</h3>
          <RecentAnnouncementsWidget announcements={data.announcements} />
        </div>
      </div>

      {/* Prayer Request Summary | Birthdays | Anniversaries | Committee Activity */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <div className="rounded-lg border border-border bg-white p-4 shadow-card">
          <div className="flex justify-between mb-5 ">
            <h3 className="mb-3 text-sm font-semibold text-interactive-500">Prayer Request Summary</h3>
            <Link href="/#" className="text-xs font-medium text-interactive-500 hover:underline">
              View All →
            </Link>
          </div>
          <PrayerRequestSummaryWidget total={data.prayerRequestSummary.total} breakdown={data.prayerRequestSummary.breakdown} />
        </div>
        <div className="rounded-lg border border-border bg-white p-4 shadow-card">
          <div className="flex justify-between mb-5 ">
            <h3 className="mb-3 text-sm font-semibold text-interactive-500">Birthdays This Week</h3>
            <Link href="/#" className="text-xs font-medium text-interactive-500 hover:underline">
              View All →
            </Link>
          </div>
          <BirthdaysThisWeekWidget people={data.birthdaysThisWeek} />
        </div>
        <div className="rounded-lg border border-border bg-white p-4 shadow-card">
          <div className="flex justify-between mb-5 ">
            <h3 className="mb-3 text-sm font-semibold text-interactive-500">Anniversaries This Week</h3>
            <Link href="/#" className="text-xs font-medium text-interactive-500 ">
              View All →
            </Link>
          </div>
          <AnniversariesThisWeekWidget couples={data.anniversariesThisWeek} />
        </div>
        <div className="rounded-lg border border-border bg-white p-4 shadow-card">
          <div className="flex justify-between mb-5 ">
            <h3 className="mb-3 text-sm font-semibold text-interactive-500">Committee Activity Overview</h3>
            <Link href="/#" className="text-xs font-medium text-interactive-500 ">
              View All →
            </Link>
          </div>
          <CommitteeActivityWidget committees={data.committees} />
        </div>
      </div>

      {/* Branch Church Overview */}
      <div className="rounded-lg border border-border bg-white p-4 shadow-card">
        <div className="flex justify-between">
        <h3 className="mb-3 text-sm font-semibold text-interactive-500">Branch Church Overview</h3>
         <Link
          href="/#"
          className="group inline-flex items-center gap-1 text-xs font-medium text-interactive-500"
        >
          <span>View all</span>
          <span className="inline-block transform transition-all duration-300 ease-in-out group-hover:translate-x-2">
            →
          </span>
        </Link>
        </div>
        <BranchChurchOverviewTable branches={data.branchChurches} />
        {/* <Link href="/#" className="text-xs font-medium text-interactive-500 ">
              View all branch churches <span className="transition-transform duration-300 group-hover:translate-x-3"> →</span>
            </Link> */}



        <Link
          href="/#"
          className="group inline-flex items-center gap-1 text-xs font-medium text-interactive-500"
        >
          <span>View all branch churches</span>
          <span className="inline-block transform transition-all duration-300 ease-in-out group-hover:translate-x-2">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
