"use client";

import * as React from "react";
import {
  FACILITY_BOOKING_REPORT_STATS_MOCK, FACILITY_BOOKING_REPORT_COMPARISON_LABEL, BOOKINGS_TREND_MOCK,
  BOOKINGS_BY_STATUS_REPORT_DONUT_MOCK, BOOKINGS_BY_FACILITY_REPORT_MOCK, BOOKINGS_BY_DAY_MOCK,
  REPORT_OVERVIEW_MOCK, POPULAR_FACILITY_REPORTS_MOCK,
} from "@/lib/mock/vmFacilityBookingReportsMockData";
import { FACILITY_OPTIONS, BOOKING_STATUS_OPTIONS, BOOKING_TYPE_OPTIONS } from "@/lib/mock/vmFacilityBookingMockData";

export function useFacilityBookingReports() {
  const [dateRange, setDateRange] = React.useState("May 01, 2026 - May 31, 2026");
  const [facilityFilter, setFacilityFilter] = React.useState("All Facilities");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [bookingTypeFilter, setBookingTypeFilter] = React.useState("All Booking Types");

  const clearFilters = () => {
    setDateRange("May 01, 2026 - May 31, 2026");
    setFacilityFilter("All Facilities");
    setStatusFilter("All Status");
    setBookingTypeFilter("All Booking Types");
  };

  return {
    stats: FACILITY_BOOKING_REPORT_STATS_MOCK, comparisonLabel: FACILITY_BOOKING_REPORT_COMPARISON_LABEL,
    trend: BOOKINGS_TREND_MOCK, statusDonut: BOOKINGS_BY_STATUS_REPORT_DONUT_MOCK,
    byFacility: BOOKINGS_BY_FACILITY_REPORT_MOCK, byDay: BOOKINGS_BY_DAY_MOCK,
    overview: REPORT_OVERVIEW_MOCK, popularReports: POPULAR_FACILITY_REPORTS_MOCK,
    facilityOptions: FACILITY_OPTIONS, statusOptions: BOOKING_STATUS_OPTIONS, bookingTypeOptions: BOOKING_TYPE_OPTIONS,
    dateRange, setDateRange, facilityFilter, setFacilityFilter,
    statusFilter, setStatusFilter, bookingTypeFilter, setBookingTypeFilter, clearFilters,
  };
}
