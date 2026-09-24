"use client";

import Link from "next/link";
import { X, Save } from "lucide-react";

import { useNewVolunteerForm } from "@/hooks/useNewVolunteerForm";
import { Button } from "@/components/ui/Button";
import { NewVolunteerForm } from "@/components/youth-ministry/volunteers/form/NewVolunteerForm";
import { MinistryInformationPanel } from "@/components/youth-ministry/volunteers/form/MinistryInformationPanel";
import { AdditionalInformationPanel } from "@/components/youth-ministry/volunteers/form/AdditionalInformationPanel";

export default function AddNewVolunteerPage() {
  const { form, setField, isSubmitting, submit } = useNewVolunteerForm();

  return (
    <div className="space-y-5 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <nav className="flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/youth-ministry/volunteers" className="hover:underline">Volunteers</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Add New Volunteer</span>
          </nav>
          <h1 className="mt-1 font-display text-2xl font-bold text-ink">Add New Volunteer</h1>
          <p className="mt-1 text-sm text-ink-subtle">Add a new volunteer to engage in ministries and events.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/youth-ministry/volunteers">
            <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
          </Link>
          <Button type="button" isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />} onClick={submit}>
            Save Volunteer
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <NewVolunteerForm form={form} setField={setField} />
        </div>

        <div className="flex flex-col gap-5">
          <MinistryInformationPanel form={form} setField={setField} />
          <AdditionalInformationPanel form={form} setField={setField} />
        </div>
      </div>
    </div>
  );
}
