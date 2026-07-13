"use client";

import * as React from "react";
import { memberService } from "@/services/memberService";
import { debounce } from "@/lib/utils";
import { MIGRATED_MEMBERS_LIST_MOCK } from "@/lib/mock/migratedMembersListMock";


export function useMigratedMembers() {
  const [members, setMembers] = React.useState([]);
  const [totalCount, setTotalCount] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isUsingMockData, setIsUsingMockData] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState("");
  const [filters, setFilters] = React.useState({});
  const [ordering, setOrdering] = React.useState("-migrated_on");
  const pageSize = 8; // matches "Showing 1 to 8 of 96 entries" 
  const fetchMembers = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const params = {
        page, page_size: pageSize, search: search || undefined, ordering,
        membership_status: "TRANSFERRED_OUT",
        ...filters,
      };
      const data = await memberService.list(params);
      setMembers(data.results ?? []);
      setTotalCount(data.count ?? 0);
      setIsUsingMockData(false);
    } catch (error) {
      // No member_migration backend deployed yet (or the base member
      // list endpoint isn't reachable) — fall back to mock data so the
      // table, and the View/Note action modals, have something real to
      // work with. Once the backend is live, this stops firing and real
      // data takes over automatically.
      console.warn("memberService.list() failed, using mock migrated-members data:", error?.message);
      setMembers(MIGRATED_MEMBERS_LIST_MOCK.results);
      setTotalCount(MIGRATED_MEMBERS_LIST_MOCK.count);
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
