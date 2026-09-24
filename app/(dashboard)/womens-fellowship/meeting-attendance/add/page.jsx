"use client";

import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

import { useNewMeetingForm } from "@/hooks/useNewMeetingForm";
import { Button } from "@/components/ui/Button";
import { NewMeetingForm } from "@/components/womens-fellowship/meeting-attendance/form/NewMeetingForm";
import { MeetingOptionsPanel, MeetingQuickTipsPanel } from "@/components/womens-fellowship/meeting-attendance/form/MeetingFormSidePanels";

export default function AddNewMeetingPage() {
  const { form, setField, isSubmitting, submit } = useNewMeetingForm();

  return (
    <div className="space-y-5 pb-16">
      <Link href="/womens-fellowship/meeting-attendance" className="flex w-fit items-center gap-1.5 text-sm font-medium text-success-600 hover:underline">
        <ArrowLeft className="h-4 w-4" />
      </Link>

      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Add New Meeting</h1>
        <p className="mt-1 text-sm text-ink-subtle">Create a new meeting and track attendance and participation.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <NewMeetingForm form={form} setField={setField} />
          <div className="mt-5 flex items-center justify-end gap-3">
            <Link href="/womens-fellowship/meeting-attendance">
              <Button type="button" variant="secondary">Cancel</Button>
            </Link>
            <Button type="button" isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />} onClick={submit}>
              Save Meeting
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <MeetingOptionsPanel />
          <MeetingQuickTipsPanel />
        </div>
      </div>
    </div>
  );
}
