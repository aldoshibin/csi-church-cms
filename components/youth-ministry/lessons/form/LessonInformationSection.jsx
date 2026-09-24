"use client";

import { FileText } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import {
  LSN_CATEGORY_OPTIONS, LSN_TARGET_GROUP_OPTIONS, LSN_BIBLE_BOOK_OPTIONS,
  LSN_LANGUAGE_OPTIONS, LSN_LEVEL_OPTIONS, LSN_DURATION_OPTIONS,
} from "@/lib/mock/ymLessonsMockData";

export function LessonInformationSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 flex items-center gap-2 text-base font-semibold text-ink">
        <FileText className="h-4 w-4 text-interactive-600" /> Lesson Information
      </h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="sm:col-span-1">
          <Input label="Lesson Title" required placeholder="Enter lesson title" value={form.title} onChange={(e) => setField("title", e.target.value)} />
        </div>
        <Select label="Category" required value={form.category} onChange={(e) => setField("category", e.target.value)}>
          <option value="">Select category</option>
          {LSN_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
        </Select>
        <Select label="Target Group" required value={form.targetGroup} onChange={(e) => setField("targetGroup", e.target.value)}>
          <option value="">Select target group</option>
          {LSN_TARGET_GROUP_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </Select>

        <Select label="Bible Reference" required value={form.bibleBook} onChange={(e) => setField("bibleBook", e.target.value)}>
          <option value="">Select book</option>
          {LSN_BIBLE_BOOK_OPTIONS.map((b) => <option key={b}>{b}</option>)}
        </Select>
        <Input label=" " placeholder="Chapter : Verse" helperText="e.g. 3:16" value={form.bibleChapterVerse} onChange={(e) => setField("bibleChapterVerse", e.target.value)} />
        <div className="sm:col-span-1" />

        <div className="sm:col-span-2">
          <Input label="Main Theme" required placeholder="Enter main theme of the lesson" value={form.mainTheme} onChange={(e) => setField("mainTheme", e.target.value)} />
        </div>
        <Input label="Key Verse" placeholder="Enter key verse" value={form.keyVerse} onChange={(e) => setField("keyVerse", e.target.value)} />

        <Input label="Sub Themes (Optional)" placeholder="Enter sub themes (comma separated)" value={form.subThemes} onChange={(e) => setField("subThemes", e.target.value)} />
        <Input label="Tags (Optional)" placeholder="Enter tags (e.g. love, faith, grace)" value={form.tags} onChange={(e) => setField("tags", e.target.value)} />
        <Select label="Language" value={form.language} onChange={(e) => setField("language", e.target.value)}>
          <option value="">Select language</option>
          {LSN_LANGUAGE_OPTIONS.map((l) => <option key={l}>{l}</option>)}
        </Select>

        <Select label="Level" value={form.level} onChange={(e) => setField("level", e.target.value)}>
          <option value="">Select level</option>
          {LSN_LEVEL_OPTIONS.map((l) => <option key={l}>{l}</option>)}
        </Select>
        <Select label="Duration" required value={form.duration} onChange={(e) => setField("duration", e.target.value)}>
          <option value="">Select duration</option>
          {LSN_DURATION_OPTIONS.map((d) => <option key={d}>{d}</option>)}
        </Select>
        <Input label="Class Size (Expected)" placeholder="e.g. 20-30" value={form.classSize} onChange={(e) => setField("classSize", e.target.value)} />

        <div className="sm:col-span-3">
          <Textarea label="Description" required rows={2} placeholder="Enter a short description of the lesson" value={form.description} onChange={(e) => setField("description", e.target.value)} />
        </div>
      </div>
    </div>
  );
}
