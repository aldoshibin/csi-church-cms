"use client";

import * as React from "react";
import { ChevronDown, Home, Users, UserCheck, Droplets, UserPlus, Wallet, CalendarDays } from "lucide-react";

import { useAuth } from "@/contexts/AuthContext";
import { DASHBOARD_MOCK } from "@/lib/mock/dashboardMockData";
import { DashboardStatCard } from "@/components/dashboard/DashboardStatCard";
import { MemberStatisticsChart } from "@/components/dashboard/MemberStatisticsChart";
import { FinancialDonutChart } from "@/components/dashboard/FinancialDonutChart";
import { UpcomingEventsListWidget } from "@/components/dashboard/UpcomingEventsListWidget";
import { TodaysScheduleWidget } from "@/components/dashboard/TodaysScheduleWidget";
import { SacramentSummaryWidget } from "@/components/dashboard/SacramentSummaryWidget";
import { PrayerRequestsWidget } from "@/components/dashboard/PrayerRequestsWidget";
import { QuickActionsWidget } from "@/components/dashboard/QuickActionsWidget";
import { AnnouncementsWidget } from "@/components/dashboard/AnnouncementsWidget";
import { MiniTableWidget } from "@/components/dashboard/MiniTableWidget";
import { Badge } from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/utils";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaCross } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import {DateRangeDropdown} from "@/components/dashboard/DateRangeDropdown";



export default function DashboardPage() {
  const { user } = useAuth();
  const data = DASHBOARD_MOCK;

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Dashboard</h1>
          <p className="mt-1 text-sm text-ink-subtle">
            Welcome back, {user?.full_name ?? "Rev. Michael"}. Here is today's parish, member, finance and ministry overview.
          </p>
        </div>
        <DateRangeDropdown onSelect={(opt) => console.log("selected range:", opt)} />
        {/* <button className="flex items-center gap-2 rounded-md border border-border bg-white px-3 py-2 text-sm text-ink shadow-card hover:bg-surface-muted">
          <CalendarDays className="h-4 w-4 text-interactive-500" />
          Sunday, 18 May 2025
          <ChevronDown className="h-4 w-4 text-ink-subtle" />
        </button> */}
        {/* <DateRangeDropdown onSelect={(opt) => console.log("selected range:", opt)} /> */}
      </div>

      {/* 6 stat cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <DashboardStatCard
          label="Total Families" value={data.cards.totalFamilies.value.toLocaleString()} delta={data.cards.totalFamilies.delta}
          icon={FaPeopleRoof} href="/families" viewLabel="View Families"
        />
        <DashboardStatCard
          label="Total Members" value={data.cards.totalMembers.value.toLocaleString()} delta={data.cards.totalMembers.delta}
          icon={FaUsers} href="/members" viewLabel="View Members"
        />
        <DashboardStatCard
          label="Active Members" value={data.cards.activeMembers.value.toLocaleString()} delta={data.cards.activeMembers.delta}
          icon={UserCheck} href="/members?status=ACTIVE" viewLabel="View Active"
        />
        <DashboardStatCard
          label="Baptized Members" value={data.cards.baptizedMembers.value.toLocaleString()} delta={data.cards.baptizedMembers.delta}
          icon={FaCross} href="/sacraments/baptism" viewLabel="View Register"
        />
        <DashboardStatCard
          label="New Members" value={data.cards.newMembers.value.toLocaleString()} delta={data.cards.newMembers.delta}
          icon={UserPlus} href="/members?sort=-joined_date" viewLabel="View New"
        />
        <DashboardStatCard
          label="Contributions" value={formatCurrency(data.cards.contributions.value)} delta={data.cards.contributions.delta}
          icon={FaWallet} href="/finance" viewLabel="View Finance"
        />
      </div>

      {/* Member Statistics chart + Upcoming Events + Today's Schedule */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1.5fr_1fr]">
        <div className=" border border-border bg-white p-4 shadow-card">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-sm font-semibold text-interactive-500">Member Statistics</h3>
            <div className="flex gap-2">
              <select className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted">
                <option>Last 6 Months</option>
                <option>Last 12 Months</option>
              </select>
              <select className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted">
                <option>2025</option>
                <option>2024</option>
              </select>
            </div>
          </div>
          <MemberStatisticsChart data={data.memberTrend} />
        </div>

        <UpcomingEventsListWidget events={data.upcomingEvents} />
        <TodaysScheduleWidget schedule={data.todaysSchedule} />
      </div>

      {/* Sacrament Summary + Financial Overview + Prayer Requests + Quick Actions */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 ">
        <SacramentSummaryWidget items={data.sacramentSummary} />

        <div className=" border border-border bg-white p-4 shadow-card">
          <h3 className="text-[16px] font-semibold text-[#00695C]">Financial Overview</h3>
          <p className="mb-3 text-xs text-ink-subtle">(This Month)</p>
          <div className="flex items-center gap-4">
            <FinancialDonutChart totalIncome={data.financialOverview.totalIncome} breakdown={data.financialOverview.breakdown} />
            <ul className="flex-1 space-y-2">
              {data.financialOverview.breakdown.map((item) => (
                <li key={item.label} className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="h-2.5 w-2.5 shrink-0 " style={{ backgroundColor: item.color }} />
                  <span className="flex-1 text-ink-muted">{item.label}</span>
                  <span className="font-medium text-ink">{formatCurrency(item.amount)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <PrayerRequestsWidget {...data.prayerRequests} />
        <QuickActionsWidget />
      </div>

      {/* Bottom: Recent Registrations, Recent Contributions, Announcements */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <MiniTableWidget
          title="Recent Registrations"
          viewAllHref="/members"
          rows={data.recentRegistrations}
          columns={[
            { key: "name", header: "Name" },
            { key: "type", header: "Type" },
            { key: "date", header: "Date" },
            { key: "addedBy", header: "Added By" },
          ]}
        />

        <MiniTableWidget
          title="Recent Contributions"
          viewAllHref="/finance"
          rows={data.recentContributions}
          columns={[
            { key: "donor", header: "Donor Name" },
            { key: "amount", header: "Amount", render: (row) => formatCurrency(row.amount) },
            { key: "type", header: "Type" },
            { key: "date", header: "Date" },
          ]}
        />

        <AnnouncementsWidget announcements={data.announcements} />
      </div>
    </div>
  );
}
