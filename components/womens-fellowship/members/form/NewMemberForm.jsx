"use client";

import { Input, Textarea, Select } from "@/components/ui/Input";
import {
  MEM_GENDER_OPTIONS, MEM_MARITAL_STATUS_OPTIONS, MEM_GROUP_OPTIONS, MEM_STATUS_OPTIONS,
  MEM_MINISTRY_FOCUS_OPTIONS, MEM_BLOOD_GROUP_OPTIONS,
} from "@/lib/mock/fellowshipMembersMockData";

export function NewMemberForm({ form, setField, age }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Personal Information</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="sm:col-span-1">
            <Input label="Full Name" required placeholder="Enter full name" value={form.fullName} onChange={(e) => setField("fullName", e.target.value)} />
          </div>
          <Input label="Date of Birth" required type="date" value={form.dob} onChange={(e) => setField("dob", e.target.value)} />
          <Input label="Age" value={age ? String(age) : ""} placeholder="Enter age" disabled />

          <Select label="Gender" required value={form.gender} onChange={(e) => setField("gender", e.target.value)}>
            <option value="">Select gender</option>
            {MEM_GENDER_OPTIONS.map((g) => <option key={g}>{g}</option>)}
          </Select>
          <Select label="Marital Status" value={form.maritalStatus} onChange={(e) => setField("maritalStatus", e.target.value)}>
            <option value="">Select marital status</option>
            {MEM_MARITAL_STATUS_OPTIONS.map((m) => <option key={m}>{m}</option>)}
          </Select>
          <Input label="Spouse Name" placeholder="Enter spouse name" value={form.spouseName} onChange={(e) => setField("spouseName", e.target.value)} />

          <Input label="Phone Number" required type="tel" placeholder="Enter phone number" value={form.phone} onChange={(e) => setField("phone", e.target.value)} />
          <Input label="Email Address" type="email" placeholder="Enter email address" value={form.email} onChange={(e) => setField("email", e.target.value)} />
          <Input label="Alternate Phone" type="tel" placeholder="Enter alternate phone number" value={form.alternatePhone} onChange={(e) => setField("alternatePhone", e.target.value)} />

          <div className="sm:col-span-3">
            <Textarea
              label="Address" required rows={2} maxLength={250} placeholder="Enter full address"
              helperText={`${form.address.length}/250`}
              value={form.address} onChange={(e) => setField("address", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Fellowship Information</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Input label="Date of Joining" required type="date" value={form.dateOfJoining} onChange={(e) => setField("dateOfJoining", e.target.value)} />
          <Select label="Fellowship Group" required value={form.fellowshipGroup} onChange={(e) => setField("fellowshipGroup", e.target.value)}>
            <option value="">Select fellowship group</option>
            {MEM_GROUP_OPTIONS.map((g) => <option key={g}>{g}</option>)}
          </Select>
          <Select label="Member Status" required value={form.memberStatus} onChange={(e) => setField("memberStatus", e.target.value)}>
            <option value="">Select status</option>
            {MEM_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </Select>

          <Select label="Ministry Focus / Interests" value={form.ministryFocus} onChange={(e) => setField("ministryFocus", e.target.value)}>
            <option value="">Select ministry focus or interests</option>
            {MEM_MINISTRY_FOCUS_OPTIONS.map((m) => <option key={m}>{m}</option>)}
          </Select>
          <Input label="Referred By (Optional)" placeholder="Enter name (Optional)" value={form.referredBy} onChange={(e) => setField("referredBy", e.target.value)} />
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Additional Information</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Input label="Occupation" placeholder="Enter occupation" value={form.occupation} onChange={(e) => setField("occupation", e.target.value)} />
          <Input label="Education" placeholder="Enter education" value={form.education} onChange={(e) => setField("education", e.target.value)} />
          <Select label="Blood Group" value={form.bloodGroup} onChange={(e) => setField("bloodGroup", e.target.value)}>
            <option value="">Select blood group</option>
            {MEM_BLOOD_GROUP_OPTIONS.map((b) => <option key={b}>{b}</option>)}
          </Select>

          <div className="sm:col-span-3">
            <Textarea
              label="Notes" rows={2} maxLength={250} placeholder="Enter any additional notes"
              helperText={`${form.notes.length}/250`}
              value={form.notes} onChange={(e) => setField("notes", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
