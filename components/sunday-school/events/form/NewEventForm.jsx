"use client";

import { Bold, Italic, Underline, List, ListOrdered, Link2, Code2, Indent, Outdent } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import {
  EVENT_CATEGORY_OPTIONS, EVENT_TYPE_OPTIONS, EVENT_STATUS_OPTIONS, EVENT_REGISTRATION_REQUIRED_OPTIONS, EVENT_VISIBILITY_OPTIONS,
} from "@/lib/mock/eventsMockData";

const TOOLBAR_ICONS = [Bold, Italic, Underline, List, ListOrdered, Outdent, Indent, Code2, Link2];

export function NewEventForm({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">1. Basic Information</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="sm:col-span-1">
          <Input label="Event Title" required placeholder="Enter event title" value={form.title} onChange={(e) => setField("title", e.target.value)} />
        </div>
        <Select label="Category" required value={form.category} onChange={(e) => setField("category", e.target.value)}>
          <option value="">Select category</option>
          {EVENT_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
        </Select>
        <Select label="Event Type" required value={form.eventType} onChange={(e) => setField("eventType", e.target.value)}>
          <option value="">Select event type</option>
          {EVENT_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </Select>

        <Input label="Date" required type="date" value={form.date} onChange={(e) => setField("date", e.target.value)} />
        <Input label="Start Time" required type="time" value={form.startTime} onChange={(e) => setField("startTime", e.target.value)} />
        <Input label="End Time" required type="time" value={form.endTime} onChange={(e) => setField("endTime", e.target.value)} />

        <Input label="Venue" required placeholder="Enter venue" value={form.venue} onChange={(e) => setField("venue", e.target.value)} />
        <Input label="Capacity (Optional)" type="number" placeholder="Enter capacity" value={form.capacity} onChange={(e) => setField("capacity", e.target.value)} />
        <div>
          <label className="flex items-center gap-2 pt-8 text-sm text-ink">
            <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={form.isOnline} onChange={(e) => setField("isOnline", e.target.checked)} />
            Online Event
          </label>
          {form.isOnline && (
            <div className="mt-2">
              <label className="mb-1 block text-xs text-ink-subtle">Add online meeting link</label>
              <input
                value={form.meetingLink} onChange={(e) => setField("meetingLink", e.target.value)}
                placeholder="Enter meeting link"
                className="h-9 w-full rounded-md border border-border bg-white px-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
              />
            </div>
          )}
        </div>

        <Select label="Status" required value={form.status} onChange={(e) => setField("status", e.target.value)}>
          {EVENT_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </Select>
        <Select label="Registration Required" value={form.registrationRequired} onChange={(e) => setField("registrationRequired", e.target.value)}>
          {EVENT_REGISTRATION_REQUIRED_OPTIONS.map((r) => <option key={r}>{r}</option>)}
        </Select>
      </div>

      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">2. Description</h3>
      <Input
        label="Short Description" required maxLength={150} placeholder="Enter short description"
        helperText={`${form.shortDescription.length} / 150`}
        value={form.shortDescription} onChange={(e) => setField("shortDescription", e.target.value)}
      />
      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-medium text-ink">Detailed Description</label>
        <div className="flex flex-wrap items-center gap-1 rounded-t-md border border-b-0 border-border bg-surface-canvas px-3 py-2">
          <select className="h-7 rounded border border-border bg-white px-1.5 text-xs text-ink-muted">
            <option>Paragraph</option>
          </select>
          {TOOLBAR_ICONS.map((Icon, i) => (
            <button key={i} type="button" className="flex h-7 w-7 items-center justify-center rounded text-ink-subtle hover:bg-white">
              <Icon className="h-3.5 w-3.5" />
            </button>
          ))}
        </div>
        <Textarea
          rows={3} maxLength={2000} placeholder="Write event details..."
          className="rounded-t-none"
          helperText={`${form.detailedDescription.length} / 2000`}
          value={form.detailedDescription} onChange={(e) => setField("detailedDescription", e.target.value)}
        />
      </div>

      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">3. Registration</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Input label="Registration Limit (Optional)" type="number" placeholder="Enter registration limit" value={form.registrationLimit} onChange={(e) => setField("registrationLimit", e.target.value)} />
        <Input label="Registration Start Date (Optional)" type="date" value={form.registrationStartDate} onChange={(e) => setField("registrationStartDate", e.target.value)} />
        <div className="flex items-end gap-3">
          <div className="flex-1">
            <Input label="Registration End Date (Optional)" type="date" value={form.registrationEndDate} onChange={(e) => setField("registrationEndDate", e.target.value)} />
          </div>
          <label className="flex items-center gap-2 pb-2.5 text-sm text-ink">
            <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={form.allowWaitlist} onChange={(e) => setField("allowWaitlist", e.target.checked)} />
            Allow Waitlist
          </label>
        </div>
      </div>

      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">4. Visibility</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {EVENT_VISIBILITY_OPTIONS.map((option) => (
          <label key={option.value} className="flex cursor-pointer items-start gap-2.5">
            <input type="radio" name="event-visibility" className="mt-0.5 h-4 w-4 accent-interactive-500" checked={form.visibility === option.value} onChange={() => setField("visibility", option.value)} />
            <span>
              <span className="block text-sm font-medium text-ink">{option.label}</span>
              <span className="block text-xs text-ink-subtle">{option.desc}</span>
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
