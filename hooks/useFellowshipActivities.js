"use client";

import * as React from "react";
import { fellowshipActivitiesService } from "@/services/fellowshipActivitiesService";
import {
  ACTIVITIES_MOCK, ACTIVITIES_STATS_MOCK, ACT_UPCOMING_MOCK, ACT_BY_FOCUS_MOCK, ACT_DETAIL_DEFAULTS,
} from "@/lib/mock/fellowshipActivitiesMockData";

const PAGE_SIZE = 8;

export function useFellowshipActivities() {
  const [activities, setActivities] = React.useState(ACTIVITIES_MOCK);
  const [stats, setStats] = React.useState(ACTIVITIES_STATS_MOCK);
  const [upcoming, setUpcoming] = React.useState(ACT_UPCOMING_MOCK);
  const [byFocus, setByFocus] = React.useState(ACT_BY_FOCUS_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [typeFilter, setTypeFilter] = React.useState("All Activity Types");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);

  const [selectedActivityId, setSelectedActivityId] = React.useState(null);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await fellowshipActivitiesService.listActivities({ search, typeFilter, statusFilter, page });
      setActivities(result?.activities ?? ACTIVITIES_MOCK);
      setStats(result?.stats ?? ACTIVITIES_STATS_MOCK);
      setUpcoming(result?.upcoming ?? ACT_UPCOMING_MOCK);
      setByFocus(result?.byFocus ?? ACT_BY_FOCUS_MOCK);
    } catch {
      setActivities(ACTIVITIES_MOCK);
      setStats(ACTIVITIES_STATS_MOCK);
      setUpcoming(ACT_UPCOMING_MOCK);
      setByFocus(ACT_BY_FOCUS_MOCK);
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

  const filteredActivities = React.useMemo(() => {
    return activities.filter((a) => {
      const matchesSearch = !search || a.title.toLowerCase().includes(search.toLowerCase());
      const matchesType = typeFilter === "All Activity Types" || a.activityType === typeFilter;
      const matchesStatus = statusFilter === "All Status" || a.status === statusFilter;
      return matchesSearch && matchesType && matchesStatus;
    });
  }, [activities, search, typeFilter, statusFilter]);

  const pagedActivities = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredActivities.slice(start, start + PAGE_SIZE);
  }, [filteredActivities, page]);

  const selectedActivity = React.useMemo(() => {
    const found = activities.find((a) => a.id === selectedActivityId);
    if (!found) return null;
    return { ...ACT_DETAIL_DEFAULTS, ...found };
  }, [activities, selectedActivityId]);

  return {
    activities: pagedActivities, totalCount: filteredActivities.length, isLoading,
    stats, upcoming, byFocus,
    search, setSearch, typeFilter, setTypeFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize: PAGE_SIZE,
    selectedActivity, setSelectedActivityId,
    refetch,
  };
}
