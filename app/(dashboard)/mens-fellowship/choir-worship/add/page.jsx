"use client";

import { Suspense } from "react";
import Link from "next/link";
import { ChevronRight, Save } from "lucide-react";

import { useNewChoirWorshipItemForm } from "@/hooks/useNewChoirWorshipItemForm";
import { Button } from "@/components/ui/Button";
import { CwNewItemForm } from "@/components/choir-worship/form/CwNewItemForm";
import { CwAttachmentsUpload } from "@/components/choir-worship/form/CwAttachmentsUpload";
import { CwInformationPanel } from "@/components/choir-worship/form/CwInformationPanel";

function Breadcrumb() {
  return (
    <div className="flex items-center gap-1.5 text-sm text-success-600">
      <Link href="/choir-worship" className="hover:underline">Choir &amp; Worship Team</Link>
      <ChevronRight className="h-3.5 w-3.5 text-ink-subtle" />
      <Link href="/choir-worship" className="hover:underline">Dashboard</Link>
      <ChevronRight className="h-3.5 w-3.5 text-ink-subtle" />
      <span className="text-ink-subtle">Add New</span>
    </div>
  );
}

function AddNewItemContent() {
  const { form, setField, isSubmitting, submit, addAttachments, removeAttachment } = useNewChoirWorshipItemForm();

  return (
    <div className="space-y-3 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Add New</h1>
          <div className="mt-1"><Breadcrumb /></div>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/choir-worship">
            <Button type="button" variant="secondary">Cancel</Button>
          </Link>
          <Button type="button" isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />} onClick={submit}>
            Save
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2 flex flex-col gap-5">
          <CwNewItemForm form={form} setField={setField} />
          <CwAttachmentsUpload attachments={form.attachments} onAdd={addAttachments} onRemove={removeAttachment} />
        </div>
        <div className="flex flex-col gap-5">
          <CwInformationPanel />
        </div>
      </div>
    </div>
  );
}

export default function AddNewChoirWorshipItemPage() {
  return (
    <Suspense fallback={<div className="py-12 text-center text-sm text-ink-subtle">Loading…</div>}>
      <AddNewItemContent />
    </Suspense>
  );
}
