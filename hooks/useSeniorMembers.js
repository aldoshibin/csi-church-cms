"use client";

import * as React from "react";
import { memberService } from "@/services/memberService";
import { debounce } from "@/lib/utils";
import { SENIOR_MEMBERS_LIST_MOCK } from "@/lib/mock/seniorMembersListMock";


export function useSeniorMembers() {
  const [members, setMembers] = React.useState([]);
  const [totalCount, setTotalCount] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isUsingMockData, setIsUsingMockData] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState("");
  const [filters, setFilters] = React.useState({});
  const [ordering, setOrdering] = React.useState("-age");
  const pageSize = 8; 

  const fetchMembers = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const params = {
        page, page_size: pageSize, search: search || undefined, ordering,
        age_min: 60,
        ...filters,
      };
      const data = await memberService.list(params);
      setMembers(data.results ?? []);
      setTotalCount(data.count ?? 0);
      setIsUsingMockData(false);
    } catch (error) {
      console.warn("memberService.list() failed, using mock senior-members data:", error?.message);
      setMembers(SENIOR_MEMBERS_LIST_MOCK.results);
      setTotalCount(SENIOR_MEMBERS_LIST_MOCK.count);
      setIsUsingMockData(true);
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
    members, totalCount, isLoading, isUsingMockData, page, pageSize, setPage,
    search, setSearch: debouncedSetSearch, filters, updateFilters, clearFilters,
    refetch: fetchMembers,
  };
}
