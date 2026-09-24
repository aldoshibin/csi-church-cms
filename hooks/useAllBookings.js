"use client";

import * as React from "react";
import { facilityBookingService } from "@/services/facilityBookingService";
import {
  ALL_BOOKINGS_LIST_MOCK, ALL_BOOKINGS_STATS_MOCK, ALL_BOOKINGS_QUICK_SUMMARY_MOCK,
} from "@/lib/mock/vmFacilityBookingMockData";

export function useAllBookings() {
  const [bookings, setBookings] = React.useState(ALL_BOOKINGS_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [dateRange, setDateRange] = React.useState("May 01, 2026 - May 31, 2026");
  const [facilityFilter, setFacilityFilter] = React.useState("All Facilities");
  const [bookingTypeFilter, setBookingTypeFilter] = React.useState("All Booking Types");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [paymentStatusFilter, setPaymentStatusFilter] = React.useState("All Payment Status");
  const [bookedByFilter, setBookedByFilter] = React.useState("All");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await facilityBookingService.listBookings({
        search, dateRange, facilityFilter, bookingTypeFilter, statusFilter, paymentStatusFilter, bookedByFilter, page, pageSize,
      });
      setBookings(result?.bookings ?? ALL_BOOKINGS_LIST_MOCK);
    } catch {
      setBookings(ALL_BOOKINGS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, dateRange, facilityFilter, bookingTypeFilter, statusFilter, paymentStatusFilter, bookedByFilter, page, pageSize]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, facilityFilter, bookingTypeFilter, statusFilter, paymentStatusFilter, bookedByFilter, pageSize]);

  const clearFilters = () => {
    setSearch("");
    setDateRange("");
    setFacilityFilter("All Facilities");
    setBookingTypeFilter("All Booking Types");
    setStatusFilter("All Status");
    setPaymentStatusFilter("All Payment Status");
    setBookedByFilter("All");
  };

  const filtered = React.useMemo(() => {
    return bookings.filter((b) => {
      const matchesSearch = !search
        || b.id.toLowerCase().includes(search.toLowerCase())
        || b.facility.toLowerCase().includes(search.toLowerCase())
        || b.purpose.toLowerCase().includes(search.toLowerCase())
        || b.bookedByName.toLowerCase().includes(search.toLowerCase());
      const matchesFacility = facilityFilter === "All Facilities" || b.facility === facilityFilter;
      const matchesStatus = statusFilter === "All Status" || b.status === statusFilter;
      const matchesPaymentStatus = paymentStatusFilter === "All Payment Status" || b.paymentStatus === paymentStatusFilter;
      const matchesBookedBy = bookedByFilter === "All" || b.bookedByName === bookedByFilter;
      return matchesSearch && matchesFacility && matchesStatus && matchesPaymentStatus && matchesBookedBy;
    });
  }, [bookings, search, facilityFilter, statusFilter, paymentStatusFilter, bookedByFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  return {
    bookings: paged, totalCount: filtered.length, isLoading,
    stats: ALL_BOOKINGS_STATS_MOCK, quickSummary: ALL_BOOKINGS_QUICK_SUMMARY_MOCK,
    search, setSearch, dateRange, setDateRange,
    facilityFilter, setFacilityFilter, bookingTypeFilter, setBookingTypeFilter,
    statusFilter, setStatusFilter, paymentStatusFilter, setPaymentStatusFilter,
    bookedByFilter, setBookedByFilter, clearFilters,
    page, setPage, pageSize, setPageSize,
  };
}
