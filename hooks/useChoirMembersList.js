"use client";

import * as React from "react";
import { choirWorshipService } from "@/services/choirWorshipService";
import { CHOIR_MEMBERS_MOCK } from "@/lib/mock/choirMembersMockData";
import { CW_UPCOMING_REHEARSALS_MOCK, CW_UPCOMING_SERVICES_MOCK } from "@/lib/mock/choirWorshipMockData";

const PAGE_SIZE = 8;

export function useChoirMembersList() {
  const [members, setMembers] = React.useState(CHOIR_MEMBERS_MOCK);
  const [upcomingRehearsals] = React.useState(CW_UPCOMING_REHEARSALS_MOCK);
  const [upcomingServices] = React.useState(CW_UPCOMING_SERVICES_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [memberTab, setMemberTab] = React.useState("All Members");
  const [search, setSearch] = React.useState("");
  const [roleFilter, setRoleFilter] = React.useState("All Roles");
  const [voicePartFilter, setVoicePartFilter] = React.useState("All Voice Parts");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);
  const [selectedIds, setSelectedIds] = React.useState([]);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await choirWorshipService.listMembers({ memberTab, search, roleFilter, voicePartFilter, statusFilter, page });
      setMembers(result?.members ?? CHOIR_MEMBERS_MOCK);
    } catch {
      setMembers(CHOIR_MEMBERS_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [memberTab, search, roleFilter, voicePartFilter, statusFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [memberTab, search, roleFilter, voicePartFilter, statusFilter]);

  const filteredMembers = React.useMemo(() => {
    return members.filter((m) => {
      const matchesTab = memberTab === "All Members" || m.voicePart === memberTab;
      const matchesSearch = !search || m.name.toLowerCase().includes(search.toLowerCase()) || m.role.toLowerCase().includes(search.toLowerCase()) || m.phone.includes(search);
      const matchesRole = roleFilter === "All Roles" || m.role === roleFilter;
      const matchesVoicePart = voicePartFilter === "All Voice Parts" || m.voicePart === voicePartFilter;
      const matchesStatus = statusFilter === "All Status" || m.status === statusFilter;
      return matchesTab && matchesSearch && matchesRole && matchesVoicePart && matchesStatus;
    });
  }, [members, memberTab, search, roleFilter, voicePartFilter, statusFilter]);

  const pagedMembers = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredMembers.slice(start, start + PAGE_SIZE);
  }, [filteredMembers, page]);

  return {
    members: pagedMembers, totalCount: filteredMembers.length, isLoading,
    upcomingRehearsals, upcomingServices,
    memberTab, setMemberTab, search, setSearch, roleFilter, setRoleFilter,
    voicePartFilter, setVoicePartFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize: PAGE_SIZE,
    selectedIds, setSelectedIds,
  };
}
