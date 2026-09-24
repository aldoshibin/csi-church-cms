"use client";

import * as React from "react";
import { teachersService } from "@/services/teachersService";
import {
  TEACHERS_MOCK, TEACHERS_BY_GENDER_MOCK, CLASSES_BY_TEACHER_MOCK, EXPERIENCE_SUMMARY_MOCK,
} from "@/lib/mock/teachersMockData";

const PAGE_SIZE = 8;

export function useTeachers() {
  const [teachers, setTeachers] = React.useState(TEACHERS_MOCK);
  const [byGender, setByGender] = React.useState(TEACHERS_BY_GENDER_MOCK);
  const [classesByTeacher, setClassesByTeacher] = React.useState(CLASSES_BY_TEACHER_MOCK);
  const [experienceSummary, setExperienceSummary] = React.useState(EXPERIENCE_SUMMARY_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await teachersService.listTeachers({ search, statusFilter, page });
      setTeachers(result?.teachers ?? TEACHERS_MOCK);
      setByGender(result?.byGender ?? TEACHERS_BY_GENDER_MOCK);
      setClassesByTeacher(result?.classesByTeacher ?? CLASSES_BY_TEACHER_MOCK);
      setExperienceSummary(result?.experienceSummary ?? EXPERIENCE_SUMMARY_MOCK);
    } catch {
      setTeachers(TEACHERS_MOCK);
      setByGender(TEACHERS_BY_GENDER_MOCK);
      setClassesByTeacher(CLASSES_BY_TEACHER_MOCK);
      setExperienceSummary(EXPERIENCE_SUMMARY_MOCK);
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

  const filteredTeachers = React.useMemo(() => {
    return teachers.filter((t) => {
      const matchesSearch = !search || t.name.toLowerCase().includes(search.toLowerCase()) || t.id.toLowerCase().includes(search.toLowerCase()) || t.email.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All Status" || t.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [teachers, search, statusFilter]);

  const pagedTeachers = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredTeachers.slice(start, start + PAGE_SIZE);
  }, [filteredTeachers, page]);

  return {
    teachers: pagedTeachers, totalCount: filteredTeachers.length, isLoading,
    byGender, classesByTeacher, experienceSummary,
    search, setSearch, statusFilter, setStatusFilter,
    page, setPage, pageSize: PAGE_SIZE,
    refetch,
  };
}
