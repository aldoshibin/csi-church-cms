"use client";

import * as React from "react";
import { meetingAttendanceService } from "@/services/meetingAttendanceService";
import { MEETINGS_MOCK, MTG_UPCOMING_MOCK, MTG_BY_TYPE_MOCK, MTG_DETAIL_DEFAULTS } from "@/lib/mock/meetingAttendanceMockData";

const PAGE_SIZE = 8;

export function useMeetingAttendance() {
  const [meetings, setMeetings] = React.useState(MEETINGS_MOCK);
  const [upcoming, setUpcoming] = React.useState(MTG_UPCOMING_MOCK);
  const [byType, setByType] = React.useState(MTG_BY_TYPE_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [typeFilter, setTypeFilter] = React.useState("All Meeting Types");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);

  const [selectedMeetingId, setSelectedMeetingId] = React.useState(null);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await meetingAttendanceService.listMeetings({ search, typeFilter, statusFilter, page });
      setMeetings(result?.meetings ?? MEETINGS_MOCK);
      setUpcoming(result?.upcoming ?? MTG_UPCOMING_MOCK);
      setByType(result?.byType ?? MTG_BY_TYPE_MOCK);
    } catch {
      setMeetings(MEETINGS_MOCK);
      setUpcoming(MTG_UPCOMING_MOCK);
      setByType(MTG_BY_TYPE_MOCK);
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

  const filteredMeetings = React.useMemo(() => {
    return meetings.filter((m) => {
      const matchesSearch = !search || m.title.toLowerCase().includes(search.toLowerCase());
      const matchesType = typeFilter === "All Meeting Types" || m.meetingType === typeFilter;
      const matchesStatus = statusFilter === "All Status" || m.status === statusFilter;
      return matchesSearch && matchesType && matchesStatus;
    });
  }, [meetings, search, typeFilter, statusFilter]);

  const pagedMeetings = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredMeetings.slice(start, start + PAGE_SIZE);
  }, [filteredMeetings, page]);

  const selectedMeeting = React.useMemo(() => {
    const found = meetings.find((m) => m.id === selectedMeetingId);
    if (!found) return null;
    return { ...MTG_DETAIL_DEFAULTS, ...found };
  }, [meetings, selectedMeetingId]);

  return {
    meetings: pagedMeetings, totalCount: filteredMeetings.length, isLoading,
    upcoming, byType,
    search, setSearch, typeFilter, setTypeFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize: PAGE_SIZE,
    selectedMeeting, setSelectedMeetingId,
    refetch,
  };
}
