"use client";

import Link from "next/link";
import { ArrowLeft, X, Save } from "lucide-react";

import { useNewSongForm } from "@/hooks/useNewSongForm";
import { Button } from "@/components/ui/Button";
import { NewSongForm } from "@/components/choir-worship/songs/form/NewSongForm";

export default function AddNewSongPage() {
  const { form, setField, isSubmitting, submit, addTag, removeTag, addAttachments, removeAttachment } = useNewSongForm();

  return (
    <div className="space-y-3 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Add New Song</h1>
          <p className="mt-1 text-sm text-ink-subtle">Add a new song to the church song library.</p>
        </div>
        <Link href="/choir-worship/songs-setlist">
          <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />}>Back to Songs &amp; Setlist</Button>
        </Link>
      </div>

      <NewSongForm form={form} setField={setField} addTag={addTag} removeTag={removeTag} addAttachments={addAttachments} removeAttachment={removeAttachment} />

      <div className="flex justify-end gap-2 pt-2">
        <Link href="/choir-worship/songs-setlist">
          <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
        </Link>
        <Button type="button" isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />} onClick={submit}>
          Save Song
        </Button>
      </div>
    </div>
  );
}
