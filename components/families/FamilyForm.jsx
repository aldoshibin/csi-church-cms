"use client";

import { useForm } from "react-hook-form";
import { Input, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/contexts/ToastContext";
import { useAuth } from "@/contexts/AuthContext";
import { familyService } from "@/services/familyService";


export function FamilyForm({ family, onSuccess, onCancel }) {
  const isEditing = !!family;
  const { user } = useAuth();
  const { toast } = useToast();

  const { register, handleSubmit, formState: { isSubmitting } } = useForm({
    defaultValues: family
      ? {
          family_name: family.family_name, family_type: family.family_type,
          city: family.city, address_line1: family.address_line1,
        }
      : { family_type: "NUCLEAR", church_id: user?.church?.id ?? user?.church_id },
  });

  const onSubmit = async (values) => {
    try {
      if (isEditing) {
        await familyService.update(family.id, values);
        toast({ variant: "success", title: "Family updated" });
      } else {
        await familyService.create(values);
        toast({ variant: "success", title: "Family created", description: `${values.family_name} has been added.` });
      }
      onSuccess?.();
    } catch (error) {
      toast({ variant: "error", title: "Could not save family", description: error?.message });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input label="Family Name" required placeholder="e.g. Thomas Family" {...register("family_name")} />
      <Select label="Family Type" {...register("family_type")}>
        <option value="NUCLEAR">Nuclear Family</option>
        <option value="JOINT">Joint Family</option>
        <option value="SINGLE">Single Member</option>
        <option value="OTHER">Other</option>
      </Select>
      <Input label="Address" {...register("address_line1")} />
      <Input label="City" {...register("city")} />
      <input type="hidden" {...register("church_id")} />

      <div className="flex justify-end gap-2 pt-2">
        <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button type="submit" isLoading={isSubmitting}>{isEditing ? "Save Changes" : "Create Family"}</Button>
      </div>
    </form>
  );
}
