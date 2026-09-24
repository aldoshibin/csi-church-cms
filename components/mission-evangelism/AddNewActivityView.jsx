"use client";

import Link from "next/link";
import { Home, ChevronRight, ArrowLeft, Plus, Calendar, Clock } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useNewOutreachActivityForm } from "@/hooks/useNewOutreachActivityForm";
import { ActivityTipsCard } from "@/components/mission-evangelism/ActivityTipsCard";
import { ActivityAttachmentsDropzone } from "@/components/mission-evangelism/ActivityAttachmentsDropzone";
import {
  OUTREACH_CATEGORY_OPTIONS, OUTREACH_ACTIVITY_TYPE_OPTIONS, OUTREACH_ORGANIZER_OPTIONS,
  OUTREACH_STATUS_OPTIONS, OUTREACH_VISIBILITY_OPTIONS, OUTREACH_COORDINATOR_OPTIONS, OUTREACH_DEPARTMENT_OPTIONS,
} from "@/lib/mock/vmMissionEvangelismMockData";

export function AddNewActivityView() {
  const { form, setField, attachments, setAttachments, isSubmitting, submit } = useNewOutreachActivityForm();

  return (
    <div className="flex flex-col gap-4">
      <nav className="flex items-center gap-1.5 text-sm text-ink-subtle">
        <Home className="h-3.5 w-3.5" />
        <Link href="/mission-evangelism/overview" className="hover:text-interactive-600">Mission &amp; Evangelism</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/mission-evangelism/outreach-programs" className="hover:text-interactive-600">Outreach Activities</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-ink">Add New Activity</span>
      </nav>

      <div>
        <Link href="/mission-evangelism/outreach-programs" className="inline-flex items-center gap-1.5 text-sm font-medium text-interactive-600 hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Activities
        </Link>
      </div>

      <div className="flex items-start gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
          <Plus className="h-6 w-6" />
        </span>
        <div>
          <h1 className="text-2xl font-semibold text-ink">Add New Activity</h1>
          <p className="mt-1 text-sm text-ink-subtle">Create a new outreach activity or mission initiative.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <form
          onSubmit={(e) => { e.preventDefault(); submit(); }}
          className="flex flex-col gap-6 rounded-lg border border-border bg-white p-6 shadow-card"
        >
          <div>
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">1. Basic Information</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Input
                label="Activity Name" required placeholder="Enter activity name"
                value={form.activityName} onChange={(e) => setField("activityName", e.target.value)}
              />
              <Select
                label="Category" required
                value={form.category} onChange={(e) => setField("category", e.target.value)}
              >
                <option value="">Select category</option>
                {OUTREACH_CATEGORY_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </Select>
              <Select
                label="Activity Type" required
                value={form.activityType} onChange={(e) => setField("activityType", e.target.value)}
              >
                <option value="">Select activity type</option>
                {OUTREACH_ACTIVITY_TYPE_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </Select>
              <Select
                label="Organized By" required
                value={form.organizedBy} onChange={(e) => setField("organizedBy", e.target.value)}
              >
                <option value="">Select organizer</option>
                {OUTREACH_ORGANIZER_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </Select>
              <Select
                label="Status" required
                value={form.status} onChange={(e) => setField("status", e.target.value)}
              >
                <option value="">Select status</option>
                {OUTREACH_STATUS_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </Select>
              <Select
                label="Visibility" required
                value={form.visibility} onChange={(e) => setField("visibility", e.target.value)}
              >
                <option value="">Select visibility</option>
                {OUTREACH_VISIBILITY_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </Select>
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">2. Activity Details</h3>
            <div className="flex flex-col gap-4">
              <Textarea
                label="Description" required rows={4} placeholder="Describe the purpose and details of this activity..."
                value={form.description} onChange={(e) => setField("description", e.target.value)}
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Input
                  label="Location" required placeholder="Enter location"
                  value={form.location} onChange={(e) => setField("location", e.target.value)}
                />
                <Input
                  label="Date" required type="date" rightIcon={<Calendar className="h-4 w-4" />}
                  value={form.date} onChange={(e) => setField("date", e.target.value)}
                />
                <Input
                  label="Start Time" required type="time" rightIcon={<Clock className="h-4 w-4" />}
                  value={form.startTime} onChange={(e) => setField("startTime", e.target.value)}
                />
                <Input
                  label="End Time" required type="time" rightIcon={<Clock className="h-4 w-4" />}
                  value={form.endTime} onChange={(e) => setField("endTime", e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input
                  label="Target Audience" placeholder="e.g., Children, Youth, Families, Community"
                  value={form.targetAudience} onChange={(e) => setField("targetAudience", e.target.value)}
                />
                <Input
                  label="Expected Participants" type="number" min={0} placeholder="Enter expected number of participants"
                  value={form.expectedParticipants} onChange={(e) => setField("expectedParticipants", e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">3. Team &amp; Volunteers</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Select
                label="In-Charge / Coordinator" required
                value={form.coordinator} onChange={(e) => setField("coordinator", e.target.value)}
              >
                <option value="">Select coordinator</option>
                {OUTREACH_COORDINATOR_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
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
                {OUTREACH_DEPARTMENT_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </Select>
              <Input
                label="Volunteers Needed" type="number" min={0} placeholder="Enter number of volunteers needed"
                value={form.volunteersNeeded} onChange={(e) => setField("volunteersNeeded", e.target.value)}
              />
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">4. Attachments (Optional)</h3>
            <ActivityAttachmentsDropzone files={attachments} onFilesChange={setAttachments} />
          </div>

          <div className="flex items-center justify-end gap-3 border-t border-border pt-5">
            <Link href="/mission-evangelism/outreach-programs">
              <Button type="button" variant="secondary">Cancel</Button>
            </Link>
            <Button type="submit" variant="primary" isLoading={isSubmitting}>Save Activity</Button>
          </div>
        </form>

        <div className="flex flex-col gap-6">
          <ActivityTipsCard />
        </div>
      </div>
    </div>
  );
}
