"use client";

import Link from "next/link";

import { useNewStudentForm } from "@/hooks/useNewStudentForm";
import { NewStudentForm } from "@/components/sunday-school/students/form/NewStudentForm";
import { StudentInformationPanel } from "@/components/sunday-school/students/form/StudentInformationPanel";
import { StudentTipsPanel } from "@/components/sunday-school/students/form/StudentTipsPanel";

export default function AddNewStudentPage() {
  const { form, setField, age, isSubmitting, submit } = useNewStudentForm();

  return (
    <div className="space-y-5 pb-16">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Add New Student</h1>
        <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
          <Link href="/sunday-school" className="hover:underline">Sunday School Management</Link>
          <span className="text-ink-subtle">›</span>
          <Link href="/sunday-school/students" className="hover:underline">Students</Link>
          <span className="text-ink-subtle">›</span>
          <span className="text-ink-subtle">Add New Student</span>
        </nav>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <NewStudentForm form={form} setField={setField} age={age} isSubmitting={isSubmitting} onSubmit={submit} />
        </div>

        <div className="flex flex-col gap-5">
          <StudentInformationPanel />
          <StudentTipsPanel />
        </div>
      </div>
    </div>
  );
}
