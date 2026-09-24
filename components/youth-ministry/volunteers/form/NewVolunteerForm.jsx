"use client";

import { useState } from "react";
import { User, Phone, Mail, Eye, EyeOff } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import {
  VOL_GENDER_OPTIONS, VOL_MARITAL_STATUS_OPTIONS, VOL_MINISTRY_OPTIONS, VOL_ROLE_OPTIONS,
  VOL_WEEKLY_AVAILABILITY_OPTIONS, VOL_STATUS_OPTIONS,
} from "@/lib/mock/ymVolunteersMockData";

export function NewVolunteerForm({ form, setField }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 flex items-center gap-2 text-base font-semibold text-ink">
          <User className="h-4 w-4 text-interactive-600" /> Personal Information
        </h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
          <div className="sm:col-span-2">
            <Input label="Full Name" required placeholder="Enter full name" value={form.fullName} onChange={(e) => setField("fullName", e.target.value)} />
          </div>
          <Input label="Date of Birth" required type="date" value={form.dob} onChange={(e) => setField("dob", e.target.value)} />
          <Select label="Gender" required value={form.gender} onChange={(e) => setField("gender", e.target.value)}>
            <option value="">Select gender</option>
            {VOL_GENDER_OPTIONS.map((g) => <option key={g}>{g}</option>)}
          </Select>

          <Select label="Marital Status" value={form.maritalStatus} onChange={(e) => setField("maritalStatus", e.target.value)}>
            <option value="">Select status</option>
            {VOL_MARITAL_STATUS_OPTIONS.map((m) => <option key={m}>{m}</option>)}
          </Select>
          <div className="sm:col-span-3" />

          <div className="sm:col-span-2">
            <Input label="Email" required type="email" placeholder="Enter email address" leftIcon={<Mail className="h-4 w-4" />} value={form.email} onChange={(e) => setField("email", e.target.value)} />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1.5 block text-sm font-medium text-ink">Phone Number <span className="text-danger-500">*</span></label>
            <div className="flex">
              <select value={form.countryCode} onChange={(e) => setField("countryCode", e.target.value)} className="h-[42px] w-20 rounded-l-lg border border-r-0 border-border bg-white px-2 text-sm text-ink">
                <option value="+91">🇮🇳 +91</option>
              </select>
              <input value={form.phone} onChange={(e) => setField("phone", e.target.value)} placeholder="Enter phone number" className="h-[42px] flex-1 rounded-r-lg border border-border px-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500" />
            </div>
          </div>

          <div className="sm:col-span-2">
            <Input label="Emergency Contact Name" required placeholder="Enter contact name" value={form.emergencyContactName} onChange={(e) => setField("emergencyContactName", e.target.value)} />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1.5 block text-sm font-medium text-ink">Emergency Contact Phone <span className="text-danger-500">*</span></label>
            <div className="flex">
              <select value={form.emergencyCountryCode} onChange={(e) => setField("emergencyCountryCode", e.target.value)} className="h-[42px] w-20 rounded-l-lg border border-r-0 border-border bg-white px-2 text-sm text-ink">
                <option value="+91">🇮🇳 +91</option>
              </select>
              <input value={form.emergencyContactPhone} onChange={(e) => setField("emergencyContactPhone", e.target.value)} placeholder="Enter phone number" className="h-[42px] flex-1 rounded-r-lg border border-border px-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500" />
            </div>
          </div>

          <div className="sm:col-span-4">
            <Textarea label="Address" required rows={2} placeholder="Enter full address" value={form.address} onChange={(e) => setField("address", e.target.value)} />
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Ministry &amp; Role Information</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Select label="Ministry / Department" required value={form.ministryDept} onChange={(e) => setField("ministryDept", e.target.value)}>
            <option value="">Select ministry / department</option>
            {VOL_MINISTRY_OPTIONS.map((m) => <option key={m}>{m}</option>)}
          </Select>
          <Select label="Role" required value={form.role} onChange={(e) => setField("role", e.target.value)}>
            <option value="">Select role</option>
            {VOL_ROLE_OPTIONS.map((r) => <option key={r}>{r}</option>)}
          </Select>

          <div className="sm:col-span-2">
            <Textarea
              label="Areas of Service / Skills" required rows={2} placeholder="Enter areas of service or skills"
              helperText="E.g., Teaching, Music, Counseling, Event Planning"
              value={form.areasOfService} onChange={(e) => setField("areasOfService", e.target.value)}
            />
          </div>

          <Input label="Service Start Date" required type="date" value={form.serviceStartDate} onChange={(e) => setField("serviceStartDate", e.target.value)} />
          <Select label="Weekly Availability" required value={form.weeklyAvailability} onChange={(e) => setField("weeklyAvailability", e.target.value)}>
            <option value="">Select availability</option>
            {VOL_WEEKLY_AVAILABILITY_OPTIONS.map((a) => <option key={a}>{a}</option>)}
          </Select>

          <div className="sm:col-span-2">
            <Input label="Preferred Days & Time" placeholder="E.g., Sunday 9AM - 1PM" value={form.preferredDaysTime} onChange={(e) => setField("preferredDaysTime", e.target.value)} />
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 flex items-center gap-2 text-base font-semibold text-ink">Account &amp; Status</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
          <Select label="Status" required value={form.status} onChange={(e) => setField("status", e.target.value)}>
            <option value="">Select status</option>
            {VOL_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </Select>
          <Input label="Username (Optional)" placeholder="Enter username" value={form.username} onChange={(e) => setField("username", e.target.value)} />
          <Input
            label="Password (Optional)" type={showPassword ? "text" : "password"} placeholder="Enter password"
            rightIcon={<button type="button" onClick={() => setShowPassword((v) => !v)} className="pointer-events-auto">{showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button>}
            value={form.password} onChange={(e) => setField("password", e.target.value)}
          />
          <Input
            label="Confirm Password (Optional)" type={showConfirmPassword ? "text" : "password"} placeholder="Confirm password"
            rightIcon={<button type="button" onClick={() => setShowConfirmPassword((v) => !v)} className="pointer-events-auto">{showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button>}
            value={form.confirmPassword} onChange={(e) => setField("confirmPassword", e.target.value)}
          />
        </div>
        <label className="mt-4 flex items-center gap-2 text-sm text-ink">
          <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={form.sendWelcomeEmail} onChange={(e) => setField("sendWelcomeEmail", e.target.checked)} />
          Send welcome email to volunteer
        </label>
      </div>
    </div>
  );
}
