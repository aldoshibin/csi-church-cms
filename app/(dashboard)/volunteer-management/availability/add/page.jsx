"use client";

import Link from "next/link";
import { ArrowLeft, X, Save } from "lucide-react";

import { useNewAvailabilityForm } from "@/hooks/useNewAvailabilityForm";
import { Button } from "@/components/ui/Button";
import { VolunteerInformationSection } from "@/components/volunteer-management/availability/form/VolunteerInformationSection";
import { AvailabilityScheduleSection } from "@/components/volunteer-management/availability/form/AvailabilityScheduleSection";
import { AvailabilityGuidelinesCard, QuickPresetsCard, CurrentAvailabilityCard } from "@/components/volunteer-management/availability/form/AvailabilityFormSidebarCards";

export default function AddAvailabilityPage() {
  const { form, setField, toggleSlot, applyPreset, isSubmitting, submit } = useNewAvailabilityForm();

  return (
    <div className="space-y-3 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Link href="/volunteer-management/availability" className="mb-1 flex items-center gap-1.5 text-xs font-medium text-interactive-500 hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Availability
          </Link>
          <h1 className="font-display text-2xl font-bold text-ink">Add Availability</h1>
          <p className="mt-1 text-sm text-ink-subtle">Add your availability for services, events, or ministry assignments.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/volunteer-management/availability">
            <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
          </Link>
          <Button type="button" isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />} onClick={submit}>
            Save Availability
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <div className="lg:col-span-3 flex flex-col gap-5">
          <VolunteerInformationSection form={form} setField={setField} />
          <AvailabilityScheduleSection form={form} setField={setField} toggleSlot={toggleSlot} />
        </div>
        <div className="flex flex-col gap-5">
          <AvailabilityGuidelinesCard />
          <QuickPresetsCard onApply={applyPreset} />
          <CurrentAvailabilityCard />
        </div>
      </div>
    </div>
  );
}
