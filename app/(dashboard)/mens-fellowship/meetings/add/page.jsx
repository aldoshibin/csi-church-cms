"use client";

import Link from "next/link";
import { ArrowLeft, X, CalendarCheck2 } from "lucide-react";

import { useNewMeetingForm } from "@/hooks/useNewMeetingForm";
import { Button } from "@/components/ui/Button";
import { NewMeetingForm } from "@/components/mens-fellowship/meetings/form/NewMeetingForm";
import { AgendaBuilder } from "@/components/mens-fellowship/meetings/form/AgendaBuilder";
import { InviteMembersPanel } from "@/components/mens-fellowship/meetings/form/InviteMembersPanel";
import { MeetingSettingsPanel } from "@/components/mens-fellowship/meetings/form/MeetingSettingsPanel";
import { RemindersPanel } from "@/components/mens-fellowship/meetings/form/RemindersPanel";

export default function ScheduleNewMeetingPage() {
  const {
    form, setField, isSubmitting, submit,
    toggleInvite, addAgendaItem, removeAgendaItem,
    addReminder, updateReminder, removeReminder,
    inviteCandidates,
  } = useNewMeetingForm();

  return (
    <div className="space-y-5 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Link href="/mens-fellowship/meetings" className="mb-1 flex items-center gap-1.5 text-xs font-medium text-interactive-500 hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Meetings
          </Link>
          <h1 className="font-display text-2xl font-bold text-ink">Schedule New Meeting</h1>
          <p className="mt-1 text-sm text-ink-subtle">Fill in the details to schedule a new meeting for the men&apos;s fellowship group.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/mens-fellowship/meetings">
            <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
          </Link>
          <Button type="button" isLoading={isSubmitting} leftIcon={<CalendarCheck2 className="h-4 w-4" />} onClick={submit}>
            Schedule Meeting
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2 flex flex-col gap-5">
          <NewMeetingForm form={form} setField={setField} />
          <AgendaBuilder agenda={form.agenda} onAdd={addAgendaItem} onRemove={removeAgendaItem} />
        </div>

        <div className="flex flex-col gap-5">
          <InviteMembersPanel candidates={inviteCandidates} selectedIds={form.invitedMemberIds} onToggle={toggleInvite} />
          <MeetingSettingsPanel form={form} setField={setField} />
          <RemindersPanel reminders={form.reminders} onAdd={addReminder} onUpdate={updateReminder} onRemove={removeReminder} />
        </div>
      </div>
    </div>
  );
}
