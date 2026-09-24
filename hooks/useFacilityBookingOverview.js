"use client";

import * as React from "react";
import { facilityBookingService } from "@/services/facilityBookingService";
import {
  BOOKINGS_LIST_MOCK, FACILITY_BOOKING_STATS_MOCK, BOOKINGS_BY_STATUS_DONUT_MOCK, UPCOMING_BOOKINGS_MOCK,
} from "@/lib/mock/vmFacilityBookingMockData";

export function useFacilityBookingOverview() {
  const [bookings, setBookings] = React.useState(BOOKINGS_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [facilityFilter, setFacilityFilter] = React.useState("All Facilities");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [bookingTypeFilter, setBookingTypeFilter] = React.useState("All Booking Types");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await facilityBookingService.listBookings({ search, facilityFilter, statusFilter, bookingTypeFilter, page, pageSize });
      setBookings(result?.bookings ?? BOOKINGS_LIST_MOCK);
    } catch {
      setBookings(BOOKINGS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, facilityFilter, statusFilter, bookingTypeFilter, page, pageSize]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, facilityFilter, statusFilter, bookingTypeFilter, pageSize]);

  const clearFilters = () => {
    setSearch("");
    setFacilityFilter("All Facilities");
    setStatusFilter("All Status");
    setBookingTypeFilter("All Booking Types");
  };

  const filtered = React.useMemo(() => {
    return bookings.filter((b) => {
      const matchesSearch = !search
        || b.id.toLowerCase().includes(search.toLowerCase())
        || b.facility.toLowerCase().includes(search.toLowerCase())
        || b.purpose.toLowerCase().includes(search.toLowerCase());
      const matchesFacility = facilityFilter === "All Facilities" || b.facility === facilityFilter;
      const matchesStatus = statusFilter === "All Status" || b.status === statusFilter;
      return matchesSearch && matchesFacility && matchesStatus;
    });
  }, [bookings, search, facilityFilter, statusFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  return {
    bookings: paged, totalCount: filtered.length, isLoading,
    stats: FACILITY_BOOKING_STATS_MOCK, donut: BOOKINGS_BY_STATUS_DONUT_MOCK, upcoming: UPCOMING_BOOKINGS_MOCK,
    search, setSearch, facilityFilter, setFacilityFilter, statusFilter, setStatusFilter,
    bookingTypeFilter, setBookingTypeFilter, clearFilters,
    page, setPage, pageSize, setPageSize,
  };
}
