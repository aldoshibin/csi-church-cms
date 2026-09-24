"use client";

import { Phone, Mail, CalendarDays, IdCard, User } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PS_STATUS_VARIANT } from "@/lib/mock/practiceScheduleMockData";
import { formatDate } from "@/lib/utils";

function Row({ label, value }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-ink">{value ?? "—"}</p>
    </div>
  );
}

export function PsMemberDetailModal({ open, onOpenChange, member, isLoading, onEdit }) {
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title="Member Details"
      size="xl"
      footer={
        <>
          <Button type="button" variant="secondary" onClick={() => onEdit?.(member)}>Edit Member</Button>
          <Button type="button" onClick={() => onOpenChange(false)}>Close</Button>
        </>
      }
    >
      {isLoading || !member ? (
        <div className="py-10 text-center text-sm text-ink-subtle">Loading…</div>
      ) : (
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-lg font-semibold text-interactive-600">
              {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-ink">{member.name}</h3>
                <Badge variant={PS_STATUS_VARIANT[member.status] ?? "default"}>{member.status}</Badge>
              </div>
              <p className="mt-0.5 text-sm text-interactive-600">{member.role} · {member.team}</p>
              <div className="mt-2 flex flex-col gap-1 text-sm text-ink-muted sm:flex-row sm:items-center sm:gap-4">
                <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> {member.phone}</span>
                <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" /> {member.email}</span>
              </div>
              <div className="mt-1 flex flex-col gap-1 text-sm text-ink-muted sm:flex-row sm:items-center sm:gap-4">
                <span className="flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" /> Joined on {formatDate(member.joinedOn)}</span>
                <span className="flex items-center gap-1.5"><IdCard className="h-3.5 w-3.5" /> Member ID: {member.id}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-5 border-t border-border pt-5 sm:grid-cols-2">
            <div>
              <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink"><User className="h-4 w-4 text-interactive-600" /> Personal Information</h4>
              <div className="flex flex-col gap-4">
                <Row label="Full Name" value={member.name} />
                <Row label="Date of Birth" value={formatDate(member.dob)} />
                <Row label="Gender" value={member.gender} />
                <Row label="Marital Status" value={member.maritalStatus} />
                <Row label="Address" value={member.address} />
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-ink">Ministry Information</h4>
              <div className="flex flex-col gap-4">
                <Row label="Role" value={member.role} />
                <Row label="Team" value={member.team} />
                <Row label="Instrument/Skill" value={member.instrument} />
                <Row label="Joined Date" value={formatDate(member.joinedOn)} />
                <div>
                  <p className="text-xs text-ink-subtle">Status</p>
                  <div className="mt-1"><Badge variant={PS_STATUS_VARIANT[member.status] ?? "default"}>{member.status}</Badge></div>
                </div>
                <Row label="Notes" value={member.notes} />
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h4 className="mb-3 text-sm font-semibold text-ink">Contact Information</h4>
            <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <Row label="Phone Number" value={member.phone} />
              <Row label="Email Address" value={member.email} />
              <Row label="Alternate Phone" value={member.alternatePhone} />
              <Row label="Emergency Contact" value={member.emergencyContact ? `${member.emergencyContact}${member.emergencyContactPhone ? ` · ${member.emergencyContactPhone}` : ""}` : "—"} />
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h4 className="mb-3 text-sm font-semibold text-ink">Additional Information</h4>
            <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <Row label="Previous Experience" value={member.previousExperience} />
              <div>
                <p className="text-xs text-ink-subtle">Profile Photo</p>
                <span className="mt-1 flex h-11 w-11 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
                  {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </span>
              </div>
              <Row label="Available Days" value={member.availableDays} />
              <Row label="Last Updated" value={member.lastUpdatedOn ? `${formatDate(member.lastUpdatedOn)} by ${member.lastUpdatedBy}` : "—"} />
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
