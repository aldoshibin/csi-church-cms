"use client";

import Link from "next/link";
import { User, Phone, Mail, MapPin, Upload, X, Save } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import {
  STUDENT_BLOOD_GROUP_OPTIONS, STUDENT_STATE_OPTIONS, STUDENT_RELATIONSHIP_OPTIONS,
  STUDENT_CLASS_OPTIONS, STUDENT_AGE_GROUP_OPTIONS, STUDENT_GRADE_LEVEL_OPTIONS,
} from "@/lib/mock/studentsMockData";

export function NewStudentForm({ form, setField, age, isSubmitting, onSubmit }) {
  const handlePhoto = (e) => {
    const file = e.target.files?.[0];
    if (file) setField("photoName", file.name);
  };

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Personal Information</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Input
          label="First Name" required placeholder="Enter first name" leftIcon={<User className="h-4 w-4" />}
          value={form.firstName} onChange={(e) => setField("firstName", e.target.value)}
        />
        <Input
          label="Middle Name" placeholder="Enter middle name" leftIcon={<User className="h-4 w-4" />}
          value={form.middleName} onChange={(e) => setField("middleName", e.target.value)}
        />
        <Input
          label="Last Name" required placeholder="Enter last name" leftIcon={<User className="h-4 w-4" />}
          value={form.lastName} onChange={(e) => setField("lastName", e.target.value)}
        />

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Gender <span className="text-danger-500">*</span></label>
          <div className="flex h-[42px] items-center gap-5">
            {["Male", "Female", "Other"].map((g) => (
              <label key={g} className="flex items-center gap-2 text-sm text-ink">
                <input type="radio" name="student-gender" className="h-4 w-4 accent-interactive-500" checked={form.gender === g} onChange={() => setField("gender", g)} />
                {g}
              </label>
            ))}
          </div>
        </div>
        <Input
          label="Date of Birth" required type="date"
          value={form.dob} onChange={(e) => setField("dob", e.target.value)}
        />
        <Input label="Age" value={age ? String(age) : ""} placeholder="Auto calculated" disabled />

        <Select
          label="Blood Group"
          value={form.bloodGroup} onChange={(e) => setField("bloodGroup", e.target.value)}
        >
          <option value="">Select blood group</option>
          {STUDENT_BLOOD_GROUP_OPTIONS.map((b) => <option key={b}>{b}</option>)}
        </Select>
        <Input
          label="Phone Number" required type="tel" placeholder="Enter phone number" leftIcon={<Phone className="h-4 w-4" />}
          value={form.phone} onChange={(e) => setField("phone", e.target.value)}
        />
        <Input
          label="Email Address" type="email" placeholder="Enter email address" leftIcon={<Mail className="h-4 w-4" />}
          value={form.email} onChange={(e) => setField("email", e.target.value)}
        />

        <Input
          label="Address" placeholder="Enter full address" leftIcon={<MapPin className="h-4 w-4" />}
          value={form.address} onChange={(e) => setField("address", e.target.value)}
        />
        <Input
          label="City" placeholder="Enter city"
          value={form.city} onChange={(e) => setField("city", e.target.value)}
        />
        <Select
          label="State"
          value={form.state} onChange={(e) => setField("state", e.target.value)}
        >
          <option value="">Select state</option>
          {STUDENT_STATE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </Select>

        <Input
          label="Pin Code" placeholder="Enter pin code"
          value={form.pinCode} onChange={(e) => setField("pinCode", e.target.value)}
        />
        <Input
          label="Parent / Guardian Name" required placeholder="Enter parent / guardian name" leftIcon={<User className="h-4 w-4" />}
          value={form.guardianName} onChange={(e) => setField("guardianName", e.target.value)}
        />
        <Select
          label="Relationship" required
          value={form.relationship} onChange={(e) => setField("relationship", e.target.value)}
        >
          <option value="">Select relationship</option>
          {STUDENT_RELATIONSHIP_OPTIONS.map((r) => <option key={r}>{r}</option>)}
        </Select>

        <Input
          label="Parent / Guardian Phone" required type="tel" placeholder="Enter phone number" leftIcon={<Phone className="h-4 w-4" />}
          value={form.guardianPhone} onChange={(e) => setField("guardianPhone", e.target.value)}
        />
        <Input
          label="Parent / Guardian Email" type="email" placeholder="Enter email address" leftIcon={<Mail className="h-4 w-4" />}
          value={form.guardianEmail} onChange={(e) => setField("guardianEmail", e.target.value)}
        />
      </div>

      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">Class Information</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Select
          label="Class" required
          value={form.className} onChange={(e) => setField("className", e.target.value)}
        >
          <option value="">Select class</option>
          {STUDENT_CLASS_OPTIONS.map((c) => <option key={c}>{c}</option>)}
        </Select>
        <Select
          label="Age Group" required
          value={form.ageGroup} onChange={(e) => setField("ageGroup", e.target.value)}
        >
          <option value="">Select age group</option>
          {STUDENT_AGE_GROUP_OPTIONS.map((a) => <option key={a}>{a}</option>)}
        </Select>
        <Select
          label="Grade / Level"
          value={form.gradeLevel} onChange={(e) => setField("gradeLevel", e.target.value)}
        >
          <option value="">Select grade or level</option>
          {STUDENT_GRADE_LEVEL_OPTIONS.map((g) => <option key={g}>{g}</option>)}
        </Select>

        <Input
          label="Date of Joining" required type="date"
          value={form.dateOfJoining} onChange={(e) => setField("dateOfJoining", e.target.value)}
        />
        <Input
          label="Referred By (Optional)" placeholder="Enter name (if any)"
          value={form.referredBy} onChange={(e) => setField("referredBy", e.target.value)}
        />
        <Textarea
          label="Notes (Optional)" rows={1} maxLength={250} placeholder="Enter any additional notes"
          helperText={`${form.notes.length}/250`}
          value={form.notes} onChange={(e) => setField("notes", e.target.value)}
        />
      </div>

      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-medium text-ink">Photo (Optional)</label>
        <label className="flex h-[90px] w-full max-w-sm cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border text-ink-subtle hover:border-interactive-300 hover:bg-interactive-50">
          <Upload className="h-4 w-4" />
          <span className="text-sm">{form.photoName || "Click to upload photo"}</span>
          <input type="file" className="hidden" accept=".jpg,.jpeg,.png,.gif" onChange={handlePhoto} />
        </label>
        <p className="mt-1.5 text-xs text-ink-subtle">JPG, PNG or GIF (Max. 2MB)</p>
      </div>

      <div className="mt-7 flex items-center justify-end gap-3 border-t border-border pt-5">
        <Link href="/sunday-school/students">
          <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
        </Link>
        <Button type="button" isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />} onClick={onSubmit}>
          Save Student
        </Button>
      </div>
    </div>
  );
}
