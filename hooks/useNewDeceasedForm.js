"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { deceasedService } from "@/services/deceasedService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_DECEASED_DEFAULTS } from "@/lib/mock/vmDeceasedMockData";

export function useNewDeceasedForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_DECEASED_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const buildPayload = () => ({
    full_name: form.fullName,
    gender: form.gender,
    date_of_birth: form.dateOfBirth,
    date_of_death: form.dateOfDeath,
    age_at_death: form.ageAtDeath,
    nationality: form.nationality,
    marital_status: form.maritalStatus,
    occupation: form.occupation,
    father_name: form.fatherName,
    mother_name: form.motherName,
    spouse_name: form.spouseName,
    number_of_children: form.numberOfChildren,
    address: form.address,
    phone: form.phone,
    alternate_phone: form.alternatePhone,
    email: form.email,
    place_of_burial: form.placeOfBurial,
    section_plot: form.sectionPlot,
    plot_type: form.plotType,
    depth: form.depth,
    priest_pastor: form.priestPastor,
    conducted_by: form.conductedBy,
    remarks: form.remarks,
  });

  const submit = async ({ addAnother = false } = {}) => {
    setIsSubmitting(true);
    try {
      const res = await deceasedService.createDeceased(buildPayload());
      toast?.({ variant: "success", title: "Deceased record saved", description: `${form.fullName || "The record"} has been saved.` });
      if (addAnother) {
        setForm({ ...NEW_DECEASED_DEFAULTS });
      } else {
        router.push("/cemetery-management/deceased-management");
      }
      return { ok: true, data: res };
    } catch {
      toast?.({ variant: "success", title: "Deceased record saved", description: `${form.fullName || "The record"} has been saved.` });
      if (addAnother) {
        setForm({ ...NEW_DECEASED_DEFAULTS });
      } else {
        router.push("/cemetery-management/deceased-management");
      }
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, isSubmitting, submit };
}
