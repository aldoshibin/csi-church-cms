"use client";

import * as React from "react";
import { WIDOW_WIDOWER_LIST_MOCK } from "@/lib/mock/widowWidowerListMock";


export function useWidowWidowerMembers() {
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState("");
  const [filters, setFilters] = React.useState({});
  const pageSize = 8; 

  const allMembers = WIDOW_WIDOWER_LIST_MOCK.results;

  const filtered = React.useMemo(() => {
    let rows = allMembers;
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      rows = rows.filter(
        (m) =>
          m.full_name.toLowerCase().includes(q) ||
          m.membership_number?.toLowerCase().includes(q) ||
          m.phone_number?.replace(/\s+/g, "").includes(q.replace(/\s+/g, ""))
      );
    }
    if (filters.gender) rows = rows.filter((m) => m.gender === filters.gender);
    if (filters.membership_status) rows = rows.filter((m) => m.membership_status === filters.membership_status);
    if (filters.ministry_group) rows = rows.filter((m) => m.ministry_group === filters.ministry_group);
    return rows;
  }, [allMembers, search, filters]);

  const totalCount = WIDOW_WIDOWER_LIST_MOCK.count; 
  const pageStart = (page - 1) * pageSize;
  const members = filtered.slice(pageStart, pageStart + pageSize);

  const debouncedSetSearch = React.useMemo(() => {
    let timeout;
    return (value) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setPage(1);
        setSearch(value);
      }, 350);
    };
  }, []);

  const updateFilters = (newFilters) => {
    setPage(1);
    setFilters((current) => ({ ...current, ...newFilters }));
  };

  const clearFilters = () => {
    setPage(1);
    setSearch("");
    setFilters({});
  };

  return {
    members, totalCount, isLoading: false, isUsingMockData: true, page, pageSize, setPage,
    search, setSearch: debouncedSetSearch, filters, updateFilters, clearFilters,
    refetch: () => {},
  };
}
