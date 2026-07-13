"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/components/ui/Modal";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { sendReminderSchema } from "@/lib/validation";
import { memberActivityService } from "@/services/memberActivityService";
import { useToast } from "@/contexts/ToastContext";

export function SendReminderModal({ open, onOpenChange, member }) {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(sendReminderSchema),
    defaultValues: { to: "", message: "" },
  });

  React.useEffect(() => {
    if (open && member) {
      const name = member.full_name || `${member.first_name} ${member.last_name}`;
      reset({ to: name, message: `Dear ${name}, we missed you at church services. Please join us this Sunday.` });
    }
  }, [open, member, reset]);

  const onSubmit = async (values) => {
    try {
      // BEST-GUESS endpoint — see services/memberActivityService.js.
      await memberActivityService.sendReminder(member.id, values);
      toast({ variant: "success", title: "Reminder sent" });
      onOpenChange(false);
    } catch (error) {
      toast({ variant: "error", title: "Could not send reminder", description: error?.response?.data?.detail || error?.message });
    }
  };

  if (!member) return null;

  return (
    <Modal open={open} onOpenChange={onOpenChange} title="Send Reminder" size="sm">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input label="To" error={errors.to?.message} {...register("to")} />
        <Textarea label="Message" rows={4} error={errors.message?.message} {...register("message")} />
        <div className="flex justify-end gap-2 pt-2">
          <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button type="submit" isLoading={isSubmitting}>Save</Button>
        </div>
      </form>
    </Modal>
  );
}
