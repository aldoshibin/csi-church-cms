"use client";

import { Clock } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { SongTagsInput } from "./SongTagsInput";
import { SongAttachmentsUpload } from "./SongAttachmentsUpload";
import {
  SONG_CATEGORY_OPTIONS, SONG_LANGUAGE_OPTIONS, SONG_KEY_OPTIONS, SONG_TIME_SIGNATURE_OPTIONS, SONG_STATUS_OPTIONS,
} from "@/lib/mock/songsMockData";

export function NewSongForm({ form, setField, addTag, removeTag, addAttachments, removeAttachment }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Basic Information</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Input label="Song Title" required placeholder="Enter song title" value={form.title} onChange={(e) => setField("title", e.target.value)} />
          <Select label="Category" required value={form.category} onChange={(e) => setField("category", e.target.value)}>
            <option value="">Select category</option>
            {SONG_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
          </Select>
          <Select label="Language" required value={form.language} onChange={(e) => setField("language", e.target.value)}>
            <option value="">Select language</option>
            {SONG_LANGUAGE_OPTIONS.map((l) => <option key={l}>{l}</option>)}
          </Select>

          <Input label="Also Known As / Alternate Title (Optional)" placeholder="Enter alternate title" value={form.alternateTitle} onChange={(e) => setField("alternateTitle", e.target.value)} />
          <Select label="Key" required value={form.key} onChange={(e) => setField("key", e.target.value)}>
            <option value="">Select key</option>
            {SONG_KEY_OPTIONS.map((k) => <option key={k}>{k}</option>)}
          </Select>
          <Input label="Tempo (BPM)" required type="number" placeholder="Enter tempo" rightIcon={<Clock className="h-4 w-4" />} value={form.tempo} onChange={(e) => setField("tempo", e.target.value)} />

          <Select label="Time Signature" value={form.timeSignature} onChange={(e) => setField("timeSignature", e.target.value)}>
            <option value="">Select time signature</option>
            {SONG_TIME_SIGNATURE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
          </Select>
          <Input label="Duration (Approx.)" placeholder="Enter duration (e.g., 3:45)" rightIcon={<Clock className="h-4 w-4" />} value={form.duration} onChange={(e) => setField("duration", e.target.value)} />
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Lyrics &amp; Chords</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Textarea
            label="Lyrics" required rows={8} maxLength={5000} placeholder="Enter lyrics here..."
            helperText={`${form.lyrics.length}/5000`}
            value={form.lyrics} onChange={(e) => setField("lyrics", e.target.value)}
          />
          <Textarea
            label="Chords (Optional)" rows={8} maxLength={2000} placeholder="Enter chords here..."
            helperText={`${form.chords.length}/2000`}
            value={form.chords} onChange={(e) => setField("chords", e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Additional Information</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Input label="Composer / Author (Optional)" placeholder="Enter composer or author" value={form.composer} onChange={(e) => setField("composer", e.target.value)} />
          <Input label="Copyright (Optional)" placeholder="Enter copyright information" value={form.copyright} onChange={(e) => setField("copyright", e.target.value)} />
          <Input label="Source (Optional)" placeholder="Enter source (e.g., Hymn Book, Album, etc.)" value={form.source} onChange={(e) => setField("source", e.target.value)} />

          <SongTagsInput tags={form.tags} onAdd={addTag} onRemove={removeTag} />
          <Textarea
            label="Notes (Optional)" rows={2} maxLength={500} placeholder="Add any additional notes about this song..."
            helperText={`${form.notes.length}/500`}
            value={form.notes} onChange={(e) => setField("notes", e.target.value)}
          />
          <div>
            <Select label="Status" required value={form.status} onChange={(e) => setField("status", e.target.value)}>
              {SONG_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
            </Select>
            <p className="mt-1.5 text-xs text-ink-subtle">Inactive songs will not be visible in active lists.</p>
          </div>
        </div>

        <div className="mt-5">
          <SongAttachmentsUpload attachments={form.attachments} onAdd={addAttachments} onRemove={removeAttachment} />
        </div>
      </div>
    </div>
  );
}
