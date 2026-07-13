"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/components/ui/Modal";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { assistanceRecordSchema } from "@/lib/validation";
import { seniorCareService } from "@/services/seniorCareService";
import { useToast } from "@/contexts/ToastContext";

const ASSISTANCE_TYPES = ["Routine Health Check", "Home Visit", "Medicine Assistance", "Transport Support", "Other"];

export function AddAssistanceModal({ open, onOpenChange }) {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(assistanceRecordSchema),
    defaultValues: { member_name: "", assistance_type: "", description: "" },
  });

  const onSubmit = async (values) => {
    try {
      // BEST-GUESS endpoint — see services/seniorCareService.js.
      await seniorCareService.addAssistanceRecord(values);
      toast({ variant: "success", title: "Assistance record added" });
      onOpenChange(false);
      reset();
    } catch (error) {
      toast({ variant: "error", title: "Could not save record", description: error?.response?.data?.detail || error?.message });
    }
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange} title="Add Assistance" size="sm">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input label="Member" required placeholder="Enter member name" error={errors.member_name?.message} {...register("member_name")} />
        <Select label="Type" required error={errors.assistance_type?.message} {...register("assistance_type")}>
          <option value="">Select type</option>
          {ASSISTANCE_TYPES.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
        <Textarea label="Description" required rows={2} placeholder="Describe the assistance needed" error={errors.description?.message} {...register("description")} />
        <div className="flex justify-end gap-2 pt-2">
          <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button type="submit" isLoading={isSubmitting}>Save</Button>
        </div>
      </form>
    </Modal>
  );
}
