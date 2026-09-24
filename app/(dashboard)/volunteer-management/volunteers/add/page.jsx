"use client";

import Link from "next/link";
import { ArrowLeft, X, Save } from "lucide-react";

import { useNewVolunteerForm } from "@/hooks/useNewVolunteerForm";
import { Button } from "@/components/ui/Button";
import { VolunteerPersonalInfoSection } from "@/components/volunteer-management/form/VolunteerPersonalInfoSection";
import { VolunteerMinistryRoleSection } from "@/components/volunteer-management/form/VolunteerMinistryRoleSection";
import { VolunteerSkillsInterestsSection } from "@/components/volunteer-management/form/VolunteerSkillsInterestsSection";
import { VolunteerEmergencyContactSection } from "@/components/volunteer-management/form/VolunteerEmergencyContactSection";
import { VolunteerPhotoCard, VolunteerGuidelinesCard, VolunteerNoteCard } from "@/components/volunteer-management/form/VolunteerFormSidebarCards";

export default function AddVolunteerPage() {
  const { form, setField, isSubmitting, submit, toggleListField } = useNewVolunteerForm();

  return (
    <div className="space-y-3 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Link href="/volunteer-management/dashboard" className="mb-1 flex items-center gap-1.5 text-xs font-medium text-interactive-500 hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Volunteer Management
          </Link>
          <h1 className="font-display text-2xl font-bold text-ink">Add Volunteer</h1>
          <p className="mt-1 text-sm text-ink-subtle">Add a new volunteer to serve in church ministries and activities.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/volunteer-management/dashboard">
            <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
          </Link>
          <Button type="button" isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />} onClick={submit}>
            Save Volunteer
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <div className="lg:col-span-3 flex flex-col gap-5">
          <VolunteerPersonalInfoSection form={form} setField={setField} />
          <VolunteerMinistryRoleSection form={form} setField={setField} />
          <VolunteerSkillsInterestsSection form={form} setField={setField} toggleListField={toggleListField} />
          <VolunteerEmergencyContactSection form={form} setField={setField} />
        </div>
        <div className="flex flex-col gap-5">
          <VolunteerPhotoCard photoName={form.photoName} onPhotoChange={(name) => setField("photoName", name)} />
          <VolunteerGuidelinesCard />
          <VolunteerNoteCard />
        </div>
      </div>
    </div>
  );
}
