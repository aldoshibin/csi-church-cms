"use client";

import { User } from "lucide-react";
import { Input, Textarea } from "@/components/ui/Input";

export function BookerInformationSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <div className="flex items-center gap-2">
        <User className="h-4 w-4 text-interactive-600" />
        <h3 className="text-base font-semibold text-ink">Booker Information</h3>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Input label="Booked By" required placeholder="Enter name" value={form.bookedByName} onChange={(e) => setField("bookedByName", e.target.value)} />
        <Input label="Phone Number" required placeholder="Enter phone number" value={form.bookedByPhone} onChange={(e) => setField("bookedByPhone", e.target.value)} />
        <Input label="Email Address" required type="email" placeholder="Enter email address" value={form.bookedByEmail} onChange={(e) => setField("bookedByEmail", e.target.value)} />
        <Textarea
          label="Address" rows={2} placeholder="Enter address" className="sm:col-span-3"
          value={form.bookedByAddress} onChange={(e) => setField("bookedByAddress", e.target.value)}
        />
      </div>
    </div>
  );
}
