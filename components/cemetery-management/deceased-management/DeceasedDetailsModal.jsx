"use client";

import { User, Pencil } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatDate, formatDateTime } from "@/lib/utils";
import { DECEASED_STATUS_VARIANT } from "@/lib/mock/vmDeceasedMockData";

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

export function DeceasedDetailsModal({ open, onOpenChange, record, isLoading }) {
  return (
    <Modal
      open={open} onOpenChange={onOpenChange}
      title="Deceased Details" description="View detailed information about the deceased record."
      size="xl"
      footer={(
        <>
          <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>Close</Button>
          <Button type="button" variant="success" leftIcon={<Pencil className="h-4 w-4" />}>Edit Record</Button>
        </>
      )}
    >
      {isLoading || !record ? (
        <div className="h-64 animate-pulse rounded-lg bg-surface-muted" />
      ) : (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-success-50 text-sm font-semibold text-success-700">
                {record.fullName?.split(" ").filter((w) => /^[A-Z]/.test(w)).slice(0, 2).map((w) => w[0]).join("") || <User className="h-5 w-5" />}
              </span>
              <div>
                <p className="text-base font-semibold text-ink">{record.fullName}</p>
                <Badge variant={DECEASED_STATUS_VARIANT[record.status] ?? "default"}>{record.status}</Badge>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <Field label="Gender" value={record.gender} />
              <Field label="Date of Death" value={formatDate(record.dateOfDeath)} />
              <Field label="Age at Death" value={record.ageAtDeath ? `${record.ageAtDeath} Years` : undefined} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 border-b border-border pb-5 sm:grid-cols-4">
            <Field label="Record ID" value={record.recordId} />
            <Field label="Burial Record ID" value={record.burialRecordId} />
            <Field label="Date of Burial" value={formatDate(record.dateOfBurial)} />
            <Field label="Section / Plot" value={`${record.section} / ${record.plotNumber}`} />
          </div>

          <div>
            <SectionTitle>Personal Information</SectionTitle>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Field label="Full Name" value={record.personal.fullName} />
              <Field label="Father's Name" value={record.personal.fatherName} />
              <Field label="Spouse Name" value={record.personal.spouseName} />
              <Field label="Date of Birth" value={formatDate(record.personal.dateOfBirth)} />
              <Field label="Mother's Name" value={record.personal.motherName} />
              <Field label="No. of Children" value={record.personal.numberOfChildren} />
              <Field label="Nationality" value={record.personal.nationality} />
              <Field label="Marital Status" value={record.personal.maritalStatus} />
              <Field label="Occupation" value={record.personal.occupation} />
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <SectionTitle>Contact Information</SectionTitle>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Field label="Address" value={record.contact.address} />
              <Field label="Phone Number" value={record.contact.phone} />
              <Field label="Alternate Phone" value={record.contact.alternatePhone} />
              <Field label="Email" value={record.contact.email} />
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <SectionTitle>Burial Information</SectionTitle>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Field label="Place of Burial" value={record.burial.placeOfBurial} />
              <Field label="Type of Plot" value={record.burial.plotType} />
              <Field label="Priest / Pastor" value={record.burial.priestPastor} />
              <Field label="Depth" value={record.burial.depth} />
              <Field label="Remarks" value={record.burial.remarks} />
              <Field label="Conducted By" value={record.burial.conductedBy} />
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <SectionTitle>Additional Information</SectionTitle>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Field label="Created By" value={record.additional.createdBy} />
              <Field label="Created On" value={formatDateTime(record.additional.createdOn)} />
              <Field label="Last Updated On" value={formatDateTime(record.additional.updatedOn)} />
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
