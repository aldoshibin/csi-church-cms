"use client";

import { Info } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { CheckboxOption } from "./CheckboxOption";
import { PraisePhotosUpload } from "./PraisePhotosUpload";
import { TagsInput } from "@/components/prayer-ministry/requests/form/TagsInput";
import { PRAISE_CATEGORY_OPTIONS, PRAISE_SHARE_WITH_OPTIONS, PRAISE_TYPE_OPTIONS } from "@/lib/mock/praiseReportsMockData";

export function NewPraiseReportForm({ form, setField, addTag, removeTag, addPhotos, removePhoto }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Report Information</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
          <Input label="Report Title" required placeholder="Enter a short title for your praise report" value={form.title} onChange={(e) => setField("title", e.target.value)} />
          <Select label="Category" required value={form.category} onChange={(e) => setField("category", e.target.value)}>
            <option value="">Select category</option>
            {PRAISE_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
          </Select>
          <Input label="Date of Praise" required type="date" value={form.dateOfPraise} onChange={(e) => setField("dateOfPraise", e.target.value)} />
          <Select label="Share With" required value={form.shareWith} onChange={(e) => setField("shareWith", e.target.value)}>
            <option value="">Select who can view this report</option>
            {PRAISE_SHARE_WITH_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </Select>

          <div className="sm:col-span-2">
            <Input label="Answered Prayer Related To (Optional)" placeholder="E.g., Prayer request, person, situation, event" value={form.answeredPrayerRelatedTo} onChange={(e) => setField("answeredPrayerRelatedTo", e.target.value)} />
          </div>
          <div className="sm:col-span-2">
            <Select label="Praise Type (Optional)" value={form.praiseType} onChange={(e) => setField("praiseType", e.target.value)}>
              <option value="">Select praise type</option>
              {PRAISE_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
            </Select>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Praise Details</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Textarea
            label="Testimony / Praise Report" required rows={6} maxLength={2000} placeholder="Write your praise report here..."
            helperText={`Share how God worked in your life. Be specific and give glory to Him! ${form.testimony.length}/2000`}
            value={form.testimony} onChange={(e) => setField("testimony", e.target.value)}
          />
          <Textarea
            label="Scripture Reference (Optional)" rows={6} placeholder="Enter Bible verse"
            helperText="Add a Bible verse that inspired you. Example: Psalm 107:1"
            value={form.scriptureReference} onChange={(e) => setField("scriptureReference", e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="rounded-lg border border-border bg-white p-6 shadow-card">
          <h3 className="mb-4 text-base font-semibold text-ink">Personal Information</h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Input label="Your Name" required disabled={form.anonymous} value={form.yourName} onChange={(e) => setField("yourName", e.target.value)} />
            <Input label="Contact Number (Optional)" type="tel" value={form.contactNumber} onChange={(e) => setField("contactNumber", e.target.value)} />
            <div className="sm:col-span-2">
              <Input label="Email (Optional)" type="email" value={form.email} onChange={(e) => setField("email", e.target.value)} />
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-white p-6 shadow-card">
          <h3 className="mb-4 text-base font-semibold text-ink">Reactions &amp; Engagement</h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-medium text-ink">Allow Others to</p>
              <div className="flex flex-col gap-2">
                <CheckboxOption checked={form.allowThank} onChange={(v) => setField("allowThank", v)} label="Thank me" />
                <CheckboxOption checked={form.allowPray} onChange={(v) => setField("allowPray", v)} label="Pray for me" />
                <CheckboxOption checked={form.allowComment} onChange={(v) => setField("allowComment", v)} label="Comment on this report" />
                <CheckboxOption checked={form.allowShare} onChange={(v) => setField("allowShare", v)} label="Share this report" />
              </div>
            </div>
            <div>
              <p className="mb-2 flex items-center gap-1.5 text-sm font-medium text-ink">
                Anonymous Submission <Info className="h-3.5 w-3.5 text-ink-subtle" />
              </p>
              <CheckboxOption checked={form.anonymous} onChange={(v) => setField("anonymous", v)} label="Submit anonymously" />
              <p className="mt-1.5 text-xs text-ink-subtle">Your name will not be displayed with this report.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Additional Options</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <TagsInput helperText="Examples: Healing, Provision, Protection, Family" tags={form.tags} onAdd={addTag} onRemove={removeTag} />
          <PraisePhotosUpload photos={form.photos} onAdd={addPhotos} onRemove={removePhoto} />
          <Input label="Add Reminder (Optional)" type="date" helperText="We will remind you to share another praise report." value={form.reminderDate} onChange={(e) => setField("reminderDate", e.target.value)} />
        </div>
      </div>
    </div>
  );
}
