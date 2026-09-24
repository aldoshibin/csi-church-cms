"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { useNewFellowshipGroupForm } from "@/hooks/useNewFellowshipGroupForm";
import { Button } from "@/components/ui/Button";
import { NewFellowshipGroupForm } from "@/components/womens-fellowship/groups/form/NewFellowshipGroupForm";
import { GroupMembersPanel } from "@/components/womens-fellowship/groups/form/GroupMembersPanel";
import { GroupSummaryPanel } from "@/components/womens-fellowship/groups/form/GroupSummaryPanel";

export default function AddNewFellowshipGroupPage() {
  const { form, setField, members, addMember, removeMember, isSubmitting, submit } = useNewFellowshipGroupForm();

  return (
    <div className="space-y-5 pb-16">
      <Link href="/womens-fellowship/fellowship-groups" className="flex w-fit items-center gap-1.5 text-sm font-medium text-success-600 hover:underline">
        <ArrowLeft className="h-4 w-4" /> Fellowship Groups
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Add New Fellowship Group</h1>
          <p className="mt-1 text-sm text-ink-subtle">Create a new women's fellowship group and set up its details.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/womens-fellowship/fellowship-groups">
            <Button type="button" variant="secondary">Cancel</Button>
          </Link>
          <Button type="button" isLoading={isSubmitting} onClick={submit}>Save Group</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <NewFellowshipGroupForm form={form} setField={setField} />
        </div>

        <div className="flex flex-col gap-5">
          <GroupMembersPanel members={members} onAdd={addMember} onRemove={removeMember} />
          <GroupSummaryPanel form={form} memberCount={members.length} />
        </div>
      </div>
    </div>
  );
}
