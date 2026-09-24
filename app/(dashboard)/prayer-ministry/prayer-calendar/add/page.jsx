"use client";

import Link from "next/link";
import { ArrowLeft, X, Save } from "lucide-react";

import { useNewPrayerEventForm } from "@/hooks/useNewPrayerEventForm";
import { Button } from "@/components/ui/Button";
import { EventInformationSection } from "@/components/prayer-ministry/calendar/form/EventInformationSection";
import { DateTimeSection, RecurrenceSection } from "@/components/prayer-ministry/calendar/form/DateTimeRecurrenceSections";
import { TimeScheduleDetailsSection, AdditionalDetailsSection } from "@/components/prayer-ministry/calendar/form/ScheduleAdditionalSections";
import { NotificationVisibilitySection } from "@/components/prayer-ministry/calendar/form/NotificationVisibilitySection";

export default function AddPrayerEventPage() {
  const { form, setField, isSubmitting, submit, toggleRepeatDay } = useNewPrayerEventForm();

  return (
    <div className="space-y-3 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Add Prayer Event</h1>
          <p className="mt-1 text-sm text-ink-subtle">Create a new prayer event, schedule and assign it to a prayer area.</p>
        </div>
        <Link href="/prayer-ministry/prayer-calendar">
          <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />}>Back to Prayer Calendar</Button>
        </Link>
      </div>

      <div className="flex flex-col gap-5">
        <EventInformationSection form={form} setField={setField} />
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <DateTimeSection form={form} setField={setField} />
          <RecurrenceSection form={form} setField={setField} toggleRepeatDay={toggleRepeatDay} />
        </div>
        <TimeScheduleDetailsSection form={form} setField={setField} />
        <AdditionalDetailsSection form={form} setField={setField} />
        <NotificationVisibilitySection form={form} setField={setField} />
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <Link href="/prayer-ministry/prayer-calendar">
          <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
        </Link>
        <Button type="button" isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />} onClick={submit}>
          Save Event
        </Button>
      </div>
    </div>
  );
}
