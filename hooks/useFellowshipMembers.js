"use client";

import * as React from "react";
import { fellowshipMembersService } from "@/services/fellowshipMembersService";
import { MEMBERS_MOCK, MEMBERS_STATS_MOCK, MEMBERS_BY_GENDER_MOCK, UPCOMING_BIRTHDAYS_MOCK, MEMBER_DETAIL_DEFAULTS } from "@/lib/mock/fellowshipMembersMockData";

const PAGE_SIZE = 8;

export function useFellowshipMembers() {
  const [members, setMembers] = React.useState(MEMBERS_MOCK);
  const [stats, setStats] = React.useState(MEMBERS_STATS_MOCK);
  const [byGender, setByGender] = React.useState(MEMBERS_BY_GENDER_MOCK);
  const [upcomingBirthdays, setUpcomingBirthdays] = React.useState(UPCOMING_BIRTHDAYS_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [groupFilter, setGroupFilter] = React.useState("All Fellowship Groups");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);

  const [selectedMemberId, setSelectedMemberId] = React.useState(null);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await fellowshipMembersService.listMembers({ search, groupFilter, statusFilter, page });
      setMembers(result?.members ?? MEMBERS_MOCK);
      setStats(result?.stats ?? MEMBERS_STATS_MOCK);
      setByGender(result?.byGender ?? MEMBERS_BY_GENDER_MOCK);
      setUpcomingBirthdays(result?.upcomingBirthdays ?? UPCOMING_BIRTHDAYS_MOCK);
    } catch {
      setMembers(MEMBERS_MOCK);
      setStats(MEMBERS_STATS_MOCK);
      setByGender(MEMBERS_BY_GENDER_MOCK);
      setUpcomingBirthdays(UPCOMING_BIRTHDAYS_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, groupFilter, statusFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, groupFilter, statusFilter]);

  const filteredMembers = React.useMemo(() => {
    return members.filter((m) => {
      const matchesSearch = !search || m.name.toLowerCase().includes(search.toLowerCase()) || m.email.toLowerCase().includes(search.toLowerCase());
      const matchesGroup = groupFilter === "All Fellowship Groups" || m.group === groupFilter;
      const matchesStatus = statusFilter === "All Status" || m.status === statusFilter;
      return matchesSearch && matchesGroup && matchesStatus;
    });
  }, [members, search, groupFilter, statusFilter]);

  const pagedMembers = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredMembers.slice(start, start + PAGE_SIZE);
  }, [filteredMembers, page]);

  const selectedMember = React.useMemo(() => {
    const found = members.find((m) => m.id === selectedMemberId);
    if (!found) return null;
    return { ...MEMBER_DETAIL_DEFAULTS, ...found };
  }, [members, selectedMemberId]);

  return {
    members: pagedMembers, totalCount: filteredMembers.length, isLoading,
    stats, byGender, upcomingBirthdays,
    search, setSearch, groupFilter, setGroupFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize: PAGE_SIZE,
    selectedMember, setSelectedMemberId,
    refetch,
  };
}
