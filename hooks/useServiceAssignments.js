"use client";

import * as React from "react";
import { serviceAssignmentsService } from "@/services/serviceAssignmentsService";
import {
  ASSIGNMENTS_LIST_MOCK, ASSIGNMENT_OVERVIEW_STATS_MOCK, ASSIGNMENTS_BY_STATUS_MOCK, UPCOMING_ASSIGNMENTS_MINI_MOCK,
} from "@/lib/mock/serviceAssignmentsMockData";

const PAGE_SIZE = 8;
const TABS = ["All Assignments", "Upcoming", "This Week", "This Month", "Past"];

function isUpcoming(dateStr) {
  return new Date(dateStr).getTime() >= new Date("2026-05-19").getTime();
}

export function useServiceAssignments() {
  const [assignments, setAssignments] = React.useState(ASSIGNMENTS_LIST_MOCK);
  const [stats] = React.useState(ASSIGNMENT_OVERVIEW_STATS_MOCK);
  const [byStatus] = React.useState(ASSIGNMENTS_BY_STATUS_MOCK);
  const [upcoming] = React.useState(UPCOMING_ASSIGNMENTS_MINI_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [activeTab, setActiveTab] = React.useState("All Assignments");
  const [search, setSearch] = React.useState("");
  const [ministryFilter, setMinistryFilter] = React.useState("All Ministries");
  const [teamFilter, setTeamFilter] = React.useState("All Teams");
  const [dateFilter, setDateFilter] = React.useState("");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await serviceAssignmentsService.listAssignments({ activeTab, search, ministryFilter, teamFilter, dateFilter, page });
      setAssignments(result?.assignments ?? ASSIGNMENTS_LIST_MOCK);
    } catch {
      setAssignments(ASSIGNMENTS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [activeTab, search, ministryFilter, teamFilter, dateFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [activeTab, search, ministryFilter, teamFilter, dateFilter]);

  const filtered = React.useMemo(() => {
    return assignments.filter((a) => {
      const matchesTab =
        activeTab === "All Assignments" ? true :
        activeTab === "Upcoming" ? isUpcoming(a.date) && a.status !== "Completed" :
        activeTab === "Past" ? !isUpcoming(a.date) || a.status === "Completed" :
        true;
      const matchesSearch = !search || a.title.toLowerCase().includes(search.toLowerCase());
      const matchesMinistry = ministryFilter === "All Ministries" || a.ministryTeam === ministryFilter;
      const matchesTeam = teamFilter === "All Teams" || a.team === teamFilter;
      const matchesDate = !dateFilter || a.date === dateFilter;
      return matchesTab && matchesSearch && matchesMinistry && matchesTeam && matchesDate;
    });
  }, [assignments, activeTab, search, ministryFilter, teamFilter, dateFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  return {
    assignments: paged, totalCount: filtered.length, isLoading, stats, byStatus, upcoming,
    tabs: TABS, activeTab, setActiveTab,
    search, setSearch, ministryFilter, setMinistryFilter, teamFilter, setTeamFilter, dateFilter, setDateFilter,
    page, setPage, pageSize: PAGE_SIZE,
    resetFilters: () => { setSearch(""); setMinistryFilter("All Ministries"); setTeamFilter("All Teams"); setDateFilter(""); },
  };
}
