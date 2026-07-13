"use client";

import * as React from "react";
import { memberService } from "@/services/memberService";
import { debounce } from "@/lib/utils";


export function useInactiveMembers() {
  const [members, setMembers] = React.useState([]);
  const [totalCount, setTotalCount] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState("");
  const [filters, setFilters] = React.useState({});
  const [ordering, setOrdering] = React.useState("-last_attended_on");
  const pageSize = 8; // matches "Showing 1 to 8 of 128 entries" 

  const fetchMembers = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const params = {
        page, page_size: pageSize, search: search || undefined, ordering,
        membership_status: "INACTIVE",
        ...filters,
      };
      const data = await memberService.list(params);
      setMembers(data.results ?? []);
      setTotalCount(data.count ?? 0);
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

  const clearFilters = () => {
    setPage(1);
    setSearch("");
    setFilters({});
  };

  return {
    members, totalCount, isLoading, page, pageSize, setPage,
    search, setSearch: debouncedSetSearch, filters, updateFilters, clearFilters,
    ordering, setOrdering,
    refetch: fetchMembers,
  };
}
