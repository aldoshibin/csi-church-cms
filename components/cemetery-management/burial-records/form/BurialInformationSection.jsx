"use client";

import { CheckCircle2 } from "lucide-react";
import { Input, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { SECTION_OPTIONS, AREA_ZONE_OPTIONS, SERVICE_TYPE_OPTIONS, RECORDED_BY_OPTIONS } from "@/lib/mock/vmCemeteryMockData";

export function BurialInformationSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Burial Information</h3>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
        <Select label="Section" required value={form.section} onChange={(e) => setField("section", e.target.value)}>
          <option value="">Select section</option>
          {SECTION_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
        </Select>
        <Select label="Plot No." required value={form.plotNumber} onChange={(e) => setField("plotNumber", e.target.value)}>
          <option value="">Select plot</option>
          {["A-12", "A-13", "B-07", "B-08", "C-15", "D-09"].map((p) => <option key={p} value={p}>{p}</option>)}
        </Select>
        <Button type="button" variant="outline" className="border-success-500 text-success-600 hover:bg-success-50" leftIcon={<CheckCircle2 className="h-4 w-4" />}>
          Check Availability
        </Button>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Input label="Row" value={form.row} onChange={(e) => setField("row", e.target.value)} placeholder="Enter row (if applicable)" />
        <Input label="Grave No." value={form.graveNumber} onChange={(e) => setField("graveNumber", e.target.value)} placeholder="Enter grave number (if applicable)" />
        <Select label="Area / Zone" value={form.areaZone} onChange={(e) => setField("areaZone", e.target.value)}>
          <option value="">Select area / zone</option>
          {AREA_ZONE_OPTIONS.map((a) => <option key={a} value={a}>{a}</option>)}
        </Select>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Input type="date" label="Burial Date" required value={form.burialDate} onChange={(e) => setField("burialDate", e.target.value)} />
        <Input type="time" label="Burial Time" value={form.burialTime} onChange={(e) => setField("burialTime", e.target.value)} />
        <Select label="Service Type" value={form.serviceType} onChange={(e) => setField("serviceType", e.target.value)}>
          <option value="">Select service type</option>
          {SERVICE_TYPE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
        </Select>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Select label="Recorded By" required value={form.recordedBy} onChange={(e) => setField("recordedBy", e.target.value)}>
          <option value="">Select recorded by</option>
          {RECORDED_BY_OPTIONS.map((r) => <option key={r} value={r}>{r}</option>)}
        </Select>
        <Input label="Remarks" value={form.remarks} onChange={(e) => setField("remarks", e.target.value)} placeholder="Enter any remarks (optional)" />
      </div>
    </div>
  );
}
