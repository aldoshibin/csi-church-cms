"use client";

import { Building2, Check } from "lucide-react";
import { Input, Select } from "@/components/ui/Input";
import { FACILITY_SELECT_MOCK } from "@/lib/mock/vmFacilitiesMockData";

export function FacilitySelectionSection({ form, setField, selectedFacility }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <div className="flex items-center gap-2">
        <Building2 className="h-4 w-4 text-interactive-600" />
        <h3 className="text-base font-semibold text-ink">Facility Selection</h3>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Select label="Facility" required value={form.facility} onChange={(e) => setField("facility", e.target.value)}>
          <option value="">Select facility</option>
          {FACILITY_SELECT_MOCK.map((f) => <option key={f.name} value={f.name}>{f.name}</option>)}
        </Select>
        <Input label="Location" disabled value={selectedFacility?.location ?? ""} placeholder="Auto-filled from facility" />
        <Input label="Capacity" disabled value={selectedFacility?.capacityLabel ?? ""} placeholder="Auto-filled from facility" />
      </div>

      {selectedFacility && (
        <div className="mt-4">
          <p className="mb-2 text-sm font-medium text-ink">Amenities</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {selectedFacility.amenities.map((a) => (
              <span key={a} className="flex items-center gap-1.5 text-sm text-ink">
                <Check className="h-4 w-4 text-success-600" /> {a}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
