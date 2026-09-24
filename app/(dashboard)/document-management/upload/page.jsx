"use client";

import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useUploadDocumentManagementForm } from "@/hooks/useUploadDocumentManagementForm";
import { UploadFileDropzone } from "@/components/document-management/UploadFileDropzone";
import { DocumentGuidelinesCard } from "@/components/document-management/DocumentGuidelinesCard";
import { DocumentTypeExamplesCard } from "@/components/document-management/DocumentTypeExamplesCard";
import {
  DOCUMENT_TYPE_OPTIONS, CATEGORY_OPTIONS, FOLDER_OPTIONS,
  ACCESS_LEVEL_OPTIONS, ALLOWED_FOR_OPTIONS, PERMISSIONS_OPTIONS,
  DOCUMENT_GUIDELINES_MOCK, DOCUMENT_TYPE_EXAMPLES_MOCK,
} from "@/lib/mock/vmDocumentManagementMockData";

const UPLOADED_ON_LABEL = "May 28, 2026 11:45 AM";

export default function UploadDocumentPage() {
  const { form, setField, file, setFile, isSubmitting, submit } = useUploadDocumentManagementForm();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-ink">Upload Document</h1>
        <p className="mt-1 text-sm text-ink-subtle">Upload a new document to the system. Fill in the details and select the file to upload.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <form
          onSubmit={(e) => { e.preventDefault(); submit(); }}
          className="flex flex-col gap-6 rounded-lg border border-border bg-white p-6 shadow-card"
        >
          <div>
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">Document Information</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Input
                label="Document Name" required placeholder="Enter document name"
                value={form.documentName} onChange={(e) => setField("documentName", e.target.value)}
              />
              <Select
                label="Document Type" required
                value={form.documentType} onChange={(e) => setField("documentType", e.target.value)}
              >
                <option value="">Select document type</option>
                {DOCUMENT_TYPE_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
              </Select>
              <Select
                label="Category" required
                value={form.category} onChange={(e) => setField("category", e.target.value)}
              >
                <option value="">Select category</option>
                {CATEGORY_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}
              </Select>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Select
                label="Folder"
                value={form.folder} onChange={(e) => setField("folder", e.target.value)}
              >
                <option value="">Select folder (or create new)</option>
                {FOLDER_OPTIONS.map((f) => <option key={f} value={f}>{f}</option>)}
              </Select>
              <Input
                label="Tags" placeholder="Enter tags separated by comma (e.g., invoice, report)"
                value={form.tags} onChange={(e) => setField("tags", e.target.value)}
              />
              <div>
                <Textarea
                  label="Reference / Description" placeholder="Enter description (optional)"
                  maxLength={250} rows={3}
                  value={form.description} onChange={(e) => setField("description", e.target.value)}
                />
                <p className="mt-1 text-right text-xs text-ink-subtle">{form.description.length}/250</p>
              </div>
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">
              Upload File <span className="text-danger-500">*</span>
            </label>
            <UploadFileDropzone file={file} onFileChange={setFile} />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Input label="Uploaded By" value="Parish Office (Admin)" disabled />
            <Input label="Uploaded On" value={UPLOADED_ON_LABEL} disabled />
            <Input
              label="Expiry Date (Optional)" type="date"
              value={form.expiryDate} onChange={(e) => setField("expiryDate", e.target.value)}
            />
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">Access & Permissions</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Select
                label="Access Level" required
                value={form.accessLevel} onChange={(e) => setField("accessLevel", e.target.value)}
              >
                <option value="">Select access level</option>
                {ACCESS_LEVEL_OPTIONS.map((a) => <option key={a} value={a}>{a}</option>)}
              </Select>
              <Select
                label="Allowed For" required
                value={form.allowedFor} onChange={(e) => setField("allowedFor", e.target.value)}
              >
                <option value="">Select users / roles / groups</option>
                {ALLOWED_FOR_OPTIONS.map((a) => <option key={a} value={a}>{a}</option>)}
              </Select>
              <Select
                label="Permissions" required
                value={form.permissions} onChange={(e) => setField("permissions", e.target.value)}
              >
                <option value="">Select permissions</option>
                {PERMISSIONS_OPTIONS.map((p) => <option key={p} value={p}>{p}</option>)}
              </Select>
            </div>

            <label className="mt-4 flex items-start gap-2.5 text-sm">
              <input
                type="checkbox" className="mt-0.5 h-4 w-4 rounded border-border text-interactive-500 focus-visible:ring-interactive-500"
                checked={form.notifyUsers} onChange={(e) => setField("notifyUsers", e.target.checked)}
              />
              <span>
                <span className="font-medium text-ink">Notify users</span>{" "}
                <span className="text-ink-muted">about this document.</span>
                <p className="text-xs text-ink-subtle">An email notification will be sent to the selected users.</p>
              </span>
            </label>
          </div>

          <div className="flex items-center justify-end gap-3 border-t border-border pt-5">
            <Button type="button" variant="secondary">Cancel</Button>
            <Button type="submit" variant="primary" isLoading={isSubmitting}>Upload Document</Button>
          </div>
        </form>

        <div className="flex flex-col gap-6">
          <DocumentGuidelinesCard guidelines={DOCUMENT_GUIDELINES_MOCK} />
          <DocumentTypeExamplesCard types={DOCUMENT_TYPE_EXAMPLES_MOCK} />
        </div>
      </div>
    </div>
  );
}
