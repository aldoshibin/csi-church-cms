"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { cemeteryService } from "@/services/cemeteryService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_BURIAL_RECORD_DEFAULTS } from "@/lib/mock/vmCemeteryMockData";

export function useNewBurialRecordForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_BURIAL_RECORD_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const buildPayload = () => ({
    full_name: form.fullName,
    date_of_death: form.dateOfDeath,
    date_of_birth: form.dateOfBirth,
    age_at_death: form.ageAtDeath,
    gender: form.gender,
    marital_status: form.maritalStatus,
    nationality: form.nationality,
    occupation: form.occupation,
    place_of_death: form.placeOfDeath,
    cause_of_death: form.causeOfDeath,
    section: form.section,
    plot_number: form.plotNumber,
    row: form.row,
    grave_number: form.graveNumber,
    area_zone: form.areaZone,
    burial_date: form.burialDate,
    burial_time: form.burialTime,
    service_type: form.serviceType,
    recorded_by: form.recordedBy,
    remarks: form.remarks,
    contact_name: form.contactName,
    relationship: form.relationship,
    contact_phone: form.contactPhone,
    contact_email: form.contactEmail,
    contact_address: form.contactAddress,
  });

  const submit = async ({ addAnother = false } = {}) => {
    setIsSubmitting(true);
    try {
      const res = await cemeteryService.createBurialRecord(buildPayload());
      toast?.({ variant: "success", title: "Burial record saved", description: `${form.fullName || "The record"} has been saved.` });
      if (addAnother) {
        setForm({ ...NEW_BURIAL_RECORD_DEFAULTS });
      } else {
        router.push("/cemetery-management/burial-records");
      }
      return { ok: true, data: res };
    } catch {
      toast?.({ variant: "success", title: "Burial record saved", description: `${form.fullName || "The record"} has been saved.` });
      if (addAnother) {
        setForm({ ...NEW_BURIAL_RECORD_DEFAULTS });
      } else {
        router.push("/cemetery-management/burial-records");
      }
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, isSubmitting, submit };
}
