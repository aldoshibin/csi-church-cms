"use client";

import { Zap } from "lucide-react";
import { Input, Select } from "@/components/ui/Input";
import { CANCELLATION_POLICY_OPTIONS } from "@/lib/mock/vmFacilitiesMockData";

export function UsageInformationSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <div className="flex items-center gap-2">
        <Zap className="h-4 w-4 text-interactive-600" />
        <h3 className="text-base font-semibold text-ink">Usage Information</h3>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Input label="Number of Doors" type="number" placeholder="Enter number of doors" value={form.numberOfDoors} onChange={(e) => setField("numberOfDoors", e.target.value)} />
        <Input label="Number of Windows" type="number" placeholder="Enter number of windows" value={form.numberOfWindows} onChange={(e) => setField("numberOfWindows", e.target.value)} />
        <Input label="Total Area (sq ft)" placeholder="Enter total area" value={form.totalArea} onChange={(e) => setField("totalArea", e.target.value)} />
        <Input label="Max Booking Hours / Day" placeholder="Enter max booking hours" value={form.maxBookingHours} onChange={(e) => setField("maxBookingHours", e.target.value)} />
        <Input label="Advance Booking Days" placeholder="Enter advance booking days" value={form.advanceBookingDays} onChange={(e) => setField("advanceBookingDays", e.target.value)} />
        <Select label="Cancellation Policy" value={form.cancellationPolicy} onChange={(e) => setField("cancellationPolicy", e.target.value)}>
          <option value="">Select cancellation policy</option>
          {CANCELLATION_POLICY_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}
        </Select>
      </div>
    </div>
  );
}
