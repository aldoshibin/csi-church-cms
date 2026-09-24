"use client";

import * as React from "react";
import { mensFellowshipService } from "@/services/mensFellowshipService";
import { BIBLE_STUDIES_LIST_MOCK, STUDY_OVERVIEW_MOCK, UPCOMING_SESSIONS_LIST_MOCK } from "@/lib/mock/bibleStudiesMockData";

const PAGE_SIZE = 8;

export function useBibleStudiesList() {
  const [studies, setStudies] = React.useState(BIBLE_STUDIES_LIST_MOCK);
  const [overview, setOverview] = React.useState(STUDY_OVERVIEW_MOCK);
  const [upcomingSessions, setUpcomingSessions] = React.useState(UPCOMING_SESSIONS_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [categoryFilter, setCategoryFilter] = React.useState("All Categories");
  const [teacherFilter, setTeacherFilter] = React.useState("All Teachers");
  const [dayFilter, setDayFilter] = React.useState("All Days");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await mensFellowshipService.listBibleStudies({ search, statusFilter, categoryFilter, teacherFilter, dayFilter, page });
      setStudies(result?.studies ?? BIBLE_STUDIES_LIST_MOCK);
      setOverview(result?.overview ?? STUDY_OVERVIEW_MOCK);
      setUpcomingSessions(result?.upcomingSessions ?? UPCOMING_SESSIONS_LIST_MOCK);
    } catch {
      setStudies(BIBLE_STUDIES_LIST_MOCK);
      setOverview(STUDY_OVERVIEW_MOCK);
      setUpcomingSessions(UPCOMING_SESSIONS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, statusFilter, categoryFilter, teacherFilter, dayFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, statusFilter, categoryFilter, teacherFilter, dayFilter]);

  const filteredStudies = React.useMemo(() => {
    return studies.filter((s) => {
      const matchesSearch = !search || s.title.toLowerCase().includes(search.toLowerCase()) || s.topic.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All Status" || s.status === statusFilter;
      const matchesTeacher = teacherFilter === "All Teachers" || s.teacher === teacherFilter;
      const matchesDay = dayFilter === "All Days" || s.day === dayFilter;
      return matchesSearch && matchesStatus && matchesTeacher && matchesDay;
    });
  }, [studies, search, statusFilter, teacherFilter, dayFilter]);

  const pagedStudies = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredStudies.slice(start, start + PAGE_SIZE);
  }, [filteredStudies, page]);

  return {
    studies: pagedStudies, totalCount: filteredStudies.length, isLoading,
    overview, upcomingSessions,
    search, setSearch, statusFilter, setStatusFilter, categoryFilter, setCategoryFilter,
    teacherFilter, setTeacherFilter, dayFilter, setDayFilter,
    page, setPage, pageSize: PAGE_SIZE,
    refetch,
  };
}
