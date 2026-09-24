"use client";

import * as React from "react";
import { choirWorshipService } from "@/services/choirWorshipService";
import { WT_MEMBERS_MOCK, WT_UPCOMING_REHEARSALS_MOCK, WT_UPCOMING_SERVICES_MOCK } from "@/lib/mock/worshipTeamMembersMockData";

const PAGE_SIZE = 8;

export function useWorshipTeamMembersList() {
  const [members, setMembers] = React.useState(WT_MEMBERS_MOCK);
  const [upcomingRehearsals] = React.useState(WT_UPCOMING_REHEARSALS_MOCK);
  const [upcomingServices] = React.useState(WT_UPCOMING_SERVICES_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [memberTab, setMemberTab] = React.useState("All Members");
  const [search, setSearch] = React.useState("");
  const [roleFilter, setRoleFilter] = React.useState("All Roles");
  const [instrumentFilter, setInstrumentFilter] = React.useState("All Instruments");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);
  const [selectedIds, setSelectedIds] = React.useState([]);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await choirWorshipService.listWorshipTeamMembers({ memberTab, search, roleFilter, instrumentFilter, statusFilter, page });
      setMembers(result?.members ?? WT_MEMBERS_MOCK);
    } catch {
      setMembers(WT_MEMBERS_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [memberTab, search, roleFilter, instrumentFilter, statusFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [memberTab, search, roleFilter, instrumentFilter, statusFilter]);

  const filteredMembers = React.useMemo(() => {
    return members.filter((m) => {
      const matchesTab = memberTab === "All Members" || m.team === memberTab;
      const matchesSearch = !search || m.name.toLowerCase().includes(search.toLowerCase()) || m.role.toLowerCase().includes(search.toLowerCase()) || m.phone.includes(search);
      const matchesRole = roleFilter === "All Roles" || m.role === roleFilter;
      const matchesInstrument = instrumentFilter === "All Instruments" || m.instrument === instrumentFilter;
      const matchesStatus = statusFilter === "All Status" || m.status === statusFilter;
      return matchesTab && matchesSearch && matchesRole && matchesInstrument && matchesStatus;
    });
  }, [members, memberTab, search, roleFilter, instrumentFilter, statusFilter]);

  const pagedMembers = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredMembers.slice(start, start + PAGE_SIZE);
  }, [filteredMembers, page]);

  return {
    members: pagedMembers, totalCount: filteredMembers.length, isLoading,
    upcomingRehearsals, upcomingServices,
    memberTab, setMemberTab, search, setSearch, roleFilter, setRoleFilter,
    instrumentFilter, setInstrumentFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize: PAGE_SIZE,
    selectedIds, setSelectedIds,
  };
}
