"use client";

import Link from "next/link";
import { ArrowLeft, X, Send } from "lucide-react";

import { useNewBulletinRequestForm } from "@/hooks/useNewBulletinRequestForm";
import { Button } from "@/components/ui/Button";
import { NewBulletinRequestForm } from "@/components/prayer-ministry/bulletin/form/NewBulletinRequestForm";
import { BulletinGuidelinesCard, BulletinRequestPreviewCard, BulletinNeedHelpCard } from "@/components/prayer-ministry/bulletin/form/BulletinSidebarCards";

export default function AddBulletinRequestPage() {
  const { form, setField, isSubmitting, submit, addAttachments, removeAttachment } = useNewBulletinRequestForm();

  return (
    <div className="space-y-3 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Link href="/prayer-ministry/bulletin-requests" className="mb-1 flex items-center gap-1.5 text-xs font-medium text-interactive-500 hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Bulletin Requests
          </Link>
          <h1 className="font-display text-2xl font-bold text-ink">Bulletin Request</h1>
          <p className="mt-1 text-sm text-ink-subtle">Submit a new request to publish an announcement in the church bulletin.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/prayer-ministry/bulletin-requests">
            <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
          </Link>
          <Button type="button" isLoading={isSubmitting} leftIcon={<Send className="h-4 w-4" />} onClick={submit}>
            Submit Request
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <NewBulletinRequestForm form={form} setField={setField} addAttachments={addAttachments} removeAttachment={removeAttachment} />
        </div>
        <div className="flex flex-col gap-5">
          <BulletinGuidelinesCard />
          <BulletinRequestPreviewCard title={form.title} eventDate={form.eventDate} startTime={form.startTime} location={form.location} />
          <BulletinNeedHelpCard />
        </div>
      </div>
    </div>
  );
}
