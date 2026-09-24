"use client";

import { Input, Select } from "@/components/ui/Input";
import { PLACE_OF_BURIAL_OPTIONS, PLOT_TYPE_OPTIONS } from "@/lib/mock/vmDeceasedMockData";
import { SECTION_OPTIONS } from "@/lib/mock/vmCemeteryMockData";

export function DeceasedBurialInformationSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Burial Information</h3>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Select label="Place of Burial" required value={form.placeOfBurial} onChange={(e) => setField("placeOfBurial", e.target.value)}>
          <option value="">Select cemetery</option>
          {PLACE_OF_BURIAL_OPTIONS.map((p) => <option key={p} value={p}>{p}</option>)}
        </Select>
        <Select label="Section / Plot" required value={form.sectionPlot} onChange={(e) => setField("sectionPlot", e.target.value)}>
          <option value="">Select section / plot</option>
          {SECTION_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
        </Select>
        <Select label="Type of Plot" value={form.plotType} onChange={(e) => setField("plotType", e.target.value)}>
          <option value="">Select plot type</option>
          {PLOT_TYPE_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
        </Select>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Input label="Depth (ft)" value={form.depth} onChange={(e) => setField("depth", e.target.value)} placeholder="Enter depth (ft)" />
        <Input label="Priest / Pastor" value={form.priestPastor} onChange={(e) => setField("priestPastor", e.target.value)} placeholder="Enter priest / pastor name" />
        <Input label="Conducted By" value={form.conductedBy} onChange={(e) => setField("conductedBy", e.target.value)} placeholder="Enter conducted by" />
      </div>
    </div>
  );
}
