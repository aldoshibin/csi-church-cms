"use client";

import * as React from "react";
import { mensFellowshipService } from "@/services/mensFellowshipService";
import {
  ACTIVITIES_LIST_MOCK, ACTIVITY_OVERVIEW_MOCK, UPCOMING_ACTIVITIES_LIST_MOCK, ACTIVITY_TYPES_BREAKDOWN_MOCK,
} from "@/lib/mock/activitiesMockData";

const PAGE_SIZE = 10;

export function useActivitiesList() {
  const [activities, setActivities] = React.useState(ACTIVITIES_LIST_MOCK);
  const [overview, setOverview] = React.useState(ACTIVITY_OVERVIEW_MOCK);
  const [upcoming, setUpcoming] = React.useState(UPCOMING_ACTIVITIES_LIST_MOCK);
  const [typesBreakdown, setTypesBreakdown] = React.useState(ACTIVITY_TYPES_BREAKDOWN_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [typeFilter, setTypeFilter] = React.useState("All Activity Types");
  const [monthFilter, setMonthFilter] = React.useState("All Months");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await mensFellowshipService.listActivities({ search, statusFilter, typeFilter, monthFilter, page });
      setActivities(result?.activities ?? ACTIVITIES_LIST_MOCK);
      setOverview(result?.overview ?? ACTIVITY_OVERVIEW_MOCK);
      setUpcoming(result?.upcoming ?? UPCOMING_ACTIVITIES_LIST_MOCK);
      setTypesBreakdown(result?.typesBreakdown ?? ACTIVITY_TYPES_BREAKDOWN_MOCK);
    } catch {
      setActivities(ACTIVITIES_LIST_MOCK);
      setOverview(ACTIVITY_OVERVIEW_MOCK);
      setUpcoming(UPCOMING_ACTIVITIES_LIST_MOCK);
      setTypesBreakdown(ACTIVITY_TYPES_BREAKDOWN_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, statusFilter, typeFilter, monthFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, statusFilter, typeFilter, monthFilter]);

  const filteredActivities = React.useMemo(() => {
    return activities.filter((a) => {
      const matchesSearch = !search
        || a.title.toLowerCase().includes(search.toLowerCase())
        || a.description.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All Status" || a.status === statusFilter;
      const matchesType = typeFilter === "All Activity Types" || a.type === typeFilter;
      const matchesMonth = monthFilter === "All Months" || new Date(a.date).toLocaleString("en-US", { month: "long" }) === monthFilter;
      return matchesSearch && matchesStatus && matchesType && matchesMonth;
    });
  }, [activities, search, statusFilter, typeFilter, monthFilter]);

  const pagedActivities = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredActivities.slice(start, start + PAGE_SIZE);
  }, [filteredActivities, page]);

  return {
    activities: pagedActivities, totalCount: filteredActivities.length, isLoading,
    overview, upcoming, typesBreakdown,
    search, setSearch, statusFilter, setStatusFilter, typeFilter, setTypeFilter, monthFilter, setMonthFilter,
    page, setPage, pageSize: PAGE_SIZE,
    refetch,
  };
}
