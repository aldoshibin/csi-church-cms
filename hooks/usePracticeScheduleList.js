"use client";

import * as React from "react";
import { choirWorshipService } from "@/services/choirWorshipService";
import { PS_MEMBERS_MOCK, PS_UPCOMING_PRACTICES_MOCK, PS_TEAM_SUMMARY_MOCK } from "@/lib/mock/practiceScheduleMockData";

const PAGE_SIZE = 8;

export function usePracticeScheduleList() {
  const [members, setMembers] = React.useState(PS_MEMBERS_MOCK);
  const [upcomingPractices] = React.useState(PS_UPCOMING_PRACTICES_MOCK);
  const [teamSummary] = React.useState(PS_TEAM_SUMMARY_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [memberTab, setMemberTab] = React.useState("All Members");
  const [search, setSearch] = React.useState("");
  const [teamFilter, setTeamFilter] = React.useState("All Teams");
  const [instrumentFilter, setInstrumentFilter] = React.useState("All Instruments");
  const [dayFilter, setDayFilter] = React.useState("All Days");
  const [page, setPage] = React.useState(1);
  const [selectedIds, setSelectedIds] = React.useState([]);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await choirWorshipService.listPracticeSchedule({ memberTab, search, teamFilter, instrumentFilter, dayFilter, page });
      setMembers(result?.members ?? PS_MEMBERS_MOCK);
    } catch {
      setMembers(PS_MEMBERS_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [memberTab, search, teamFilter, instrumentFilter, dayFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [memberTab, search, teamFilter, instrumentFilter, dayFilter]);

  const filteredMembers = React.useMemo(() => {
    return members.filter((m) => {
      const matchesTab = memberTab === "All Members" || m.team === memberTab;
      const matchesSearch = !search || m.name.toLowerCase().includes(search.toLowerCase()) || m.role.toLowerCase().includes(search.toLowerCase()) || m.phone.includes(search);
      const matchesTeam = teamFilter === "All Teams" || m.team === teamFilter;
      const matchesInstrument = instrumentFilter === "All Instruments" || m.instrument === instrumentFilter;
      const matchesDay = dayFilter === "All Days" || m.nextPracticeDay === dayFilter;
      return matchesTab && matchesSearch && matchesTeam && matchesInstrument && matchesDay;
    });
  }, [members, memberTab, search, teamFilter, instrumentFilter, dayFilter]);

  const pagedMembers = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredMembers.slice(start, start + PAGE_SIZE);
  }, [filteredMembers, page]);

  return {
    members: pagedMembers, totalCount: filteredMembers.length, isLoading,
    upcomingPractices, teamSummary,
    memberTab, setMemberTab, search, setSearch, teamFilter, setTeamFilter,
    instrumentFilter, setInstrumentFilter, dayFilter, setDayFilter,
    page, setPage, pageSize: PAGE_SIZE,
    selectedIds, setSelectedIds,
    refetch,
  };
}
