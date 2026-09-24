"use client";

import { Input, Select } from "@/components/ui/Input";
import {
  SECTION_OPTIONS, PLOT_TYPE_SHORT_OPTIONS, AREA_ZONE_OPTIONS,
  PLOT_STATUS_OPTIONS, AVAILABILITY_OPTIONS, PLOT_CATEGORY_OPTIONS,
} from "@/lib/mock/vmCemeteryMockData";

export function PlotInformationSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Plot Information</h3>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-4">
        <Select label="Section" required value={form.section} onChange={(e) => setField("section", e.target.value)}>
          <option value="">Select section</option>
          {SECTION_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
        </Select>
        <Input label="Row" required value={form.row} onChange={(e) => setField("row", e.target.value)} placeholder="Enter row number" />
        <Input label="Grave No." required value={form.graveNumber} onChange={(e) => setField("graveNumber", e.target.value)} placeholder="Enter grave number" />
        <Select label="Plot Type" required value={form.plotType} onChange={(e) => setField("plotType", e.target.value)}>
          <option value="">Select plot type</option>
          {PLOT_TYPE_SHORT_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
        </Select>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">
            Plot Size (Dimensions)<span className="ml-0.5 text-danger-500">*</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              value={form.length} onChange={(e) => setField("length", e.target.value)} placeholder="Length (ft)"
              className="h-10 w-full rounded-md border border-border bg-white px-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
            />
            <span className="text-sm text-ink-subtle">x</span>
            <input
              value={form.width} onChange={(e) => setField("width", e.target.value)} placeholder="Width (ft)"
              className="h-10 w-full rounded-md border border-border bg-white px-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
            />
          </div>
        </div>
        <Input label="Depth (ft)" value={form.depth} onChange={(e) => setField("depth", e.target.value)} placeholder="Enter depth" />
        <Input label="Area (sq.ft)" value={form.area} disabled placeholder="Enter area" helperText="Calculated automatically" />
        <Select label="Area / Zone" value={form.areaZone} onChange={(e) => setField("areaZone", e.target.value)}>
          <option value="">Select area / zone</option>
          {AREA_ZONE_OPTIONS.map((a) => <option key={a} value={a}>{a}</option>)}
        </Select>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-4">
        <Select label="Plot Status" required value={form.status} onChange={(e) => setField("status", e.target.value)}>
          <option value="">Select status</option>
          {PLOT_STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
        </Select>
        <Select label="Availability" required value={form.availability} onChange={(e) => setField("availability", e.target.value)}>
          <option value="">Select availability</option>
          {AVAILABILITY_OPTIONS.map((a) => <option key={a} value={a}>{a}</option>)}
        </Select>
        <Select label="Plot Category" value={form.category} onChange={(e) => setField("category", e.target.value)}>
          <option value="">Select category</option>
          {PLOT_CATEGORY_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}
        </Select>
        <Input
          label="Maintenance Fee" value={form.maintenanceFee} onChange={(e) => setField("maintenanceFee", e.target.value)}
          placeholder="Enter amount" leftIcon={<span className="text-sm">&#8377;</span>}
        />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Select label="Assigned To (Optional)" value={form.assignedTo} onChange={(e) => setField("assignedTo", e.target.value)}>
          <option value="">Select member / family</option>
        </Select>
        <Input label="Remarks" value={form.remarks} onChange={(e) => setField("remarks", e.target.value)} placeholder="Enter any remarks" />
      </div>
    </div>
  );
}
