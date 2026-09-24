"use client";

import * as React from "react";
import { choirWorshipService } from "@/services/choirWorshipService";
import { SERVICES_LIST_MOCK, SERVICES_UPCOMING_MOCK, SERVICE_ATTENDANCE_MOCK } from "@/lib/mock/servicesMockData";

const PAGE_SIZE = 8;

export function useServicesList() {
  const [services, setServices] = React.useState(SERVICES_LIST_MOCK);
  const [upcoming] = React.useState(SERVICES_UPCOMING_MOCK);
  const [attendance] = React.useState(SERVICE_ATTENDANCE_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [typeFilter, setTypeFilter] = React.useState("All Service Types");
  const [locationFilter, setLocationFilter] = React.useState("All Locations");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await choirWorshipService.listServices({ search, typeFilter, locationFilter, statusFilter, page });
      setServices(result?.services ?? SERVICES_LIST_MOCK);
    } catch {
      setServices(SERVICES_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, typeFilter, locationFilter, statusFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, typeFilter, locationFilter, statusFilter]);

  const filtered = React.useMemo(() => {
    return services.filter((s) => {
      const matchesSearch = !search || s.title.toLowerCase().includes(search.toLowerCase());
      const matchesType = typeFilter === "All Service Types" || s.type === typeFilter;
      const matchesLocation = locationFilter === "All Locations" || s.location === locationFilter;
      const matchesStatus = statusFilter === "All Status" || s.status === statusFilter;
      return matchesSearch && matchesType && matchesLocation && matchesStatus;
    });
  }, [services, search, typeFilter, locationFilter, statusFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  return {
    services: paged, totalCount: filtered.length, isLoading,
    upcoming, attendance,
    search, setSearch, typeFilter, setTypeFilter, locationFilter, setLocationFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize: PAGE_SIZE,
    refetch,
  };
}
