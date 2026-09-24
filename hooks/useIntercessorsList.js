"use client";

import * as React from "react";
import { prayerMinistryService } from "@/services/prayerMinistryService";
import { INTERCESSORS_LIST_MOCK, PRAYER_COVERAGE_MOCK, UPCOMING_PRAYER_SCHEDULES_MOCK } from "@/lib/mock/intercessorsMockData";

const PAGE_SIZE = 8;

export function useIntercessorsList() {
  const [intercessors, setIntercessors] = React.useState(INTERCESSORS_LIST_MOCK);
  const [coverage] = React.useState(PRAYER_COVERAGE_MOCK);
  const [upcomingSchedules] = React.useState(UPCOMING_PRAYER_SCHEDULES_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [ministryFilter, setMinistryFilter] = React.useState("All Groups");
  const [availabilityFilter, setAvailabilityFilter] = React.useState("All Availability");
  const [sortBy, setSortBy] = React.useState("Name (A-Z)");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await prayerMinistryService.listIntercessors({ search, statusFilter, ministryFilter, availabilityFilter, sortBy, page });
      setIntercessors(result?.intercessors ?? INTERCESSORS_LIST_MOCK);
    } catch {
      setIntercessors(INTERCESSORS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, statusFilter, ministryFilter, availabilityFilter, sortBy, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, statusFilter, ministryFilter, availabilityFilter, sortBy]);

  const filtered = React.useMemo(() => {
    let list = intercessors.filter((p) => {
      const matchesSearch = !search || p.name.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All Status" || p.status === statusFilter;
      const matchesMinistry = ministryFilter === "All Groups" || p.ministry === ministryFilter;
      const matchesAvailability = availabilityFilter === "All Availability" || p.availability === availabilityFilter;
      return matchesSearch && matchesStatus && matchesMinistry && matchesAvailability;
    });
    if (sortBy === "Name (A-Z)") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "Name (Z-A)") list = [...list].sort((a, b) => b.name.localeCompare(a.name));
    return list;
  }, [intercessors, search, statusFilter, ministryFilter, availabilityFilter, sortBy]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  return {
    intercessors: paged, totalCount: filtered.length, isLoading, coverage, upcomingSchedules,
    search, setSearch, statusFilter, setStatusFilter, ministryFilter, setMinistryFilter,
    availabilityFilter, setAvailabilityFilter, sortBy, setSortBy,
    page, setPage, pageSize: PAGE_SIZE,
    applyFilters: refetch,
    resetFilters: () => { setStatusFilter("All Status"); setMinistryFilter("All Groups"); setAvailabilityFilter("All Availability"); setSortBy("Name (A-Z)"); },
  };
}
