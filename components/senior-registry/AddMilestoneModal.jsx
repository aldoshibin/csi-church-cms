"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/components/ui/Modal";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { milestoneSchema } from "@/lib/validation";
import { seniorCareService } from "@/services/seniorCareService";
import { useToast } from "@/contexts/ToastContext";

export function AddMilestoneModal({ open, onOpenChange }) {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(milestoneSchema),
    defaultValues: { member_name: "", milestone_date: "", description: "" },
  });

  const onSubmit = async (values) => {
    try {
      // BEST-GUESS endpoint — see services/seniorCareService.js.
      await seniorCareService.addMilestone(values);
      toast({ variant: "success", title: "Milestone added" });
      onOpenChange(false);
      reset();
    } catch (error) {
      toast({ variant: "error", title: "Could not save milestone", description: error?.response?.data?.detail || error?.message });
    }
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange} title="Add Milestone" size="sm">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input label="Member" required placeholder="Enter member name" error={errors.member_name?.message} {...register("member_name")} />
        <Input label="Date" type="date" required error={errors.milestone_date?.message} {...register("milestone_date")} />
        <Textarea label="Description" required rows={2} placeholder="e.g. Turns 85 · Men's Fellowship · Birthday visit scheduled" error={errors.description?.message} {...register("description")} />
        <div className="flex justify-end gap-2 pt-2">
          <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button type="submit" isLoading={isSubmitting}>Save</Button>
        </div>
      </form>
    </Modal>
  );
}
