"use client";

import Link from "next/link";
import { ArrowLeft, X, Save } from "lucide-react";

import { useNewMinistryForm } from "@/hooks/useNewMinistryForm";
import { Button } from "@/components/ui/Button";
import { MinistryInformationSection } from "@/components/volunteer-management/ministries/form/MinistryInformationSection";
import { MinistryDetailsSection } from "@/components/volunteer-management/ministries/form/MinistryDetailsSection";
import { MinistrySettingsSection } from "@/components/volunteer-management/ministries/form/MinistrySettingsSection";
import { MinistryGuidelinesCard, MinistryCategoryExamplesCard } from "@/components/volunteer-management/ministries/form/MinistryFormSidebarCards";

export default function AddMinistryPage() {
  const { form, setField, toggleField, isSubmitting, submit } = useNewMinistryForm();

  return (
    <div className="space-y-3 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Link href="/volunteer-management/ministries-teams" className="mb-1 flex items-center gap-1.5 text-xs font-medium text-interactive-500 hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Ministries &amp; Teams
          </Link>
          <h1 className="font-display text-2xl font-bold text-ink">Add Ministry</h1>
          <p className="mt-1 text-sm text-ink-subtle">Create a new ministry to organize and manage your church activities.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/volunteer-management/ministries-teams">
            <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
          </Link>
          <Button type="button" isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />} onClick={submit}>
            Save Ministry
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <div className="lg:col-span-3 flex flex-col gap-5">
          <MinistryInformationSection form={form} setField={setField} />
          <MinistryDetailsSection form={form} setField={setField} />
          <MinistrySettingsSection form={form} toggleField={toggleField} />
        </div>
        <div className="flex flex-col gap-5">
          <MinistryGuidelinesCard />
          <MinistryCategoryExamplesCard />
        </div>
      </div>
    </div>
  );
}
