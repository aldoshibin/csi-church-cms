"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/components/ui/Modal";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { callMemberNotesSchema } from "@/lib/validation";
import { memberActivityService } from "@/services/memberActivityService";
import { useToast } from "@/contexts/ToastContext";

export function CallMemberModal({ open, onOpenChange, member }) {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm({
    resolver: zodResolver(callMemberNotesSchema),
    defaultValues: { notes: "" },
  });

  const onSubmit = async (values) => {
    try {
      // BEST-GUESS endpoint — see services/memberActivityService.js.
      await memberActivityService.logCall(member.id, values.notes);
      toast({ variant: "success", title: "Call logged" });
      onOpenChange(false);
      reset();
    } catch (error) {
      toast({ variant: "error", title: "Could not log call", description: error?.response?.data?.detail || error?.message });
    }
  };

  if (!member) return null;

  return (
    <Modal open={open} onOpenChange={onOpenChange} title="Call Member" size="sm">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input label="Member" value={member.full_name || `${member.first_name} ${member.last_name}`} disabled readOnly />
          <Input label="Phone" value={member.phone_number || ""} disabled readOnly />
        </div>
        <p className="text-sm text-ink-subtle">Call action opened. Add call notes after completing the call.</p>
        <Textarea label="Call Notes (optional)" rows={2} placeholder="What was discussed?" {...register("notes")} />
        <div className="flex justify-end gap-2 pt-2">
          <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button type="submit" isLoading={isSubmitting}>Save</Button>
        </div>
      </form>
    </Modal>
  );
}
