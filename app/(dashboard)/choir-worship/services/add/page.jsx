"use client";

import Link from "next/link";
import { ArrowLeft, X, Save } from "lucide-react";

import { useNewServiceForm } from "@/hooks/useNewServiceForm";
import { Button } from "@/components/ui/Button";
import { NewServiceForm } from "@/components/choir-worship/services/form/NewServiceForm";

export default function AddServicePage() {
  const { form, setField, isSubmitting, submit, addAttachments, removeAttachment } = useNewServiceForm();

  return (
    <div className="space-y-3 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Add Service</h1>
          <p className="mt-1 text-sm text-ink-subtle">Create a new service and add all the necessary details.</p>
        </div>
        <Link href="/choir-worship/services">
          <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />}>Back to Services</Button>
        </Link>
      </div>

      <NewServiceForm form={form} setField={setField} addAttachments={addAttachments} removeAttachment={removeAttachment} />

      <div className="flex justify-end gap-2 pt-2">
        <Link href="/choir-worship/services">
          <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
        </Link>
        <Button type="button" isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />} onClick={submit}>
          Save Service
        </Button>
      </div>
    </div>
  );
}
