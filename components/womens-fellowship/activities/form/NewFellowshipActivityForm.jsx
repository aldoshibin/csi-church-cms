"use client";

import { Upload } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import {
  ACT_TYPE_OPTIONS, ACT_VENUE_OPTIONS, ACT_FOCUS_AREA_OPTIONS, ACT_DRESS_CODE_OPTIONS, ACT_ORGANIZER_OPTIONS,
} from "@/lib/mock/fellowshipActivitiesMockData";

export function NewFellowshipActivityForm({ form, setField, onAddDocument }) {
  const handleUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) onAddDocument(file.name);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Activity Information</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Input label="Activity Title" required placeholder="Enter activity title" value={form.title} onChange={(e) => setField("title", e.target.value)} />
          <Select label="Activity Type" required value={form.activityType} onChange={(e) => setField("activityType", e.target.value)}>
            <option value="">Select activity type</option>
            {ACT_TYPE_OPTIONS.map((t) => <option key={t.value}>{t.value}</option>)}
          </Select>
          <Textarea label="Description" rows={1} maxLength={500} placeholder="Enter activity description" helperText={`${form.description.length}/500`} value={form.description} onChange={(e) => setField("description", e.target.value)} />

          <Input label="Date" required type="date" value={form.date} onChange={(e) => setField("date", e.target.value)} />
          <Input label="Start Time" required type="time" value={form.startTime} onChange={(e) => setField("startTime", e.target.value)} />
          <div className="flex items-end gap-3">
            <div className="flex-1">
              <Input label="End Time" required type="time" value={form.endTime} onChange={(e) => setField("endTime", e.target.value)} />
            </div>
            <label className="flex items-center gap-2 pb-2.5 text-sm text-ink">
              <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={form.allDay} onChange={(e) => setField("allDay", e.target.checked)} />
              All Day Activity
            </label>
          </div>

          <Select label="Venue" required value={form.venue} onChange={(e) => setField("venue", e.target.value)}>
            <option value="">Select venue</option>
            {ACT_VENUE_OPTIONS.map((v) => <option key={v}>{v}</option>)}
          </Select>
          <Textarea label="Address" rows={1} maxLength={250} placeholder="Enter venue address" helperText={`${form.address.length}/250`} value={form.address} onChange={(e) => setField("address", e.target.value)} />
          <Input label="Room / Hall (Optional)" placeholder="Enter room or hall name" value={form.roomHall} onChange={(e) => setField("roomHall", e.target.value)} />

          <Select label="Focus Area" required value={form.focusArea} onChange={(e) => setField("focusArea", e.target.value)}>
            <option value="">Select focus area</option>
            {ACT_FOCUS_AREA_OPTIONS.map((f) => <option key={f}>{f}</option>)}
          </Select>
          <Select label="Dress Code (Optional)" value={form.dressCode} onChange={(e) => setField("dressCode", e.target.value)}>
            <option value="">Select dress code</option>
            {ACT_DRESS_CODE_OPTIONS.map((d) => <option key={d}>{d}</option>)}
          </Select>
          <Input label="Bring With (Optional)" placeholder="Enter items to bring" value={form.bringWith} onChange={(e) => setField("bringWith", e.target.value)} />

          <Select label="Organizer" required value={form.organizer} onChange={(e) => setField("organizer", e.target.value)}>
            <option value="">Select organizer</option>
            {ACT_ORGANIZER_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </Select>
          <Input label="Contact Person" placeholder="Enter contact person" value={form.contactPerson} onChange={(e) => setField("contactPerson", e.target.value)} />
          <Input label="Contact Number" type="tel" placeholder="Enter contact number" value={form.contactNumber} onChange={(e) => setField("contactNumber", e.target.value)} />

          <Input label="Email (Optional)" type="email" placeholder="Enter email address" value={form.email} onChange={(e) => setField("email", e.target.value)} />
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Participation &amp; Registration</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">Registration Required</label>
            <div className="flex h-[42px] items-center gap-6">
              <label className="flex items-center gap-2 text-sm text-ink">
                <input type="radio" name="act-reg-required" className="h-4 w-4 accent-interactive-500" checked={form.registrationRequired === "Yes"} onChange={() => setField("registrationRequired", "Yes")} />
                Yes
              </label>
              <label className="flex items-center gap-2 text-sm text-ink">
                <input type="radio" name="act-reg-required" className="h-4 w-4 accent-interactive-500" checked={form.registrationRequired === "No"} onChange={() => setField("registrationRequired", "No")} />
                No
              </label>
            </div>
          </div>
          <Input label="Registration Opens On" type="date" value={form.registrationOpensOn} onChange={(e) => setField("registrationOpensOn", e.target.value)} />
          <Input label="Last Date to Register" type="date" value={form.lastDateToRegister} onChange={(e) => setField("lastDateToRegister", e.target.value)} />

          <Input label="Total Capacity (Optional)" type="number" placeholder="Enter total capacity" value={form.totalCapacity} onChange={(e) => setField("totalCapacity", e.target.value)} />
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">Show in Calendar</label>
            <button
              type="button" onClick={() => setField("showInCalendar", !form.showInCalendar)}
              className={`flex h-6 w-11 items-center rounded-full transition-colors ${form.showInCalendar ? "bg-success-500" : "bg-surface-muted"}`}
            >
              <span className={`h-5 w-5 rounded-full bg-white shadow transition-transform ${form.showInCalendar ? "translate-x-5" : "translate-x-0.5"}`} />
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Reminders</h3>
        <div className="flex flex-col gap-2.5">
          <label className="flex items-center gap-2 text-sm text-ink">
            <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={form.sendEmailReminder} onChange={(e) => setField("sendEmailReminder", e.target.checked)} />
            Send Email Reminder
          </label>
          <label className="flex items-center gap-2 text-sm text-ink">
            <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={form.sendSmsReminder} onChange={(e) => setField("sendSmsReminder", e.target.checked)} />
            Send SMS Reminder
          </label>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Input label="Reminder Date (Optional)" type="date" value={form.reminderDate} onChange={(e) => setField("reminderDate", e.target.value)} />
          <Input label="Reminder Time (Optional)" type="time" value={form.reminderTime} onChange={(e) => setField("reminderTime", e.target.value)} />
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-1 text-base font-semibold text-ink">Upload Documents <span className="font-normal text-ink-subtle">(Optional)</span></h3>
        <p className="mb-3 text-sm text-ink-subtle">Upload related documents, flyers or attachments.</p>
        <label className="flex h-[110px] w-full cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-border text-ink-subtle hover:border-interactive-300 hover:bg-interactive-50">
          <Upload className="h-5 w-5" />
          <span className="text-xs">Drag and drop files here or click to browse</span>
          <span className="text-[11px] text-ink-subtle">PNG, JPG, PDF up to 10MB</span>
          <input type="file" className="hidden" onChange={handleUpload} />
        </label>
        {form.documentNames.length > 0 && (
          <ul className="mt-3 flex flex-col gap-1.5">
            {form.documentNames.map((name) => <li key={name} className="truncate text-xs text-ink-muted">{name}</li>)}
          </ul>
        )}
      </div>
    </div>
  );
}
