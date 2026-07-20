"use client";

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
import { ViewAllLink } from "@/components/parish-administration/ViewAllLink";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa";
import { FaHandsPraying } from "react-icons/fa6";
import { FaBullhorn } from "react-icons/fa6";
import { FaChurch } from "react-icons/fa";

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
          icon={IoCalendarClearOutline} href="/events" viewLabel="View Calendar"
        />
        <ParishStatCard
          label="Sacraments This Year" value={data.cards.sacramentsThisYear.value} sublabel={data.cards.sacramentsThisYear.sublabel}
          icon={FaTrophy} href="/reports" viewLabel="View Reports"
        />
        <ParishStatCard
          label="Prayer Requests" value={data.cards.prayerRequests.value} sublabel={data.cards.prayerRequests.sublabel}
          icon={FaHandsPraying} href="/prayers" viewLabel="View Summary"
        />
        <ParishStatCard
          label="Announcements" value={data.cards.announcements.value} sublabel={data.cards.announcements.sublabel}
          icon={FaBullhorn} href="/communication" viewLabel="View All"
        />
        <ParishStatCard
          label="Active Committees" value={data.cards.activeCommittees.value} sublabel={data.cards.activeCommittees.sublabel}
          icon={Users} href="/committees" viewLabel="View Overview"
        />
        <ParishStatCard
          label="Branch Churches" value={data.cards.branchChurches.value} sublabel={data.cards.branchChurches.sublabel}
          icon={FaChurch} href="/parish-administration/branches" viewLabel="View Overview"
        />
      </div>

      {/* Upcoming Events & Services + Calendar (one shared card) | Recent Announcements (separate card) */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-1 xl:grid-cols-[2.3fr_1fr]">
        <div className="rounded-lg border border-border bg-white p-4 shadow-card ">
          <h3 className="mb-5 text-[16px] font-semibold text-[#00695C]">Upcoming Events &amp; Services</h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_1.3fr]">
            <div>
              {/* <h3 className="mb-3 text-sm font-semibold text-interactive-500">Upcoming Events &amp; Services</h3> */}
              <UpcomingEventsServicesWidget events={data.upcomingEvents} />
            </div>

            <div className="sm:border-l sm:border-border sm:pl-4">
              <EventsCalendarWidget monthLabel={data.calendarMonth} days={data.calendarDays} />
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-white p-4 shadow-card">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-interactive-500">Recent Announcements</h3>
            <ViewAllLink href="/parish-administration/prayer-requests" />
          </div>

          <RecentAnnouncementsWidget announcements={data.announcements} />
        </div>
      </div>

      {/* Prayer Request Summary | Birthdays | Anniversaries | Committee Activity */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-sm border border-border bg-white p-4 shadow-card">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-[16px] font-semibold text-[#00695c]">Prayer Request Summary</h3>
            <ViewAllLink href="/parish-administration/prayer-requests" />
          </div>
          <PrayerRequestSummaryWidget total={data.prayerRequestSummary.total} breakdown={data.prayerRequestSummary.breakdown} />
        </div>
        <div className="rounded-sm border border-border bg-white p-4 shadow-card">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-[16px] font-semibold text-[#00695c]">Birthdays This Week</h3>
            <ViewAllLink href="/parish-administration/birthdays-anniversaries" />
          </div>
          <BirthdaysThisWeekWidget people={data.birthdaysThisWeek} />
        </div>
        <div className="rounded-sm border border-border bg-white p-4 shadow-card">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-[16px] font-semibold text-[#00695c]">Anniversaries This Week</h3>
            <ViewAllLink href="/parish-administration/birthdays-anniversaries" />
          </div>
          <AnniversariesThisWeekWidget couples={data.anniversariesThisWeek} />
        </div>
        <div className="rounded-sm border border-border bg-white p-4 shadow-card">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-[16px] font-semibold text-[#00695c]">Committee Activity Overview</h3>
            <ViewAllLink href="/parish-administration/committees" />
          </div>
          <CommitteeActivityWidget committees={data.committees} />
        </div>
      </div>

      {/* Branch Church Overview */}
      <div className="rounded-lg border border-border bg-white p-4 shadow-card">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-[16px] font-semibold text-[#00695c]">Branch Church Overview</h3>
          <ViewAllLink href="/#" label="View all " />
        </div>
        <BranchChurchOverviewTable branches={data.branchChurches} />
        <ViewAllLink href="/#" label="View all branch churches" />

      </div>
    </div>
  );
}
