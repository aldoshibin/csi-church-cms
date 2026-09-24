"use client";

import * as React from "react";
import { cemeteryService } from "@/services/cemeteryService";
import { BURIAL_RECORDS_LIST_MOCK } from "@/lib/mock/vmCemeteryMockData";

export function useBurialRecords() {
  const [records, setRecords] = React.useState(BURIAL_RECORDS_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [sectionFilter, setSectionFilter] = React.useState("All Sections");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);
  const pageSize = 5;

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await cemeteryService.listBurialRecords({ search, sectionFilter, statusFilter, page, pageSize });
      setRecords(result?.records ?? BURIAL_RECORDS_LIST_MOCK);
    } catch {
      setRecords(BURIAL_RECORDS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, sectionFilter, statusFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, sectionFilter, statusFilter]);

  const filtered = React.useMemo(() => {
    return records.filter((r) => {
      const matchesSearch = !search
        || r.deceasedName.toLowerCase().includes(search.toLowerCase())
        || r.recordNumber.toLowerCase().includes(search.toLowerCase());
      const matchesSection = sectionFilter === "All Sections" || r.section === sectionFilter;
      const matchesStatus = statusFilter === "All Status" || r.status === statusFilter;
      return matchesSearch && matchesSection && matchesStatus;
    });
  }, [records, search, sectionFilter, statusFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  return {
    records: paged, totalCount: filtered.length, isLoading,
    search, setSearch, sectionFilter, setSectionFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize,
  };
}
