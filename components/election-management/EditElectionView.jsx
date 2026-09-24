"use client";

import Link from "next/link";
import { Home, ChevronRight, ArrowLeft, Vote, Calendar, Clock } from "lucide-react";
import { Input, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ElectionDescriptionEditor } from "@/components/election-management/ElectionDescriptionEditor";
import { ElectionStatusCard } from "@/components/election-management/ElectionStatusCard";
import { ElectionDocumentsUploadCard } from "@/components/election-management/ElectionDocumentsUploadCard";
import { ElectionAdditionalSettingsCard } from "@/components/election-management/ElectionAdditionalSettingsCard";
import { useEditElectionForm } from "@/hooks/useEditElectionForm";
import {
  ELECTION_TYPE_OPTIONS, VOTING_METHOD_OPTIONS, VOTER_ELIGIBILITY_OPTIONS,
  ELIGIBLE_MEMBERSHIP_OPTIONS, MEMBERSHIP_DURATION_OPTIONS,
} from "@/lib/mock/vmElectionsListMockData";

export function EditElectionView({ id }) {
  const { form, setField, documents, setDocuments, isLoading, isSubmitting, submit } = useEditElectionForm(id);

  return (
    <div className="flex flex-col gap-4">
      <nav className="flex items-center gap-1.5 text-sm text-ink-subtle">
        <Home className="h-3.5 w-3.5" />
        <Link href="/election-management/dashboard" className="hover:text-interactive-600">Election Management</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/election-management/elections" className="hover:text-interactive-600">Elections</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-ink">Edit Election</span>
      </nav>

      <div>
        <Link href="/election-management/elections" className="inline-flex items-center gap-1.5 text-sm font-medium text-interactive-600 hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Elections
        </Link>
      </div>

      <div className="flex items-start gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
          <Vote className="h-6 w-6" />
        </span>
        <div>
          <h1 className="text-2xl font-semibold text-ink">Edit Election</h1>
          <p className="mt-1 text-sm text-ink-subtle">Update the details for &quot;{form.electionName || "this election"}&quot;.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <form
          onSubmit={(e) => { e.preventDefault(); submit(); }}
          className="flex flex-col gap-6 rounded-lg border border-border bg-white p-6 shadow-card"
        >
          <div>
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">1. Basic Information</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                label="Election Name" required placeholder="Enter election name" disabled={isLoading}
                value={form.electionName} onChange={(e) => setField("electionName", e.target.value)}
              />
              <Select
                label="Election Type" required disabled={isLoading}
                value={form.electionType} onChange={(e) => setField("electionType", e.target.value)}
              >
                <option value="">Select election type</option>
                {ELECTION_TYPE_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </Select>
            </div>
            <div className="mt-4">
              <ElectionDescriptionEditor value={form.description ?? ""} onChange={(v) => setField("description", v)} required />
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">2. Election Schedule</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Input
                label="Election Date" required type="date" rightIcon={<Calendar className="h-4 w-4" />}
                value={form.electionDate} onChange={(e) => setField("electionDate", e.target.value)}
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
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                label="Nomination Start Date" required type="date"
                value={form.nominationStartDate} onChange={(e) => setField("nominationStartDate", e.target.value)}
              />
              <Input
                label="Nomination End Date" required type="date"
                value={form.nominationEndDate} onChange={(e) => setField("nominationEndDate", e.target.value)}
              />
              <Input
                label="Candidate List Publish Date" type="date"
                value={form.candidateListPublishDate} onChange={(e) => setField("candidateListPublishDate", e.target.value)}
              />
              <Input
                label="Results Declaration Date" type="date"
                value={form.resultsDeclarationDate} onChange={(e) => setField("resultsDeclarationDate", e.target.value)}
              />
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">3. Voting Configuration</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Select
                label="Voting Method" required
                value={form.votingMethod} onChange={(e) => setField("votingMethod", e.target.value)}
              >
                <option value="">Select voting method</option>
                {VOTING_METHOD_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </Select>
              <Select
                label="Voter Eligibility" required
                value={form.voterEligibility} onChange={(e) => setField("voterEligibility", e.target.value)}
              >
                <option value="">Select voter eligibility</option>
                {VOTER_ELIGIBILITY_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </Select>
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">4. Eligibility Criteria</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Select
                label="Eligible Membership" required
                value={form.eligibleMembership} onChange={(e) => setField("eligibleMembership", e.target.value)}
              >
                <option value="">Select membership</option>
                {ELIGIBLE_MEMBERSHIP_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </Select>
              <Select
                label="Minimum Membership Duration"
                value={form.minimumMembershipDuration} onChange={(e) => setField("minimumMembershipDuration", e.target.value)}
              >
                <option value="">Select duration</option>
                {MEMBERSHIP_DURATION_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </Select>
              <Input
                label="Candidate Limit (per position)" type="number" min={0} placeholder="e.g. 4"
                value={form.candidateLimit} onChange={(e) => setField("candidateLimit", e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 border-t border-border pt-5">
            <Link href="/election-management/elections">
              <Button type="button" variant="secondary">Cancel</Button>
            </Link>
            <Button type="submit" variant="primary" isLoading={isSubmitting}>Save Changes</Button>
          </div>
        </form>

        <div className="flex flex-col gap-6">
          <ElectionStatusCard form={form} setField={setField} />
          <ElectionDocumentsUploadCard documents={documents} onDocumentsChange={setDocuments} />
          <ElectionAdditionalSettingsCard form={form} setField={setField} />
        </div>
      </div>
    </div>
  );
}
