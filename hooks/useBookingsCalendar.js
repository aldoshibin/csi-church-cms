"use client";

import * as React from "react";
import {
  CALENDAR_MAY_2026_MOCK, CALENDAR_MONTH_LABEL, BOOKING_CALENDAR_LEGEND_MOCK, BOOKING_CATEGORY_STYLE,
} from "@/lib/mock/vmFacilityBookingMockData";

export function useBookingsCalendar() {
  const [view, setView] = React.useState("Month");
  const [facilityFilter, setFacilityFilter] = React.useState("All Facilities");
  const [bookingTypeFilter, setBookingTypeFilter] = React.useState("All Booking Types");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [dateRange, setDateRange] = React.useState("May 01, 2026 - May 31, 2026");

  const clearFilters = () => {
    setFacilityFilter("All Facilities");
    setBookingTypeFilter("All Booking Types");
    setStatusFilter("All Status");
    setDateRange("May 01, 2026 - May 31, 2026");
  };

  return {
    view, setView,
    monthLabel: CALENDAR_MONTH_LABEL, days: CALENDAR_MAY_2026_MOCK,
    legend: BOOKING_CALENDAR_LEGEND_MOCK, categoryStyle: BOOKING_CATEGORY_STYLE,
    facilityFilter, setFacilityFilter, bookingTypeFilter, setBookingTypeFilter,
    statusFilter, setStatusFilter, dateRange, setDateRange, clearFilters,
  };
}
