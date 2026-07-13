"use client";

import * as React from "react";
import { memberService } from "@/services/memberService";
import { debounce } from "@/lib/utils";


export function useMembers() {
  const [members, setMembers] = React.useState([]);
  const [totalCount, setTotalCount] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState("");
  const [filters, setFilters] = React.useState({});
  const [ordering, setOrdering] = React.useState("first_name");
  const pageSize = 20;

  const fetchMembers = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const params = {
        page,
        search: search || undefined,
        ordering,
        ...filters,
      };
      const data = await memberService.list(params);
      setMembers(data.results);
      setTotalCount(data.count);
    } finally {
      setIsLoading(false);
    }
  }, [page, search, filters, ordering]);

  React.useEffect(() => {
    fetchMembers();
  }, [fetchMembers]);

  const debouncedSetSearch = React.useMemo(
    () => debounce((value) => { setPage(1); setSearch(value); }, 350),
    []
  );

  const updateFilters = (newFilters) => {
    setPage(1);
    setFilters((current) => ({ ...current, ...newFilters }));
  };

  const handleSortChange = (key, direction) => {
    setOrdering(direction === "desc" ? `-${key}` : key);
  };

  return {
    members,
    totalCount,
    isLoading,
    page,
    pageSize,
    setPage,
    search,
    setSearch: debouncedSetSearch,
    filters,
    updateFilters,
    ordering,
    handleSortChange,
    refetch: fetchMembers,
  };
}
