"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, RotateCcw, Save } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { useAddVisitorForm } from "@/hooks/useAddVisitorForm";
import PersonalInformationSection from "@/components/visitors/add/PersonalInformationSection";
import VisitInformationSection from "@/components/visitors/add/VisitInformationSection";
import CompanionDetailsSection from "@/components/visitors/add/CompanionDetailsSection";
import PrivacyCommunicationSection from "@/components/visitors/add/PrivacyCommunicationSection";
import { VisitorGuidelinesPanel } from "@/components/visitors/add/VisitorGuidelinesPanel";
import { VisitSummaryPreviewPanel } from "@/components/visitors/add/VisitSummaryPreviewPanel";

export default function AddNewVisitorPage() {
  const router = useRouter();
  const {
    form, fullName, companionFields, addCompanion, removeCompanion,
    isSubmitting, resetForm, submit,
  } = useAddVisitorForm();

  const values = form.getValues();

  const handleSave = async () => {
    const result = await submit();
    if (result?.ok) router.push("/members/visitors");
  };

  // "Add Companion" now appends a blank, directly-editable row instead
  // of opening a modal first — matches the screenshot's inline table.
  const handleAddCompanion = () => addCompanion({ name: "", relationship: "", phone: "" });

  return (
    <div className="space-y-5 pb-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Add New Visitor</h1>
          <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/members/visitors" className="hover:underline">Visitor Management</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Add New Visitor</span>
          </nav>
        </div>
        <Link href="/members/visitors">
          <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />}>
            Back to Visitor Management
          </Button>
        </Link>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <PersonalInformationSection form={form} />
            <VisitInformationSection form={form} />
            <CompanionDetailsSection
              form={form}
              companionFields={companionFields}
              onAdd={handleAddCompanion}
              onRemove={removeCompanion}
            />
            <PrivacyCommunicationSection form={form} />
          </div>

          <div className="space-y-4">
            <VisitorGuidelinesPanel />
            <VisitSummaryPreviewPanel
              fullName={fullName}
              visitDate={values.visit_date}
              purpose={values.purpose_source}
              source={values.how_did_you_hear}
              companionsCount={companionFields.length}
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between rounded-lg border border-border bg-white p-4 shadow-card">
          <Button type="button" variant="secondary" leftIcon={<RotateCcw className="h-4 w-4" />} onClick={resetForm}>
            Reset
          </Button>
          <Button type="submit" isLoading={isSubmitting} leftIcon={!isSubmitting && <Save className="h-4 w-4" />}>
            {isSubmitting ? "Saving..." : "Save Visitor"}
          </Button>
        </div>
      </form>
    </div>
  );
}
