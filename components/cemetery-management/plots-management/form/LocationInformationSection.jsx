"use client";

import { Input, Select } from "@/components/ui/Input";
import { PATHWAY_ACCESS_OPTIONS } from "@/lib/mock/vmCemeteryMockData";

export function LocationInformationSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Location Information</h3>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-4">
        <Input label="Block" value={form.block} onChange={(e) => setField("block", e.target.value)} placeholder="Enter block" />
        <Select label="Pathway Access" required value={form.pathwayAccess} onChange={(e) => setField("pathwayAccess", e.target.value)}>
          <option value="">Select access</option>
          {PATHWAY_ACCESS_OPTIONS.map((a) => <option key={a} value={a}>{a}</option>)}
        </Select>
        <Input label="Near Landmark / Reference" value={form.landmark} onChange={(e) => setField("landmark", e.target.value)} placeholder="Enter landmark or reference" />
        <Input label="GPS Location (Optional)" value={form.gpsLocation} onChange={(e) => setField("gpsLocation", e.target.value)} placeholder="Enter GPS coordinates" />
      </div>
    </div>
  );
}
