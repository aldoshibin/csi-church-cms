"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNewPlotForm } from "@/hooks/useNewPlotForm";
import { PlotInformationSection } from "@/components/cemetery-management/plots-management/form/PlotInformationSection";
import { LocationInformationSection } from "@/components/cemetery-management/plots-management/form/LocationInformationSection";
import { AdditionalInformationSection } from "@/components/cemetery-management/plots-management/form/AdditionalInformationSection";
import { PlotFormHelpCard } from "@/components/cemetery-management/plots-management/form/PlotFormHelpCard";
import { PlotTypeGuideCard } from "@/components/cemetery-management/plots-management/form/PlotTypeGuideCard";

export default function AddNewPlotPage() {
  const router = useRouter();
  const { form, setField, isSubmitting, submit } = useNewPlotForm();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-ink">Add New Plot</h1>
          <p className="mt-1 text-sm text-ink-subtle">Enter the details to create a new cemetery plot.</p>
        </div>
        <Button type="button" variant="secondary" onClick={() => router.back()} leftIcon={<ArrowLeft className="h-4 w-4" />}>
          Back to Plots
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-5">
          <PlotInformationSection form={form} setField={setField} />
          <LocationInformationSection form={form} setField={setField} />
          <AdditionalInformationSection />

          <div className="flex items-center justify-between">
            <Button type="button" variant="secondary" onClick={() => router.back()}>
              Cancel
            </Button>
            <div className="flex items-center gap-3">
              <Button type="button" variant="success" onClick={() => submit()} isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />}>
                Save Plot
              </Button>
              <Button
                type="button" variant="outline" onClick={() => submit({ addAnother: true })} isLoading={isSubmitting}
                leftIcon={<Plus className="h-4 w-4" />}
              >
                Save &amp; Add Another
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <PlotFormHelpCard />
          <PlotTypeGuideCard />
        </div>
      </div>
    </div>
  );
}
