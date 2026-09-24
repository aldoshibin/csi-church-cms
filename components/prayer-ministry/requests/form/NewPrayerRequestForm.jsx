"use client";

import { Input, Textarea, Select } from "@/components/ui/Input";
import { TagsInput } from "./TagsInput";
import { RequestAttachmentsUpload } from "./RequestAttachmentsUpload";
import {
  PRAYER_CATEGORY_OPTIONS, PRAYER_URGENCY_OPTIONS, PRAYER_GROUP_OPTIONS, PRAYER_REQUEST_TYPE_OPTIONS, PRAYER_VISIBILITY_OPTIONS,
} from "@/lib/mock/prayerRequestsMockData";

function RadioOption({ name, value, current, onChange, label }) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-sm text-ink">
      <input type="radio" name={name} checked={current === value} onChange={() => onChange(value)} className="h-4 w-4 border-border text-success-600 focus-visible:ring-success-500" />
      {label}
    </label>
  );
}

export function NewPrayerRequestForm({ form, setField, addTag, removeTag, addAttachments, removeAttachment }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Request Information</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Input label="Request Title" required placeholder="Enter a short title for this request" value={form.title} onChange={(e) => setField("title", e.target.value)} />
          <Select label="Category" required value={form.category} onChange={(e) => setField("category", e.target.value)}>
            <option value="">Select category</option>
            {PRAYER_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
          </Select>
          <Select label="Urgency Level" required value={form.urgency} onChange={(e) => setField("urgency", e.target.value)}>
            {PRAYER_URGENCY_OPTIONS?.map((u) => <option key={u.value} value={u.value}>{u.value}</option>)}
          </Select>

          <Select label="Prayer Group (Optional)" value={form.prayerGroup} onChange={(e) => setField("prayerGroup", e.target.value)}>
            <option value="">Select prayer group</option>
            {PRAYER_GROUP_OPTIONS.map((g) => <option key={g}>{g}</option>)}
          </Select>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">Requested For <span className="text-danger-500">*</span></label>
            <div className="flex h-10 items-center gap-5">
              <RadioOption name="requestedFor" value="Myself" current={form.requestedFor} onChange={(v) => setField("requestedFor", v)} label="Myself" />
              <RadioOption name="requestedFor" value="Someone Else" current={form.requestedFor} onChange={(v) => setField("requestedFor", v)} label="Someone Else" />
              <RadioOption name="requestedFor" value="On Behalf of Others" current={form.requestedFor} onChange={(v) => setField("requestedFor", v)} label="On Behalf of Others" />
            </div>
          </div>
          <Select label="Request Type (Optional)" value={form.requestType} onChange={(e) => setField("requestType", e.target.value)}>
            <option value="">Select request type</option>
            {PRAYER_REQUEST_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
          </Select>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Prayer Request Details</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Textarea
            label="Prayer Request Description" required rows={6} maxLength={1000} placeholder="Share your prayer request in detail..."
            helperText={`Please provide details so others can understand and pray with you. ${form.description.length}/1000`}
            value={form.description} onChange={(e) => setField("description", e.target.value)}
          />
          <Textarea
            label="Scripture Reference (Optional)" rows={6} placeholder="Enter a Bible verse that encourages you"
            helperText="Example: Philippians 4:6-7"
            value={form.scriptureReference} onChange={(e) => setField("scriptureReference", e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="rounded-lg border border-border bg-white p-6 shadow-card">
          <h3 className="mb-4 text-base font-semibold text-ink">Personal Information</h3>
          <div className="flex flex-col gap-5">
            <Input label="Your Name" required value={form.yourName} onChange={(e) => setField("yourName", e.target.value)} />
            <Input label="Contact Number (Optional)" type="tel" value={form.contactNumber} onChange={(e) => setField("contactNumber", e.target.value)} />
            <Input label="Email (Optional)" type="email" value={form.email} onChange={(e) => setField("email", e.target.value)} />
          </div>
        </div>

        <div className="rounded-lg border border-border bg-white p-6 shadow-card">
          <h3 className="mb-4 text-base font-semibold text-ink">Privacy &amp; Visibility</h3>
          <div className="flex flex-col gap-5">
            <Select label="Visibility" required value={form.visibility} onChange={(e) => setField("visibility", e.target.value)} helperText="Who can view this prayer request">
              {PRAYER_VISIBILITY_OPTIONS.map((v) => <option key={v}>{v}</option>)}
            </Select>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">Allow Comments &amp; Updates <span className="text-danger-500">*</span></label>
              <div className="flex flex-col gap-2">
                <RadioOption name="allowComments" value="Yes" current={form.allowComments} onChange={(v) => setField("allowComments", v)} label="Yes, allow others to add updates" />
                <RadioOption name="allowComments" value="No" current={form.allowComments} onChange={(v) => setField("allowComments", v)} label="No, keep updates private" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Additional Options</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <TagsInput helperText="Examples: Healing, Family, Finances" tags={form.tags} onAdd={addTag} onRemove={removeTag} />
          <Input label="Add Reminder (Optional)" type="date" helperText="We will remind you to follow up on this request" value={form.reminderDate} onChange={(e) => setField("reminderDate", e.target.value)} />
          <RequestAttachmentsUpload supportedFormatsText="PDF, DOC, DOCX, JPG, PNG (Max. 10MB)" attachments={form.attachments} onAdd={addAttachments} onRemove={removeAttachment} />
        </div>
      </div>
    </div>
  );
}
