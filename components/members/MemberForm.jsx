"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input, Select, Textarea } from "@/components/ui/Input";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/contexts/ToastContext";
import { memberService } from "@/services/memberService";
import { useAuth } from "@/contexts/AuthContext";
import { memberSchema } from "@/lib/validation";


export function MemberForm({ member, onSuccess, onCancel }) {
  const isEditing = !!member;
  const { user } = useAuth();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(memberSchema),
    defaultValues: member
      ? {
          first_name: member.first_name,
          last_name: member.last_name,
          gender: member.gender,
          date_of_birth: member.date_of_birth ?? "",
          email: member.email ?? "",
          phone_number: member.phone_number ?? "",
          marital_status: member.marital_status,
          church_id: member.church?.id,
          family_id: member.family?.id ?? "",
          joined_date: member.joined_date,
        }
      : {
          church_id: user?.church?.id ?? user?.church_id ?? "",
          marital_status: "SINGLE",
          gender: "MALE",
          joined_date: new Date().toISOString().slice(0, 10),
        },
  });

  const onSubmit = async (values) => {
    const payload = { ...values, family_id: values.family_id || null };
    try {
      if (isEditing) {
        await memberService.update(member.id, payload);
        toast({ variant: "success", title: "Member updated", description: `${values.first_name} ${values.last_name}'s record has been saved.` });
      } else {
        await memberService.create(payload);
        toast({ variant: "success", title: "Member registered", description: `${values.first_name} ${values.last_name} has been added.` });
      }
      onSuccess?.();
    } catch (error) {
      toast({
        variant: "error",
        title: "Could not save member",
        description: error?.message || "Please check the form and try again.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Input label="First Name" required error={errors.first_name?.message} {...register("first_name")} />
        <Input label="Last Name" required error={errors.last_name?.message} {...register("last_name")} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Select label="Gender" required error={errors.gender?.message} {...register("gender")}>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
          <option value="OTHER">Other</option>
        </Select>
        <Input label="Date of Birth" type="date" error={errors.date_of_birth?.message} {...register("date_of_birth")} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input label="Email" type="email" error={errors.email?.message} {...register("email")} />
        <Controller
          control={control}
          name="phone_number"
          render={({ field }) => (
            <PhoneInput
              label="Phone Number"
              value={field.value || ""}
              onChange={field.onChange}
              error={errors.phone_number?.message}
            />
          )}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Select label="Marital Status" error={errors.marital_status?.message} {...register("marital_status")}>
          <option value="SINGLE">Single</option>
          <option value="MARRIED">Married</option>
          <option value="WIDOWED">Widowed</option>
          <option value="DIVORCED">Divorced</option>
        </Select>
        <Input label="Joined Date" type="date" required error={errors.joined_date?.message} {...register("joined_date")} />
      </div>

      <input type="hidden" {...register("church_id")} />

      <div className="flex justify-end gap-2 pt-2">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" isLoading={isSubmitting}>
          {isEditing ? "Save Changes" : "Register Member"}
        </Button>
      </div>
    </form>
  );
}
