"use client";

import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function BaptismRecordDetailsModal({ open, onOpenChange, record }) {
  if (!record) return null;

  return (
    <Modal open={open} onOpenChange={onOpenChange} title="Baptism Record Details" size="md">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input label="Baptism No." value={record.baptismNo} disabled readOnly />
        <Input label="Child Name" value={record.childName} disabled readOnly />
        <Input label="Date of Baptism" value={record.date} disabled readOnly />
        <Input label="Gender" value={record.gender === "MALE" ? "Male" : "Female"} disabled readOnly />
        <Input label="Parents / Guardians" value={record.parents} disabled readOnly />
        <Input label="Baptized By" value={record.baptizedBy} disabled readOnly />
        <Input label="Church" value={record.church} disabled readOnly />
        <Input label="Status" value={record.status} disabled readOnly />
      </div>
      <div className="mt-4 flex justify-end">
        <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>Close</Button>
      </div>
    </Modal>
  );
}
