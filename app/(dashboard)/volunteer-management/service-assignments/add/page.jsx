"use client";

import Link from "next/link";
import { ArrowLeft, X, Save } from "lucide-react";

import { useNewAssignmentForm } from "@/hooks/useNewAssignmentForm";
import { Button } from "@/components/ui/Button";
import { ServiceEventInformationSection } from "@/components/volunteer-management/assignments/form/ServiceEventInformationSection";
import { AssignmentDetailsSection } from "@/components/volunteer-management/assignments/form/AssignmentDetailsSection";
import { AssignVolunteersSection } from "@/components/volunteer-management/assignments/form/AssignVolunteersSection";
import { AssignmentGuidelinesCard, AssignmentTemplatesCard, RecentAssignmentsFormCard } from "@/components/volunteer-management/assignments/form/AssignmentFormSidebarCards";
import { ASSIGNMENT_TEMPLATES_MOCK, RECENT_ASSIGNMENTS_FORM_MOCK } from "@/lib/mock/serviceAssignmentsMockData";

export default function NewAssignmentPage() {
  const { form, setField, addVolunteer, removeVolunteer, applyTemplate, isSubmitting, submit } = useNewAssignmentForm();

  return (
    <div className="space-y-3 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Link href="/volunteer-management/service-assignments" className="mb-1 flex items-center gap-1.5 text-xs font-medium text-interactive-500 hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Service Assignments
          </Link>
          <h1 className="font-display text-2xl font-bold text-ink">New Assignment</h1>
          <p className="mt-1 text-sm text-ink-subtle">Create a new service assignment for a ministry, team, or volunteer.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/volunteer-management/service-assignments">
            <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
          </Link>
          <Button type="button" isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />} onClick={submit}>
            Save Assignment
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <div className="lg:col-span-3 flex flex-col gap-5">
          <ServiceEventInformationSection form={form} setField={setField} />
          <AssignmentDetailsSection form={form} setField={setField} />
          <AssignVolunteersSection form={form} setField={setField} addVolunteer={addVolunteer} removeVolunteer={removeVolunteer} />
        </div>
        <div className="flex flex-col gap-5">
          <AssignmentGuidelinesCard />
          <AssignmentTemplatesCard templates={ASSIGNMENT_TEMPLATES_MOCK} onUse={applyTemplate} />
          <RecentAssignmentsFormCard assignments={RECENT_ASSIGNMENTS_FORM_MOCK} />
        </div>
      </div>
    </div>
  );
}
