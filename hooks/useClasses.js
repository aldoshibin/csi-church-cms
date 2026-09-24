"use client";

import * as React from "react";
import { classesService } from "@/services/classesService";
import { CLASSES_MOCK, CLASSES_STATS_MOCK, CLASS_OVERVIEW_MOCK, UPCOMING_CLASS_SCHEDULES_MOCK } from "@/lib/mock/classesMockData";

const PAGE_SIZE = 7;

export function useClasses() {
  const [classes, setClasses] = React.useState(CLASSES_MOCK);
  const [stats, setStats] = React.useState(CLASSES_STATS_MOCK);
  const [overview, setOverview] = React.useState(CLASS_OVERVIEW_MOCK);
  const [upcomingSchedules, setUpcomingSchedules] = React.useState(UPCOMING_CLASS_SCHEDULES_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await classesService.listClasses({ search, statusFilter, page });
      setClasses(result?.classes ?? CLASSES_MOCK);
      setStats(result?.stats ?? CLASSES_STATS_MOCK);
      setOverview(result?.overview ?? CLASS_OVERVIEW_MOCK);
      setUpcomingSchedules(result?.upcomingSchedules ?? UPCOMING_CLASS_SCHEDULES_MOCK);
    } catch {
      setClasses(CLASSES_MOCK);
      setStats(CLASSES_STATS_MOCK);
      setOverview(CLASS_OVERVIEW_MOCK);
      setUpcomingSchedules(UPCOMING_CLASS_SCHEDULES_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, statusFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, statusFilter]);

  const filteredClasses = React.useMemo(() => {
    return classes.filter((c) => {
      const matchesSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.teacher.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All Status" || c.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [classes, search, statusFilter]);

  const pagedClasses = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredClasses.slice(start, start + PAGE_SIZE);
  }, [filteredClasses, page]);

  return {
    classes: pagedClasses, totalCount: filteredClasses.length, isLoading,
    stats, overview, upcomingSchedules,
    search, setSearch, statusFilter, setStatusFilter,
    page, setPage, pageSize: PAGE_SIZE,
    refetch,
  };
}
