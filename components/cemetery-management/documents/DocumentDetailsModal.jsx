"use client";

import {
  Download, List, Search as SearchIcon, ChevronUp, ChevronDown, Minus, Plus, Printer, MoreVertical,
  FileText, Image as ImageIcon, FileType2, Map, Mail, Receipt, File,
} from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatDate, formatDateTime } from "@/lib/utils";
import { DOCUMENT_TYPE_STYLE } from "@/lib/mock/vmCemeteryDocumentsMockData";

const ICONS = { FileText, Image: ImageIcon, FileType2, Map, Mail, Receipt, File };

function Field({ label, value }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-ink">{value || "–"}</p>
    </div>
  );
}

function SectionTitle({ children }) {
  return <h4 className="mb-3 text-sm font-semibold text-interactive-700">{children}</h4>;
}

export function DocumentDetailsModal({ open, onOpenChange, document: doc, isLoading }) {
  const style = doc ? (DOCUMENT_TYPE_STYLE[doc.documentType] ?? DOCUMENT_TYPE_STYLE.Other) : DOCUMENT_TYPE_STYLE.Other;
  const Icon = ICONS[style.icon] ?? File;

  return (
    <Modal
      open={open} onOpenChange={onOpenChange}
      title="Document Details" description="View detailed information about this document."
      size="xl"
      footer={(
        <>
          <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>Close</Button>
          <Button type="button" variant="primary" leftIcon={<Download className="h-4 w-4" />}>Download</Button>
        </>
      )}
    >
      {isLoading || !doc ? (
        <div className="h-64 animate-pulse rounded-lg bg-surface-muted" />
      ) : (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center gap-3">
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md ${style.bg} ${style.color}`}>
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-base font-semibold text-ink">{doc.documentName}</p>
                <Badge variant="success">{doc.documentType}</Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <Field label="Document ID" value={doc.id} />
              <Field label="Size" value={doc.size} />
              <Field label="Uploaded By" value={doc.uploadedBy} />
              <Field label="Upload Date" value={formatDateTime(doc.uploadDate)} />
            </div>
          </div>

          <div>
            <SectionTitle>Document Information</SectionTitle>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Field label="Document Type" value={doc.documentType} />
              <Field label="Related To" value={doc.relatedTo} />
              <Field label="Related ID" value={doc.relatedId} />
              <Field label="Description" value={doc.description} />
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <SectionTitle>Related Record</SectionTitle>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Field label="Deceased Name" value={doc.related?.deceasedName} />
              <Field label="Date of Death" value={doc.related?.dateOfDeath && doc.related.dateOfDeath !== "-" ? formatDate(doc.related.dateOfDeath) : "–"} />
              <Field label="Burial Record ID" value={doc.related?.burialRecordId} />
              <Field label="Section / Plot" value={doc.related?.sectionPlot} />
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <SectionTitle>File Information</SectionTitle>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Field label="File Name" value={doc.fileName} />
              <Field label="File Type" value={doc.fileType} />
              <Field label="Size" value={doc.size} />
              <Field label="Uploaded By" value={doc.uploadedBy} />
              <Field label="Upload Date" value={formatDateTime(doc.uploadDate)} />
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <SectionTitle>Additional Information</SectionTitle>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Field label="Remarks" value={doc.additional?.remarks} />
              <Field label="Category" value={doc.additional?.category} />
              <div>
                <p className="text-xs text-ink-subtle">Tags</p>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {(doc.additional?.tags ?? []).map((tag) => <Badge key={tag} variant="success">{tag}</Badge>)}
                </div>
              </div>
              <div>
                <p className="text-xs text-ink-subtle">Status</p>
                <Badge variant="success" className="mt-1">{doc.additional?.status}</Badge>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <SectionTitle>Preview</SectionTitle>
            <div className="overflow-hidden rounded-lg border border-border">
              <div className="flex flex-wrap items-center justify-between gap-2 bg-[#1F2937] px-3 py-2 text-white">
                <div className="flex items-center gap-3 text-ink-subtle">
                  <List className="h-4 w-4" />
                  <SearchIcon className="h-4 w-4" />
                  <ChevronUp className="h-4 w-4" />
                  <ChevronDown className="h-4 w-4" />
                  <span className="text-xs">1 / 1</span>
                </div>
                <div className="flex items-center gap-3 text-ink-subtle">
                  <Minus className="h-4 w-4" />
                  <span className="text-xs">100%</span>
                  <Plus className="h-4 w-4" />
                  <Download className="h-4 w-4" />
                  <Printer className="h-4 w-4" />
                  <MoreVertical className="h-4 w-4" />
                </div>
              </div>
              <div className="flex h-56 items-center justify-center bg-[#111827] p-6">
                <div className="flex h-full w-full max-w-xs flex-col items-center justify-center gap-2 border-4 border-double border-white/70 bg-white p-4 text-center">
                  <p className="font-display text-sm font-bold tracking-wide text-ink">BURIAL CERTIFICATE</p>
                  <p className="text-[11px] text-ink-subtle">This is to certify that</p>
                  <p className="font-display text-base font-bold text-ink">{doc.related?.deceasedName ?? doc.documentName}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
