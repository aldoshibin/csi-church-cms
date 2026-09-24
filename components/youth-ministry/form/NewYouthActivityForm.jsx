"use client";

import { Bold, Italic, Underline, List, ListOrdered, Link2, Code2, Indent, Outdent } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import {
  YM_ACTIVITY_TYPE_OPTIONS, YM_ACTIVITY_CATEGORY_OPTIONS, YM_ORGANIZER_OPTIONS, YM_REGISTRATION_REQUIRED_OPTIONS,
} from "@/lib/mock/youthMinistryMockData";

const TOOLBAR_ICONS = [Bold, Italic, Underline, List, ListOrdered, Outdent, Indent, Code2, Link2];

export function NewYouthActivityForm({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">1. Activity Information</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Input label="Activity Title" required placeholder="Enter activity title" value={form.title} onChange={(e) => setField("title", e.target.value)} />
        <Select label="Activity Type" required value={form.activityType} onChange={(e) => setField("activityType", e.target.value)}>
          <option value="">Select activity type</option>
          {YM_ACTIVITY_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </Select>
        <Select label="Category" required value={form.category} onChange={(e) => setField("category", e.target.value)}>
          <option value="">Select category</option>
          {YM_ACTIVITY_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
        </Select>

        <Input label="Start Date" required type="date" value={form.startDate} onChange={(e) => setField("startDate", e.target.value)} />
        <Input label="Start Time" required type="time" value={form.startTime} onChange={(e) => setField("startTime", e.target.value)} />
        <Input label="End Date" required type="date" value={form.endDate} onChange={(e) => setField("endDate", e.target.value)} />

        <Input label="End Time" required type="time" value={form.endTime} onChange={(e) => setField("endTime", e.target.value)} />
        <Input label="Venue" required placeholder="Enter venue" value={form.venue} onChange={(e) => setField("venue", e.target.value)} />
        <Input label="Capacity (Optional)" type="number" placeholder="Enter capacity" value={form.capacity} onChange={(e) => setField("capacity", e.target.value)} />

        <div>
          <label className="flex items-center gap-2 pt-8 text-sm text-ink">
            <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={form.isOnline} onChange={(e) => setField("isOnline", e.target.checked)} />
            Online Activity
          </label>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-medium text-ink">Online Meeting Link</label>
          <input
            value={form.meetingLink} onChange={(e) => setField("meetingLink", e.target.value)}
            placeholder="Enter meeting link" disabled={!form.isOnline}
            className="h-[42px] w-full rounded-md border border-border bg-white px-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500 disabled:bg-surface-canvas disabled:text-ink-subtle"
          />
        </div>
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
          rows={3} maxLength={2000} placeholder="Write detailed description..."
          className="rounded-t-none"
          helperText={`${form.detailedDescription.length} / 2000`}
          value={form.detailedDescription} onChange={(e) => setField("detailedDescription", e.target.value)}
        />
      </div>

      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">3. Additional Details</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Select label="Organizer / Ministry" required value={form.organizer} onChange={(e) => setField("organizer", e.target.value)}>
          <option value="">Select organizer</option>
          {YM_ORGANIZER_OPTIONS.map((o) => <option key={o}>{o}</option>)}
        </Select>
        <Input label="Contact Person" required placeholder="Enter contact person" value={form.contactPerson} onChange={(e) => setField("contactPerson", e.target.value)} />
        <Input label="Contact Number" required type="tel" placeholder="Enter contact number" value={form.contactNumber} onChange={(e) => setField("contactNumber", e.target.value)} />

        <Input label="Email (Optional)" type="email" placeholder="Enter email address" value={form.email} onChange={(e) => setField("email", e.target.value)} />
        <Select label="Registration Required" required value={form.registrationRequired} onChange={(e) => setField("registrationRequired", e.target.value)}>
          <option value="">Select option</option>
          {YM_REGISTRATION_REQUIRED_OPTIONS.map((r) => <option key={r}>{r}</option>)}
        </Select>
        <Input label="Registration Deadline (Optional)" type="date" value={form.registrationDeadline} onChange={(e) => setField("registrationDeadline", e.target.value)} />
      </div>

      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">4. Additional Options</h3>
      <div className="flex flex-wrap gap-x-8 gap-y-3">
        <label className="flex items-center gap-2 text-sm text-ink">
          <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={form.sendNotifications} onChange={(e) => setField("sendNotifications", e.target.checked)} />
          Send Notifications
        </label>
        <label className="flex items-center gap-2 text-sm text-ink">
          <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={form.addToMinistryCalendar} onChange={(e) => setField("addToMinistryCalendar", e.target.checked)} />
          Add to Ministry Calendar
        </label>
        <label className="flex items-center gap-2 text-sm text-ink">
          <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={form.allowVolunteerSignup} onChange={(e) => setField("allowVolunteerSignup", e.target.checked)} />
          Allow Volunteer Sign-up
        </label>
        <label className="flex items-center gap-2 text-sm text-ink">
          <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={form.requireParentalConsent} onChange={(e) => setField("requireParentalConsent", e.target.checked)} />
          Require Parental Consent
        </label>
      </div>
    </div>
  );
}
