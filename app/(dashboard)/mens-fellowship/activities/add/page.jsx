"use client";

import Link from "next/link";
import { ArrowLeft, X, Save } from "lucide-react";

import { useNewActivityForm } from "@/hooks/useNewActivityForm";
import { Button } from "@/components/ui/Button";
import { NewActivityForm } from "@/components/mens-fellowship/activities/form/NewActivityForm";
import { ActivityAgendaBuilder } from "@/components/mens-fellowship/activities/form/ActivityAgendaBuilder";
import { ActivityAttachmentsUpload } from "@/components/mens-fellowship/activities/form/ActivityAttachmentsUpload";
import { ActivityIconColorPanel } from "@/components/mens-fellowship/activities/form/ActivityIconColorPanel";
import { ActivityRemindersPanel } from "@/components/mens-fellowship/activities/form/ActivityRemindersPanel";
import { ActivityStatusPanel } from "@/components/mens-fellowship/activities/form/ActivityStatusPanel";

export default function AddNewActivityPage() {
  const {
    form, setField, isSubmitting, submit,
    addAgendaItem, removeAgendaItem,
    addAttachments, removeAttachment,
    addReminder, updateReminder, removeReminder,
  } = useNewActivityForm();

  return (
    <div className="space-y-5 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Link href="/mens-fellowship/activities" className="mb-1 flex items-center gap-1.5 text-xs font-medium text-interactive-500 hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Activities
          </Link>
          <h1 className="font-display text-2xl font-bold text-ink">Add New Activity</h1>
          <p className="mt-1 text-sm text-ink-subtle">Fill in the details to create a new activity for the men&apos;s fellowship group.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/mens-fellowship/activities">
            <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
          </Link>
          <Button type="button" isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />} onClick={submit}>
            Save Activity
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2 flex flex-col gap-5">
          <NewActivityForm form={form} setField={setField} />
          <ActivityAgendaBuilder agenda={form.agenda} onAdd={addAgendaItem} onRemove={removeAgendaItem} />
          <ActivityAttachmentsUpload attachments={form.attachments} onAdd={addAttachments} onRemove={removeAttachment} />
        </div>

        <div className="flex flex-col gap-5">
          <ActivityIconColorPanel
            icon={form.icon} color={form.color}
            onIconChange={(v) => setField("icon", v)} onColorChange={(v) => setField("color", v)}
          />
          <ActivityRemindersPanel reminders={form.reminders} onAdd={addReminder} onUpdate={updateReminder} onRemove={removeReminder} />
          <ActivityStatusPanel
            status={form.status} visibility={form.visibility}
            onStatusChange={(v) => setField("status", v)} onVisibilityChange={(v) => setField("visibility", v)}
          />
        </div>
      </div>
    </div>
  );
}
