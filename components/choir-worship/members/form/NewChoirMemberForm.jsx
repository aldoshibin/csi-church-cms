"use client";

import { Upload, User, Phone, Mail } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import {
  CHOIR_GENDER_OPTIONS, CHOIR_MARITAL_STATUS_OPTIONS, CHOIR_COUNTRY_OPTIONS,
  CHOIR_VOICE_PART_OPTIONS, CHOIR_ROLE_OPTIONS, CHOIR_TEAM_OPTIONS, CHOIR_STATUS_OPTIONS, CHOIR_RELATIONSHIP_OPTIONS,
} from "@/lib/mock/choirMembersMockData";

export function NewChoirMemberForm({ form, setField, memberId }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Personal Information</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
          <div className="sm:col-span-2">
            <Input label="Full Name" required leftIcon={<User className="h-4 w-4" />} placeholder="Enter full name" value={form.fullName} onChange={(e) => setField("fullName", e.target.value)} />
          </div>
          <Input label="Date of Birth" required type="date" value={form.dob} onChange={(e) => setField("dob", e.target.value)} />
          <Select label="Gender" required value={form.gender} onChange={(e) => setField("gender", e.target.value)}>
            <option value="">Select gender</option>
            {CHOIR_GENDER_OPTIONS.map((g) => <option key={g}>{g}</option>)}
          </Select>

          <Select label="Marital Status" value={form.maritalStatus} onChange={(e) => setField("maritalStatus", e.target.value)}>
            <option value="">Select status</option>
            {CHOIR_MARITAL_STATUS_OPTIONS.map((m) => <option key={m}>{m}</option>)}
          </Select>
          <div className="sm:col-span-3">
            <Textarea label="Address" rows={2} placeholder="Enter full address" value={form.address} onChange={(e) => setField("address", e.target.value)} />
          </div>

          <Input label="City" required placeholder="Enter city" value={form.city} onChange={(e) => setField("city", e.target.value)} />
          <Input label="State" required placeholder="Enter state" value={form.state} onChange={(e) => setField("state", e.target.value)} />
          <Select label="Country" required value={form.country} onChange={(e) => setField("country", e.target.value)}>
            <option value="">Select country</option>
            {CHOIR_COUNTRY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
          </Select>
          <Input label="PIN / ZIP Code" required placeholder="Enter pin / zip code" value={form.pinCode} onChange={(e) => setField("pinCode", e.target.value)} />
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Ministry Information</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
          <Select label="Voice Part" required value={form.voicePart} onChange={(e) => setField("voicePart", e.target.value)}>
            <option value="">Select voice part</option>
            {CHOIR_VOICE_PART_OPTIONS.map((v) => <option key={v}>{v}</option>)}
          </Select>
          <Select label="Role" required value={form.role} onChange={(e) => setField("role", e.target.value)}>
            <option value="">Select role</option>
            {CHOIR_ROLE_OPTIONS.map((r) => <option key={r}>{r}</option>)}
          </Select>
          <Select label="Team" required value={form.team} onChange={(e) => setField("team", e.target.value)}>
            <option value="">Select team</option>
            {CHOIR_TEAM_OPTIONS.map((t) => <option key={t}>{t}</option>)}
          </Select>
          <Input label="Joined Date" required type="date" value={form.joinedDate} onChange={(e) => setField("joinedDate", e.target.value)} />

          <Select label="Status" required value={form.status} onChange={(e) => setField("status", e.target.value)}>
            {CHOIR_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </Select>
          <Input label="Member ID" value={memberId} disabled helperText="Auto generated" />
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Contact Information</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Input label="Phone Number" required type="tel" leftIcon={<Phone className="h-4 w-4" />} placeholder="Enter phone number" value={form.phone} onChange={(e) => setField("phone", e.target.value)} />
          <Input label="Alternate Phone" type="tel" leftIcon={<Phone className="h-4 w-4" />} placeholder="Enter alternate number" value={form.alternatePhone} onChange={(e) => setField("alternatePhone", e.target.value)} />
          <Input label="Email Address" required type="email" leftIcon={<Mail className="h-4 w-4" />} placeholder="Enter email address" value={form.email} onChange={(e) => setField("email", e.target.value)} />

          <Input label="Emergency Contact" placeholder="Enter emergency contact" value={form.emergencyContact} onChange={(e) => setField("emergencyContact", e.target.value)} />
          <Select label="Relationship" value={form.relationship} onChange={(e) => setField("relationship", e.target.value)}>
            <option value="">Select relationship</option>
            {CHOIR_RELATIONSHIP_OPTIONS.map((r) => <option key={r}>{r}</option>)}
          </Select>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Additional Information</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Textarea
            label="Notes" rows={3} maxLength={300} placeholder="Enter any notes (optional)"
            helperText={`${form.notes.length} / 300`}
            value={form.notes} onChange={(e) => setField("notes", e.target.value)}
          />
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">Profile Photo</label>
            <label className="flex h-[calc(100%-1.75rem)] min-h-[110px] cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-border px-4 py-6 text-center hover:bg-surface-canvas">
              <Upload className="h-5 w-5 text-interactive-600" />
              <p className="text-sm text-ink-muted">
                <span className="font-medium text-interactive-600">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-ink-subtle">JPG, PNG (Max. 2MB)</p>
              <input type="file" accept=".jpg,.jpeg,.png" className="hidden" onChange={(e) => setField("photoName", e.target.files?.[0]?.name ?? "")} />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
