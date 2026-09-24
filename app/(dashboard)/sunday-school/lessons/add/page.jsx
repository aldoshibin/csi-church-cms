"use client";

import Link from "next/link";
import { X, Save } from "lucide-react";

import { useNewLessonForm } from "@/hooks/useNewLessonForm";
import { Button } from "@/components/ui/Button";
import { NewLessonForm } from "@/components/sunday-school/lessons/form/NewLessonForm";
import { LessonThumbnailPanel } from "@/components/sunday-school/lessons/form/LessonThumbnailPanel";
import { LessonVisibilityPanel } from "@/components/sunday-school/lessons/form/LessonVisibilityPanel";
import { LessonTagsPanel } from "@/components/sunday-school/lessons/form/LessonTagsPanel";
import { LessonResourcesPanel } from "@/components/sunday-school/lessons/form/LessonResourcesPanel";

export default function AddNewLessonPage() {
  const {
    form, setField, addToList, removeFromList, addOutlinePoint, removeOutlinePoint,
    addTag, removeTag, isSubmitting, submit,
  } = useNewLessonForm();

  return (
    <div className="space-y-5 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Add New Lesson</h1>
          <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/sunday-school/lessons" className="hover:underline">Lessons</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Add New Lesson</span>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/sunday-school/lessons">
            <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
          </Link>
          <Button type="button" isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />} onClick={() => submit("Draft")}>
            Save Lesson
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <NewLessonForm
            form={form} setField={setField}
            addToList={addToList} removeFromList={removeFromList}
            addOutlinePoint={addOutlinePoint} removeOutlinePoint={removeOutlinePoint}
            isSubmitting={isSubmitting} onSubmit={submit}
          />
        </div>

        <div className="flex flex-col gap-5">
          <LessonThumbnailPanel thumbnailName={form.thumbnailName} onUpload={(name) => setField("thumbnailName", name)} />
          <LessonVisibilityPanel value={form.visibility} onChange={(v) => setField("visibility", v)} />
          <LessonTagsPanel tags={form.tags} onAdd={addTag} onRemove={removeTag} />
          <LessonResourcesPanel />
        </div>
      </div>
    </div>
  );
}
