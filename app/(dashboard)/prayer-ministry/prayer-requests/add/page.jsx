"use client";

import Link from "next/link";
import { ArrowLeft, X, Send } from "lucide-react";

import { useNewPrayerRequestForm } from "@/hooks/useNewPrayerRequestForm";
import { Button } from "@/components/ui/Button";
import { NewPrayerRequestForm } from "@/components/prayer-ministry/requests/form/NewPrayerRequestForm";

export default function AddPrayerRequestPage() {
  const { form, setField, isSubmitting, submit, addTag, removeTag, addAttachments, removeAttachment } = useNewPrayerRequestForm();

  return (
    <div className="space-y-3 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Add Prayer Request</h1>
          <p className="mt-1 text-sm text-ink-subtle">Submit a new prayer request and allow others to join you in prayer.</p>
        </div>
        <Link href="/prayer-ministry/prayer-requests">
          <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />}>Back to Prayer Requests</Button>
        </Link>
      </div>

      <NewPrayerRequestForm form={form} setField={setField} addTag={addTag} removeTag={removeTag} addAttachments={addAttachments} removeAttachment={removeAttachment} />

      <div className="flex justify-end gap-2 pt-2">
        <Link href="/prayer-ministry/prayer-requests">
          <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
        </Link>
        <Button type="button" isLoading={isSubmitting} leftIcon={<Send className="h-4 w-4" />} onClick={submit}>
          Submit Request
        </Button>
      </div>
    </div>
  );
}
