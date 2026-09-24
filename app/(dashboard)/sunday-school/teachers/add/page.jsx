"use client";

import Link from "next/link";

import { useNewTeacherForm } from "@/hooks/useNewTeacherForm";
import { NewTeacherForm } from "@/components/sunday-school/teachers/form/NewTeacherForm";
import { TeacherGuidelinesPanel } from "@/components/sunday-school/teachers/form/TeacherGuidelinesPanel";
import { TeacherTipsPanel } from "@/components/sunday-school/teachers/form/TeacherTipsPanel";

export default function AddNewTeacherPage() {
  const { form, setField, toggleClassToTeach, isSubmitting, submit } = useNewTeacherForm();

  return (
    <div className="space-y-5 pb-16">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Add New Teacher</h1>
        <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
          <Link href="/sunday-school" className="hover:underline">Sunday School Management</Link>
          <span className="text-ink-subtle">›</span>
          <Link href="/sunday-school/teachers" className="hover:underline">Teachers</Link>
          <span className="text-ink-subtle">›</span>
          <span className="text-ink-subtle">Add New Teacher</span>
        </nav>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <NewTeacherForm form={form} setField={setField} toggleClassToTeach={toggleClassToTeach} isSubmitting={isSubmitting} onSubmit={submit} />
        </div>

        <div className="flex flex-col gap-5">
          <TeacherGuidelinesPanel />
          <TeacherTipsPanel />
        </div>
      </div>
    </div>
  );
}
