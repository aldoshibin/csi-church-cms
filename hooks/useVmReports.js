"use client";

import * as React from "react";
import {
  VM_REPORTS_OVERVIEW_STATS_MOCK, VM_FREQUENTLY_USED_REPORTS_MOCK, VM_REPORT_SUMMARY_MOCK,
  VM_ATTENDANCE_TREND_MOCK, VM_REPORTS_RECENT_MOCK,
} from "@/lib/mock/vmReportsMockData";
import { ATTENDANCE_MINISTRY_OPTIONS, ATTENDANCE_SERVICE_OPTIONS } from "@/lib/mock/vmAttendanceMockData";

const PAGE_SIZE = 4;

export function useVmReports() {
  const [reports] = React.useState(VM_REPORT_SUMMARY_MOCK);
  const [stats] = React.useState(VM_REPORTS_OVERVIEW_STATS_MOCK);
  const [frequentlyUsed] = React.useState(VM_FREQUENTLY_USED_REPORTS_MOCK);
  const [trend] = React.useState(VM_ATTENDANCE_TREND_MOCK);
  const [recent] = React.useState(VM_REPORTS_RECENT_MOCK);
  const [isLoading] = React.useState(false);

  const [dateRange, setDateRange] = React.useState("May 18, 2026 - May 24, 2026");
  const [ministryFilter, setMinistryFilter] = React.useState("All Ministries");
  const [serviceFilter, setServiceFilter] = React.useState("All Services / Events");
  const [page, setPage] = React.useState(1);

  const paged = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return reports.slice(start, start + PAGE_SIZE);
  }, [reports, page]);

  return {
    reports: paged, totalCount: reports.length, isLoading, stats, frequentlyUsed, trend, recent,
    dateRange, setDateRange, ministryFilter, setMinistryFilter, serviceFilter, setServiceFilter,
    page, setPage, pageSize: PAGE_SIZE,
    ministryOptions: ATTENDANCE_MINISTRY_OPTIONS, serviceOptions: ATTENDANCE_SERVICE_OPTIONS,
  };
}
