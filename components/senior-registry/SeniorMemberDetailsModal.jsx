"use client";

import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";

const STATUS_LABEL = { ACTIVE: "Active", INACTIVE: "Inactive" };


export function SeniorMemberDetailsModal({ open, onOpenChange, member }) {
  if (!member) return null;

  return (
    <Modal open={open} onOpenChange={onOpenChange} title="Senior Member Details" size="md">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input label="Member Name" value={member.full_name} disabled readOnly />
        <Input label="Membership No." value={member.membership_number || ""} disabled readOnly />
        <Input label="Date of Birth" value={member.date_of_birth ? formatDate(member.date_of_birth) : ""} disabled readOnly />
        <Input label="Age" value={member.age ?? ""} disabled readOnly />
        <Input label="Gender" value={member.gender === "MALE" ? "Male" : member.gender === "FEMALE" ? "Female" : "Other"} disabled readOnly />
        <Input label="Ministry / Group" value={member.ministry_group || ""} disabled readOnly />
        <Input label="Phone" value={member.phone_number || ""} disabled readOnly />
        <Input label="Status" value={STATUS_LABEL[member.membership_status] || ""} disabled readOnly />
      </div>
      <div className="mt-4 flex justify-end">
        <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>Close</Button>
      </div>
    </Modal>
  );
}
