"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { useNewFellowshipEventForm } from "@/hooks/useNewFellowshipEventForm";
import { Button } from "@/components/ui/Button";
import { NewFellowshipEventForm } from "@/components/womens-fellowship/events/form/NewFellowshipEventForm";
import { EventTypePanel, EventReminderPanel, EventPreviewPanel } from "@/components/womens-fellowship/events/form/EventFormSidePanels";

export default function AddNewFellowshipEventPage() {
  const { form, setField, addDocument, isSubmitting, submit } = useNewFellowshipEventForm();

  return (
    <div className="space-y-5 pb-16">
      <Link href="/womens-fellowship/events" className="flex w-fit items-center gap-1.5 text-sm font-medium text-success-600 hover:underline">
        <ArrowLeft className="h-4 w-4" /> Back to Events
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Add New Event</h1>
          <p className="mt-1 text-sm text-ink-subtle">Create a new event for the women's fellowship.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/womens-fellowship/events">
            <Button type="button" variant="secondary">Cancel</Button>
          </Link>
          <Button type="button" isLoading={isSubmitting} onClick={submit}>Save Event</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <NewFellowshipEventForm form={form} setField={setField} onAddDocument={addDocument} />
        </div>

        <div className="flex flex-col gap-5">
          <EventTypePanel value={form.eventType} onChange={(v) => setField("eventType", v)} />
          <EventReminderPanel form={form} setField={setField} />
          <EventPreviewPanel form={form} />
        </div>
      </div>
    </div>
  );
}
