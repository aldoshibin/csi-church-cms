"use client";

import * as React from "react";
import { debounce } from "@/lib/utils";
import { BAPTISM_REGISTER_MOCK } from "@/lib/mock/baptismRegisterMockData";


export function useBaptismRegister() {
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState("");
  const [filters, setFilters] = React.useState({});
  const pageSize = 10; 

  const filtered = React.useMemo(() => {
    let rows = BAPTISM_REGISTER_MOCK.results;
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      rows = rows.filter((r) => r.childName.toLowerCase().includes(q) || r.baptismNo.toLowerCase().includes(q));
    }
    if (filters.gender) rows = rows.filter((r) => r.gender === filters.gender);
    if (filters.church) rows = rows.filter((r) => r.church === filters.church);
    return rows;
  }, [search, filters]);

  const pageStart = (page - 1) * pageSize;
  const records = filtered.slice(pageStart, pageStart + pageSize);

  const totalCount = search.trim() || Object.keys(filters).length ? filtered.length : BAPTISM_REGISTER_MOCK.count;

  const debouncedSetSearch = React.useMemo(
    () => debounce((value) => { setPage(1); setSearch(value); }, 350),
    []
  );

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
    records, totalCount, isLoading: false, page, pageSize, setPage,
    search, setSearch: debouncedSetSearch, filters, updateFilters, clearFilters,
  };
}
