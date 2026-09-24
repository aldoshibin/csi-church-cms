"use client";

import { Building2 } from "lucide-react";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { FACILITY_LOCATION_OPTIONS, FACILITY_CATEGORY_OPTIONS, FACILITY_TYPE_OPTIONS, FACILITY_STATUS_OPTIONS } from "@/lib/mock/vmFacilitiesMockData";

export function FacilityInformationSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <div className="flex items-center gap-2">
        <Building2 className="h-4 w-4 text-interactive-600" />
        <h3 className="text-base font-semibold text-ink">Facility Information</h3>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Input label="Facility Name" required placeholder="Enter facility name" value={form.name} onChange={(e) => setField("name", e.target.value)} />
        <Select label="Location" required value={form.location} onChange={(e) => setField("location", e.target.value)}>
          <option value="">Select location</option>
          {FACILITY_LOCATION_OPTIONS.map((l) => <option key={l} value={l}>{l}</option>)}
        </Select>
        <Select label="Category" required value={form.category} onChange={(e) => setField("category", e.target.value)}>
          <option value="">Select category</option>
          {FACILITY_CATEGORY_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}
        </Select>
        <Input
          label="Capacity" required type="number" placeholder="Enter capacity"
          value={form.capacity} onChange={(e) => setField("capacity", e.target.value)}
        />
        <Select label="Facility Type" required value={form.facilityType} onChange={(e) => setField("facilityType", e.target.value)}>
          <option value="">Select facility type</option>
          {FACILITY_TYPE_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
        </Select>
        <Select label="Status" required value={form.status} onChange={(e) => setField("status", e.target.value)}>
          <option value="">Select status</option>
          {FACILITY_STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
        </Select>
        <Input
          label="Short Code / ID (Optional)" placeholder="Enter short code (e.g., MH01)"
          value={form.shortCode} onChange={(e) => setField("shortCode", e.target.value)}
        />
        <Textarea
          label="Description (Optional)" rows={1} placeholder="Enter facility description" className="sm:col-span-2"
          value={form.description} onChange={(e) => setField("description", e.target.value)}
        />
      </div>
    </div>
  );
}
