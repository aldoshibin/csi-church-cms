"use client";

import Link from "next/link";
import { ArrowLeft, X, Save } from "lucide-react";

import { useNewPrayerGroupForm } from "@/hooks/useNewPrayerGroupForm";
import { Button } from "@/components/ui/Button";
import { GroupInformationSection } from "@/components/prayer-ministry/groups/form/GroupInformationSection";
import { MeetingDetailsSection } from "@/components/prayer-ministry/groups/form/MeetingDetailsSection";
import { LeaderInformationSection, AdditionalInformationSection } from "@/components/prayer-ministry/groups/form/LeaderAdditionalSections";
import { GroupVisibilitySection } from "@/components/prayer-ministry/groups/form/GroupVisibilitySection";

export default function AddPrayerGroupPage() {
  const { form, setField, isSubmitting, submit, toggleDay, toggleInvitedMember } = useNewPrayerGroupForm();

  return (
    <div className="space-y-3 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Add Prayer Group</h1>
          <p className="mt-1 text-sm text-ink-subtle">Create a new prayer group to strengthen our church community in prayer.</p>
        </div>
        <Link href="/prayer-ministry/prayer-groups">
          <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />}>Back to Prayer Groups</Button>
        </Link>
      </div>

      <div className="flex flex-col gap-5">
        <GroupInformationSection form={form} setField={setField} />
        <MeetingDetailsSection form={form} setField={setField} toggleDay={toggleDay} />
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <LeaderInformationSection form={form} setField={setField} />
          <AdditionalInformationSection form={form} setField={setField} />
        </div>
        <GroupVisibilitySection form={form} setField={setField} toggleInvitedMember={toggleInvitedMember} />
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <Link href="/prayer-ministry/prayer-groups">
          <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
        </Link>
        <Button type="button" isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />} onClick={submit}>
          Create Prayer Group
        </Button>
      </div>
    </div>
  );
}
