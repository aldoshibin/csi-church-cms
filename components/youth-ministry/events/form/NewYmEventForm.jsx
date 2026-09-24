"use client";

import { Bold, Italic, Underline, List, ListOrdered, Link2 } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import {
  YME_CATEGORY_OPTIONS, YME_EVENT_TYPE_OPTIONS, YME_ORGANIZER_OPTIONS, YME_STATUS_OPTIONS, YME_TARGET_AUDIENCE_OPTIONS,
} from "@/lib/mock/ymEventsMockData";

const TOOLBAR_ICONS = [Bold, Italic, Underline, List, ListOrdered, Link2];

export function NewYmEventForm({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">1. Event Information</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Input label="Event Title" required placeholder="Enter event title" value={form.title} onChange={(e) => setField("title", e.target.value)} />
        </div>
        <Select label="Category" required value={form.category} onChange={(e) => setField("category", e.target.value)}>
          <option value="">Select category</option>
          {YME_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
        </Select>
        <Select label="Event Type" required value={form.eventType} onChange={(e) => setField("eventType", e.target.value)}>
          <option value="">Select event type</option>
          {YME_EVENT_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </Select>
        <Select label="Organizer / Ministry" required value={form.organizer} onChange={(e) => setField("organizer", e.target.value)}>
          <option value="">Select organizer or ministry</option>
          {YME_ORGANIZER_OPTIONS.map((o) => <option key={o}>{o}</option>)}
        </Select>
        <Select label="Event Status" required value={form.status} onChange={(e) => setField("status", e.target.value)}>
          <option value="">Select status</option>
          {YME_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </Select>
      </div>

      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">2. Schedule &amp; Venue</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
        <Input label="Start Date" required type="date" value={form.startDate} onChange={(e) => setField("startDate", e.target.value)} />
        <Input label="Start Time" required type="time" value={form.startTime} onChange={(e) => setField("startTime", e.target.value)} />
        <Input label="End Date" required type="date" value={form.endDate} onChange={(e) => setField("endDate", e.target.value)} />
        <Input label="End Time" required type="time" value={form.endTime} onChange={(e) => setField("endTime", e.target.value)} />

        <div className="sm:col-span-2">
          <Input label="Venue" required placeholder="Enter venue" value={form.venue} onChange={(e) => setField("venue", e.target.value)} />
        </div>
        <div className="sm:col-span-2">
          <Input label="Additional Venue Details (Optional)" placeholder="Enter details" value={form.additionalVenueDetails} onChange={(e) => setField("additionalVenueDetails", e.target.value)} />
        </div>

        <div>
          <label className="flex items-center gap-2 pt-8 text-sm text-ink">
            <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={form.isOnline} onChange={(e) => setField("isOnline", e.target.checked)} />
            Online Event
          </label>
        </div>
        <div className="sm:col-span-3">
          <label className="mb-1 block text-sm font-medium text-ink">Online Meeting Link (Optional)</label>
          <input
            value={form.meetingLink} onChange={(e) => setField("meetingLink", e.target.value)}
            placeholder="Enter meeting link" disabled={!form.isOnline}
            className="h-[42px] w-full rounded-md border border-border bg-white px-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500 disabled:bg-surface-canvas disabled:text-ink-subtle"
          />
        </div>
      </div>

      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">3. Description</h3>
      <Input
        label="Short Description" required maxLength={150} placeholder="Enter short description"
        helperText={`${form.shortDescription.length} / 150`}
        value={form.shortDescription} onChange={(e) => setField("shortDescription", e.target.value)}
      />
      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-medium text-ink">Detailed Description (Optional)</label>
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

      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">4. Additional Details</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
        <Select label="Target Audience" value={form.targetAudience} onChange={(e) => setField("targetAudience", e.target.value)}>
          <option value="">Select audience</option>
          {YME_TARGET_AUDIENCE_OPTIONS.map((a) => <option key={a}>{a}</option>)}
        </Select>
        <Input label="Registration Limit (Optional)" type="number" placeholder="Enter limit" value={form.registrationLimit} onChange={(e) => setField("registrationLimit", e.target.value)} />
        <Input label="Registration Deadline (Optional)" type="date" value={form.registrationDeadline} onChange={(e) => setField("registrationDeadline", e.target.value)} />
        <Input label="Contact Person" required placeholder="Enter contact person" value={form.contactPerson} onChange={(e) => setField("contactPerson", e.target.value)} />

        <Input label="Contact Phone" required type="tel" placeholder="Enter phone number" value={form.contactPhone} onChange={(e) => setField("contactPhone", e.target.value)} />
        <Input label="Contact Email" required type="email" placeholder="Enter email address" value={form.contactEmail} onChange={(e) => setField("contactEmail", e.target.value)} />
        <div className="sm:col-span-2">
          <Input label="Website / More Info (Optional)" placeholder="Enter website or info link" value={form.websiteInfo} onChange={(e) => setField("websiteInfo", e.target.value)} />
        </div>
      </div>

      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">5. Settings &amp; Preferences</h3>
      <div className="flex flex-wrap gap-x-8 gap-y-3">
        <label className="flex items-center gap-2 text-sm text-ink">
          <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={form.enableRegistration} onChange={(e) => setField("enableRegistration", e.target.checked)} />
          Enable Registration
        </label>
        <label className="flex items-center gap-2 text-sm text-ink">
          <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={form.sendReminder} onChange={(e) => setField("sendReminder", e.target.checked)} />
          Send Reminder
        </label>
        <label className="flex items-center gap-2 text-sm text-ink">
          <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={form.addToChurchCalendar} onChange={(e) => setField("addToChurchCalendar", e.target.checked)} />
          Add to Church Calendar
        </label>
        <label className="flex items-center gap-2 text-sm text-ink">
          <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={form.sendNotifications} onChange={(e) => setField("sendNotifications", e.target.checked)} />
          Send Notifications
        </label>
        <label className="flex items-center gap-2 text-sm text-ink">
          <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={form.requireApproval} onChange={(e) => setField("requireApproval", e.target.checked)} />
          Require Approval
        </label>
      </div>
    </div>
  );
}
