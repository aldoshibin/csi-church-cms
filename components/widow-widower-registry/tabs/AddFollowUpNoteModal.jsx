"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/components/ui/Modal";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { wwGeneralNoteSchema } from "@/lib/validation";
import { widowWidowerService } from "@/services/widowWidowerService";
import { useToast } from "@/contexts/ToastContext";


export function AddFollowUpNoteModal({ open, onOpenChange, onSaved }) {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(wwGeneralNoteSchema),
    defaultValues: { member_name: "", note: "" },
  });

  const onSubmit = async (values) => {
    try {
      // BEST-GUESS endpoint — see services/widowWidowerService.js.
      await widowWidowerService.addGeneralSupportNote(values);
      toast({ variant: "success", title: "Note added" });
      onOpenChange(false);
      reset();
      onSaved?.();
    } catch (error) {
      toast({ variant: "error", title: "Could not add note", description: error?.response?.data?.detail || error?.message });
    }
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange} title="Add Support / Assistance Note" size="sm">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input label="Member" placeholder="Enter member name" error={errors.member_name?.message} {...register("member_name")} />
        <Textarea label="Note" required rows={3} placeholder="Enter support, pastoral care or follow-up note" error={errors.note?.message} {...register("note")} />
        <div className="flex justify-end gap-2 pt-2">
          <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button type="submit" isLoading={isSubmitting}>Save</Button>
        </div>
      </form>
    </Modal>
  );
}
