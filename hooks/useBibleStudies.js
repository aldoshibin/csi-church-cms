"use client";

import * as React from "react";
import { bibleStudiesService } from "@/services/bibleStudiesService";
import { BIBLE_STUDIES_MOCK, BS_UPCOMING_MOCK, BS_BY_TYPE_MOCK, BS_DETAIL_DEFAULTS } from "@/lib/mock/bibleStudiesMockData";

const PAGE_SIZE = 8;

export function useBibleStudies() {
  const [studies, setStudies] = React.useState(BIBLE_STUDIES_MOCK);
  const [upcoming, setUpcoming] = React.useState(BS_UPCOMING_MOCK);
  const [byType, setByType] = React.useState(BS_BY_TYPE_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [typeFilter, setTypeFilter] = React.useState("All Study Types");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);

  const [selectedStudyId, setSelectedStudyId] = React.useState(null);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await bibleStudiesService.listStudies({ search, typeFilter, statusFilter, page });
      setStudies(result?.studies ?? BIBLE_STUDIES_MOCK);
      setUpcoming(result?.upcoming ?? BS_UPCOMING_MOCK);
      setByType(result?.byType ?? BS_BY_TYPE_MOCK);
    } catch {
      setStudies(BIBLE_STUDIES_MOCK);
      setUpcoming(BS_UPCOMING_MOCK);
      setByType(BS_BY_TYPE_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, typeFilter, statusFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, typeFilter, statusFilter]);

  const filteredStudies = React.useMemo(() => {
    return studies.filter((s) => {
      const matchesSearch = !search || s.title.toLowerCase().includes(search.toLowerCase()) || s.leader.toLowerCase().includes(search.toLowerCase());
      const matchesType = typeFilter === "All Study Types" || s.studyType === typeFilter;
      const matchesStatus = statusFilter === "All Status" || s.status === statusFilter;
      return matchesSearch && matchesType && matchesStatus;
    });
  }, [studies, search, typeFilter, statusFilter]);

  const pagedStudies = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredStudies.slice(start, start + PAGE_SIZE);
  }, [filteredStudies, page]);

  const selectedStudy = React.useMemo(() => {
    const found = studies.find((s) => s.id === selectedStudyId);
    if (!found) return null;
    return { ...BS_DETAIL_DEFAULTS, ...found };
  }, [studies, selectedStudyId]);

  return {
    studies: pagedStudies, totalCount: filteredStudies.length, isLoading,
    upcoming, byType,
    search, setSearch, typeFilter, setTypeFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize: PAGE_SIZE,
    selectedStudy, setSelectedStudyId,
    refetch,
  };
}
