"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/components/ui/Modal";
import { Input, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { visitorCompanionSchema } from "@/lib/validation";
import { FAMILY_RELATIONSHIP_OPTIONS } from "@/utils/constants";

export default function CompanionModal({ open, onClose, onSave }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(visitorCompanionSchema),
    defaultValues: { name: "", relationship: "", phone: "" },
  });

  const handleClose = () => {
    reset({ name: "", relationship: "", phone: "" });
    onClose();
  };

  const handleSave = (values) => {
    onSave(values);
    reset({ name: "", relationship: "", phone: "" });
  };

  return (
    <Modal open={open} onOpenChange={(v) => !v && handleClose()} title="Add Companion" size="sm">
      <form onSubmit={handleSubmit(handleSave)} className="space-y-4">
        <Input label="Name" required placeholder="Enter full name" error={errors.name?.message} {...register("name")} />
        <Select label="Relationship" {...register("relationship")}>
          <option value="">Select relationship</option>
          {FAMILY_RELATIONSHIP_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
        <Input label="Phone Number" placeholder="Enter phone number" {...register("phone")} />
        <div className="flex justify-end gap-2 pt-2">
          <Button type="button" variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add Companion</Button>
        </div>
      </form>
    </Modal>
  );
}
