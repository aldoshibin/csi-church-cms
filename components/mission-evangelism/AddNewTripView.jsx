"use client";

import Link from "next/link";
import { Home, ChevronRight, ArrowLeft, Plane, Calendar, Clock } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useNewMissionTripForm } from "@/hooks/useNewMissionTripForm";
import { TripTipsCard } from "@/components/mission-evangelism/TripTipsCard";
import { NoteCard } from "@/components/mission-evangelism/NoteCard";
import { ActivityAttachmentsDropzone } from "@/components/mission-evangelism/ActivityAttachmentsDropzone";
import {
  TRIP_CATEGORY_OPTIONS, TRIP_VISIBILITY_OPTIONS, TRIP_COORDINATOR_OPTIONS,
  TRIP_DEPARTMENT_OPTIONS, TRIP_TEAM_MEMBER_OPTIONS, TRIP_FUNDING_SOURCE_OPTIONS, TRIP_ADD_NOTE_TEXT,
} from "@/lib/mock/vmMissionEvangelismMockData";

export function AddNewTripView() {
  const { form, setField, attachments, setAttachments, isSubmitting, submit } = useNewMissionTripForm();

  return (
    <div className="flex flex-col gap-4">
      <nav className="flex items-center gap-1.5 text-sm text-ink-subtle">
        <Home className="h-3.5 w-3.5" />
        <Link href="/mission-evangelism/overview" className="hover:text-interactive-600">Mission &amp; Evangelism</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/mission-evangelism/mission-trips" className="hover:text-interactive-600">Mission Trips</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-ink">Add New Trip</span>
      </nav>

      <div>
        <Link href="/mission-evangelism/mission-trips" className="inline-flex items-center gap-1.5 text-sm font-medium text-interactive-600 hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Mission Trips
        </Link>
      </div>

      <div className="flex items-start gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
          <Plane className="h-6 w-6" />
        </span>
        <div>
          <h1 className="text-2xl font-semibold text-ink">Add New Trip</h1>
          <p className="mt-1 text-sm text-ink-subtle">Create a new mission trip and outreach journey.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <form
          onSubmit={(e) => { e.preventDefault(); submit(); }}
          className="flex flex-col gap-6 rounded-lg border border-border bg-white p-6 shadow-card"
        >
          <div>
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">1. Trip Information</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Input
                label="Trip Name" required placeholder="Enter trip name"
                value={form.tripName} onChange={(e) => setField("tripName", e.target.value)}
              />
              <Select
                label="Category" required
                value={form.category} onChange={(e) => setField("category", e.target.value)}
              >
                <option value="">Select category</option>
                {TRIP_CATEGORY_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </Select>
              <Input
                label="Destination" required placeholder="Enter destination"
                value={form.destination} onChange={(e) => setField("destination", e.target.value)}
              />
              <Select
                label="Visibility" required
                value={form.visibility} onChange={(e) => setField("visibility", e.target.value)}
              >
                <option value="">Select visibility</option>
                {TRIP_VISIBILITY_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </Select>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Textarea
                label="Purpose" required rows={2} placeholder="Enter the purpose of this trip..."
                value={form.purpose} onChange={(e) => setField("purpose", e.target.value)}
              />
              <Textarea
                label="Short Description" rows={2} placeholder="Enter a brief description of the trip..."
                value={form.shortDescription} onChange={(e) => setField("shortDescription", e.target.value)}
              />
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">2. Trip Schedule</h3>
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
                label="Days of Outreach" required type="number" min={0} placeholder="Enter number of days"
                value={form.daysOfOutreach} onChange={(e) => setField("daysOfOutreach", e.target.value)}
              />
              <div />
              <Input
                label="Start Time" type="time" rightIcon={<Clock className="h-4 w-4" />}
                value={form.startTime} onChange={(e) => setField("startTime", e.target.value)}
              />
              <Input
                label="End Time" type="time" rightIcon={<Clock className="h-4 w-4" />}
                value={form.endTime} onChange={(e) => setField("endTime", e.target.value)}
              />
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">3. Participation &amp; Goals</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Input
                label="Expected Participants" required type="number" min={0} placeholder="Enter expected number of participants"
                value={form.expectedParticipants} onChange={(e) => setField("expectedParticipants", e.target.value)}
              />
              <Input
                label="Target Group" placeholder="e.g., Youth, Children, Families, Community"
                value={form.targetGroup} onChange={(e) => setField("targetGroup", e.target.value)}
              />
              <Input
                label="Participants Goal" type="number" min={0} placeholder="Enter target participants"
                value={form.participantsGoal} onChange={(e) => setField("participantsGoal", e.target.value)}
              />
              <Input
                label="Volunteers Needed" type="number" min={0} placeholder="Enter number of volunteers needed"
                value={form.volunteersNeeded} onChange={(e) => setField("volunteersNeeded", e.target.value)}
              />
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">4. Coordinator &amp; Team</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Select
                label="Trip Coordinator" required
                value={form.coordinator} onChange={(e) => setField("coordinator", e.target.value)}
              >
                <option value="">Select coordinator</option>
                {TRIP_COORDINATOR_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </Select>
              <Input
                label="Contact Number" required placeholder="Enter contact number"
                value={form.contactNumber} onChange={(e) => setField("contactNumber", e.target.value)}
              />
              <Input
                label="Email" required type="email" placeholder="Enter email address"
                value={form.email} onChange={(e) => setField("email", e.target.value)}
              />
              <Select
                label="Departments Involved"
                value={form.departmentsInvolved} onChange={(e) => setField("departmentsInvolved", e.target.value)}
              >
                <option value="">Select departments</option>
                {TRIP_DEPARTMENT_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </Select>
              <Select
                label="Additional Team Members"
                value={form.additionalTeamMembers} onChange={(e) => setField("additionalTeamMembers", e.target.value)}
              >
                <option value="">Select team members</option>
                {TRIP_TEAM_MEMBER_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </Select>
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">5. Budget &amp; Expenses</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Input
                label="Estimated Budget (₹)" required type="number" min={0} placeholder="Enter estimated budget"
                value={form.estimatedBudget} onChange={(e) => setField("estimatedBudget", e.target.value)}
              />
              <Select
                label="Funding Source"
                value={form.fundingSource} onChange={(e) => setField("fundingSource", e.target.value)}
              >
                <option value="">Select funding source</option>
                {TRIP_FUNDING_SOURCE_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </Select>
              <Input
                label="Notes" placeholder="Enter any additional notes"
                value={form.notes} onChange={(e) => setField("notes", e.target.value)}
              />
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">6. Attachments (Optional)</h3>
            <ActivityAttachmentsDropzone files={attachments} onFilesChange={setAttachments} />
            <p className="mt-2 text-xs text-ink-subtle">You can upload itinerary, budget sheet, permission letters or any related documents.</p>
          </div>

          <div className="flex items-center justify-end gap-3 border-t border-border pt-5">
            <Link href="/mission-evangelism/mission-trips">
              <Button type="button" variant="secondary">Cancel</Button>
            </Link>
            <Button type="submit" variant="primary" isLoading={isSubmitting}>Save Trip</Button>
          </div>
        </form>

        <div className="flex flex-col gap-6">
          <TripTipsCard />
          <NoteCard variant="success">{TRIP_ADD_NOTE_TEXT}</NoteCard>
        </div>
      </div>
    </div>
  );
}
