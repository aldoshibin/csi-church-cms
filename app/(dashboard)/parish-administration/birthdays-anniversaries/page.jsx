"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight, Cake, CalendarCheck2, Heart, Megaphone, Filter } from "lucide-react";

import { BIRTHDAYS_ANNIVERSARIES_MOCK } from "@/lib/mock/birthdaysAnniversariesMockData";
import { BirthdayStatCard } from "@/components/birthdays-anniversaries/BirthdayStatCard";
import { BirthdayTabsAndFilters } from "@/components/birthdays-anniversaries/BirthdayTabsAndFilters";
import { BirthdaysTable } from "@/components/birthdays-anniversaries/BirthdaysTable";
import { AnniversariesTable } from "@/components/birthdays-anniversaries/AnniversariesTable";
import { FaCakeCandles } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import { FaRing } from "react-icons/fa";


export default function BirthdaysAnniversariesPage() {
  const data = BIRTHDAYS_ANNIVERSARIES_MOCK;
  const [activeTab, setActiveTab] = React.useState("Birthdays");

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Birthdays &amp; Anniversaries</h1>
          <p className="mt-1 flex items-center gap-1.5 text-sm">
            <Link href="/parish-administration" className="text-interactive-500 hover:underline">
              Parish Administration
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-ink-subtle" />
            <span className="text-ink-subtle">Birthdays &amp; Anniversaries</span>
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-md border border-border bg-white px-3 py-2 text-sm font-medium text-ink shadow-card hover:bg-surface-muted">
          <Filter className="h-3.5 w-3.5" />
          Filter
        </button>
      </div>

      {/* 4 stat cards in one card row, divided by vertical borders */}
      <div className="grid grid-cols-1 divide-y divide-border  border border-border bg-white shadow-card sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
        <BirthdayStatCard
          label="Upcoming Birthdays" value={data.cards.upcomingBirthdays.value} sublabel={data.cards.upcomingBirthdays.sublabel}
          icon={FaCakeCandles} href="/parish-administration/birthdays-anniversaries" viewLabel="View all upcoming birthdays"
        />
        <BirthdayStatCard
          label="Upcoming Wedding Anniversaries" value={data.cards.upcomingAnniversaries.value} sublabel={data.cards.upcomingAnniversaries.sublabel}
          icon={FaCalendarCheck} href="/parish-administration/birthdays-anniversaries" viewLabel="View all upcoming anniversaries"
        />
        <BirthdayStatCard
          label="Total Birthdays (This Year)" value={data.cards.totalBirthdaysThisYear.value} sublabel={data.cards.totalBirthdaysThisYear.sublabel}
          icon={Heart} href="/reports" viewLabel="View birthday report"
        />
        <BirthdayStatCard
          label="Total Wedding Anniversaries (This Year)" value={data.cards.totalAnniversariesThisYear.value} sublabel={data.cards.totalAnniversariesThisYear.sublabel}
          icon={FaRing} href="/reports" viewLabel="View anniversary report"
        />
      </div>

      <BirthdayTabsAndFilters activeTab={activeTab} onTabChange={setActiveTab} filters={data.filters} />

      {activeTab === "Birthdays" ? (
        <BirthdaysTable
          title="Upcoming Birthdays (Next 30 Days)"
          todaysDate={data.todaysDate}
          records={data.birthdays}
          viewAllHref="/members?sort=birthday"
          viewAllLabel="View All Upcoming Birthdays"
        />
      ) : (
        <AnniversariesTable
          title="Upcoming Wedding Anniversaries (Next 30 Days)"
          todaysDate={data.todaysDate}
          records={data.anniversaries}
        />
      )}
    </div>
  );
}
