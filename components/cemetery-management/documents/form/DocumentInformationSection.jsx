"use client";

import { FileText } from "lucide-react";
import { Input, Select } from "@/components/ui/Input";
import { DOCUMENT_TYPE_OPTIONS, RELATED_TO_OPTIONS } from "@/lib/mock/vmCemeteryDocumentsMockData";

export function DocumentInformationSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <div className="flex items-center gap-2">
        <FileText className="h-4 w-4 text-interactive-600" />
        <h3 className="text-base font-semibold text-ink">Document Information</h3>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Input
          label="Document Name" required placeholder="Enter document name"
          value={form.documentName} onChange={(e) => setField("documentName", e.target.value)}
        />
        <Select label="Document Type" required value={form.documentType} onChange={(e) => setField("documentType", e.target.value)}>
          <option value="">Select document type</option>
          {DOCUMENT_TYPE_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
        </Select>
        <Select label="Related To" required value={form.relatedTo} onChange={(e) => setField("relatedTo", e.target.value)}>
          <option value="">Select related to</option>
          {RELATED_TO_OPTIONS.map((r) => <option key={r} value={r}>{r}</option>)}
        </Select>
        <Input
          label="Related ID" placeholder="Enter related ID (e.g., DEC-512, PLOT-125)"
          value={form.relatedId} onChange={(e) => setField("relatedId", e.target.value)}
        />
        <Input
          label="Description" placeholder="Enter description (optional)" className="sm:col-span-1"
          value={form.description} onChange={(e) => setField("description", e.target.value)}
        />
        <Input
          label="Tags (Optional)" placeholder="Enter tags separated by commas"
          value={form.tags ?? ""} onChange={(e) => setField("tags", e.target.value)}
        />
      </div>
    </div>
  );
}
