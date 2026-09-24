"use client";

import Link from "next/link";
import { useState } from "react";
import { User, Phone, Mail, MapPin, Lock, Eye, EyeOff, Upload, X, Save } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ClassesToTeachSelect } from "./ClassesToTeachSelect";
import {
  TEACHER_MARITAL_STATUS_OPTIONS, TEACHER_STATE_OPTIONS, TEACHER_QUALIFICATION_OPTIONS, TEACHER_EMPLOYMENT_TYPE_OPTIONS,
} from "@/lib/mock/teachersMockData";

export function NewTeacherForm({ form, setField, toggleClassToTeach, isSubmitting, onSubmit }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePhoto = (e) => {
    const file = e.target.files?.[0];
    if (file) setField("photoName", file.name);
  };

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Personal Information</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Input label="First Name" required placeholder="Enter first name" leftIcon={<User className="h-4 w-4" />} value={form.firstName} onChange={(e) => setField("firstName", e.target.value)} />
        <Input label="Middle Name" placeholder="Enter middle name" leftIcon={<User className="h-4 w-4" />} value={form.middleName} onChange={(e) => setField("middleName", e.target.value)} />
        <Input label="Last Name" required placeholder="Enter last name" leftIcon={<User className="h-4 w-4" />} value={form.lastName} onChange={(e) => setField("lastName", e.target.value)} />

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Gender <span className="text-danger-500">*</span></label>
          <div className="flex h-[42px] items-center gap-5">
            {["Male", "Female", "Other"].map((g) => (
              <label key={g} className="flex items-center gap-2 text-sm text-ink">
                <input type="radio" name="teacher-gender" className="h-4 w-4 accent-interactive-500" checked={form.gender === g} onChange={() => setField("gender", g)} />
                {g}
              </label>
            ))}
          </div>
        </div>
        <Input label="Date of Birth" required type="date" value={form.dob} onChange={(e) => setField("dob", e.target.value)} />
        <Select label="Marital Status" value={form.maritalStatus} onChange={(e) => setField("maritalStatus", e.target.value)}>
          <option value="">Select marital status</option>
          {TEACHER_MARITAL_STATUS_OPTIONS.map((m) => <option key={m}>{m}</option>)}
        </Select>

        <Input label="Phone Number" required type="tel" placeholder="Enter phone number" leftIcon={<Phone className="h-4 w-4" />} value={form.phone} onChange={(e) => setField("phone", e.target.value)} />
        <Input label="Email Address" required type="email" placeholder="Enter email address" leftIcon={<Mail className="h-4 w-4" />} value={form.email} onChange={(e) => setField("email", e.target.value)} />
        <Input label="Alternate Phone" type="tel" placeholder="Enter alternate phone" leftIcon={<Phone className="h-4 w-4" />} value={form.alternatePhone} onChange={(e) => setField("alternatePhone", e.target.value)} />

        <Input label="Address" required placeholder="Enter full address" leftIcon={<MapPin className="h-4 w-4" />} value={form.address} onChange={(e) => setField("address", e.target.value)} />
        <Input label="City" required placeholder="Enter city" value={form.city} onChange={(e) => setField("city", e.target.value)} />
        <Select label="State" required value={form.state} onChange={(e) => setField("state", e.target.value)}>
          <option value="">Select state</option>
          {TEACHER_STATE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </Select>

        <Input label="Pin Code" required placeholder="Enter pin code" value={form.pinCode} onChange={(e) => setField("pinCode", e.target.value)} />
      </div>

      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">Professional Information</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Select label="Qualification" required value={form.qualification} onChange={(e) => setField("qualification", e.target.value)}>
          <option value="">Select qualification</option>
          {TEACHER_QUALIFICATION_OPTIONS.map((q) => <option key={q}>{q}</option>)}
        </Select>
        <Input label="Specialization / Subject" required placeholder="Enter specialization or subject" value={form.specialization} onChange={(e) => setField("specialization", e.target.value)} />
        <Input label="Years of Experience" required type="number" placeholder="Enter years of experience" value={form.yearsOfExperience} onChange={(e) => setField("yearsOfExperience", e.target.value)} />

        <Input label="Previous Organization (Optional)" placeholder="Enter previous organization" value={form.previousOrganization} onChange={(e) => setField("previousOrganization", e.target.value)} />
        <Select label="Employment Type" required value={form.employmentType} onChange={(e) => setField("employmentType", e.target.value)}>
          <option value="">Select employment type</option>
          {TEACHER_EMPLOYMENT_TYPE_OPTIONS.map((e) => <option key={e}>{e}</option>)}
        </Select>
        <Input label="Date of Joining" required type="date" value={form.dateOfJoining} onChange={(e) => setField("dateOfJoining", e.target.value)} />
      </div>

      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">Account Information</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Input label="Username" required placeholder="Enter username" value={form.username} onChange={(e) => setField("username", e.target.value)} />
        <Input
          label="Password" required type={showPassword ? "text" : "password"} placeholder="Enter password" leftIcon={<Lock className="h-4 w-4" />}
          rightIcon={
            <button type="button" onClick={() => setShowPassword((v) => !v)} className="pointer-events-auto">
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          }
          value={form.password} onChange={(e) => setField("password", e.target.value)}
        />
        <Input
          label="Confirm Password" required type={showConfirmPassword ? "text" : "password"} placeholder="Confirm password" leftIcon={<Lock className="h-4 w-4" />}
          rightIcon={
            <button type="button" onClick={() => setShowConfirmPassword((v) => !v)} className="pointer-events-auto">
              {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          }
          value={form.confirmPassword} onChange={(e) => setField("confirmPassword", e.target.value)}
        />
      </div>

      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">Additional Information</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <ClassesToTeachSelect value={form.classesToTeach} onToggle={toggleClassToTeach} />
        <Textarea
          label="Notes (Optional)" rows={1} maxLength={250} placeholder="Enter any additional notes"
          helperText={`${form.notes.length}/250`}
          value={form.notes} onChange={(e) => setField("notes", e.target.value)}
        />
      </div>

      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-medium text-ink">Profile Photo (Optional)</label>
        <label className="flex h-[90px] w-full max-w-sm cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border text-ink-subtle hover:border-interactive-300 hover:bg-interactive-50">
          <Upload className="h-4 w-4" />
          <span className="text-sm">{form.photoName || "Click to upload photo"}</span>
          <input type="file" className="hidden" accept=".jpg,.jpeg,.png,.gif" onChange={handlePhoto} />
        </label>
        <p className="mt-1.5 text-xs text-ink-subtle">JPG, PNG or GIF (Max. 2MB)</p>
      </div>

      <div className="mt-7 flex items-center justify-end gap-3 border-t border-border pt-5">
        <Link href="/sunday-school/teachers">
          <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
        </Link>
        <Button type="button" isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />} onClick={onSubmit}>
          Save Teacher
        </Button>
      </div>
    </div>
  );
}
