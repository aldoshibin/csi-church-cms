"use client";

import * as React from "react";
import { lessonsService } from "@/services/lessonsService";
import { LESSONS_MOCK, POPULAR_TOPICS_MOCK, UPCOMING_LESSONS_MOCK } from "@/lib/mock/lessonsMockData";

const PAGE_SIZE = 10;

export function useLessons() {
  const [lessons, setLessons] = React.useState(LESSONS_MOCK);
  const [popularTopics, setPopularTopics] = React.useState(POPULAR_TOPICS_MOCK);
  const [upcomingLessons, setUpcomingLessons] = React.useState(UPCOMING_LESSONS_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [classFilter, setClassFilter] = React.useState("All Classes");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await lessonsService.listLessons({ search, classFilter, statusFilter, page });
      setLessons(result?.lessons ?? LESSONS_MOCK);
      setPopularTopics(result?.popularTopics ?? POPULAR_TOPICS_MOCK);
      setUpcomingLessons(result?.upcomingLessons ?? UPCOMING_LESSONS_MOCK);
    } catch {
      setLessons(LESSONS_MOCK);
      setPopularTopics(POPULAR_TOPICS_MOCK);
      setUpcomingLessons(UPCOMING_LESSONS_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, classFilter, statusFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, classFilter, statusFilter]);

  const filteredLessons = React.useMemo(() => {
    return lessons.filter((l) => {
      const matchesSearch = !search || l.title.toLowerCase().includes(search.toLowerCase()) || l.teacher.toLowerCase().includes(search.toLowerCase());
      const matchesClass = classFilter === "All Classes" || l.className === classFilter;
      const matchesStatus = statusFilter === "All Status" || l.status === statusFilter;
      return matchesSearch && matchesClass && matchesStatus;
    });
  }, [lessons, search, classFilter, statusFilter]);

  const pagedLessons = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredLessons.slice(start, start + PAGE_SIZE);
  }, [filteredLessons, page]);

  return {
    lessons: pagedLessons, totalCount: filteredLessons.length, isLoading,
    popularTopics, upcomingLessons,
    search, setSearch, classFilter, setClassFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize: PAGE_SIZE,
    refetch,
  };
}
