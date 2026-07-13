"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/components/ui/Modal";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { visitorSchema } from "@/lib/validation";
import { VISITOR_SOURCE_OPTIONS, FOLLOW_UP_STATUS_OPTIONS } from "@/utils/constants";
import { visitorService } from "@/services/visitorService";
import { useToast } from "@/contexts/ToastContext";

export function VisitorFormModal({ open, onOpenChange, visitor, onSuccess }) {
  const { toast } = useToast();
  const isEdit = !!visitor;

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(visitorSchema),
    defaultValues: {
      full_name: "", email: "", phone: "", visit_date: new Date().toISOString().slice(0, 10),
      source: "", follow_up_status: "PENDING", notes: "",
    },
  });

  React.useEffect(() => {
    if (open) {
      reset(
        visitor
          ? {
              full_name: visitor.full_name || "",
              email: visitor.email || "",
              phone: visitor.phone || "",
              visit_date: visitor.visit_date || "",
              source: visitor.source || "",
              follow_up_status: visitor.follow_up_status || "PENDING",
              notes: visitor.notes || "",
            }
          : { full_name: "", email: "", phone: "", visit_date: new Date().toISOString().slice(0, 10), source: "", follow_up_status: "PENDING", notes: "" }
      );
    }
  }, [open, visitor, reset]);

  const onSubmit = async (values) => {
    try {
      if (isEdit) {
        await visitorService.update(visitor.id, values);
        toast({ variant: "success", title: "Visitor updated" });
      } else {
        await visitorService.create(values);
        toast({ variant: "success", title: "Visitor added" });
      }
      onOpenChange(false);
      onSuccess?.();
    } catch (error) {
      toast({
        variant: "error",
        title: isEdit ? "Could not update visitor" : "Could not add visitor",
        description: error?.response?.data?.detail || error?.message || "Please try again.",
      });
    }
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange} title={isEdit ? "Edit Visitor" : "Add New Visitor"} size="lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input label="Full Name" required placeholder="Enter visitor name" error={errors.full_name?.message} {...register("full_name")} />
          <Input label="Phone" required placeholder="Enter phone number" error={errors.phone?.message} {...register("phone")} />
          <Input label="Email" type="email" placeholder="Enter email address" error={errors.email?.message} {...register("email")} />
          <Input label="Visit Date" type="date" required error={errors.visit_date?.message} {...register("visit_date")} />
          <Select label="Source" required error={errors.source?.message} {...register("source")}>
            <option value="">Select source</option>
            {VISITOR_SOURCE_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </Select>
          {isEdit && (
            <Select label="Follow-up Status" {...register("follow_up_status")}>
              {FOLLOW_UP_STATUS_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </Select>
          )}
        </div>
        <Textarea label="Notes" rows={2} placeholder="Enter any notes about this visitor" {...register("notes")} />

        <div className="flex justify-end gap-2 pt-2">
          <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button type="submit" isLoading={isSubmitting}>{isEdit ? "Save Changes" : "Add Visitor"}</Button>
        </div>
      </form>
    </Modal>
  );
}
