"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight, ArrowLeft, Info, Save, ChevronDown } from "lucide-react";
import { MemberSummaryPreview } from "@/components/member-management/MemberSummaryPreview";
import { MemberDocumentsCard } from "@/components/member-management/MemberDocumentsCard";
import { MemberRoleSelector } from "@/components/member-management/MemberRoleSelector";

/* ---- local field primitives, kept self-contained so this page doesn't
   guess at ui/Select or ui/Textarea components that may not exist yet
   in this exact shape elsewhere in the project ---- */
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

export default function AddNewMemberPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    full_name: "",
    member_type: "",
    branch: "",
    phone_code: "91",
    phone: "",
    status: "Active",
    role: "member",
  });

  const set = (patch) => setForm((prev) => ({ ...prev, ...patch }));

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-ink">Add New Member</h1>
          <p className="mt-1 flex items-center gap-1.5 text-sm">
            <Link href="/members" className="text-interactive-500 hover:underline">Member Management</Link>
            <ChevronRight className="h-3.5 w-3.5 text-ink-subtle" />
            <Link href="/members" className="text-interactive-500 hover:underline">Member List</Link>
            <ChevronRight className="h-3.5 w-3.5 text-ink-subtle" />
            <span className="text-ink-subtle">Add New Member</span>
          </p>
        </div>
        <button
          type="button"
          onClick={() => router.push("/members")}
          className="flex items-center gap-2 rounded-md border border-border bg-white px-3 py-2 text-sm font-semibold text-ink shadow-card hover:bg-surface-muted"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Member Management
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_380px]">
        {/* Left column */}
        <div className="space-y-5">
          <MemberSummaryPreview form={form} />
          <MemberDocumentsCard />
          <div className="flex items-start gap-2.5 rounded-lg border border-interactive-100 bg-interactive-50 p-4 text-sm text-interactive-700">
            <Info className="mt-0.5 h-4 w-4 shrink-0" />
            <p><span className="font-bold">Note</span><br />Complete the required details before saving. You can edit ministry and document details later.</p>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-5">
          <div className={CARD_CLS}>
            <div className="mb-4 flex items-start justify-between gap-3">
              <h3 className="text-base font-bold text-ink">Personal Details</h3>
              <p className="text-right text-xs text-ink-subtle">Fields marked with <span className="text-danger-500">*</span> are required</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Field label="Member ID (Auto)"><TextInput disabled placeholder="Auto generated" /></Field>
              <Field label="Date of Registration" required><TextInput type="date" defaultValue={new Date().toISOString().slice(0, 10)} /></Field>
              <Field label="Member Type" required>
                <SelectInput value={form.member_type} onChange={(e) => set({ member_type: e.target.value })}>
                  <option value="">Select member type</option>
                  <option>Individual</option>
                  <option>Family</option>
                </SelectInput>
              </Field>

              <Field label="Full Name" required>
                <TextInput placeholder="Enter full name" value={form.full_name} onChange={(e) => set({ full_name: e.target.value })} />
              </Field>
              <Field label="Email Address" required><TextInput type="email" placeholder="email@example.com" /></Field>
              <Field label="Phone Number" required>
                <div className="flex gap-1.5">
                  <SelectInput className="w-20" value={form.phone_code} onChange={(e) => set({ phone_code: e.target.value })}>
                    <option value="91">IN +91</option>
                    <option value="1">US +1</option>
                    <option value="44">UK +44</option>
                  </SelectInput>
                  <TextInput
                    placeholder="98765 43210"
                    value={form.phone}
                    onChange={(e) => set({ phone: e.target.value })}
                    className="flex-1"
                  />
                </div>
              </Field>

              <Field label="Gender" required>
                <SelectInput><option value="">Select gender</option><option>Male</option><option>Female</option></SelectInput>
              </Field>
              <Field label="Date of Birth"><TextInput type="date" /></Field>
              <Field label="Marital Status">
                <SelectInput><option value="">Select status</option><option>Single</option><option>Married</option><option>Widowed</option></SelectInput>
              </Field>
            </div>

            <div className="mt-4">
              <Field label="Address">
                <textarea rows={3} placeholder="Enter full address" className={inputCls + " resize-y"} />
              </Field>
            </div>
          </div>

          <div className={CARD_CLS}>
            <h3 className="mb-4 text-base font-bold text-ink">Church & Family Details</h3>

            <MemberRoleSelector value={form.role} onChange={(role) => set({ role })} />

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Field label="Branch / Church" required>
                <SelectInput value={form.branch} onChange={(e) => set({ branch: e.target.value })}>
                  <option value="">Select branch</option>
                  <option>St. John's Church, Nagercoil</option>
                </SelectInput>
              </Field>
              <Field label="Family ID / Family Head"><TextInput placeholder="Search or enter family ID" /></Field>
              <Field label="Occupation"><TextInput placeholder="Enter occupation" /></Field>
            </div>

            <div className="mt-4 sm:w-1/3">
              <Field label="Preferred Language">
                <SelectInput defaultValue="English"><option>English</option><option>Tamil</option><option>Malayalam</option></SelectInput>
              </Field>
            </div>

            <div className="mt-4">
              <Field label="Notes">
                <textarea rows={3} placeholder="Enter additional notes about the member" className={inputCls + " resize-y"} />
              </Field>
            </div>
          </div>

          <div className={CARD_CLS}>
            <h3 className="mb-4 text-base font-bold text-ink">Sacrament & Ministry Details</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Field label="Baptism Status">
                <SelectInput defaultValue="Baptized"><option>Baptized</option><option>Not Baptized</option></SelectInput>
              </Field>
              <Field label="Confirmation Status">
                <SelectInput defaultValue="Confirmed"><option>Confirmed</option><option>Not Confirmed</option></SelectInput>
              </Field>
              <Field label="Primary Ministry">
                <SelectInput defaultValue="Youth Fellowship">
                  <option>Youth Fellowship</option>
                  <option>Women's Fellowship</option>
                  <option>Men's Fellowship</option>
                  <option>Choir & Worship Team</option>
                </SelectInput>
              </Field>
            </div>
            <div className="mt-4 sm:w-1/3">
              <Field label="Status">
                <SelectInput value={form.status} onChange={(e) => set({ status: e.target.value })}>
                  <option>Active</option>
                  <option>Inactive</option>
                </SelectInput>
              </Field>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setForm({ full_name: "", member_type: "", branch: "", phone_code: "91", phone: "", status: "Active", role: "member" })}
              className="rounded-md border border-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-muted"
            >
              Reset
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-md bg-interactive-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-interactive-600"
            >
              <Save className="h-4 w-4" /> Save Member
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
