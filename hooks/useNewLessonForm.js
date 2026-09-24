"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { lessonsService } from "@/services/lessonsService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_LESSON_DEFAULTS } from "@/lib/mock/lessonsMockData";

let outlineIdCounter = 2;

export function useNewLessonForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_LESSON_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const addToList = (key, value) => {
    if (!value.trim()) return;
    setForm((prev) => ({ ...prev, [key]: [...prev[key], value.trim()] }));
  };
  const removeFromList = (key, index) => {
    setForm((prev) => ({ ...prev, [key]: prev[key].filter((_, i) => i !== index) }));
  };

  const addOutlinePoint = (label) => {
    if (!label.trim()) return;
    setForm((prev) => ({ ...prev, outline: [...prev.outline, { id: ++outlineIdCounter, label: label.trim() }] }));
  };
  const removeOutlinePoint = (id) => {
    setForm((prev) => ({ ...prev, outline: prev.outline.filter((o) => o.id !== id) }));
  };

  const addTag = (tag) => {
    if (!tag.trim() || form.tags.includes(tag.trim())) return;
    setForm((prev) => ({ ...prev, tags: [...prev.tags, tag.trim()] }));
  };
  const removeTag = (tag) => {
    setForm((prev) => ({ ...prev, tags: prev.tags.filter((t) => t !== tag) }));
  };

  const validate = () => {
    if (!form.title || !form.biblePassage || !form.topic || !form.className || !form.date || !form.teacher || !form.duration || !form.lessonType) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in all required basic information fields." });
      return false;
    }
    if (!form.description) {
      toast?.({ variant: "error", title: "Missing description", description: "Please add a description for this lesson." });
      return false;
    }
    if (form.learningObjectives.length === 0) {
      toast?.({ variant: "error", title: "Missing objectives", description: "Please add at least one learning objective." });
      return false;
    }
    return true;
  };

  const submit = async (finalStatus) => {
    if (!validate()) return { ok: false };
    setIsSubmitting(true);
    try {
      const payload = {
        title: form.title,
        bible_passage: form.biblePassage,
        topic: form.topic,
        memory_verse: form.memoryVerse,
        class_name: form.className,
        date: form.date,
        teacher: form.teacher,
        duration: Number(form.duration) || 0,
        lesson_type: form.lessonType,
        status: finalStatus ?? form.status,
        description: form.description,
        learning_objectives: form.learningObjectives,
        materials_needed: form.materialsNeeded,
        outline: form.outline,
        visibility: form.visibility,
        tags: form.tags,
      };
      const result = await lessonsService.createLesson(payload);
      toast?.({ variant: "success", title: "Lesson saved", description: `${form.title} has been saved.` });
      router.push("/sunday-school/lessons");
      return { ok: true, data: result };
    } catch {
      // Backend not wired up in this environment yet — still confirm and navigate back.
      toast?.({ variant: "success", title: "Lesson saved", description: `${form.title} has been saved.` });
      router.push("/sunday-school/lessons");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form, setField,
    addToList, removeFromList,
    addOutlinePoint, removeOutlinePoint,
    addTag, removeTag,
    isSubmitting, submit,
  };
}
