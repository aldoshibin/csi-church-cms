"use client";

import Link from "next/link";

import { useNewClassForm } from "@/hooks/useNewClassForm";
import { NewClassForm } from "@/components/sunday-school/classes/form/NewClassForm";
import { ClassInformationPanel } from "@/components/sunday-school/classes/form/ClassInformationPanel";
import { ClassTipsPanel } from "@/components/sunday-school/classes/form/ClassTipsPanel";

export default function AddNewClassPage() {
  const { form, setField, isSubmitting, submit } = useNewClassForm();

  return (
    <div className="space-y-5 pb-16">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Add New Class</h1>
        <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
          <Link href="/sunday-school" className="hover:underline">Sunday School Management</Link>
          <span className="text-ink-subtle">›</span>
          <Link href="/sunday-school/classes" className="hover:underline">Classes</Link>
          <span className="text-ink-subtle">›</span>
          <span className="text-ink-subtle">Add New Class</span>
        </nav>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <NewClassForm form={form} setField={setField} isSubmitting={isSubmitting} onSubmit={submit} />
        </div>

        <div className="flex flex-col gap-5">
          <ClassInformationPanel />
          <ClassTipsPanel />
        </div>
      </div>
    </div>
  );
}
