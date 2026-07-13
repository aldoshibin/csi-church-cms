"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/components/ui/Modal";
import { Input, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { migrationDetailsSchema } from "@/lib/validation";
import { migrationService } from "@/services/migrationService";
import { useToast } from "@/contexts/ToastContext";
import { MIGRATION_STATUS_OPTIONS } from "@/utils/constants";


export function MigratedMemberDetailsModal({ open, onOpenChange, member, onSaved }) {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(migrationDetailsSchema),
    defaultValues: { migrated_to: "", migrated_on: "", reason: "", status: "" },
  });

  React.useEffect(() => {
    if (open && member) {
      reset({
        from_church: member.from_church || "",
        migrated_to: member.migrated_to || "",
        migrated_on: member.migrated_on || "",
        reason: member.reason || "",
        status: member.migration_status || "",
      });
    }
  }, [open, member, reset]);

  const onSubmit = async (values) => {
    try {
      // BEST-GUESS endpoint — see services/migrationService.js.
      await migrationService.confirmMigrationDetails(member.id, values);
      toast({ variant: "success", title: "Migration details updated" });
      onOpenChange(false);
      onSaved?.();
    } catch (error) {
      toast({ variant: "error", title: "Could not save details", description: error?.response?.data?.detail || error?.message });
    }
  };

  if (!member) return null;

  return (
    <Modal open={open} onOpenChange={onOpenChange} title="Migrated Member Details" size="md">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input label="Member Name" value={member.full_name || `${member.first_name} ${member.last_name}`} disabled readOnly />
        <Input label="Membership No." value={member.membership_number || ""} disabled readOnly />
        <Input label="From Church / Diocese" value={member.from_church || ""} disabled readOnly />
        <Input label="Migrated To" required error={errors.migrated_to?.message} {...register("migrated_to")} />
        <Input label="Migrated On" type="date" {...register("migrated_on")} />
        <Input label="Reason" required error={errors.reason?.message} {...register("reason")} />
        <Select label="Status" required error={errors.status?.message} {...register("status")}>
          <option value="">Select status</option>
          {MIGRATION_STATUS_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </Select>

        <div className="flex justify-end gap-2 pt-2 sm:col-span-2">
          <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button type="submit" isLoading={isSubmitting}>Save</Button>
        </div>
      </form>
    </Modal>
  );
}
