"use client";

import * as React from "react";
import { volunteerManagementService } from "@/services/volunteerManagementService";
import {
  VOLUNTEERS_LIST_MOCK, VOLUNTEER_OVERVIEW_STATS_MOCK, TOP_MINISTRIES_MOCK, UPCOMING_ASSIGNMENTS_MOCK,
  VOLUNTEER_LIST_STATS_MOCK,
} from "@/lib/mock/volunteersMockData";

const PAGE_SIZE = 8;
const TABS = ["All Volunteers", "Active", "Inactive", "Pending", "On Break"];

export function useVolunteersDashboard() {
  const [volunteers, setVolunteers] = React.useState(VOLUNTEERS_LIST_MOCK);
  const [stats] = React.useState(VOLUNTEER_OVERVIEW_STATS_MOCK);
  const [listStats] = React.useState(VOLUNTEER_LIST_STATS_MOCK);
  const [topMinistries] = React.useState(TOP_MINISTRIES_MOCK);
  const [upcomingAssignments] = React.useState(UPCOMING_ASSIGNMENTS_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [activeTab, setActiveTab] = React.useState("All Volunteers");
  const [search, setSearch] = React.useState("");
  const [ministryFilter, setMinistryFilter] = React.useState("All Ministries");
  const [roleFilter, setRoleFilter] = React.useState("All Roles");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);
  const [selectedIds, setSelectedIds] = React.useState([]);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await volunteerManagementService.getDashboard({ activeTab, search, ministryFilter, roleFilter, statusFilter, page });
      setVolunteers(result?.volunteers ?? VOLUNTEERS_LIST_MOCK);
    } catch {
      setVolunteers(VOLUNTEERS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [activeTab, search, ministryFilter, roleFilter, statusFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [activeTab, search, ministryFilter, roleFilter, statusFilter]);

  const filtered = React.useMemo(() => {
    return volunteers.filter((v) => {
      const matchesTab = activeTab === "All Volunteers" || v.status === activeTab;
      const matchesSearch = !search || v.name.toLowerCase().includes(search.toLowerCase());
      const matchesMinistry = ministryFilter === "All Ministries" || v.ministry === ministryFilter;
      const matchesRole = roleFilter === "All Roles" || v.role === roleFilter;
      const matchesStatus = statusFilter === "All Status" || v.status === statusFilter;
      return matchesTab && matchesSearch && matchesMinistry && matchesRole && matchesStatus;
    });
  }, [volunteers, activeTab, search, ministryFilter, roleFilter, statusFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  return {
    volunteers: paged, totalCount: filtered.length, isLoading, stats, listStats, topMinistries, upcomingAssignments,
    tabs: TABS, activeTab, setActiveTab,
    search, setSearch, ministryFilter, setMinistryFilter, roleFilter, setRoleFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize: PAGE_SIZE,
    selectedIds, setSelectedIds,
    resetFilters: () => { setSearch(""); setMinistryFilter("All Ministries"); setRoleFilter("All Roles"); setStatusFilter("All Status"); },
  };
}
