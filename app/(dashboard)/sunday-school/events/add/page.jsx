"use client";

import Link from "next/link";
import { X, Save } from "lucide-react";

import { useNewEventForm } from "@/hooks/useNewEventForm";
import { Button } from "@/components/ui/Button";
import { NewEventForm } from "@/components/sunday-school/events/form/NewEventForm";
import { EventImagePanel } from "@/components/sunday-school/events/form/EventImagePanel";
import { TargetAudiencePanel } from "@/components/sunday-school/events/form/TargetAudiencePanel";
import { AdditionalOptionsPanel } from "@/components/sunday-school/events/form/AdditionalOptionsPanel";

export default function AddNewEventPage() {
  const { form, setField, toggleAudience, isSubmitting, submit } = useNewEventForm();

  return (
    <div className="space-y-5 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <nav className="flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/sunday-school/events" className="hover:underline">Events</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Add New Event</span>
          </nav>
          <h1 className="mt-1 font-display text-2xl font-bold text-ink">Add New Event</h1>
          <p className="mt-1 text-sm text-ink-subtle">Create and manage church and ministry events.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/sunday-school/events">
            <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
          </Link>
          <Button type="button" isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />} onClick={submit}>
            Save Event
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <NewEventForm form={form} setField={setField} />
        </div>

        <div className="flex flex-col gap-5">
          <EventImagePanel imageName={form.imageName} onUpload={(name) => setField("imageName", name)} />
          <TargetAudiencePanel
            selected={form.targetAudience} onToggle={toggleAudience}
            customAudience={form.customAudience} onCustomChange={(v) => setField("customAudience", v)}
          />
          <AdditionalOptionsPanel form={form} setField={setField} />
        </div>
      </div>
    </div>
  );
}
