"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNewDeceasedForm } from "@/hooks/useNewDeceasedForm";
import { PersonalInformationSection } from "@/components/cemetery-management/deceased-management/form/PersonalInformationSection";
import { ContactInformationSection } from "@/components/cemetery-management/deceased-management/form/ContactInformationSection";
import { DeceasedBurialInformationSection } from "@/components/cemetery-management/deceased-management/form/DeceasedBurialInformationSection";
import { DeceasedAdditionalInformationSection } from "@/components/cemetery-management/deceased-management/form/DeceasedAdditionalInformationSection";
import { DeceasedFormHelpCard } from "@/components/cemetery-management/deceased-management/form/DeceasedFormHelpCard";
import { InformationGuideCard } from "@/components/cemetery-management/deceased-management/form/InformationGuideCard";
import { QuickTipsCard } from "@/components/cemetery-management/deceased-management/form/QuickTipsCard";

export default function AddDeceasedPage() {
  const router = useRouter();
  const { form, setField, isSubmitting, submit } = useNewDeceasedForm();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-ink">Add Deceased</h1>
          <p className="mt-1 text-sm text-ink-subtle">Enter the details of the deceased to add a new record.</p>
        </div>
        <Button type="button" variant="secondary" onClick={() => router.back()} leftIcon={<ArrowLeft className="h-4 w-4" />}>
          Back to Deceased List
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-5">
          <PersonalInformationSection form={form} setField={setField} />
          <ContactInformationSection form={form} setField={setField} />
          <DeceasedBurialInformationSection form={form} setField={setField} />
          <DeceasedAdditionalInformationSection form={form} setField={setField} />

          <div className="flex items-center justify-between">
            <Button type="button" variant="secondary" onClick={() => router.back()}>
              Cancel
            </Button>
            <div className="flex items-center gap-3">
              <Button type="button" variant="secondary" onClick={() => submit()} isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />}>
                Save Deceased
              </Button>
              <Button
                type="button" variant="success" onClick={() => submit({ addAnother: true })} isLoading={isSubmitting}
                leftIcon={<Plus className="h-4 w-4" />}
              >
                Save &amp; Add Another
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <DeceasedFormHelpCard />
          <InformationGuideCard />
          <QuickTipsCard />
        </div>
      </div>
    </div>
  );
}
