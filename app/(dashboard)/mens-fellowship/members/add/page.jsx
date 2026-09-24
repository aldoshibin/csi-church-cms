"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { useNewMensFellowshipMemberForm } from "@/hooks/useNewMensFellowshipMemberForm";
import { Button } from "@/components/ui/Button";
import { NewMemberForm } from "@/components/mens-fellowship/members/form/NewMemberForm";
import { MemberPhotoPanel } from "@/components/mens-fellowship/members/form/MemberPhotoPanel";
import { MembershipStatusPanel } from "@/components/mens-fellowship/members/form/MembershipStatusPanel";
import { MemberTipsPanel } from "@/components/mens-fellowship/members/form/MemberTipsPanel";

export default function AddNewMensFellowshipMemberPage() {
  const { form, setField, memberId, isSubmitting, submit } = useNewMensFellowshipMemberForm();

  return (
    <div className="space-y-5 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Link href="/mens-fellowship/members" className="mb-1 flex items-center gap-1.5 text-xs font-medium text-interactive-500 hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Members
          </Link>
          <h1 className="font-display text-2xl font-bold text-ink">Add New Member</h1>
          <p className="mt-1 text-sm text-ink-subtle">Add a new member to the men&apos;s fellowship group.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <NewMemberForm form={form} setField={setField} memberId={memberId} isSubmitting={isSubmitting} onSubmit={submit} />
        </div>

        <div className="flex flex-col gap-5">
          <MemberPhotoPanel photoName={form.photoName} onPhotoChange={(name) => setField("photoName", name)} />
          <MembershipStatusPanel status={form.status} onStatusChange={(v) => setField("status", v)} />
          <MemberTipsPanel />
        </div>
      </div>
    </div>
  );
}
