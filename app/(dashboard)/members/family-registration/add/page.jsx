"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, RotateCcw, Save } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { useFamilyRegistrationForm } from "@/hooks/useFamilyRegistrationForm";
import FamilyDetailsForm from "@/components/family-registration/FamilyDetailsForm";
import FamilyMembersTable from "@/components/family-registration/FamilyMembersTable";
import FamilySummaryPanel from "@/components/family-registration/FamilySummaryPanel";
import { DocumentsChecklist, NotePanel } from "@/components/family-registration/DocumentsChecklist";

export default function AddNewFamilyPage() {
  const router = useRouter();
  const { form, fields, addMember, removeMember, summary, isSubmitting, resetForm, submit, headOfFamily } =
    useFamilyRegistrationForm();

  const handleSave = async () => {
    const result = await submit();
    if (result?.ok) {
      router.push("/families");
    }
  };

  return (
    <div className="space-y-6 pb-24">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Add New Family</h1>
          <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/members" className="hover:underline">Member Management</Link>
            <span className="text-ink-subtle">›</span>
            <Link href="/members/family-registration" className="hover:underline">Family Registration</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Add New Family</span>
          </nav>
        </div>
        <Link href="/members/family-registration">
          <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />}>
            Back to Family Registration
          </Button>
        </Link>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <FamilyDetailsForm form={form} />
            <FamilyMembersTable form={form} fields={fields} addMember={addMember} removeMember={removeMember} />
          </div>

          <div className="space-y-6">
            <FamilySummaryPanel summary={summary} headOfFamily={headOfFamily} />
            <DocumentsChecklist />
            <NotePanel />
          </div>
        </div>

        <div className="fixed inset-x-0 bottom-0 z-10 border-t border-border bg-white px-6 py-3">
          <div className="mx-auto flex max-w-[1600px] justify-end gap-3">
            <Button type="button" variant="secondary" leftIcon={<RotateCcw className="h-4 w-4" />} onClick={resetForm}>
              Reset
            </Button>
            <Button type="submit" isLoading={isSubmitting} leftIcon={!isSubmitting && <Save className="h-4 w-4" />}>
              {isSubmitting ? "Saving..." : "Save Family"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
