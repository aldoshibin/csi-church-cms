"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/components/ui/Modal";
import { Input, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { familyMemberEntrySchema } from "@/lib/validation";
import { FAMILY_RELATIONSHIP_OPTIONS, GENDER_OPTIONS, MARITAL_STATUS_OPTIONS } from "@/utils/constants";

export function FamilyMemberModal({ open, initialValues, onClose, onSave }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(familyMemberEntrySchema),
    defaultValues: initialValues || { name: "", relationship: "", gender: "", date_of_birth: "", marital_status: "" },
  });

  React.useEffect(() => {
    reset(initialValues || { name: "", relationship: "", gender: "", date_of_birth: "", marital_status: "" });
  }, [initialValues, open, reset]);

  return (
    <Modal open={open} onOpenChange={(v) => !v && onClose()} title={initialValues ? "Edit Family Member" : "Add Family Member"} size="md">
      <form onSubmit={handleSubmit(onSave)} className="space-y-4">
        <Input label="Name" required placeholder="Enter full name" error={errors.name?.message} {...register("name")} />

        <Select label="Relationship" required error={errors.relationship?.message} {...register("relationship")}>
          <option value="">Select relationship</option>
          {FAMILY_RELATIONSHIP_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>

        <div className="grid grid-cols-2 gap-4">
          <Select label="Gender" required error={errors.gender?.message} {...register("gender")}>
            <option value="">Select</option>
            {GENDER_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </Select>
          <Input label="Date of Birth" type="date" required error={errors.date_of_birth?.message} {...register("date_of_birth")} />
        </div>

        <Select label="Marital Status" required error={errors.marital_status?.message} {...register("marital_status")}>
          <option value="">Select marital status</option>
          {MARITAL_STATUS_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </Select>

        <div className="flex justify-end gap-2 pt-2">
          <Button type="button" variant="secondary" onClick={onClose}>Cancel</Button>
          <Button type="submit">Save Member</Button>
        </div>
      </form>
    </Modal>
  );
}
