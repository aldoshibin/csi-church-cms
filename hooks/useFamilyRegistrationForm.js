"use client";

import * as React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { familyService } from "@/services/familyService";
import { memberService } from "@/services/memberService";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";
import { familyDetailsSchema, familyMemberRowSchema } from "@/lib/validation";
import { z } from "zod";

const emptyMemberRow = () => ({
  first_name: "",
  last_name: "",
  relationship: "Head",
  gender: "",
  date_of_birth: "",
  occupation: "",
});

const formSchema = familyDetailsSchema.extend({
  members: z.array(familyMemberRowSchema).min(1, "Add at least one member."),
});

function calculateAge(dob) {
  if (!dob) return null;
  const birth = new Date(dob);
  if (Number.isNaN(birth.getTime())) return null;
  return Math.floor((Date.now() - birth.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
}

export function useFamilyRegistrationForm() {
  const { user } = useAuth();
  const { toast } = useToast();
  const churchId = user?.church?.id ?? user?.church_id ?? "";

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      family_type: "NUCLEAR",
      registration_date: new Date().toISOString().slice(0, 10),
      preferred_language: "English",
      relationship_of_head: "",
      head_of_family: null,
      church_id: churchId,
      members: [emptyMemberRow()],
    },
  });

  const { control, handleSubmit, watch, setValue, reset, formState } = form;

  React.useEffect(() => {
    if (churchId) setValue("church_id", churchId);
  }, [churchId, setValue]);

  const { fields, append, remove } = useFieldArray({ control, name: "members" });

  // Live summary for the preview panel.
  const watchedMembers = watch("members");
  const watchedCategory = watch("family_category");
  const watchedBranch = watch("church_id");
  const watchedHead = watch("head_of_family");

  const summary = React.useMemo(() => {
    let adults = 0;
    let children = 0;
    (watchedMembers || []).forEach((m) => {
      const age = calculateAge(m.date_of_birth);
      if (age === null) return;
      if (age >= 18) adults += 1;
      else children += 1;
    });
    return {
      totalMembers: watchedMembers?.length ?? 0,
      adults,
      children,
      familyCategory: watchedCategory || "-",
      branchChurch: watchedBranch ? "Selected" : "-",
    };
  }, [watchedMembers, watchedCategory, watchedBranch]);

  const addMember = () => append(emptyMemberRow());
  const removeMember = (index) => {
    if (fields.length > 1) remove(index);
  };

  const onSubmit = handleSubmit(async (values) => {
    try {
      // 1. Create the family record.
      // CONFIRMED fields go through as-is; BEST-GUESS fields (see
      // lib/validation.js comment) are sent too — drop any the API 400s on.
      const family = await familyService.create({
        family_type: values.family_type,
        address_line1: values.address_line1,
        city: values.city,
        church_id: values.church_id,
        registration_date: values.registration_date,
        preferred_language: values.preferred_language,
        email: values.email || undefined,
        phone_number: values.phone_number || undefined,
        alternate_phone: values.alternate_phone || undefined,
        marital_status: values.marital_status || undefined,
        pincode: values.pincode || undefined,
        family_category: values.family_category || undefined,
        date_of_marriage: values.date_of_marriage || undefined,
        notes: values.notes || undefined,
      });

      // 2. Attach the existing member chosen as Head of Family.
      if (values.head_of_family?.id) {
        await memberService.update(values.head_of_family.id, {
          family_id: family.id,
          relationship_to_head: values.relationship_of_head, // BEST-GUESS field name
        });
      }

      // 3. Register each new member row against the new family.
      const results = await Promise.allSettled(
        values.members.map((m) =>
          memberService.create({
            first_name: m.first_name,
            last_name: m.last_name || "",
            gender: m.gender,
            date_of_birth: m.date_of_birth,
            marital_status: undefined,
            church_id: values.church_id,
            family_id: family.id,
            joined_date: values.registration_date,
            relationship_to_head: m.relationship, // BEST-GUESS field name
            occupation: m.occupation || undefined, // BEST-GUESS field name
          })
        )
      );
      const failedCount = results.filter((r) => r.status === "rejected").length;

      if (failedCount > 0) {
        toast({
          variant: "warning",
          title: "Family saved with some member errors",
          description: `${failedCount} of ${values.members.length} members could not be saved. You can add them from the family's profile page.`,
        });
      } else {
        toast({
          variant: "success",
          title: "Family created",
          description: "The family and its members have been saved.",
        });
      }

      return { ok: true, data: family };
    } catch (error) {
      toast({
        variant: "error",
        title: "Could not save family",
        description: error?.response?.data?.detail || error?.message || "Please check the form and try again.",
      });
      return { ok: false, error };
    }
  });

  return {
    form,
    fields,
    addMember,
    removeMember,
    summary,
    isSubmitting: formState.isSubmitting,
    resetForm: () => reset(),
    submit: onSubmit,
    headOfFamily: watchedHead,
  };
}
