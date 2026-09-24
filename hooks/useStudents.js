"use client";

import * as React from "react";
import { studentsService } from "@/services/studentsService";
import {
  STUDENTS_MOCK, STUDENTS_STATS_MOCK, STUDENTS_BY_CLASS_MOCK,
  AGE_GROUP_SUMMARY_MOCK, RECENT_REGISTRATIONS_MOCK,
} from "@/lib/mock/studentsMockData";

const PAGE_SIZE = 8;

export function useStudents() {
  const [students, setStudents] = React.useState(STUDENTS_MOCK);
  const [stats, setStats] = React.useState(STUDENTS_STATS_MOCK);
  const [byClass, setByClass] = React.useState(STUDENTS_BY_CLASS_MOCK);
  const [ageGroupSummary, setAgeGroupSummary] = React.useState(AGE_GROUP_SUMMARY_MOCK);
  const [recentRegistrations, setRecentRegistrations] = React.useState(RECENT_REGISTRATIONS_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [classFilter, setClassFilter] = React.useState("All Classes");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await studentsService.listStudents({ search, classFilter, page });
      setStudents(result?.students ?? STUDENTS_MOCK);
      setStats(result?.stats ?? STUDENTS_STATS_MOCK);
      setByClass(result?.byClass ?? STUDENTS_BY_CLASS_MOCK);
      setAgeGroupSummary(result?.ageGroupSummary ?? AGE_GROUP_SUMMARY_MOCK);
      setRecentRegistrations(result?.recentRegistrations ?? RECENT_REGISTRATIONS_MOCK);
    } catch {
      setStudents(STUDENTS_MOCK);
      setStats(STUDENTS_STATS_MOCK);
      setByClass(STUDENTS_BY_CLASS_MOCK);
      setAgeGroupSummary(AGE_GROUP_SUMMARY_MOCK);
      setRecentRegistrations(RECENT_REGISTRATIONS_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, classFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, classFilter]);

  const filteredStudents = React.useMemo(() => {
    return students.filter((s) => {
      const matchesSearch = !search || s.name.toLowerCase().includes(search.toLowerCase()) || s.id.toLowerCase().includes(search.toLowerCase()) || s.guardian.toLowerCase().includes(search.toLowerCase());
      const matchesClass = classFilter === "All Classes" || s.className === classFilter;
      return matchesSearch && matchesClass;
    });
  }, [students, search, classFilter]);

  const pagedStudents = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredStudents.slice(start, start + PAGE_SIZE);
  }, [filteredStudents, page]);

  return {
    students: pagedStudents, totalCount: filteredStudents.length, isLoading,
    stats, byClass, ageGroupSummary, recentRegistrations,
    search, setSearch, classFilter, setClassFilter,
    page, setPage, pageSize: PAGE_SIZE,
    refetch,
  };
}
