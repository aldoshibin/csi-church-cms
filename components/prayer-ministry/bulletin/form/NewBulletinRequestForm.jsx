"use client";

import { Input, Textarea, Select } from "@/components/ui/Input";
import { BulletinAttachmentsUpload } from "./BulletinAttachmentsUpload";
import { BULLETIN_REQUEST_TYPE_OPTIONS, BULLETIN_PRIORITY_OPTIONS } from "@/lib/mock/bulletinRequestsMockData";

export function NewBulletinRequestForm({ form, setField, addAttachments, removeAttachment }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Request Information</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Input label="Title" required placeholder="Enter title of the announcement" value={form.title} onChange={(e) => setField("title", e.target.value)} />
          <Select label="Request Type" required value={form.requestType} onChange={(e) => setField("requestType", e.target.value)}>
            <option value="">Select request type</option>
            {BULLETIN_REQUEST_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
          </Select>
          <Select label="Priority" value={form.priority} onChange={(e) => setField("priority", e.target.value)}>
            {BULLETIN_PRIORITY_OPTIONS.map((p) => <option key={p}>{p}</option>)}
          </Select>

          <div className="sm:col-span-3">
            <Textarea
              label="Description" required rows={3} maxLength={500} placeholder="Enter detailed information about the announcement"
              helperText={`${form.description.length}/500`}
              value={form.description} onChange={(e) => setField("description", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Event / Announcement Details</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Input label="Event Date (if applicable)" type="date" value={form.eventDate} onChange={(e) => setField("eventDate", e.target.value)} />
          <Input label="Start Time (if applicable)" type="time" value={form.startTime} onChange={(e) => setField("startTime", e.target.value)} />
          <Input label="End Time (if applicable)" type="time" value={form.endTime} onChange={(e) => setField("endTime", e.target.value)} />

          <Input label="Location / Venue (if applicable)" placeholder="Enter location or venue" value={form.location} onChange={(e) => setField("location", e.target.value)} />
          <Input label="Contact Person" placeholder="Enter contact person name" value={form.contactPerson} onChange={(e) => setField("contactPerson", e.target.value)} />
          <Input label="Contact Number" type="tel" placeholder="Enter contact number" value={form.contactNumber} onChange={(e) => setField("contactNumber", e.target.value)} />

          <div className="sm:col-span-3">
            <Input label="Organized By" placeholder="Enter ministry / department / group name" value={form.organizedBy} onChange={(e) => setField("organizedBy", e.target.value)} />
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Content for Bulletin</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Textarea
            label="Brief Announcement (for bulletin)" rows={4} maxLength={250} placeholder="Enter announcement text as it should appear in the bulletin"
            helperText={`${form.briefAnnouncement.length}/250`}
            value={form.briefAnnouncement} onChange={(e) => setField("briefAnnouncement", e.target.value)}
          />
          <Textarea
            label="Additional Notes (Optional)" rows={4} maxLength={250} placeholder="Any additional information for the editor"
            helperText={`${form.additionalNotes.length}/250`}
            value={form.additionalNotes} onChange={(e) => setField("additionalNotes", e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Attachments (Optional)</h3>
        <BulletinAttachmentsUpload attachments={form.attachments} onAdd={addAttachments} onRemove={removeAttachment} />
      </div>
    </div>
  );
}
