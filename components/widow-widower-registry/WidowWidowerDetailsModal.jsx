"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/components/ui/Modal";
import { Input, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { widowWidowerMemberSchema } from "@/lib/validation";
import { widowWidowerService } from "@/services/widowWidowerService";
import { useToast } from "@/contexts/ToastContext";
import { WIDOW_WIDOWER_GENDER_OPTIONS, SENIOR_MINISTRY_OPTIONS } from "@/utils/constants";

const EMPTY = { full_name: "", membership_number: "", gender: "", age: "", spouse_name: "", membership_status: "", registered_on: "", ministry_group: "" };


export function WidowWidowerDetailsModal({ open, onOpenChange, member, onSaved }) {
  const { toast } = useToast();
  const isEdit = !!member;

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(widowWidowerMemberSchema),
    defaultValues: EMPTY,
  });

  React.useEffect(() => {
    if (open) {
      reset(
        member
          ? {
              full_name: member.full_name || "",
              membership_number: member.membership_number || "",
              gender: member.gender || "",
              age: member.age ?? "",
              spouse_name: member.spouse_name || "",
              membership_status: member.membership_status || "",
              registered_on: member.registered_on || "",
              ministry_group: member.ministry_group || "",
            }
          : EMPTY
      );
    }
  }, [open, member, reset]);

  const onSubmit = async (values) => {
    try {
      if (isEdit) {
        // BEST-GUESS endpoint — see services/widowWidowerService.js.
        await widowWidowerService.update(member.id, values);
        toast({ variant: "success", title: "Member details updated" });
      } else {
        await widowWidowerService.create(values);
        toast({ variant: "success", title: "Widow/Widower member added" });
      }
      onOpenChange(false);
      onSaved?.();
    } catch (error) {
      toast({
        variant: "error",
        title: isEdit ? "Could not update member" : "Could not add member",
        description: error?.response?.data?.detail || error?.message,
      });
    }
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange} title={isEdit ? "Widow/Widower Member Details" : "Add Widow / Widower Member"} size="md">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input label="Member Name" required placeholder="Enter member name" error={errors.full_name?.message} {...register("full_name")} />
        <Input label="Membership No." placeholder={isEdit ? "" : "Auto / enter membership no."} error={errors.membership_number?.message} {...register("membership_number")} />

        <Select label="Gender" required error={errors.gender?.message} {...register("gender")}>
          <option value="">Select gender</option>
          {WIDOW_WIDOWER_GENDER_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </Select>
        <Input label="Age" type="number" min={0} error={errors.age?.message} {...register("age")} />

        <Input label="Spouse Name" required placeholder="e.g. Late Mr. Daniel" error={errors.spouse_name?.message} {...register("spouse_name")} />
        <Select label="Membership Status" required error={errors.membership_status?.message} {...register("membership_status")}>
          <option value="">Select status</option>
          <option value="ACTIVE">Active</option>
          <option value="INACTIVE">Inactive</option>
        </Select>

        <Input label="Registered On" type="date" error={errors.registered_on?.message} {...register("registered_on")} />
        <Select label="Ministry / Group" {...register("ministry_group")}>
          <option value="">Select ministry / group</option>
          {SENIOR_MINISTRY_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
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
