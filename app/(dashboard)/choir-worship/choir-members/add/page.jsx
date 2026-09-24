"use client";

import Link from "next/link";
import { ArrowLeft, ChevronRight, Save } from "lucide-react";

import { useNewChoirMemberForm } from "@/hooks/useNewChoirMemberForm";
import { Button } from "@/components/ui/Button";
import { NewChoirMemberForm } from "@/components/choir-worship/members/form/NewChoirMemberForm";
import { ChoirMemberInformationPanel } from "@/components/choir-worship/members/form/ChoirMemberInformationPanel";

function Breadcrumb() {
  return (
    <div className="flex items-center gap-1.5 text-sm text-success-600">
      <Link href="/choir-worship" className="hover:underline">Choir &amp; Worship Team</Link>
      <ChevronRight className="h-3.5 w-3.5 text-ink-subtle" />
      <Link href="/choir-worship/choir-members" className="hover:underline">Choir Members</Link>
      <ChevronRight className="h-3.5 w-3.5 text-ink-subtle" />
      <span className="text-ink-subtle">Add New Member</span>
    </div>
  );
}

export default function AddNewChoirMemberPage() {
  const { form, setField, memberId, isSubmitting, submit } = useNewChoirMemberForm();

  return (
    <div className="space-y-3 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <Link href="/choir-worship/choir-members" className="flex h-8 w-8 items-center justify-center rounded-md text-interactive-600 hover:bg-surface-canvas" aria-label="Back">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="font-display text-2xl font-bold text-ink">Add New Member</h1>
          </div>
          <div className="ml-10 mt-1"><Breadcrumb /></div>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/choir-worship/choir-members">
            <Button type="button" variant="secondary">Cancel</Button>
          </Link>
          <Button type="button" isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />} onClick={submit}>
            Save Member
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <NewChoirMemberForm form={form} setField={setField} memberId={memberId} />
        </div>
        <div className="flex flex-col gap-5">
          <ChoirMemberInformationPanel />
        </div>
      </div>
    </div>
  );
}
