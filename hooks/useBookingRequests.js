"use client";

import * as React from "react";
import { bookingRequestsService } from "@/services/bookingRequestsService";
import {
  BOOKING_REQUESTS_LIST_MOCK, BOOKING_REQUESTS_STATS_MOCK, REQUEST_STATUS_DONUT_MOCK, POPULAR_FACILITIES_MOCK,
} from "@/lib/mock/vmBookingRequestsMockData";
import { FACILITY_OPTIONS } from "@/lib/mock/vmFacilityBookingMockData";

export function useBookingRequests() {
  const [requests, setRequests] = React.useState(BOOKING_REQUESTS_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [facilityFilter, setFacilityFilter] = React.useState("All Facilities");
  const [dateRange, setDateRange] = React.useState("May 01, 2026 - May 31, 2026");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await bookingRequestsService.listRequests({ search, statusFilter, facilityFilter, dateRange, page, pageSize });
      setRequests(result?.requests ?? BOOKING_REQUESTS_LIST_MOCK);
    } catch {
      setRequests(BOOKING_REQUESTS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, statusFilter, facilityFilter, dateRange, page, pageSize]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, statusFilter, facilityFilter, pageSize]);

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All Status");
    setFacilityFilter("All Facilities");
  };

  const filtered = React.useMemo(() => {
    return requests.filter((r) => {
      const matchesSearch = !search
        || r.requesterName.toLowerCase().includes(search.toLowerCase())
        || r.email.toLowerCase().includes(search.toLowerCase())
        || r.phone.toLowerCase().includes(search.toLowerCase())
        || r.event.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All Status" || r.status === statusFilter;
      const matchesFacility = facilityFilter === "All Facilities" || r.facility === facilityFilter;
      return matchesSearch && matchesStatus && matchesFacility;
    });
  }, [requests, search, statusFilter, facilityFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  return {
    requests: paged, totalCount: filtered.length, isLoading,
    stats: BOOKING_REQUESTS_STATS_MOCK, donut: REQUEST_STATUS_DONUT_MOCK, popularFacilities: POPULAR_FACILITIES_MOCK,
    facilityOptions: FACILITY_OPTIONS,
    search, setSearch, statusFilter, setStatusFilter, facilityFilter, setFacilityFilter,
    dateRange, setDateRange, clearFilters,
    page, setPage, pageSize, setPageSize,
  };
}
