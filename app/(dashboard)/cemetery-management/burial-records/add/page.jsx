"use client";

import { useRouter } from "next/navigation";
import { Save, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNewBurialRecordForm } from "@/hooks/useNewBurialRecordForm";
import { DeceasedInformationSection } from "@/components/cemetery-management/burial-records/form/DeceasedInformationSection";
import { BurialInformationSection } from "@/components/cemetery-management/burial-records/form/BurialInformationSection";
import { FamilyContactSection } from "@/components/cemetery-management/burial-records/form/FamilyContactSection";
import { BurialFormTipsCard } from "@/components/cemetery-management/burial-records/form/BurialFormTipsCard";
import { BurialFormHelpCard } from "@/components/cemetery-management/burial-records/form/BurialFormHelpCard";

export default function AddBurialRecordPage() {
  const router = useRouter();
  const { form, setField, isSubmitting, submit } = useNewBurialRecordForm();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-ink">Add Burial Record</h1>
        <p className="mt-1 text-sm text-ink-subtle">Enter the details of the deceased and burial information.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-5">
          <DeceasedInformationSection form={form} setField={setField} />
          <BurialInformationSection form={form} setField={setField} />
          <FamilyContactSection form={form} setField={setField} />

          <div className="flex items-center justify-between">
            <Button type="button" variant="secondary" onClick={() => router.back()}>
              Cancel
            </Button>
            <div className="flex items-center gap-3">
              <Button
                type="button" variant="outline" onClick={() => submit({ addAnother: true })} isLoading={isSubmitting}
                leftIcon={<Plus className="h-4 w-4" />}
              >
                Save &amp; Add Another
              </Button>
              <Button type="button" variant="success" onClick={() => submit()} isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />}>
                Save Burial Record
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <BurialFormHelpCard />
          <BurialFormTipsCard />
        </div>
      </div>
    </div>
  );
}
