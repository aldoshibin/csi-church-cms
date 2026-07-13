"use client";

import * as React from "react";
import { visitorService } from "@/services/visitorService";
import { debounce } from "@/lib/utils";
import { VISITOR_LIST_MOCK } from "@/lib/mock/visitorListMockData";


export function useVisitors() {
  const [visitors, setVisitors] = React.useState([]);
  const [totalCount, setTotalCount] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isUsingMockData, setIsUsingMockData] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState("");
  const [filters, setFilters] = React.useState({});
  const pageSize = 8; 

  const fetchVisitors = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const params = { page, page_size: pageSize, search: search || undefined, ...filters };
      const data = await visitorService.list(params);
      setVisitors(data.results ?? []);
      setTotalCount(data.count ?? 0);
      setIsUsingMockData(false);
    } catch (error) {
      // The /visitors/ endpoint doesn't exist on the backend yet (see
      // services/visitorService.js) — fall back to mock data rather than
      // showing a broken empty table. Once the real endpoint exists,
      // this catch stops firing and real data takes over automatically.
      console.warn("visitorService.list() failed, using mock visitor data:", error?.message);
      setVisitors(VISITOR_LIST_MOCK.results);
      setTotalCount(VISITOR_LIST_MOCK.count);
      setIsUsingMockData(true);
    } finally {
      setIsLoading(false);
    }
  }, [page, search, filters]);

  React.useEffect(() => {
    fetchVisitors();
  }, [fetchVisitors]);

  const debouncedSetSearch = React.useMemo(
    () => debounce((value) => { setPage(1); setSearch(value); }, 350),
    []
  );

  const updateFilters = (newFilters) => {
    setPage(1);
    setFilters((current) => ({ ...current, ...newFilters }));
  };

  const resetFilters = () => {
    setPage(1);
    setSearch("");
    setFilters({});
  };

  return {
    visitors, totalCount, isLoading, isUsingMockData, page, pageSize, setPage,
    search, setSearch: debouncedSetSearch, filters, updateFilters, resetFilters,
    refetch: fetchVisitors,
  };
}
