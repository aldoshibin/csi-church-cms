"use client";

import Link from "next/link";
import { Home, ChevronRight, UserRoundPlus } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useNewVoterForm } from "@/hooks/useNewVoterForm";
import { VoterGuidelinesCard } from "@/components/election-management/VoterGuidelinesCard";
import { VoterHelpCard } from "@/components/election-management/VoterHelpCard";
import {
  GENDER_OPTIONS, FAMILY_OPTIONS, MEMBER_NAME_OPTIONS, MEMBERSHIP_TYPE_OPTIONS,
  VOTER_ELECTION_OPTIONS,
} from "@/lib/mock/vmVotersMockData";

export default function AddNewVoterPage() {
  const { form, setField, isSubmitting, submit } = useNewVoterForm();

  return (
    <div className="flex flex-col gap-4">
      <nav className="flex items-center gap-1.5 text-sm text-ink-subtle">
        <Home className="h-3.5 w-3.5" />
        <Link href="/election-management/dashboard" className="hover:text-interactive-600">Election Management</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/election-management/voters" className="hover:text-interactive-600">Voters</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-ink">Add New Voter</span>
      </nav>

      <div className="flex items-start gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
          <UserRoundPlus className="h-6 w-6" />
        </span>
        <div>
          <h1 className="text-2xl font-semibold text-ink">Add New Voter</h1>
          <p className="mt-1 text-sm text-ink-subtle">Register a new voter for the election.</p>
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
              <Select
                label="Family" required
                value={form.family} onChange={(e) => setField("family", e.target.value)}
              >
                <option value="">Select family</option>
                {FAMILY_OPTIONS.map((f) => <option key={f} value={f}>{f}</option>)}
              </Select>
              <Select
                label="Member Name (Optional)"
                value={form.memberName} onChange={(e) => setField("memberName", e.target.value)}
              >
                <option value="">Select member (if applicable)</option>
                {MEMBER_NAME_OPTIONS.map((m) => <option key={m} value={m}>{m}</option>)}
              </Select>
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">Membership Information</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Input
                label="Membership Number" required placeholder="Enter membership number"
                value={form.membershipNumber} onChange={(e) => setField("membershipNumber", e.target.value)}
              />
              <Select
                label="Membership Type" required
                value={form.membershipType} onChange={(e) => setField("membershipType", e.target.value)}
              >
                <option value="">Select membership type</option>
                {MEMBERSHIP_TYPE_OPTIONS.map((m) => <option key={m} value={m}>{m}</option>)}
              </Select>
              <Select
                label="Membership Status" required
                value={form.membershipStatus} onChange={(e) => setField("membershipStatus", e.target.value)}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Select>
              <Input
                label="Member Since" type="date"
                value={form.memberSince} onChange={(e) => setField("memberSince", e.target.value)}
              />
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">Voter Information</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Select
                label="Eligible Election" required
                value={form.eligibleElection} onChange={(e) => setField("eligibleElection", e.target.value)}
              >
                <option value="">Select election</option>
                {VOTER_ELECTION_OPTIONS.map((e) => <option key={e} value={e}>{e}</option>)}
              </Select>
              <Select
                label="Voter Status" required
                value={form.voterStatus} onChange={(e) => setField("voterStatus", e.target.value)}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Removed">Removed</option>
              </Select>
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">Additional Information (Optional)</h3>
            <Textarea
              label="Notes" placeholder="Enter any additional notes" rows={3}
              maxLength={500}
              value={form.notes} onChange={(e) => setField("notes", e.target.value)}
            />
            <p className="mt-1.5 text-right text-xs text-ink-subtle">{form.notes.length}/500 characters</p>
          </div>

          <div className="flex items-center justify-end gap-3 border-t border-border pt-5">
            <Button type="button" variant="secondary">Cancel</Button>
            <Button type="submit" variant="primary" isLoading={isSubmitting}>Save Voter</Button>
          </div>
        </form>

        <div className="flex flex-col gap-6">
          <VoterGuidelinesCard />
          <VoterHelpCard />
        </div>
      </div>
    </div>
  );
}
