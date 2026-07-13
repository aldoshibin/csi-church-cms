"use client";

import * as React from "react";
import { familyService } from "@/services/familyService";
import { debounce } from "@/lib/utils";

export function useFamilies() {
  const [families, setFamilies] = React.useState([]);
  const [totalCount, setTotalCount] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState("");
  const pageSize = 20;

  const fetchFamilies = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await familyService.list({ page, search: search || undefined });
      setFamilies(data.results);
      setTotalCount(data.count);
    } finally {
      setIsLoading(false);
    }
  }, [page, search]);

  React.useEffect(() => {
    fetchFamilies();
  }, [fetchFamilies]);

  const debouncedSetSearch = React.useMemo(
    () => debounce((value) => { setPage(1); setSearch(value); }, 350),
    []
  );

  return { families, totalCount, isLoading, page, pageSize, setPage, setSearch: debouncedSetSearch, refetch: fetchFamilies };
}
