"use client";

import * as React from "react";
import { ymAttendanceService } from "@/services/ymAttendanceService";
import { ATTENDANCE_EVENT_DETAIL_MOCK, ATTENDANCE_MEMBERS_MOCK } from "@/lib/mock/ymAttendanceMockData";

const PAGE_SIZE = 10;

export function useYmEventAttendance(id) {
  const [event, setEvent] = React.useState({ ...ATTENDANCE_EVENT_DETAIL_MOCK, id: id ?? ATTENDANCE_EVENT_DETAIL_MOCK.id });
  const [members, setMembers] = React.useState(ATTENDANCE_MEMBERS_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await ymAttendanceService.getEventAttendance(id);
        if (!cancelled) {
          setEvent(result?.event ?? { ...ATTENDANCE_EVENT_DETAIL_MOCK, id });
          setMembers(result?.members ?? ATTENDANCE_MEMBERS_MOCK);
        }
      } catch {
        if (!cancelled) {
          setEvent({ ...ATTENDANCE_EVENT_DETAIL_MOCK, id });
          setMembers(ATTENDANCE_MEMBERS_MOCK);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  const filteredMembers = React.useMemo(() => {
    if (!search) return members;
    return members.filter((m) => m.name.toLowerCase().includes(search.toLowerCase()));
  }, [members, search]);

  const pagedMembers = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredMembers.slice(start, start + PAGE_SIZE);
  }, [filteredMembers, page]);

  return {
    event, isLoading,
    members: pagedMembers, totalCount: filteredMembers.length,
    search, setSearch, page, setPage, pageSize: PAGE_SIZE,
  };
}
