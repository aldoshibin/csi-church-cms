"use client";

import * as React from "react";
import { Upload, Trash2, Info, Pencil } from "lucide-react";
import { TRANSFER_OUT_DOCUMENTS } from "@/components/transfer-out/TransferOutDocumentsChecklistPanel";

function DocumentRow({ doc, file, onSelect, onRemove }) {
  const inputRef = React.useRef(null);
  return (
    <tr className="border-b border-border/60 last:border-0">
      <td className="px-4 py-3 font-medium text-ink">{doc.label}</td>
      <td className="px-4 py-3 text-ink-subtle">{doc.description}</td>
      <td className="px-4 py-3">
        <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${doc.required ? "bg-interactive-50 text-interactive-600" : "bg-surface-muted text-ink-subtle"}`}>
          {doc.required ? "Required" : "Optional"}
        </span>
      </td>
      <td className="px-4 py-3">
        <input ref={inputRef} type="file" accept=".jpg,.jpeg,.png,.pdf" className="hidden" onChange={(e) => e.target.files?.[0] && onSelect(doc.key, e.target.files[0])} />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex items-center gap-1.5 rounded-md border border-interactive-300 px-3 py-1.5 text-xs font-medium text-interactive-600 hover:bg-interactive-50"
        >
          <Upload className="h-3.5 w-3.5" /> {file ? "Change File" : "Upload File"}
        </button>
      </td>
      <td className="px-4 py-3">
        <span className={`text-xs font-medium ${file ? "text-success-600" : "text-warning-600"}`}>{file ? "Uploaded" : "Pending"}</span>
      </td>
      <td className="px-4 py-3 text-right">
        <button type="button" onClick={() => onRemove(doc.key)} disabled={!file} className="flex h-8 w-8 items-center justify-center rounded-md text-danger-500 hover:bg-surface-muted disabled:cursor-not-allowed disabled:opacity-40">
          <Trash2 className="h-4 w-4" />
        </button>
      </td>
    </tr>
  );
}

function SummaryCard({ title, onEdit, rows }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-ink">{title}</h4>
        <button type="button" onClick={onEdit} className="flex items-center gap-1 text-xs font-medium text-interactive-500 hover:underline">
          <Pencil className="h-3 w-3" /> Edit
        </button>
      </div>
      <dl className="space-y-1.5">
        {rows.map(([label, value]) => (
          <div key={label} className="flex justify-between gap-2 text-xs">
            <dt className="text-ink-subtle">{label}</dt>
            <dd className="text-right font-medium text-ink">{value || "—"}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function Step4DocumentsReview({ form, documents, setDocument, removeDocument, fullName, goToStep }) {
  const { register, watch } = form;
  const values = form.getValues();
  const uploadedCount = Object.values(documents).filter(Boolean).length;
  const totalCount = TRANSFER_OUT_DOCUMENTS.length;
  const confirmed = watch("confirmed");

  return (
    <>
      <section className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h2 className="font-display text-base font-semibold text-ink">Documents Upload</h2>
        <p className="mb-4 text-sm text-ink-subtle">Upload the required documents before submitting the transfer out request.</p>

        <div className="overflow-x-auto rounded-md border border-border">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-muted text-left text-xs font-medium uppercase tracking-wide text-ink-subtle">
                <th className="px-4 py-2.5">Document Name</th>
                <th className="px-4 py-2.5">Description</th>
                <th className="px-4 py-2.5">Required</th>
                <th className="px-4 py-2.5">Upload</th>
                <th className="px-4 py-2.5">Status</th>
                <th className="px-4 py-2.5" />
              </tr>
            </thead>
            <tbody>
              {TRANSFER_OUT_DOCUMENTS.map((doc) => (
                <DocumentRow key={doc.key} doc={doc} file={documents[doc.key]} onSelect={setDocument} onRemove={removeDocument} />
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-ink-subtle">Showing 1 to {totalCount} of {totalCount} records</p>

        <div className="mt-4 flex items-start gap-2 rounded-md bg-interactive-50 p-3 text-xs text-interactive-700">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          Accepted formats: JPG, PNG, PDF. Maximum size: 5MB per file.
        </div>
      </section>

      <section className="mt-4 rounded-lg border border-border bg-white p-6 shadow-card">
        <h2 className="font-display text-base font-semibold text-ink">Review &amp; Confirm</h2>
        <p className="mb-4 text-sm text-ink-subtle">Please review all information before submitting the transfer out request.</p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <SummaryCard
            title="Transfer Request"
            onEdit={() => goToStep(1)}
            rows={[
              ["Transfer Out Date", values.transfer_out_date],
              ["Requested By", values.requested_by],
              ["Request Type", values.request_type],
              ["Reason", values.reason_category],
            ]}
          />
          <SummaryCard
            title="Member Information"
            onEdit={() => goToStep(2)}
            rows={[
              ["Member Name", fullName],
              ["Date of Birth", values.date_of_birth],
              ["Membership No.", values.membership_number],
              ["Current Church", values.current_branch_church],
            ]}
          />
          <SummaryCard
            title="Destination Church"
            onEdit={() => goToStep(3)}
            rows={[
              ["Church", values.destination_church_name],
              ["Diocese / Parish", values.destination_diocese_parish],
              ["Delivery", values.certificate_delivery],
              ["Certificate No.", values.transfer_certificate_no],
            ]}
          />
          <SummaryCard
            title="Documents Summary"
            onEdit={() => goToStep(4)}
            rows={[
              ["Total Documents", totalCount],
              ["Uploaded", uploadedCount],
              ["Pending", totalCount - uploadedCount],
              ["Required Status", uploadedCount === totalCount ? "Complete" : "Pending"],
            ]}
          />
        </div>

        <label className="mt-4 flex items-start gap-3">
          <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-border text-interactive-500 focus-visible:ring-interactive-500" {...register("confirmed")} />
          <span className="text-sm text-ink">I have reviewed all information and documents. I confirm that the details are correct and complete.</span>
        </label>

        <div className="mt-3 flex items-start gap-2 rounded-md bg-interactive-50 p-3 text-xs text-interactive-700">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          After submission, this request will be reviewed by the Parish Priest.
        </div>
      </section>
    </>
  );
}
