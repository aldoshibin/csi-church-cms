"use client";

import * as React from "react";
import { ymVolunteersService } from "@/services/ymVolunteersService";
import { VOLUNTEERS_MOCK } from "@/lib/mock/ymVolunteersMockData";

const PAGE_SIZE = 8;

export function useYmVolunteers() {
  const [volunteers, setVolunteers] = React.useState(VOLUNTEERS_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [ministryFilter, setMinistryFilter] = React.useState("All Ministries");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await ymVolunteersService.listVolunteers({ search, ministryFilter, statusFilter, page });
      setVolunteers(result?.volunteers ?? VOLUNTEERS_MOCK);
    } catch {
      setVolunteers(VOLUNTEERS_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, ministryFilter, statusFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, ministryFilter, statusFilter]);

  const filteredVolunteers = React.useMemo(() => {
    return volunteers.filter((v) => {
      const matchesSearch = !search || v.name.toLowerCase().includes(search.toLowerCase()) || v.email.toLowerCase().includes(search.toLowerCase());
      const matchesMinistry = ministryFilter === "All Ministries" || v.ministry === ministryFilter;
      const matchesStatus = statusFilter === "All Status" || v.status === statusFilter;
      return matchesSearch && matchesMinistry && matchesStatus;
    });
  }, [volunteers, search, ministryFilter, statusFilter]);

  const pagedVolunteers = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredVolunteers.slice(start, start + PAGE_SIZE);
  }, [filteredVolunteers, page]);

  return {
    volunteers: pagedVolunteers, totalCount: filteredVolunteers.length, isLoading,
    search, setSearch, ministryFilter, setMinistryFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize: PAGE_SIZE,
    refetch,
  };
}
