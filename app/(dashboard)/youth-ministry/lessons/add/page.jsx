"use client";

import Link from "next/link";
import { X, Save } from "lucide-react";

import { useNewYmLessonForm } from "@/hooks/useNewYmLessonForm";
import { Button } from "@/components/ui/Button";
import { LessonInformationSection } from "@/components/youth-ministry/lessons/form/LessonInformationSection";
import { LearningObjectivesSection } from "@/components/youth-ministry/lessons/form/LearningObjectivesSection";
import { ScheduleAvailabilitySection } from "@/components/youth-ministry/lessons/form/ScheduleAvailabilitySection";
import { MaterialsResourcesSection } from "@/components/youth-ministry/lessons/form/MaterialsResourcesSection";
import { AdditionalNotesSection } from "@/components/youth-ministry/lessons/form/AdditionalNotesSection";

export default function AddNewYmLessonPage() {
  const {
    form, setField, setObjective, addObjective, removeObjective, addMaterialFile,
    isSubmitting, submit,
  } = useNewYmLessonForm();

  return (
    <div className="space-y-5 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <nav className="flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/youth-ministry/lessons" className="hover:underline">Lessons</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Add New Lesson</span>
          </nav>
          <h1 className="mt-1 font-display text-2xl font-bold text-ink">Add New Lesson</h1>
          <p className="mt-1 text-sm text-ink-subtle">Create a new lesson to teach and engage students in Sunday school.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/youth-ministry/lessons">
            <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
          </Link>
          <Button type="button" isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />} onClick={submit}>
            Save Lesson
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="flex flex-col gap-5 lg:col-span-2">
          <LessonInformationSection form={form} setField={setField} />
          <LearningObjectivesSection objectives={form.learningObjectives} onChange={setObjective} onAdd={addObjective} onRemove={removeObjective} />
        </div>

        <div className="flex flex-col gap-5">
          <ScheduleAvailabilitySection form={form} setField={setField} />
          <MaterialsResourcesSection fileNames={form.materialsFileNames} onAddFile={addMaterialFile} />
          <AdditionalNotesSection value={form.additionalNotes} onChange={(v) => setField("additionalNotes", v)} />
        </div>
      </div>
    </div>
  );
}
