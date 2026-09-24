"use client";

import Link from "next/link";
import { X, Save } from "lucide-react";

import { useNewYouthGroupForm } from "@/hooks/useNewYouthGroupForm";
import { Button } from "@/components/ui/Button";
import { NewYouthGroupForm } from "@/components/youth-ministry/groups/form/NewYouthGroupForm";
import { GroupImagePanel } from "@/components/youth-ministry/groups/form/GroupImagePanel";
import { AssignedLeadersPanel } from "@/components/youth-ministry/groups/form/AssignedLeadersPanel";
import { GroupQuickTipsPanel } from "@/components/youth-ministry/groups/form/GroupQuickTipsPanel";

export default function AddNewYouthGroupPage() {
  const { form, setField, isSubmitting, submit } = useNewYouthGroupForm();

  return (
    <div className="space-y-5 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <nav className="flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/youth-ministry/youth-groups" className="hover:underline">Youth Groups</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Add New Youth Group</span>
          </nav>
          <h1 className="mt-1 font-display text-2xl font-bold text-ink">Add New Youth Group</h1>
          <p className="mt-1 text-sm text-ink-subtle">Create a new youth group to organize and engage the youth in ministry activities.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/youth-ministry/youth-groups">
            <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
          </Link>
          <Button type="button" isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />} onClick={submit}>
            Save Youth Group
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <NewYouthGroupForm form={form} setField={setField} />
        </div>

        <div className="flex flex-col gap-5">
          <GroupImagePanel imageName={form.imageName} onUpload={(name) => setField("imageName", name)} />
          <AssignedLeadersPanel primaryLeader={form.primaryLeader} coLeader={form.coLeader} />
          <GroupQuickTipsPanel />
        </div>
      </div>
    </div>
  );
}
