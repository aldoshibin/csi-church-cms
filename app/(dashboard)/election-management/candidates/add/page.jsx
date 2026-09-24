"use client";

import Link from "next/link";
import { Home, ChevronRight, UserRoundPlus } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { UploadFileDropzone } from "@/components/document-management/UploadFileDropzone";
import { useNewCandidateForm } from "@/hooks/useNewCandidateForm";
import { CandidateGuidelinesCard } from "@/components/election-management/CandidateGuidelinesCard";
import { CandidateHelpCard } from "@/components/election-management/CandidateHelpCard";
import {
  GENDER_OPTIONS, CANDIDATE_ELECTION_OPTIONS, CANDIDATE_POSITION_OPTIONS,
  CANDIDATE_ELIGIBILITY_OPTIONS, CANDIDATE_NOMINATOR_OPTIONS,
} from "@/lib/mock/vmCandidatesMockData";

export default function AddNewCandidatePage() {
  const { form, setField, file, setFile, isSubmitting, submit } = useNewCandidateForm();

  const selectClass =
    "h-10 w-full rounded-md border border-border bg-surface-canvas px-3 text-sm text-ink-subtle focus:outline-none";

  return (
    <div className="flex flex-col gap-4">
      <nav className="flex items-center gap-1.5 text-sm text-ink-subtle">
        <Home className="h-3.5 w-3.5" />
        <Link href="/election-management/dashboard" className="hover:text-interactive-600">Election Management</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/election-management/candidates" className="hover:text-interactive-600">Candidates</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-ink">Add New Candidate</span>
      </nav>

      <div className="flex items-start gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
          <UserRoundPlus className="h-6 w-6" />
        </span>
        <div>
          <h1 className="text-2xl font-semibold text-ink">Add New Candidate</h1>
          <p className="mt-1 text-sm text-ink-subtle">Register a new candidate for the election.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <form
          onSubmit={(e) => { e.preventDefault(); submit(); }}
          className="flex flex-col gap-6 rounded-lg border border-border bg-white p-6 shadow-card"
        >
          <div>
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">Personal Information</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Input
                label="Full Name" required placeholder="Enter full name"
                value={form.fullName} onChange={(e) => setField("fullName", e.target.value)}
              />
              <Input
                label="Email" required type="email" placeholder="Enter email address"
                value={form.email} onChange={(e) => setField("email", e.target.value)}
              />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink">
                  Phone Number <span className="text-danger-500">*</span>
                </label>
                <div className="flex">
                  <select className="h-10 w-20 rounded-l-md border border-r-0 border-border bg-white px-2 text-sm text-ink focus:outline-none">
                    <option>+91</option>
                  </select>
                  <input
                    type="tel" placeholder="Enter phone number"
                    value={form.phone} onChange={(e) => setField("phone", e.target.value)}
                    className="h-10 w-full rounded-r-md border border-border bg-white px-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
                  />
                </div>
              </div>
              <Input
                label="Date of Birth" required type="date"
                value={form.dateOfBirth} onChange={(e) => setField("dateOfBirth", e.target.value)}
              />
              <Select
                label="Gender" required
                value={form.gender} onChange={(e) => setField("gender", e.target.value)}
              >
                <option value="">Select gender</option>
                {GENDER_OPTIONS.map((g) => <option key={g} value={g}>{g}</option>)}
              </Select>
              <div className="sm:col-span-1">
                <Textarea
                  label="Address" required placeholder="Enter full address" rows={3}
                  value={form.address} onChange={(e) => setField("address", e.target.value)}
                />
              </div>
              <Input
                label="Member Since" type="date"
                value={form.memberSince} onChange={(e) => setField("memberSince", e.target.value)}
              />
              <Input
                label="Membership Number" placeholder="Enter membership number (if any)"
                value={form.membershipNumber} onChange={(e) => setField("membershipNumber", e.target.value)}
              />
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">Election Details</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Select
                label="Election" required
                value={form.election} onChange={(e) => setField("election", e.target.value)}
              >
                <option value="">Select election</option>
                {CANDIDATE_ELECTION_OPTIONS.map((e) => <option key={e} value={e}>{e}</option>)}
              </Select>
              <Select
                label="Position" required
                value={form.position} onChange={(e) => setField("position", e.target.value)}
              >
                <option value="">Select position</option>
                {CANDIDATE_POSITION_OPTIONS.map((p) => <option key={p} value={p}>{p}</option>)}
              </Select>
              <Select
                label="Eligibility" required
                value={form.eligibility} onChange={(e) => setField("eligibility", e.target.value)}
              >
                <option value="">Select eligibility</option>
                {CANDIDATE_ELIGIBILITY_OPTIONS.map((el) => <option key={el} value={el}>{el}</option>)}
              </Select>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink">Term Duration</label>
                <input readOnly value={form.termDuration || "–"} className={selectClass} />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink">Max Members for Position</label>
                <input readOnly value={form.maxMembers || "–"} className={selectClass} />
              </div>
              <Select
                label="Candidate Status" required
                value={form.candidateStatus} onChange={(e) => setField("candidateStatus", e.target.value)}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Select>
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">Nomination Information</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Select
                label="Nominated By" required
                value={form.nominatedBy} onChange={(e) => setField("nominatedBy", e.target.value)}
              >
                <option value="">Select nominator</option>
                {CANDIDATE_NOMINATOR_OPTIONS.map((n) => <option key={n} value={n}>{n}</option>)}
              </Select>
              <Input
                label="Nomination Date" required type="date"
                value={form.nominationDate} onChange={(e) => setField("nominationDate", e.target.value)}
              />
              <Input
                label="Nomination Time" type="time"
                value={form.nominationTime} onChange={(e) => setField("nominationTime", e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-sm font-medium text-ink">Supporting Documents (Optional)</label>
              <UploadFileDropzone file={file} onFileChange={setFile} />
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">Additional Information (Optional)</h3>
            <Textarea
              label="Notes" placeholder="Enter any additional notes about the candidate" rows={3}
              maxLength={500}
              value={form.notes} onChange={(e) => setField("notes", e.target.value)}
            />
            <p className="mt-1.5 text-right text-xs text-ink-subtle">{form.notes.length}/500 characters</p>
          </div>

          <div className="flex items-center justify-end gap-3 border-t border-border pt-5">
            <Button type="button" variant="secondary">Cancel</Button>
            <Button type="submit" variant="primary" isLoading={isSubmitting}>Save Candidate</Button>
          </div>
        </form>

        <div className="flex flex-col gap-6">
          <CandidateGuidelinesCard />
          <CandidateHelpCard />
        </div>
      </div>
    </div>
  );
}
