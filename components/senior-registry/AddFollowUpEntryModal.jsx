"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/components/ui/Modal";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { followUpEntrySchema } from "@/lib/validation";
import { seniorCareService } from "@/services/seniorCareService";
import { useToast } from "@/contexts/ToastContext";

const CATEGORIES = ["Call", "Greeting", "Note", "Visit"];

export function AddFollowUpEntryModal({ open, onOpenChange }) {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(followUpEntrySchema),
    defaultValues: { member_name: "", category: "", description: "" },
  });

  const onSubmit = async (values) => {
    try {
      // BEST-GUESS endpoint — see services/seniorCareService.js.
      await seniorCareService.addFollowUpEntry(values);
      toast({ variant: "success", title: "Follow-up entry added" });
      onOpenChange(false);
      reset();
    } catch (error) {
      toast({ variant: "error", title: "Could not save entry", description: error?.response?.data?.detail || error?.message });
    }
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange} title="Add Note" size="sm">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input label="Member" required placeholder="Enter member name" error={errors.member_name?.message} {...register("member_name")} />
        <Select label="Category" required error={errors.category?.message} {...register("category")}>
          <option value="">Select category</option>
          {CATEGORIES.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
        <Textarea label="Description" required rows={3} placeholder="What happened or was discussed?" error={errors.description?.message} {...register("description")} />
        <div className="flex justify-end gap-2 pt-2">
          <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button type="submit" isLoading={isSubmitting}>Save</Button>
        </div>
      </form>
    </Modal>
  );
}
