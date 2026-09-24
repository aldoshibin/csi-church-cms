"use client";

import * as React from "react";
import { prayerMinistryService } from "@/services/prayerMinistryService";
import { BULLETIN_REQUESTS_LIST_MOCK, BULLETIN_OVERVIEW_MOCK, BULLETIN_BY_TYPE_MOCK, BULLETIN_RECENT_ACTIVITY_MOCK } from "@/lib/mock/bulletinRequestsMockData";

const PAGE_SIZE = 10;

export function useBulletinRequestsList() {
  const [requests, setRequests] = React.useState(BULLETIN_REQUESTS_LIST_MOCK);
  const [overview] = React.useState(BULLETIN_OVERVIEW_MOCK);
  const [byType] = React.useState(BULLETIN_BY_TYPE_MOCK);
  const [recentActivity] = React.useState(BULLETIN_RECENT_ACTIVITY_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [typeFilter, setTypeFilter] = React.useState("All Types");
  const [submittedByFilter, setSubmittedByFilter] = React.useState("All Members");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await prayerMinistryService.listBulletinRequests({ search, statusFilter, typeFilter, submittedByFilter, page });
      setRequests(result?.requests ?? BULLETIN_REQUESTS_LIST_MOCK);
    } catch {
      setRequests(BULLETIN_REQUESTS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, statusFilter, typeFilter, submittedByFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, statusFilter, typeFilter, submittedByFilter]);

  const filtered = React.useMemo(() => {
    return requests.filter((r) => {
      const matchesSearch = !search || r.title.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All Status" || r.status === statusFilter;
      const matchesType = typeFilter === "All Types" || r.type === typeFilter;
      const matchesSubmittedBy = submittedByFilter === "All Members" || r.submittedBy === submittedByFilter;
      return matchesSearch && matchesStatus && matchesType && matchesSubmittedBy;
    });
  }, [requests, search, statusFilter, typeFilter, submittedByFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  return {
    requests: paged, totalCount: filtered.length, isLoading, overview, byType, recentActivity,
    search, setSearch, statusFilter, setStatusFilter, typeFilter, setTypeFilter, submittedByFilter, setSubmittedByFilter,
    page, setPage, pageSize: PAGE_SIZE,
    applyFilters: refetch,
    resetFilters: () => { setStatusFilter("All Status"); setTypeFilter("All Types"); setSubmittedByFilter("All Members"); },
  };
}
