"use client";

import Link from "next/link";
import { Bold, Italic, Underline, List, ListOrdered, Link2, Code2, Indent, Outdent, X, Save, Eye, Send } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { DynamicListField } from "./DynamicListField";
import { ContentOutlineSection } from "./ContentOutlineSection";
import {
  LESSON_TOPIC_OPTIONS, LESSON_CLASS_OPTIONS, LESSON_TEACHER_OPTIONS, LESSON_TYPE_OPTIONS, LESSON_STATUS_OPTIONS,
} from "@/lib/mock/lessonsMockData";

const TOOLBAR_ICONS = [Bold, Italic, Underline, List, ListOrdered, Outdent, Indent, Code2, Link2];

export function NewLessonForm({ form, setField, addToList, removeFromList, addOutlinePoint, removeOutlinePoint, isSubmitting, onSubmit }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">1. Basic Information</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input label="Lesson Title" required placeholder="Enter lesson title" value={form.title} onChange={(e) => setField("title", e.target.value)} />
        <Input label="Bible Passage" required placeholder="e.g., Genesis 1:1 - 2:3" value={form.biblePassage} onChange={(e) => setField("biblePassage", e.target.value)} />

        <Select label="Topic" required value={form.topic} onChange={(e) => setField("topic", e.target.value)}>
          <option value="">Select topic</option>
          {LESSON_TOPIC_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </Select>
        <Input label="Memory Verse" placeholder="Enter memory verse" value={form.memoryVerse} onChange={(e) => setField("memoryVerse", e.target.value)} />

        <Select label="Class / Grade" required value={form.className} onChange={(e) => setField("className", e.target.value)}>
          <option value="">Select class or grade</option>
          {LESSON_CLASS_OPTIONS.map((c) => <option key={c}>{c}</option>)}
        </Select>
        <Input label="Date" required type="date" value={form.date} onChange={(e) => setField("date", e.target.value)} />

        <Select label="Teacher" required value={form.teacher} onChange={(e) => setField("teacher", e.target.value)}>
          <option value="">Select teacher</option>
          {LESSON_TEACHER_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </Select>
        <Input label="Duration (minutes)" required type="number" placeholder="e.g., 45" value={form.duration} onChange={(e) => setField("duration", e.target.value)} />

        <Select label="Lesson Type" required value={form.lessonType} onChange={(e) => setField("lessonType", e.target.value)}>
          <option value="">Select lesson type</option>
          {LESSON_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </Select>
        <Select label="Status" required value={form.status} onChange={(e) => setField("status", e.target.value)}>
          {LESSON_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </Select>
      </div>

      <h3 className="mb-1 mt-7 text-base font-semibold text-ink">2. Description &amp; Objectives</h3>
      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-medium text-ink">Description <span className="text-danger-500">*</span></label>
        <div className="rounded-t-md border border-b-0 border-border bg-surface-canvas px-3 py-2 flex flex-wrap items-center gap-1">
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
          rows={3} maxLength={2000} placeholder="Enter lesson description..."
          className="rounded-t-none"
          helperText={`${form.description.length} / 2000`}
          value={form.description} onChange={(e) => setField("description", e.target.value)}
        />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <DynamicListField
          label="Learning Objectives" required helperText="Add the key learning goals for this lesson."
          placeholder="Write an objective and press Enter..."
          items={form.learningObjectives}
          onAdd={(v) => addToList("learningObjectives", v)}
          onRemove={(i) => removeFromList("learningObjectives", i)}
        />
        <DynamicListField
          label="Materials Needed" helperText="List the materials required for this lesson."
          placeholder="Write a material and press Enter..."
          items={form.materialsNeeded} bulletIcon="dot"
          onAdd={(v) => addToList("materialsNeeded", v)}
          onRemove={(i) => removeFromList("materialsNeeded", i)}
        />
      </div>

      <div className="mt-7">
        <ContentOutlineSection outline={form.outline} onAdd={addOutlinePoint} onRemove={removeOutlinePoint} />
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-end gap-3 border-t border-border pt-5">
        <Link href="/sunday-school/lessons">
          <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
        </Link>
        <Button type="button" variant="secondary" isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />} onClick={() => onSubmit("Draft")}>
          Save as Draft
        </Button>
        <Button type="button" variant="secondary" leftIcon={<Eye className="h-4 w-4" />}>Preview Lesson</Button>
        <Button type="button" isLoading={isSubmitting} leftIcon={<Send className="h-4 w-4" />} onClick={() => onSubmit("Published")}>
          Publish Lesson
        </Button>
      </div>
    </div>
  );
}
