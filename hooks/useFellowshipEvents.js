"use client";

import * as React from "react";
import { fellowshipEventsService } from "@/services/fellowshipEventsService";
import { EVENTS_MOCK, EVT_UPCOMING_MOCK, EVT_BY_TYPE_MOCK, EVT_DETAIL_DEFAULTS } from "@/lib/mock/fellowshipEventsMockData";

const PAGE_SIZE = 8;

export function useFellowshipEvents() {
  const [events, setEvents] = React.useState(EVENTS_MOCK);
  const [upcoming, setUpcoming] = React.useState(EVT_UPCOMING_MOCK);
  const [byType, setByType] = React.useState(EVT_BY_TYPE_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [typeFilter, setTypeFilter] = React.useState("All Event Types");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);

  const [selectedEventId, setSelectedEventId] = React.useState(null);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await fellowshipEventsService.listEvents({ search, typeFilter, statusFilter, page });
      setEvents(result?.events ?? EVENTS_MOCK);
      setUpcoming(result?.upcoming ?? EVT_UPCOMING_MOCK);
      setByType(result?.byType ?? EVT_BY_TYPE_MOCK);
    } catch {
      setEvents(EVENTS_MOCK);
      setUpcoming(EVT_UPCOMING_MOCK);
      setByType(EVT_BY_TYPE_MOCK);
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

  const filteredEvents = React.useMemo(() => {
    return events.filter((e) => {
      const matchesSearch = !search || e.title.toLowerCase().includes(search.toLowerCase());
      const matchesType = typeFilter === "All Event Types" || e.eventType === typeFilter;
      const matchesStatus = statusFilter === "All Status" || e.status === statusFilter;
      return matchesSearch && matchesType && matchesStatus;
    });
  }, [events, search, typeFilter, statusFilter]);

  const pagedEvents = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredEvents.slice(start, start + PAGE_SIZE);
  }, [filteredEvents, page]);

  const selectedEvent = React.useMemo(() => {
    const found = events.find((e) => e.id === selectedEventId);
    if (!found) return null;
    return { ...EVT_DETAIL_DEFAULTS, ...found };
  }, [events, selectedEventId]);

  return {
    events: pagedEvents, totalCount: filteredEvents.length, isLoading,
    upcoming, byType,
    search, setSearch, typeFilter, setTypeFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize: PAGE_SIZE,
    selectedEvent, setSelectedEventId,
    refetch,
  };
}
