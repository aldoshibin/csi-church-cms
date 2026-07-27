"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight, ArrowLeft, ChevronLeft as ChevronLeftIcon, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FamilyStepRail } from "@/components/family-management/add/FamilyStepRail";
import { FamilySummaryPanel } from "@/components/family-management/add/FamilySummaryPanel";
import { StepFamilyDetails } from "@/components/family-management/add/StepFamilyDetails";
import { StepAddressContact } from "@/components/family-management/add/StepAddressContact";
import { StepFamilyMembers } from "@/components/family-management/add/StepFamilyMembers";
import { StepReviewConfirm } from "@/components/family-management/add/StepReviewConfirm";
import { FamilyMemberModal } from "@/components/family-management/add/FamilyMemberModal";

const SEED_MEMBERS = [
  { name: "Jacob Thomas", relationship: "Self (Head)", dob: "15/04/1982", gender: "Male", marital_status: "Married" },
  { name: "Sarah Thomas", relationship: "Spouse", dob: "22/07/1985", gender: "Female", marital_status: "Married" },
  { name: "Anna Thomas", relationship: "Daughter", dob: "10/03/2012", gender: "Female", marital_status: "Single" },
  { name: "Mark Thomas", relationship: "Son", dob: "05/08/2016", gender: "Male", marital_status: "Single" },
  { name: "Elder Mary Thomas", relationship: "Mother", dob: "12/01/1958", gender: "Female", marital_status: "Widowed" },
];

export default function AddNewFamilyPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ family_id: "FAM-2025-00249", family_name: "", family_head: "", parish: "" });
  const [members, setMembers] = useState(SEED_MEMBERS);
  const [memberModal, setMemberModal] = useState({ open: false, index: null });

  const set = (patch) => setForm((prev) => ({ ...prev, ...patch }));

  const openAddMember = () => setMemberModal({ open: true, index: null });
  const openEditMember = (idx) => setMemberModal({ open: true, index: idx });
  const closeMemberModal = () => setMemberModal({ open: false, index: null });

  const saveMember = (values) => {
    if (memberModal.index === null) {
      setMembers((prev) => [...prev, values]);
    } else {
      setMembers((prev) => prev.map((m, i) => (i === memberModal.index ? values : m)));
    }
    closeMemberModal();
  };
  const removeMember = (idx) => setMembers((prev) => prev.filter((_, i) => i !== idx));

  const goNext = () => setStep((s) => Math.min(4, s + 1));
  const goBack = () => setStep((s) => Math.max(1, s - 1));

  const handleFinalSave = () => {
    // TODO: wire to real family-creation API/service.
    router.push("/families");
  };

  const stepBody = {
    1: <StepFamilyDetails form={form} set={set} />,
    2: <StepAddressContact />,
    3: <StepFamilyMembers members={members} onAdd={openAddMember} onEdit={openEditMember} onRemove={removeMember} />,
    4: <StepReviewConfirm form={form} members={members} />,
  }[step];

  return (
    <div className="space-y-5 pb-24">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-ink">Add New Family</h1>
          <p className="mt-1 flex items-center gap-1.5 text-sm">
            <Link href="/families" className="text-interactive-500 hover:underline">Family Management</Link>
            <ChevronRight className="h-3.5 w-3.5 text-ink-subtle" />
            <span className="text-ink-subtle">Add New Family</span>
          </p>
        </div>
        <button
          type="button"
          onClick={() => router.push("/families")}
          className="flex items-center gap-2 rounded-md border border-border bg-white px-3 py-2 text-sm font-semibold text-ink shadow-card hover:bg-surface-muted"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Family Overview
        </button>
      </div>

      <FamilyStepRail step={step} onJump={setStep} />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_340px]">
        <div>
          {stepBody}

          <div className="mt-5 flex items-center justify-between">
            <div>
              {step > 1 && (
                <Button type="button" variant="secondary" leftIcon={<ChevronLeftIcon className="h-4 w-4" />} onClick={goBack}>
                  Previous
                </Button>
              )}
            </div>
            {step === 4 ? (
              <Button type="button" rightIcon={<ArrowRight className="h-4 w-4" />} onClick={handleFinalSave}>
                Confirm & Save
              </Button>
            ) : (
              <Button type="button" rightIcon={<ArrowRight className="h-4 w-4" />} onClick={goNext}>
                Next
              </Button>
            )}
          </div>
        </div>

        <FamilySummaryPanel step={step} form={form} members={members} />
      </div>

      {/* Sticky page-level footer bar — separate from the in-card Previous/Next above,
          matches the persistent Cancel/Save & Next bar visible on every step of the screenshots */}
      <div className="fixed inset-x-0 bottom-0 z-20 flex items-center justify-end gap-3 border-t border-border bg-white px-6 py-4 shadow-elevated lg:pl-[296px]">
        <Button type="button" variant="secondary" onClick={() => router.push("/families")}>
          Cancel
        </Button>
        {step === 4 ? (
          <Button type="button" rightIcon={<Check className="h-4 w-4" />} onClick={handleFinalSave}>
            Confirm & Save
          </Button>
        ) : (
          <Button type="button" rightIcon={<ArrowRight className="h-4 w-4" />} onClick={goNext}>
            Save & Next
          </Button>
        )}
      </div>

      <FamilyMemberModal
        open={memberModal.open}
        onClose={closeMemberModal}
        onSave={saveMember}
        initialValue={memberModal.index !== null ? members[memberModal.index] : null}
      />
    </div>
  );
}
