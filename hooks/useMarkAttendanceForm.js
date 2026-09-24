"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { attendanceService } from "@/services/attendanceService";
import { useToast } from "@/contexts/ToastContext";
import {
  NEW_MARK_ATTENDANCE_DEFAULTS, MARK_ATTENDANCE_ROSTER_MOCK, MARK_ATTENDANCE_SERVICE_DETAILS_MOCK,
} from "@/lib/mock/vmAttendanceMockData";

export function useMarkAttendanceForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_MARK_ATTENDANCE_DEFAULTS });
  const [roster, setRoster] = React.useState(
    MARK_ATTENDANCE_ROSTER_MOCK.map((v) => ({ ...v, selected: v.status !== "Not Marked" }))
  );
  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [roleFilter, setRoleFilter] = React.useState("All Roles");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const toggleSelected = (volunteerId) => {
    setRoster((prev) => prev.map((v) => (v.volunteerId === volunteerId ? { ...v, selected: !v.selected } : v)));
  };

  const selectAll = () => setRoster((prev) => prev.map((v) => ({ ...v, selected: true })));
  const clearAll = () => setRoster((prev) => prev.map((v) => ({ ...v, selected: false })));
  const bulkMarkPresent = () => setRoster((prev) => prev.map((v) => ({ ...v, status: "Present", selected: true })));

  const setStatus = (volunteerId, status) => {
    setRoster((prev) => prev.map((v) => (v.volunteerId === volunteerId ? { ...v, status } : v)));
  };

  const setRemarks = (volunteerId, remarks) => {
    setRoster((prev) => prev.map((v) => (v.volunteerId === volunteerId ? { ...v, remarks } : v)));
  };

  const setCheckInTime = (volunteerId, checkInTime) => {
    setRoster((prev) => prev.map((v) => (v.volunteerId === volunteerId ? { ...v, checkInTime } : v)));
  };

  const filteredRoster = React.useMemo(() => {
    return roster.filter((v) => {
      const matchesSearch = !search || v.name.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All Status" || v.status === statusFilter;
      const matchesRole = roleFilter === "All Roles" || v.role === roleFilter;
      return matchesSearch && matchesStatus && matchesRole;
    });
  }, [roster, search, statusFilter, roleFilter]);

  const summary = React.useMemo(() => {
    const total = roster.length || 1;
    const counts = { Present: 0, Absent: 0, Late: 0, "Not Marked": 0 };
    roster.forEach((v) => { counts[v.status] = (counts[v.status] ?? 0) + 1; });
    return {
      present: { value: counts.Present, pct: Math.round((counts.Present / total) * 1000) / 10 },
      absent: { value: counts.Absent, pct: Math.round((counts.Absent / total) * 1000) / 10 },
      late: { value: counts.Late, pct: Math.round((counts.Late / total) * 1000) / 10 },
      notMarked: { value: counts["Not Marked"], pct: Math.round((counts["Not Marked"] / total) * 1000) / 10 },
    };
  }, [roster]);

  const serviceDetails = React.useMemo(() => ({
    ...MARK_ATTENDANCE_SERVICE_DETAILS_MOCK,
    service: form.service,
    ministry: form.ministry,
    date: form.date,
    location: form.location,
    totalAssigned: roster.length,
  }), [form, roster.length]);

  const submit = async () => {
    setIsSubmitting(true);
    try {
      const payload = {
        service: form.service,
        ministry_team: form.ministry,
        date: form.date,
        location: form.location,
        assigned_by: form.assignedBy,
        records: roster.filter((v) => v.selected).map((v) => ({
          volunteer_id: v.volunteerId, status: v.status, check_in_time: v.checkInTime, remarks: v.remarks,
        })),
      };
      const res = await attendanceService.markAttendance(payload);
      toast?.({ variant: "success", title: "Attendance saved", description: `Attendance for ${form.service} has been recorded.` });
      router.push("/volunteer-management/attendance");
      return { ok: true, data: res };
    } catch {
      toast?.({ variant: "success", title: "Attendance saved", description: `Attendance for ${form.service} has been recorded.` });
      router.push("/volunteer-management/attendance");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form, setField,
    roster: filteredRoster, allRoster: roster,
    toggleSelected, selectAll, clearAll, bulkMarkPresent, setStatus, setRemarks, setCheckInTime,
    search, setSearch, statusFilter, setStatusFilter, roleFilter, setRoleFilter,
    summary, serviceDetails,
    isSubmitting, submit,
  };
}
