"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { useNewMensFellowshipGroupForm } from "@/hooks/useNewMensFellowshipGroupForm";
import { Button } from "@/components/ui/Button";
import { NewMfFellowshipGroupForm } from "@/components/mens-fellowship/groups/form/NewMfFellowshipGroupForm";
import { SelectGroupLeadersPanel, GroupAvatarPanel } from "@/components/mens-fellowship/groups/form/GroupLeadersAvatarPanels";

export default function AddNewMensFellowshipGroupPage() {
  const { form, setField, addTag, removeTag, isSubmitting, submit } = useNewMensFellowshipGroupForm();

  return (
    <div className="space-y-5 pb-16">
      <Link href="/mens-fellowship/fellowship-groups" className="flex w-fit items-center gap-1.5 text-sm font-medium text-success-600 hover:underline">
        <ArrowLeft className="h-4 w-4" /> Back to Fellowship Groups
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Add New Fellowship Group</h1>
          <p className="mt-1 text-sm text-ink-subtle">Create a new men's fellowship group and set group details.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/mens-fellowship/fellowship-groups">
            <Button type="button" variant="secondary">Cancel</Button>
          </Link>
          <Button type="button" isLoading={isSubmitting} onClick={submit}>Save Group</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <NewMfFellowshipGroupForm form={form} setField={setField} onAddTag={addTag} onRemoveTag={removeTag} />
        </div>

        <div className="flex flex-col gap-5">
          <SelectGroupLeadersPanel form={form} setField={setField} />
          <GroupAvatarPanel avatarName={form.avatarName} onUpload={(name) => setField("avatarName", name)} />
        </div>
      </div>
    </div>
  );
}
