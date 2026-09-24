"use client";

import { Clock } from "lucide-react";
import { Input, Select } from "@/components/ui/Input";
import {
  LSN_RECURRENCE_OPTIONS, LSN_LOCATION_OPTIONS, LSN_TEACHER_OPTIONS, LSN_WEEKLY_AVAILABILITY_OPTIONS,
} from "@/lib/mock/ymLessonsMockData";

export function ScheduleAvailabilitySection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-ink">
        <Clock className="h-4 w-4 text-interactive-600" /> Schedule &amp; Availability
      </h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input label="Lesson Date" required type="date" value={form.lessonDate} onChange={(e) => setField("lessonDate", e.target.value)} />
        <Input label="Start Time" required type="time" value={form.startTime} onChange={(e) => setField("startTime", e.target.value)} />
        <Input label="End Time" required type="time" value={form.endTime} onChange={(e) => setField("endTime", e.target.value)} />
        <Select label="Recurrence" required value={form.recurrence} onChange={(e) => setField("recurrence", e.target.value)}>
          <option value="">Select recurrence</option>
          {LSN_RECURRENCE_OPTIONS.map((r) => <option key={r}>{r}</option>)}
        </Select>

        <Input label="Next Occurrence" value="Will be auto calculated" disabled />
        <Select label="Location / Room" value={form.locationRoom} onChange={(e) => setField("locationRoom", e.target.value)}>
          <option value="">Select location / room</option>
          {LSN_LOCATION_OPTIONS.map((l) => <option key={l}>{l}</option>)}
        </Select>

        <Select label="Teacher / Leader" required value={form.teacherLeader} onChange={(e) => setField("teacherLeader", e.target.value)}>
          <option value="">Select teacher / leader</option>
          {LSN_TEACHER_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </Select>
        <Select label="Weekly Availability" required value={form.weeklyAvailability} onChange={(e) => setField("weeklyAvailability", e.target.value)}>
          <option value="">Select availability</option>
          {LSN_WEEKLY_AVAILABILITY_OPTIONS.map((a) => <option key={a}>{a}</option>)}
        </Select>

        <div className="sm:col-span-2">
          <Input label="Preferred Days & Time (Optional)" placeholder="e.g. Sunday 9AM - 11AM" value={form.preferredDaysTime} onChange={(e) => setField("preferredDaysTime", e.target.value)} />
        </div>
      </div>
    </div>
  );
}
