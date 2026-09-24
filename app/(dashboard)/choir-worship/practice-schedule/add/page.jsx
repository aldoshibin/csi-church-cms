"use client";

import Link from "next/link";
import { ArrowLeft, ChevronRight, CalendarCheck2 } from "lucide-react";

import { useNewPracticeScheduleForm } from "@/hooks/useNewPracticeScheduleForm";
import { Button } from "@/components/ui/Button";
import { NewPracticeScheduleForm } from "@/components/choir-worship/practice-schedule/form/NewPracticeScheduleForm";
import { AssignMembersPanel } from "@/components/choir-worship/practice-schedule/form/AssignMembersPanel";
import { PsUpcomingPracticesCard } from "@/components/choir-worship/practice-schedule/PsUpcomingPracticesCard";
import { TeamMembersSidebarCard } from "@/components/choir-worship/practice-schedule/TeamMembersSidebarCard";
import { PS_UPCOMING_PRACTICES_MOCK, PS_TEAM_MEMBERS_SIDEBAR_MOCK } from "@/lib/mock/practiceScheduleMockData";

export default function AddToSchedulePage() {
  const { form, setField, isSubmitting, submit, toggleMember, removeMember, clearAllMembers } = useNewPracticeScheduleForm();

  return (
    <div className="space-y-3 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <Link href="/choir-worship/practice-schedule" className="flex h-8 w-8 items-center justify-center rounded-md text-interactive-600 hover:bg-surface-canvas" aria-label="Back">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="font-display text-2xl font-bold text-ink">Add to Schedule</h1>
          </div>
          <div className="ml-10 mt-1 flex items-center gap-1.5 text-sm text-success-600">
            <Link href="/choir-worship/practice-schedule" className="hover:underline">Practice Schedule</Link>
            <ChevronRight className="h-3.5 w-3.5 text-ink-subtle" />
            <span className="font-medium text-ink-subtle">Add to Schedule</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/choir-worship/practice-schedule">
            <Button type="button" variant="secondary">Cancel</Button>
          </Link>
          <Button type="button" isLoading={isSubmitting} leftIcon={<CalendarCheck2 className="h-4 w-4" />} onClick={submit}>
            Save Schedule
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <div className="lg:col-span-3 flex flex-col gap-5">
          <NewPracticeScheduleForm form={form} setField={setField} />
          <AssignMembersPanel
            assignedMemberIds={form.assignedMemberIds}
            onToggle={toggleMember} onRemove={removeMember} onClearAll={clearAllMembers}
          />
        </div>

        <div className="flex flex-col gap-5">
          <PsUpcomingPracticesCard practices={PS_UPCOMING_PRACTICES_MOCK} />
          <TeamMembersSidebarCard members={PS_TEAM_MEMBERS_SIDEBAR_MOCK} />
        </div>
      </div>
    </div>
  );
}
