"use client";

import * as React from "react";
import { eventsService } from "@/services/eventsService";
import { EVENTS_MOCK, EVENTS_STATS_MOCK, EVENTS_BY_CATEGORY_MOCK, UPCOMING_EVENTS_MOCK } from "@/lib/mock/eventsMockData";

const PAGE_SIZE = 8;

export function useEvents() {
  const [events, setEvents] = React.useState(EVENTS_MOCK);
  const [stats, setStats] = React.useState(EVENTS_STATS_MOCK);
  const [byCategory, setByCategory] = React.useState(EVENTS_BY_CATEGORY_MOCK);
  const [upcomingEvents, setUpcomingEvents] = React.useState(UPCOMING_EVENTS_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState("All Events");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await eventsService.listEvents({ search, categoryFilter, statusFilter, page });
      setEvents(result?.events ?? EVENTS_MOCK);
      setStats(result?.stats ?? EVENTS_STATS_MOCK);
      setByCategory(result?.byCategory ?? EVENTS_BY_CATEGORY_MOCK);
      setUpcomingEvents(result?.upcomingEvents ?? UPCOMING_EVENTS_MOCK);
    } catch {
      setEvents(EVENTS_MOCK);
      setStats(EVENTS_STATS_MOCK);
      setByCategory(EVENTS_BY_CATEGORY_MOCK);
      setUpcomingEvents(UPCOMING_EVENTS_MOCK);
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
    stats, byCategory, upcomingEvents,
    search, setSearch, categoryFilter, setCategoryFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize: PAGE_SIZE,
    refetch,
  };
}
