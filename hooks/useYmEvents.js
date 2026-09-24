"use client";

import * as React from "react";
import { ymEventsService } from "@/services/ymEventsService";
import { YM_EVENTS_MOCK, YME_BY_CATEGORY_MOCK, YME_UPCOMING_EVENTS_MOCK } from "@/lib/mock/ymEventsMockData";

const PAGE_SIZE = 8;

export function useYmEvents() {
  const [events, setEvents] = React.useState(YM_EVENTS_MOCK);
  const [byCategory, setByCategory] = React.useState(YME_BY_CATEGORY_MOCK);
  const [upcomingEvents, setUpcomingEvents] = React.useState(YME_UPCOMING_EVENTS_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState("All Events");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await ymEventsService.listEvents({ search, categoryFilter, statusFilter, page });
      setEvents(result?.events ?? YM_EVENTS_MOCK);
      setByCategory(result?.byCategory ?? YME_BY_CATEGORY_MOCK);
      setUpcomingEvents(result?.upcomingEvents ?? YME_UPCOMING_EVENTS_MOCK);
    } catch {
      setEvents(YM_EVENTS_MOCK);
      setByCategory(YME_BY_CATEGORY_MOCK);
      setUpcomingEvents(YME_UPCOMING_EVENTS_MOCK);
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

  const filteredEvents = React.useMemo(() => {
    return events.filter((e) => {
      const matchesSearch = !search || e.title.toLowerCase().includes(search.toLowerCase()) || e.venue.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = categoryFilter === "All Events" || e.category === categoryFilter;
      const matchesStatus = statusFilter === "All Status" || e.status === statusFilter;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [events, search, categoryFilter, statusFilter]);

  const pagedEvents = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredEvents.slice(start, start + PAGE_SIZE);
  }, [filteredEvents, page]);

  return {
    events: pagedEvents, totalCount: filteredEvents.length, isLoading,
    byCategory, upcomingEvents,
    search, setSearch, categoryFilter, setCategoryFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize: PAGE_SIZE,
    refetch,
  };
}
