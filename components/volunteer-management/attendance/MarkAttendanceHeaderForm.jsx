"use client";

import { Church, Users2, Calendar, MapPin, UserCog, Clock } from "lucide-react";
import { Select, Input } from "@/components/ui/Input";
import { ATTENDANCE_SERVICE_OPTIONS, ATTENDANCE_MINISTRY_OPTIONS } from "@/lib/mock/vmAttendanceMockData";

export function MarkAttendanceHeaderForm({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Select label="Service / Event" required leftIcon={<Church className="h-4 w-4" />}
          value={form.service} onChange={(e) => setField("service", e.target.value)}>
          {ATTENDANCE_SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </Select>
        <Select label="Ministry / Team" leftIcon={<Users2 className="h-4 w-4" />}
          value={form.ministry} onChange={(e) => setField("ministry", e.target.value)}>
          {ATTENDANCE_MINISTRY_OPTIONS.map((m) => <option key={m}>{m}</option>)}
        </Select>
        <Input type="date" label="Date" required leftIcon={<Calendar className="h-4 w-4" />}
          value={form.date} onChange={(e) => setField("date", e.target.value)} />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Select label="Location" leftIcon={<MapPin className="h-4 w-4" />}
          value={form.location} onChange={(e) => setField("location", e.target.value)}>
          <option>Main Church</option>
          <option>Parish Hall</option>
          <option>Youth Center</option>
          <option>Online</option>
        </Select>
        <Select label="Assigned By" leftIcon={<UserCog className="h-4 w-4" />}
          value={form.assignedBy} onChange={(e) => setField("assignedBy", e.target.value)}>
          <option>Parish Office (Admin)</option>
          <option>Rev. Michael</option>
        </Select>
        <Input type="time" label="Check-in Time" leftIcon={<Clock className="h-4 w-4" />}
          value={form.checkInTime} onChange={(e) => setField("checkInTime", e.target.value)} />
      </div>
    </div>
  );
}
