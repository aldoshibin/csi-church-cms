"use client";

import Link from "next/link";
import { Home, ChevronRight, ArrowLeft, UserRoundPlus } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useNewPositionForm } from "@/hooks/useNewPositionForm";
import { PositionGuidelinesCard } from "@/components/election-management/PositionGuidelinesCard";
import { PositionHelpCard } from "@/components/election-management/PositionHelpCard";
import { ELIGIBILITY_OPTIONS, TERM_DURATION_OPTIONS } from "@/lib/mock/vmPositionsMockData";

export default function AddNewPositionPage() {
  const { form, setField, isSubmitting, submit } = useNewPositionForm();

  return (
    <div className="flex flex-col gap-4">
      <nav className="flex items-center gap-1.5 text-sm text-ink-subtle">
        <Home className="h-3.5 w-3.5" />
        <Link href="/election-management/dashboard" className="hover:text-interactive-600">Election Management</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/election-management/positions" className="hover:text-interactive-600">Positions</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-ink">Add New Position</span>
      </nav>

      <div>
        <Link href="/election-management/positions" className="inline-flex items-center gap-1.5 text-sm font-medium text-interactive-600 hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Positions
        </Link>
      </div>

      <div className="flex items-start gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
          <UserRoundPlus className="h-6 w-6" />
        </span>
        <div>
          <h1 className="text-2xl font-semibold text-ink">Add New Position</h1>
          <p className="mt-1 text-sm text-ink-subtle">Create a new position for elections.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <form
          onSubmit={(e) => { e.preventDefault(); submit(); }}
          className="flex flex-col gap-6 rounded-lg border border-border bg-white p-6 shadow-card"
        >
          <div>
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">Position Information</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                label="Position Name" required placeholder="Enter position name"
                value={form.positionName} onChange={(e) => setField("positionName", e.target.value)}
              />
              <div>
                <Textarea
                  label="Description" required placeholder="Enter description of the position" rows={4}
                  maxLength={500}
                  value={form.description} onChange={(e) => setField("description", e.target.value)}
                />
                <p className="mt-1.5 text-right text-xs text-ink-subtle">{form.description.length}/500 characters</p>
              </div>
              <Input
                label="Max Members" required type="number" min={0} placeholder="Enter maximum number of members"
                value={form.maxMembers} onChange={(e) => setField("maxMembers", e.target.value)}
                helperText="Maximum number of people that can hold this position"
              />
              <Select
                label="Eligibility" required
                value={form.eligibility} onChange={(e) => setField("eligibility", e.target.value)}
                helperText="Select who is eligible for this position"
              >
                <option value="">Select eligibility criteria</option>
                {ELIGIBILITY_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </Select>
              <Select
                label="Term Duration" required
                value={form.termDuration} onChange={(e) => setField("termDuration", e.target.value)}
                helperText="Select the duration for this position"
              >
                <option value="">Select term duration</option>
                {TERM_DURATION_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </Select>
              <Input
                label="Display Order" type="number" min={0} placeholder="Enter display order (e.g., 1, 2, 3....)"
                value={form.displayOrder} onChange={(e) => setField("displayOrder", e.target.value)}
                helperText="Lower numbers appear first in the list"
              />
              <Select
                label="Status" required
                value={form.status} onChange={(e) => setField("status", e.target.value)}
                helperText="Set the initial status of this position"
              >
                <option value="">Select status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Select>
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">Additional Information (Optional)</h3>
            <Textarea
              label="Notes" placeholder="Enter any additional notes about this position" rows={3}
              maxLength={500}
              value={form.notes} onChange={(e) => setField("notes", e.target.value)}
            />
            <p className="mt-1.5 text-right text-xs text-ink-subtle">{form.notes.length}/500 characters</p>
          </div>

          <div className="flex items-center justify-end gap-3 border-t border-border pt-5">
            <Button type="button" variant="secondary">Cancel</Button>
            <Button type="submit" variant="primary" isLoading={isSubmitting}>Save Position</Button>
          </div>
        </form>

        <div className="flex flex-col gap-6">
          <PositionGuidelinesCard />
          <PositionHelpCard />
        </div>
      </div>
    </div>
  );
}
