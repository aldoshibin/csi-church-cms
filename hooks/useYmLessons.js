"use client";

import * as React from "react";
import { ymLessonsService } from "@/services/ymLessonsService";
import { LESSONS_MOCK, LESSONS_STATS_MOCK, UPCOMING_LESSONS_MOCK, LESSONS_BY_CATEGORY_MOCK } from "@/lib/mock/ymLessonsMockData";

const PAGE_SIZE = 8;

export function useYmLessons() {
  const [lessons, setLessons] = React.useState(LESSONS_MOCK);
  const [stats, setStats] = React.useState(LESSONS_STATS_MOCK);
  const [upcomingLessons, setUpcomingLessons] = React.useState(UPCOMING_LESSONS_MOCK);
  const [byCategory, setByCategory] = React.useState(LESSONS_BY_CATEGORY_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState("All Categories");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await ymLessonsService.listLessons({ search, categoryFilter, statusFilter, page });
      setLessons(result?.lessons ?? LESSONS_MOCK);
      setStats(result?.stats ?? LESSONS_STATS_MOCK);
      setUpcomingLessons(result?.upcomingLessons ?? UPCOMING_LESSONS_MOCK);
      setByCategory(result?.byCategory ?? LESSONS_BY_CATEGORY_MOCK);
    } catch {
      setLessons(LESSONS_MOCK);
      setStats(LESSONS_STATS_MOCK);
      setUpcomingLessons(UPCOMING_LESSONS_MOCK);
      setByCategory(LESSONS_BY_CATEGORY_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, categoryFilter, statusFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, categoryFilter, statusFilter]);

  const filteredLessons = React.useMemo(() => {
    return lessons.filter((l) => {
      const matchesSearch = !search || l.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = categoryFilter === "All Categories" || l.category === categoryFilter;
      const matchesStatus = statusFilter === "All Status" || l.status === statusFilter;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [lessons, search, categoryFilter, statusFilter]);

  const pagedLessons = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredLessons.slice(start, start + PAGE_SIZE);
  }, [filteredLessons, page]);

  return {
    lessons: pagedLessons, totalCount: filteredLessons.length, isLoading,
    stats, upcomingLessons, byCategory,
    search, setSearch, categoryFilter, setCategoryFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize: PAGE_SIZE,
    refetch,
  };
}
