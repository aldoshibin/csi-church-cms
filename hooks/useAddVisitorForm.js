"use client";

import * as React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { visitorService } from "@/services/visitorService";
import { useToast } from "@/contexts/ToastContext";
import { addVisitorSchema } from "@/lib/validation";

export function useAddVisitorForm() {
  const { toast } = useToast();
  const [companionModalOpen, setCompanionModalOpen] = React.useState(false);

  const form = useForm({
    resolver: zodResolver(addVisitorSchema),
    defaultValues: {
      gender: "",
      visit_date: new Date().toISOString().slice(0, 10),
      purpose_source: "",
      how_did_you_hear: "",
      is_returning: "NO",
      receive_updates: true,
      companions: [],
    },
  });

  const { control, register, handleSubmit, watch, reset, formState } = form;
  const { fields: companionFields, append, remove } = useFieldArray({ control, name: "companions" });

  const addCompanion = (entry) => {
    append({ id: crypto.randomUUID(), ...entry });
    setCompanionModalOpen(false);
  };
  const removeCompanion = (index) => remove(index);

  const fullName = [watch("first_name"), watch("middle_name"), watch("last_name")].filter(Boolean).join(" ");

  const submit = handleSubmit(async (values) => {
    try {
      const visitor = await visitorService.create({
        first_name: values.first_name,
        middle_name: values.middle_name || undefined,
        last_name: values.last_name,
        full_name: fullName,
        gender: values.gender,
        date_of_birth: values.date_of_birth || undefined,
        phone: values.phone,
        email: values.email || undefined,
        address: values.address || undefined,
        city: values.city || undefined,
        state: values.state || undefined,
        pincode: values.pincode || undefined,
        visit_date: values.visit_date,
        visit_time: values.visit_time || undefined,
        source: values.purpose_source,
        referral_source: values.how_did_you_hear || undefined,
        status: values.is_returning === "YES" ? "RETURNING_VISITOR" : "NEW_VISITOR",
        notes: values.additional_notes || undefined,
        receive_updates: values.receive_updates,
        companions: values.companions?.map(({ id, ...rest }) => rest) || [],
      });

      toast({ variant: "success", title: "Visitor added", description: `${fullName} has been added to the visitor list.` });
      return { ok: true, data: visitor };
    } catch (error) {
      toast({
        variant: "error",
        title: "Could not save visitor",
        description: error?.response?.data?.detail || error?.message || "Please check the form and try again.",
      });
      return { ok: false, error };
    }
  });

  return {
    form,
    fullName,
    companionFields,
    companionModalOpen,
    openCompanionModal: () => setCompanionModalOpen(true),
    closeCompanionModal: () => setCompanionModalOpen(false),
    addCompanion,
    removeCompanion,
    isSubmitting: formState.isSubmitting,
    resetForm: () => reset(),
    submit,
  };
}
