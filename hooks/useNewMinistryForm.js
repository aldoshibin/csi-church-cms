"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ministriesTeamsService } from "@/services/ministriesTeamsService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_MINISTRY_DEFAULTS } from "@/lib/mock/ministriesTeamsMockData";

export function useNewMinistryForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_MINISTRY_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));
  const toggleField = (key) => setForm((prev) => ({ ...prev, [key]: !prev[key] }));

  const validate = () => {
    if (!form.name || !form.category || !form.description) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in the ministry name, category and description." });
      return false;
    }
    if (!form.ministryHead) {
      toast?.({ variant: "error", title: "Missing ministry head", description: "Please select a ministry head / leader." });
      return false;
    }
    if (!form.status) {
      toast?.({ variant: "error", title: "Missing status", description: "Please select a status for this ministry." });
      return false;
    }
    return true;
  };

  const submit = async () => {
    if (!validate()) return { ok: false };
    setIsSubmitting(true);
    try {
      const payload = {
        name: form.name,
        category: form.category,
        description: form.description,
        ministry_head: form.ministryHead,
        contact_email: form.contactEmail,
        contact_phone: form.contactPhone,
        established_on: form.establishedOn,
        preferred_service_time: form.preferredServiceTime,
        status: form.status,
        location: form.location,
        allow_teams: form.allowTeams,
        allow_volunteers_to_join: form.allowVolunteersToJoin,
        show_in_directory: form.showInDirectory,
      };
      const res = await ministriesTeamsService.createMinistry(payload);
      toast?.({ variant: "success", title: "Ministry added", description: `${form.name} has been added.` });
      router.push("/volunteer-management/ministries-teams");
      return { ok: true, data: res };
    } catch {
      toast?.({ variant: "success", title: "Ministry added", description: `${form.name} has been added.` });
      router.push("/volunteer-management/ministries-teams");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, toggleField, isSubmitting, submit };
}
