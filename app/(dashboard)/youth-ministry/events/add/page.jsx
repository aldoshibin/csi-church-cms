"use client";

import Link from "next/link";
import { X, Save } from "lucide-react";

import { useNewYmEventForm } from "@/hooks/useNewYmEventForm";
import { Button } from "@/components/ui/Button";
import { NewYmEventForm } from "@/components/youth-ministry/events/form/NewYmEventForm";
import { YmEventImagePanel } from "@/components/youth-ministry/events/form/YmEventImagePanel";
import { YmQuickTipsPanel } from "@/components/youth-ministry/events/form/YmQuickTipsPanel";
import { YmEventCategoryPanel } from "@/components/youth-ministry/events/form/YmEventCategoryPanel";
import { YmEventVisibilityPanel } from "@/components/youth-ministry/events/form/YmEventVisibilityPanel";

export default function AddNewYmEventPage() {
  const { form, setField, isSubmitting, submit } = useNewYmEventForm();

  return (
    <div className="space-y-5 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <nav className="flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/youth-ministry/events" className="hover:underline">Events</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Add New Event</span>
          </nav>
          <h1 className="mt-1 font-display text-2xl font-bold text-ink">Add New Event</h1>
          <p className="mt-1 text-sm text-ink-subtle">Create a new event to inform, engage and bring people together for a meaningful experience.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/youth-ministry/events">
            <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
          </Link>
          <Button type="button" isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />} onClick={submit}>
            Save Event
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <NewYmEventForm form={form} setField={setField} />
        </div>

        <div className="flex flex-col gap-5">
          <YmEventImagePanel imageName={form.imageName} onUpload={(name) => setField("imageName", name)} />
          <YmQuickTipsPanel />
          <YmEventCategoryPanel value={form.eventCategory} onChange={(v) => setField("eventCategory", v)} />
          <YmEventVisibilityPanel value={form.visibility} onChange={(v) => setField("visibility", v)} />
        </div>
      </div>
    </div>
  );
}
