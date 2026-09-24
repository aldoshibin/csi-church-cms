"use client";

import { Calendar, CalendarRange, CalendarDays } from "lucide-react";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import {
  AVAILABILITY_TYPE_OPTIONS, TIME_PREFERENCE_OPTIONS, DAYS, TIME_SLOTS,
} from "@/lib/mock/availabilityMockData";

const TYPE_ICON = { weekly: Calendar, range: CalendarRange, specific: CalendarDays };

export function AvailabilityScheduleSection({ form, setField, toggleSlot }) {
  const notes = form.notes ?? "";

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <p className="mb-2 text-sm font-medium text-ink">Availability Type <span className="text-danger-500">*</span></p>
      <p className="mb-3 text-xs text-ink-subtle">Select the type of availability you want to add.</p>
      <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {AVAILABILITY_TYPE_OPTIONS.map((opt) => {
          const Icon = TYPE_ICON[opt.key];
          const active = form.availabilityType === opt.key;
          return (
            <button
              key={opt.key} type="button" onClick={() => setField("availabilityType", opt.key)}
              className={cn(
                "flex items-start gap-3 rounded-lg border p-4 text-left transition-colors",
                active ? "border-interactive-500 bg-interactive-50/40" : "border-border hover:bg-surface-canvas"
              )}
            >
              <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-md", active ? "bg-interactive-100 text-interactive-600" : "bg-surface-muted text-ink-subtle")}>
                <Icon className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink">{opt.label}</span>
                <span className="mt-0.5 block text-xs text-ink-subtle">{opt.helper}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <p className="mb-1.5 text-sm font-medium text-ink">Date Range <span className="text-danger-500">*</span></p>
          <div className="flex items-center gap-2">
            <Input type="date" value={form.rangeStart} onChange={(e) => setField("rangeStart", e.target.value)} />
            <span className="shrink-0 text-ink-subtle">&rarr;</span>
            <Input type="date" value={form.rangeEnd} onChange={(e) => setField("rangeEnd", e.target.value)} />
          </div>
        </div>
        <Select label="Time Preference" value={form.timePreference} onChange={(e) => setField("timePreference", e.target.value)}>
          <option value="">Select time preference</option>
          {TIME_PREFERENCE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </Select>
      </div>

      <p className="mb-1 text-sm font-medium text-ink">Weekly Schedule <span className="text-danger-500">*</span></p>
      <p className="mb-3 text-xs text-ink-subtle">Select the days and time slots you are available.</p>

      <div className="scroll-thin -mx-2 overflow-x-auto px-2">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <thead>
            <tr className="text-xs text-ink-subtle">
              <th className="w-28 py-2 font-medium">Day</th>
              {TIME_SLOTS.map((slot) => (
                <th key={slot.key} className="py-2 text-center font-medium">
                  <span className="block">{slot.label}</span>
                  {slot.range && <span className="block text-[10px] font-normal text-ink-subtle">{slot.range}</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {DAYS.map((day) => (
              <tr key={day}>
                <td className="py-2.5 font-medium text-ink">{day}</td>
                {TIME_SLOTS.map((slot) => (
                  <td key={slot.key} className="py-2.5 text-center">
                    <input
                      type="checkbox"
                      checked={!!form.schedule[day]?.[slot.key]}
                      onChange={() => toggleSlot(day, slot.key)}
                      className="h-4 w-4 rounded border-border text-success-600 focus:ring-success-500"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-5">
        <Textarea
          label="Additional Notes (Optional)" rows={3} maxLength={250}
          placeholder="Add any notes or special instructions about your availability..."
          value={notes} onChange={(e) => setField("notes", e.target.value)}
        />
        <p className="mt-1 text-right text-xs text-ink-subtle">{notes.length}/250</p>
      </div>
    </div>
  );
}
