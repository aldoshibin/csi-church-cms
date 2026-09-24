"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { useNewMemberForm } from "@/hooks/useNewMemberForm";
import { Button } from "@/components/ui/Button";
import { NewMemberForm } from "@/components/womens-fellowship/members/form/NewMemberForm";
import { AssignToGroupsPanel } from "@/components/womens-fellowship/members/form/AssignToGroupsPanel";
import { MemberSummaryPanel } from "@/components/womens-fellowship/members/form/MemberSummaryPanel";

export default function AddNewMemberPage() {
  const { form, setField, age, toggleGroup, setPrimaryGroup, isSubmitting, submit } = useNewMemberForm();

  return (
    <div className="space-y-5 pb-16">
      <Link href="/womens-fellowship/members" className="flex w-fit items-center gap-1.5 text-sm font-medium text-success-600 hover:underline">
        <ArrowLeft className="h-4 w-4" /> Members
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Add New Member</h1>
          <p className="mt-1 text-sm text-ink-subtle">Add a new member to the women's fellowship.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/womens-fellowship/members">
            <Button type="button" variant="secondary">Cancel</Button>
          </Link>
          <Button type="button" isLoading={isSubmitting} onClick={submit}>Save Member</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <NewMemberForm form={form} setField={setField} age={age} />
        </div>

        <div className="flex flex-col gap-5">
          <AssignToGroupsPanel
            assignedGroups={form.assignedGroups} primaryGroup={form.primaryGroup}
            onToggle={toggleGroup} onSetPrimary={setPrimaryGroup}
          />
          <MemberSummaryPanel form={form} />
        </div>
      </div>
    </div>
  );
}
