"use client";

import Link from "next/link";
import { Home, ChevronRight, ArrowLeft, Users2, Calendar, Clock } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useNewOutreachProgramForm } from "@/hooks/useNewOutreachProgramForm";
import { ProgramTipsCard } from "@/components/mission-evangelism/ProgramTipsCard";
import { ActivityAttachmentsDropzone } from "@/components/mission-evangelism/ActivityAttachmentsDropzone";
import {
  PROGRAM_CATEGORY_OPTIONS, PROGRAM_STATUS_OPTIONS, PROGRAM_VISIBILITY_OPTIONS,
  PROGRAM_COORDINATOR_OPTIONS, PROGRAM_DEPARTMENT_OPTIONS,
} from "@/lib/mock/vmMissionEvangelismMockData";

export function AddNewProgramView() {
  const { form, setField, attachments, setAttachments, isSubmitting, submit } = useNewOutreachProgramForm();

  return (
    <div className="flex flex-col gap-4">
      <nav className="flex items-center gap-1.5 text-sm text-ink-subtle">
        <Home className="h-3.5 w-3.5" />
        <Link href="/mission-evangelism/overview" className="hover:text-interactive-600">Mission &amp; Evangelism</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/mission-evangelism/outreach-programs" className="hover:text-interactive-600">Outreach Programs</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-ink">Add New Program</span>
      </nav>

      <div>
        <Link href="/mission-evangelism/outreach-programs" className="inline-flex items-center gap-1.5 text-sm font-medium text-interactive-600 hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Programs
        </Link>
      </div>

      <div className="flex items-start gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
          <Users2 className="h-6 w-6" />
        </span>
        <div>
          <h1 className="text-2xl font-semibold text-ink">Add New Program</h1>
          <p className="mt-1 text-sm text-ink-subtle">Create a new outreach program or community initiative.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <form
          onSubmit={(e) => { e.preventDefault(); submit(); }}
          className="flex flex-col gap-6 rounded-lg border border-border bg-white p-6 shadow-card"
        >
          <div>
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">1. Basic Information</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Input
                label="Program Name" required placeholder="Enter program name"
                value={form.programName} onChange={(e) => setField("programName", e.target.value)}
              />
              <Select
                label="Category" required
                value={form.category} onChange={(e) => setField("category", e.target.value)}
              >
                <option value="">Select category</option>
                {PROGRAM_CATEGORY_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </Select>
              <Select
                label="Status" required
                value={form.status} onChange={(e) => setField("status", e.target.value)}
              >
                <option value="">Select status</option>
                {PROGRAM_STATUS_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </Select>
              <Select
                label="Visibility" required
                value={form.visibility} onChange={(e) => setField("visibility", e.target.value)}
              >
                <option value="">Select visibility</option>
                {PROGRAM_VISIBILITY_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </Select>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Textarea
                label="Short Description" required rows={2} placeholder="Enter a brief description of the program..."
                value={form.shortDescription} onChange={(e) => setField("shortDescription", e.target.value)}
              />
              <Textarea
                label="Target Audience" required rows={2} placeholder="e.g., Children, Youth, Families, Community"
                value={form.targetAudience} onChange={(e) => setField("targetAudience", e.target.value)}
              />
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">2. Program Details</h3>
            <div className="flex flex-col gap-4">
              <Input
                label="Location" required placeholder="Enter location"
                value={form.location} onChange={(e) => setField("location", e.target.value)}
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Input
                  label="Start Date" required type="date" rightIcon={<Calendar className="h-4 w-4" />}
                  value={form.startDate} onChange={(e) => setField("startDate", e.target.value)}
                />
                <Input
                  label="End Date" required type="date" rightIcon={<Calendar className="h-4 w-4" />}
                  value={form.endDate} onChange={(e) => setField("endDate", e.target.value)}
                />
                <Input
                  label="Start Time" type="time" rightIcon={<Clock className="h-4 w-4" />}
                  value={form.startTime} onChange={(e) => setField("startTime", e.target.value)}
                />
                <Input
                  label="End Time" type="time" rightIcon={<Clock className="h-4 w-4" />}
                  value={form.endTime} onChange={(e) => setField("endTime", e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <Input
                  label="Expected Participants" type="number" min={0} placeholder="Enter expected number of participants"
                  value={form.expectedParticipants} onChange={(e) => setField("expectedParticipants", e.target.value)}
                />
                <Input
                  label="People Reached Goal" type="number" min={0} placeholder="Enter target people to be reached"
                  value={form.peopleReachedGoal} onChange={(e) => setField("peopleReachedGoal", e.target.value)}
                />
                <Input
                  label="Volunteers Needed" type="number" min={0} placeholder="Enter number of volunteers needed"
                  value={form.volunteersNeeded} onChange={(e) => setField("volunteersNeeded", e.target.value)}
                />
              </div>
              <Textarea
                label="Program Objectives" rows={3} placeholder="Enter the main objectives of this program..."
                value={form.programObjectives} onChange={(e) => setField("programObjectives", e.target.value)}
              />
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">3. Team &amp; Coordinator</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Select
                label="Program Coordinator" required
                value={form.coordinator} onChange={(e) => setField("coordinator", e.target.value)}
              >
                <option value="">Select coordinator</option>
                {PROGRAM_COORDINATOR_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </Select>
              <Input
                label="Contact Number" required placeholder="Enter contact number"
                value={form.contactNumber} onChange={(e) => setField("contactNumber", e.target.value)}
              />
              <Input
                label="Email" type="email" placeholder="Enter email address"
                value={form.email} onChange={(e) => setField("email", e.target.value)}
              />
              <Select
                label="Departments Involved"
                value={form.departmentsInvolved} onChange={(e) => setField("departmentsInvolved", e.target.value)}
              >
                <option value="">Select departments</option>
                {PROGRAM_DEPARTMENT_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </Select>
              <Input
                label="Partners (if any)" placeholder="Enter partners or organizations involved"
                value={form.partners} onChange={(e) => setField("partners", e.target.value)}
              />
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">4. Attachments (Optional)</h3>
            <ActivityAttachmentsDropzone files={attachments} onFilesChange={setAttachments} />
            <p className="mt-2 text-xs text-ink-subtle">You can upload documents, photos, brochures or any related files.</p>
          </div>

          <div className="flex items-center justify-end gap-3 border-t border-border pt-5">
            <Link href="/mission-evangelism/outreach-programs">
              <Button type="button" variant="secondary">Cancel</Button>
            </Link>
            <Button type="submit" variant="primary" isLoading={isSubmitting}>Save Program</Button>
          </div>
        </form>

        <div className="flex flex-col gap-6">
          <ProgramTipsCard />
        </div>
      </div>
    </div>
  );
}
