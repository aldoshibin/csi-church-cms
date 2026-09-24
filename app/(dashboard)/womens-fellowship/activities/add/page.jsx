"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { useNewFellowshipActivityForm } from "@/hooks/useNewFellowshipActivityForm";
import { Button } from "@/components/ui/Button";
import { NewFellowshipActivityForm } from "@/components/womens-fellowship/activities/form/NewFellowshipActivityForm";
import { ActivityTypePanel, ActivityPreviewPanel, ActivityTipsPanel } from "@/components/womens-fellowship/activities/form/ActivityFormSidePanels";

export default function AddNewFellowshipActivityPage() {
  const { form, setField, addDocument, isSubmitting, submit } = useNewFellowshipActivityForm();

  return (
    <div className="space-y-5 pb-16">
      <Link href="/womens-fellowship/activities" className="flex w-fit items-center gap-1.5 text-sm font-medium text-success-600 hover:underline">
        <ArrowLeft className="h-4 w-4" /> Back to Activities
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Add New Activity</h1>
          <p className="mt-1 text-sm text-ink-subtle">Create a new activity for the women's fellowship.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/womens-fellowship/activities">
            <Button type="button" variant="secondary">Cancel</Button>
          </Link>
          <Button type="button" isLoading={isSubmitting} onClick={submit}>Save Activity</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <NewFellowshipActivityForm form={form} setField={setField} onAddDocument={addDocument} />
        </div>

        <div className="flex flex-col gap-5">
          <ActivityTypePanel value={form.activityType} onChange={(v) => setField("activityType", v)} />
          <ActivityPreviewPanel form={form} />
          <ActivityTipsPanel />
        </div>
      </div>
    </div>
  );
}
