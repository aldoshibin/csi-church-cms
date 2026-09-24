"use client";

import Link from "next/link";
import { User, Phone, Mail, Save, X } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import {
  MARITAL_STATUS_OPTIONS, FELLOWSHIP_GROUP_OPTIONS, GROUP_ROLE_OPTIONS,
} from "@/lib/mock/mensFellowshipMockData";

export function NewMemberForm({ form, setField, memberId, isSubmitting, onSubmit }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Personal Information</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Input
            label="Full Name" required placeholder="Enter full name" leftIcon={<User className="h-4 w-4" />}
            value={form.fullName} onChange={(e) => setField("fullName", e.target.value)}
          />
          <Input label="Member ID (Auto-generated)" value={memberId} disabled helperText="ID will be generated automatically" />
          <Input
            label="Date of Birth" required type="date"
            value={form.dob} onChange={(e) => setField("dob", e.target.value)}
          />

          <Select label="Gender" required value={form.gender} onChange={(e) => setField("gender", e.target.value)}>
            <option value="">Select gender</option>
            {["Male", "Female", "Other"].map((g) => <option key={g}>{g}</option>)}
          </Select>
          <Select label="Marital Status" value={form.maritalStatus} onChange={(e) => setField("maritalStatus", e.target.value)}>
            <option value="">Select marital status</option>
            {MARITAL_STATUS_OPTIONS.map((m) => <option key={m}>{m}</option>)}
          </Select>
          <Input
            label="Spouse Name" placeholder="Enter spouse name (if applicable)"
            value={form.spouseName} onChange={(e) => setField("spouseName", e.target.value)}
          />

          <Input
            label="Email" required type="email" placeholder="Enter email address" leftIcon={<Mail className="h-4 w-4" />}
            value={form.email} onChange={(e) => setField("email", e.target.value)}
          />
          <Input
            label="Phone (Mobile)" required type="tel" placeholder="Enter mobile number" leftIcon={<Phone className="h-4 w-4" />}
            value={form.phone} onChange={(e) => setField("phone", e.target.value)}
          />
          <Input
            label="Phone (Alternate)" type="tel" placeholder="Enter alternate number" leftIcon={<Phone className="h-4 w-4" />}
            value={form.phoneAlternate} onChange={(e) => setField("phoneAlternate", e.target.value)}
          />

          <div className="sm:col-span-3">
            <Textarea
              label="Address" required rows={3} maxLength={500} placeholder="Enter full address"
              helperText={`${form.address.length} / 500 characters`}
              value={form.address} onChange={(e) => setField("address", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Group Details</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Select label="Fellowship Group" required value={form.fellowshipGroup} onChange={(e) => setField("fellowshipGroup", e.target.value)}>
            <option value="">Select fellowship group</option>
            {FELLOWSHIP_GROUP_OPTIONS.map((g) => <option key={g}>{g}</option>)}
          </Select>
          <Select label="Group Role" value={form.groupRole} onChange={(e) => setField("groupRole", e.target.value)}>
            <option value="">Select role</option>
            {GROUP_ROLE_OPTIONS.map((r) => <option key={r}>{r}</option>)}
          </Select>
          <Input
            label="Joined On" required type="date" helperText="Date when the member joined the group"
            value={form.joinedOn} onChange={(e) => setField("joinedOn", e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Additional Information</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Input
            label="Occupation" placeholder="Enter occupation"
            value={form.occupation} onChange={(e) => setField("occupation", e.target.value)}
          />
          <Textarea
            label="Notes (Optional)" rows={1} maxLength={300} placeholder="Add any additional notes about the member"
            helperText={`${form.notes.length} / 300 characters`}
            value={form.notes} onChange={(e) => setField("notes", e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center justify-end gap-3">
        <Link href="/mens-fellowship/members">
          <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
        </Link>
        <Button type="button" isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />} onClick={onSubmit}>
          Save Member
        </Button>
      </div>
    </div>
  );
}
