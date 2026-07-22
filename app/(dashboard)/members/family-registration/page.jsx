
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight, ArrowLeft, Info, Save, ChevronDown, Search, Phone } from "lucide-react";
import { FamilySummaryPreview } from "@/components/member-management/FamilySummaryPreview";
import { FamilyDocumentsCard } from "@/components/member-management/FamilyDocumentsCard";
import { FamilyMembersTable } from "@/components/member-management/FamilyMembersTable";

/* ---- local field primitives, self-contained (same approach as the
   Add New Member page) so this doesn't guess at ui/Select or
   ui/Textarea components that may not exist in this exact shape ---- */
function Field({ label, required, className = "", children }) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-sm font-medium text-ink">
        {label} {required && <span className="text-danger-500">*</span>}
      </label>
      {children}
    </div>
  );
}
const inputCls =
  "w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-ink placeholder:text-ink-subtle focus:border-interactive-500 focus:outline-none focus:ring-2 focus:ring-interactive-500/10 disabled:bg-surface-muted disabled:text-ink-subtle";
function TextInput(props) {
  return <input {...props} className={inputCls} />;
}
function IconInput({ icon: Icon, ...props }) {
  return (
    <div className="relative">
      <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
      <input {...props} className={inputCls + " pl-9"} />
    </div>
  );
}
function SelectInput({ children, ...props }) {
  return (
    <div className="relative">
      <select {...props} className={inputCls + " appearance-none pr-8"}>
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
    </div>
  );
}

const CARD_CLS = "rounded-lg border border-border bg-white p-5 shadow-card";

const EMPTY_MEMBER = { first_name: "", last_name: "", relationship: "Head", gender: "", dob: "", occupation: "" };

export default function AddNewFamilyPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    family_name: "",
    branch: "",
    family_category: "",
  });
  const [members, setMembers] = useState([{ ...EMPTY_MEMBER }]);

  const set = (patch) => setForm((prev) => ({ ...prev, ...patch }));
  const updateMember = (index, field, value) =>
    setMembers((prev) => prev.map((m, i) => (i === index ? { ...m, [field]: value } : m)));
  const addMember = () => setMembers((prev) => [...prev, { ...EMPTY_MEMBER, relationship: "" }]);
  const removeMember = (index) => setMembers((prev) => (prev.length > 1 ? prev.filter((_, i) => i !== index) : prev));

  const resetAll = () => {
    setForm({ family_name: "", branch: "", family_category: "" });
    setMembers([{ ...EMPTY_MEMBER }]);
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-ink">Add New Family</h1>
          <p className="mt-1 flex items-center gap-1.5 text-sm">
            <Link href="/members" className="text-interactive-500 hover:underline">Member Management</Link>
            <ChevronRight className="h-3.5 w-3.5 text-ink-subtle" />
            <Link href="/members/family-registration" className="text-interactive-500 hover:underline">Family Registration</Link>
            <ChevronRight className="h-3.5 w-3.5 text-ink-subtle" />
            <span className="text-ink-subtle">Add New Family</span>
          </p>
        </div>
        <button
          type="button"
          onClick={() => router.push("/members")}
          className="flex items-center gap-2 rounded-md border border-border bg-white px-3 py-2 text-sm font-semibold text-ink shadow-card hover:bg-surface-muted"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Family Registration
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.5fr_1fr]">
        {/* Left column */}
        <div className="space-y-5">
          <div className={CARD_CLS}>
            <h3 className="mb-4 text-base font-bold text-ink">Family Details</h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Field label="Family ID (Auto)"><TextInput disabled placeholder="Auto generated" /></Field>
              <Field label="Date of Registration" required>
                <TextInput type="date" defaultValue={new Date().toISOString().slice(0, 10)} />
              </Field>
              <Field label="Preferred Language">
                <SelectInput defaultValue="English"><option>English</option><option>Tamil</option><option>Malayalam</option></SelectInput>
              </Field>

              <Field label="Head of the Family" required>
                <IconInput icon={Search} placeholder="Search member..." />
              </Field>
              <Field label="Relationship" required>
                <SelectInput><option value="">Select Relationship</option><option>Self</option><option>Spouse</option><option>Parent</option></SelectInput>
              </Field>
              <Field label="Email"><TextInput type="email" placeholder="email@example.com" /></Field>

              <Field label="Phone Number" required><IconInput icon={Phone} placeholder="Enter phone number" /></Field>
              <Field label="Alternate Phone"><IconInput icon={Phone} placeholder="Enter alternate phone" /></Field>
              <Field label="Marital Status">
                <SelectInput><option value="">Select Status</option><option>Single</option><option>Married</option><option>Widowed</option></SelectInput>
              </Field>

              <Field label="Address" required className="sm:col-span-2">
                <textarea rows={3} placeholder="Enter full address" className={inputCls + " resize-y"} />
              </Field>
              <Field label="Pincode" required><TextInput placeholder="Enter pincode" /></Field>

              <Field label="Branch / Church" required>
                <SelectInput value={form.branch} onChange={(e) => set({ branch: e.target.value })}>
                  <option value="">Select Branch / Church</option>
                  <option>St. John's Church, Nagercoil</option>
                </SelectInput>
              </Field>
              <Field label="Family Category">
                <SelectInput value={form.family_category} onChange={(e) => set({ family_category: e.target.value })}>
                  <option value="">Select Category</option>
                  <option>Nuclear</option>
                  <option>Joint</option>
                  <option>Single Parent</option>
                </SelectInput>
              </Field>
              <Field label="Date of Marriage"><TextInput type="date" /></Field>
            </div>

            <div className="mt-4">
              <Field label="Notes">
                <textarea rows={3} placeholder="Enter any additional notes about the family" className={inputCls + " resize-y"} />
              </Field>
            </div>
          </div>

          <div className={CARD_CLS}>
            <FamilyMembersTable members={members} onUpdate={updateMember} onAdd={addMember} onRemove={removeMember} />
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-5">
          <FamilySummaryPreview form={form} memberCount={members.length} />
          <FamilyDocumentsCard />
          <div className="flex items-start gap-2.5 rounded-lg border border-interactive-100 bg-interactive-50 p-4 text-sm text-interactive-700">
            <Info className="mt-0.5 h-4 w-4 shrink-0" />
            <p><span className="font-bold">Note</span><br />Fields marked with * are mandatory. You can edit family details anytime after creation.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3 border-t border-border pt-5">
        <button
          type="button"
          onClick={resetAll}
          className="rounded-md border border-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-muted"
        >
          Reset
        </button>
        <button
          type="button"
          className="flex items-center gap-2 rounded-md bg-interactive-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-interactive-600"
        >
          <Save className="h-4 w-4" /> Save Family
        </button>
      </div>
    </div>
  );
}
