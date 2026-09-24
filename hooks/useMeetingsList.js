"use client";

import * as React from "react";
import { mensFellowshipService } from "@/services/mensFellowshipService";
import {
  MEETINGS_LIST_MOCK, RECENT_MEETINGS_MOCK, UPCOMING_MEETINGS_LIST_MOCK,
} from "@/lib/mock/meetingsMockData";

const PAGE_SIZE = 10;

export function useMeetingsList() {
  const [meetings, setMeetings] = React.useState(MEETINGS_LIST_MOCK);
  const [recentMeetings, setRecentMeetings] = React.useState(RECENT_MEETINGS_MOCK);
  const [upcomingMeetings, setUpcomingMeetings] = React.useState(UPCOMING_MEETINGS_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [typeFilter, setTypeFilter] = React.useState("All Meeting Types");
  const [locationFilter, setLocationFilter] = React.useState("All Locations");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await mensFellowshipService.listMeetings({ search, statusFilter, typeFilter, locationFilter, page });
      setMeetings(result?.meetings ?? MEETINGS_LIST_MOCK);
      setRecentMeetings(result?.recentMeetings ?? RECENT_MEETINGS_MOCK);
      setUpcomingMeetings(result?.upcomingMeetings ?? UPCOMING_MEETINGS_LIST_MOCK);
    } catch {
      setMeetings(MEETINGS_LIST_MOCK);
      setRecentMeetings(RECENT_MEETINGS_MOCK);
      setUpcomingMeetings(UPCOMING_MEETINGS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, statusFilter, typeFilter, locationFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, statusFilter, typeFilter, locationFilter]);

  const filteredMeetings = React.useMemo(() => {
    return meetings.filter((m) => {
      const matchesSearch = !search
        || m.title.toLowerCase().includes(search.toLowerCase())
        || m.location.toLowerCase().includes(search.toLowerCase())
        || m.speaker.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All Status" || m.status === statusFilter;
      const matchesType = typeFilter === "All Meeting Types" || m.type === typeFilter;
      const matchesLocation = locationFilter === "All Locations" || m.location === locationFilter;
      return matchesSearch && matchesStatus && matchesType && matchesLocation;
    });
  }, [meetings, search, statusFilter, typeFilter, locationFilter]);

  const pagedMeetings = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredMeetings.slice(start, start + PAGE_SIZE);
  }, [filteredMeetings, page]);

  return {
    meetings: pagedMeetings, totalCount: filteredMeetings.length, isLoading,
    recentMeetings, upcomingMeetings,
    search, setSearch, statusFilter, setStatusFilter, typeFilter, setTypeFilter, locationFilter, setLocationFilter,
    page, setPage, pageSize: PAGE_SIZE,
    refetch,
  };
}
