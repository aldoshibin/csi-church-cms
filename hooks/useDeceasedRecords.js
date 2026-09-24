"use client";

import * as React from "react";
import { deceasedService } from "@/services/deceasedService";
import {
  DECEASED_RECORDS_LIST_MOCK, GENDER_DISTRIBUTION_DONUT_MOCK, DECEASED_RECORDS_BY_YEAR_MOCK,
} from "@/lib/mock/vmDeceasedMockData";

export function useDeceasedRecords() {
  const [records, setRecords] = React.useState(DECEASED_RECORDS_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [sectionFilter, setSectionFilter] = React.useState("All Sections");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [genderFilter, setGenderFilter] = React.useState("All Gender");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await deceasedService.listDeceased({ search, sectionFilter, statusFilter, genderFilter, page, pageSize });
      setRecords(result?.records ?? DECEASED_RECORDS_LIST_MOCK);
    } catch {
      setRecords(DECEASED_RECORDS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, sectionFilter, statusFilter, genderFilter, page, pageSize]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, sectionFilter, statusFilter, genderFilter, pageSize]);

  const clearFilters = () => {
    setSearch("");
    setSectionFilter("All Sections");
    setStatusFilter("All Status");
    setGenderFilter("All Gender");
  };

  const filtered = React.useMemo(() => {
    return records.filter((r) => {
      const matchesSearch = !search
        || r.fullName.toLowerCase().includes(search.toLowerCase())
        || r.recordId.toLowerCase().includes(search.toLowerCase())
        || r.burialRecordId.toLowerCase().includes(search.toLowerCase());
      const matchesSection = sectionFilter === "All Sections" || r.section === sectionFilter;
      const matchesStatus = statusFilter === "All Status" || r.status === statusFilter;
      const matchesGender = genderFilter === "All Gender" || r.gender === genderFilter;
      return matchesSearch && matchesSection && matchesStatus && matchesGender;
    });
  }, [records, search, sectionFilter, statusFilter, genderFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  return {
    records: paged, totalCount: filtered.length, isLoading,
    donut: GENDER_DISTRIBUTION_DONUT_MOCK, recordsByYear: DECEASED_RECORDS_BY_YEAR_MOCK,
    search, setSearch, sectionFilter, setSectionFilter, statusFilter, setStatusFilter,
    genderFilter, setGenderFilter, clearFilters,
    page, setPage, pageSize, setPageSize,
  };
}
