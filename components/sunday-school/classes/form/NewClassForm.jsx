"use client";

import Link from "next/link";
import { BookOpen, Users, Clock, Calendar as CalendarIcon, X, Check } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import {
  CLASS_AGE_GROUP_OPTIONS, CLASS_GRADE_LEVEL_OPTIONS, CLASS_TYPE_OPTIONS,
  CLASS_TEACHER_OPTIONS, CLASS_ROOM_OPTIONS, CLASS_DAY_OPTIONS, CLASS_RECURRENCE_OPTIONS,
} from "@/lib/mock/classesMockData";

export function NewClassForm({ form, setField, isSubmitting, onSubmit }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Class Information</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input
          label="Class Name" required placeholder="Enter class name" leftIcon={<BookOpen className="h-4 w-4" />}
          value={form.className} onChange={(e) => setField("className", e.target.value)}
        />
        <Select
          label="Age Group" required
          value={form.ageGroup} onChange={(e) => setField("ageGroup", e.target.value)}
        >
          <option value="">Select age group</option>
          {CLASS_AGE_GROUP_OPTIONS.map((a) => <option key={a}>{a}</option>)}
        </Select>

        <Select
          label="Grade / Level" required
          value={form.gradeLevel} onChange={(e) => setField("gradeLevel", e.target.value)}
        >
          <option value="">Select grade or level</option>
          {CLASS_GRADE_LEVEL_OPTIONS.map((g) => <option key={g}>{g}</option>)}
        </Select>
        <Select
          label="Class Type" required
          value={form.classType} onChange={(e) => setField("classType", e.target.value)}
        >
          <option value="">Select class type</option>
          {CLASS_TYPE_OPTIONS.map((c) => <option key={c}>{c}</option>)}
        </Select>

        <div className="sm:col-span-2">
          <Textarea
            label="Description" rows={3} maxLength={250} placeholder="Enter class description (optional)"
            helperText={`${form.description.length} / 250`}
            value={form.description} onChange={(e) => setField("description", e.target.value)}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Status <span className="text-danger-500">*</span></label>
          <div className="flex h-[42px] items-center gap-6">
            <label className="flex items-center gap-2 text-sm text-ink">
              <input type="radio" name="class-status" className="h-4 w-4 accent-interactive-500" checked={form.status === "Active"} onChange={() => setField("status", "Active")} />
              Active
            </label>
            <label className="flex items-center gap-2 text-sm text-ink">
              <input type="radio" name="class-status" className="h-4 w-4 accent-interactive-500" checked={form.status === "Inactive"} onChange={() => setField("status", "Inactive")} />
              Inactive
            </label>
          </div>
        </div>
        <div />

        <Select
          label="Class Teacher" required
          value={form.classTeacher} onChange={(e) => setField("classTeacher", e.target.value)}
        >
          <option value="">Select class teacher</option>
          {CLASS_TEACHER_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </Select>
        <Select
          label="Assistant Teacher"
          value={form.assistantTeacher} onChange={(e) => setField("assistantTeacher", e.target.value)}
        >
          <option value="">Select assistant teacher (optional)</option>
          {CLASS_TEACHER_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </Select>

        <Select
          label="Room / Location" required
          value={form.room} onChange={(e) => setField("room", e.target.value)}
        >
          <option value="">Select room or location</option>
          {CLASS_ROOM_OPTIONS.map((r) => <option key={r}>{r}</option>)}
        </Select>
        <Input
          label="Max Capacity" type="number" placeholder="Enter maximum capacity" leftIcon={<Users className="h-4 w-4" />}
          value={form.maxCapacity} onChange={(e) => setField("maxCapacity", e.target.value)}
        />
      </div>

      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">Schedule Information</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Select
          label="Day" required
          value={form.day} onChange={(e) => setField("day", e.target.value)}
        >
          <option value="">Select day</option>
          {CLASS_DAY_OPTIONS.map((d) => <option key={d}>{d}</option>)}
        </Select>
        <Input
          label="Start Time" required type="time" leftIcon={<Clock className="h-4 w-4" />}
          value={form.startTime} onChange={(e) => setField("startTime", e.target.value)}
        />
        <Input
          label="End Time" required type="time" leftIcon={<Clock className="h-4 w-4" />}
          value={form.endTime} onChange={(e) => setField("endTime", e.target.value)}
        />

        <Select
          label="Recurrence" required
          value={form.recurrence} onChange={(e) => setField("recurrence", e.target.value)}
        >
          {CLASS_RECURRENCE_OPTIONS.map((r) => <option key={r}>{r}</option>)}
        </Select>
        <Input
          label="Effective From" required type="date" leftIcon={<CalendarIcon className="h-4 w-4" />}
          value={form.effectiveFrom} onChange={(e) => setField("effectiveFrom", e.target.value)}
        />
      </div>

      <div className="mt-7 flex items-center justify-end gap-3 border-t border-border pt-5">
        <Link href="/sunday-school/classes">
          <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
        </Link>
        <Button type="button" isLoading={isSubmitting} leftIcon={<Check className="h-4 w-4" />} onClick={onSubmit}>
          Save Class
        </Button>
      </div>
    </div>
  );
}
