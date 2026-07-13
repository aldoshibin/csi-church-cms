"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/components/ui/Modal";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { seniorSupportNoteSchema } from "@/lib/validation";
import { seniorCareService } from "@/services/seniorCareService";
import { useToast } from "@/contexts/ToastContext";

export function SupportNoteModal({ open, onOpenChange, member }) {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(seniorSupportNoteSchema),
    defaultValues: { note: "" },
  });

  const onSubmit = async (values) => {
    try {
      // BEST-GUESS endpoint — see services/seniorCareService.js.
      await seniorCareService.addSupportNote(member.id, values.note);
      toast({ variant: "success", title: "Support note added" });
      onOpenChange(false);
      reset();
    } catch (error) {
      toast({ variant: "error", title: "Could not save note", description: error?.response?.data?.detail || error?.message });
    }
  };

  if (!member) return null;

  return (
    <Modal open={open} onOpenChange={onOpenChange} title="Add Assistance / Support Note" size="sm">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input label="Member" value={member.full_name} disabled readOnly />
        <Textarea label="Note" required rows={3} placeholder="Enter assistance or support note" error={errors.note?.message} {...register("note")} />
        <div className="flex justify-end gap-2 pt-2">
          <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button type="submit" isLoading={isSubmitting}>Save</Button>
        </div>
      </form>
    </Modal>
  );
}
