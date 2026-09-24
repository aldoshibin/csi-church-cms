"use client";

import { Input, Textarea, Select } from "@/components/ui/Input";
import {
  CW_ITEM_CATEGORY_OPTIONS, CW_RELATED_TO_OPTIONS, CW_ASSIGNED_TO_OPTIONS, CW_ITEM_STATUS_OPTIONS, CW_VISIBILITY_OPTIONS,
} from "@/lib/mock/choirWorshipMockData";

export function CwNewItemForm({ form, setField }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Basic Information</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Input label="Title" required placeholder="Enter title" value={form.title} onChange={(e) => setField("title", e.target.value)} />
          </div>
          <Select label="Category" required value={form.category} onChange={(e) => setField("category", e.target.value)}>
            <option value="">Select category</option>
            {CW_ITEM_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
          </Select>
          <Input label="Date" required type="date" value={form.date} onChange={(e) => setField("date", e.target.value)} />

          <Input label="Time" type="time" value={form.time} onChange={(e) => setField("time", e.target.value)} />
          <div className="sm:col-span-2">
            <Input label="Location / Venue" required placeholder="Enter location / venue" value={form.location} onChange={(e) => setField("location", e.target.value)} />
          </div>
          <Select label="Related To" required value={form.relatedTo} onChange={(e) => setField("relatedTo", e.target.value)}>
            <option value="">Select related item</option>
            {CW_RELATED_TO_OPTIONS.map((r) => <option key={r}>{r}</option>)}
          </Select>

          <div className="sm:col-span-4">
            <Textarea
              label="Description" required rows={3} maxLength={500} placeholder="Enter description"
              helperText={`${form.description.length} / 500`}
              value={form.description} onChange={(e) => setField("description", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Additional Information</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Select label="Assigned To" value={form.assignedTo} onChange={(e) => setField("assignedTo", e.target.value)}>
            <option value="">Select member / team</option>
            {CW_ASSIGNED_TO_OPTIONS.map((a) => <option key={a}>{a}</option>)}
          </Select>
          <Select label="Status" required value={form.status} onChange={(e) => setField("status", e.target.value)}>
            <option value="">Select status</option>
            {CW_ITEM_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </Select>
          <Select label="Visibility" required value={form.visibility} onChange={(e) => setField("visibility", e.target.value)}>
            <option value="">Select visibility</option>
            {CW_VISIBILITY_OPTIONS.map((v) => <option key={v}>{v}</option>)}
          </Select>
        </div>
        <div className="mt-5">
          <Textarea
            label="Notes" rows={2} maxLength={300} placeholder="Enter any additional notes (optional)"
            helperText={`${form.notes.length} / 300`}
            value={form.notes} onChange={(e) => setField("notes", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
