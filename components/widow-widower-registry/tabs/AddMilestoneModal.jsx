"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/components/ui/Modal";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { wwAddMilestoneSchema } from "@/lib/validation";
import { widowWidowerService } from "@/services/widowWidowerService";
import { useToast } from "@/contexts/ToastContext";

export function AddMilestoneModal({ open, onOpenChange, onSaved }) {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(wwAddMilestoneSchema),
    defaultValues: { title: "", milestone_date: "", description: "" },
  });

  const onSubmit = async (values) => {
    try {
      // BEST-GUESS endpoint — see services/widowWidowerService.js.
      await widowWidowerService.addMilestone(values);
      toast({ variant: "success", title: "Milestone added" });
      onOpenChange(false);
      reset();
      onSaved?.();
    } catch (error) {
      toast({ variant: "error", title: "Could not add milestone", description: error?.response?.data?.detail || error?.message });
    }
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange} title="Add Milestone" size="sm">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input label="Title" required placeholder="e.g. Spouse Memorial Prayer" error={errors.title?.message} {...register("title")} />
        <Input label="Date" type="date" required error={errors.milestone_date?.message} {...register("milestone_date")} />
        <Textarea label="Details" required rows={2} placeholder="e.g. Mrs. Leela Daniel • Family prayer at Main Church" error={errors.description?.message} {...register("description")} />
        <div className="flex justify-end gap-2 pt-2">
          <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button type="submit" isLoading={isSubmitting}>Save</Button>
        </div>
      </form>
    </Modal>
  );
}
