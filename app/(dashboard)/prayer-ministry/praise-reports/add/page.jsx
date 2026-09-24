"use client";

import Link from "next/link";
import { ArrowLeft, X, Send } from "lucide-react";

import { useNewPraiseReportForm } from "@/hooks/useNewPraiseReportForm";
import { Button } from "@/components/ui/Button";
import { NewPraiseReportForm } from "@/components/prayer-ministry/praise-reports/form/NewPraiseReportForm";

export default function AddPraiseReportPage() {
  const { form, setField, isSubmitting, submit, addTag, removeTag, addPhotos, removePhoto } = useNewPraiseReportForm();

  return (
    <div className="space-y-3 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Add Praise Report</h1>
          <p className="mt-1 text-sm text-ink-subtle">Share and celebrate what God has done in our lives.</p>
        </div>
        <Link href="/prayer-ministry/praise-reports">
          <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />}>Back to Praise Reports</Button>
        </Link>
      </div>

      <NewPraiseReportForm form={form} setField={setField} addTag={addTag} removeTag={removeTag} addPhotos={addPhotos} removePhoto={removePhoto} />

      <div className="flex justify-end gap-2 pt-2">
        <Link href="/prayer-ministry/praise-reports">
          <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
        </Link>
        <Button type="button" isLoading={isSubmitting} leftIcon={<Send className="h-4 w-4" />} onClick={submit}>
          Submit Praise Report
        </Button>
      </div>
    </div>
  );
}
