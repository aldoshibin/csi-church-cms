"use client";

import Link from "next/link";
import { ArrowLeft, X, Save } from "lucide-react";

import { useNewIntercessorForm } from "@/hooks/useNewIntercessorForm";
import { Button } from "@/components/ui/Button";
import { IntercessorPersonalInfoSection } from "@/components/prayer-ministry/intercessors/form/IntercessorPersonalInfoSection";
import { IntercessorMinistryInfoSection, IntercessorAvailabilitySection } from "@/components/prayer-ministry/intercessors/form/IntercessorMinistryAvailabilitySections";
import { IntercessorPrayerAreasSection, IntercessorPrayerPreferencesSection } from "@/components/prayer-ministry/intercessors/form/IntercessorPrayerSections";
import { IntercessorAdditionalInfoSection } from "@/components/prayer-ministry/intercessors/form/IntercessorAdditionalInfoSection";

export default function AddIntercessorPage() {
  const { form, setField, isSubmitting, submit, toggleListField } = useNewIntercessorForm();

  return (
    <div className="space-y-3 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Add Intercessor</h1>
          <p className="mt-1 text-sm text-ink-subtle">Add a new intercessor who faithfully prays for our church and its needs.</p>
        </div>
        <Link href="/prayer-ministry/intercessors">
          <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />}>Back to Intercessors</Button>
        </Link>
      </div>

      <div className="flex flex-col gap-5">
        <IntercessorPersonalInfoSection form={form} setField={setField} />
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <IntercessorMinistryInfoSection form={form} setField={setField} />
          <IntercessorAvailabilitySection form={form} setField={setField} toggleListField={toggleListField} />
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <IntercessorPrayerAreasSection form={form} toggleListField={toggleListField} />
          <IntercessorPrayerPreferencesSection form={form} setField={setField} />
        </div>
        <IntercessorAdditionalInfoSection form={form} setField={setField} />
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <Link href="/prayer-ministry/intercessors">
          <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
        </Link>
        <Button type="button" isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />} onClick={submit}>
          Save Intercessor
        </Button>
      </div>
    </div>
  );
}
