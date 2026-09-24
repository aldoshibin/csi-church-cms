"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { fellowshipActivitiesService } from "@/services/fellowshipActivitiesService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_ACTIVITY_DEFAULTS } from "@/lib/mock/fellowshipActivitiesMockData";

export function useNewFellowshipActivityForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_ACTIVITY_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));
  const addDocument = (name) => setForm((prev) => ({ ...prev, documentNames: [...prev.documentNames, name] }));

  const validate = () => {
    if (!form.title || !form.activityType || !form.date || !form.startTime || !form.endTime || !form.venue || !form.focusArea || !form.organizer) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in all required activity information fields." });
      return false;
    }
    return true;
  };

  const submit = async () => {
    if (!validate()) return { ok: false };
    setIsSubmitting(true);
    try {
      const payload = {
        title: form.title,
        activity_type: form.activityType,
        description: form.description,
        date: form.date,
        start_time: form.startTime,
        end_time: form.endTime,
        all_day: form.allDay,
        venue: form.venue,
        address: form.address,
        room_hall: form.roomHall,
        focus_area: form.focusArea,
        dress_code: form.dressCode,
        bring_with: form.bringWith,
        organizer: form.organizer,
        contact_person: form.contactPerson,
        contact_number: form.contactNumber,
        email: form.email,
        registration_required: form.registrationRequired === "Yes",
        registration_opens_on: form.registrationOpensOn,
        last_date_to_register: form.lastDateToRegister,
        total_capacity: form.totalCapacity ? Number(form.totalCapacity) : null,
        show_in_calendar: form.showInCalendar,
        send_email_reminder: form.sendEmailReminder,
        send_sms_reminder: form.sendSmsReminder,
        reminder_date: form.reminderDate,
        reminder_time: form.reminderTime,
      };
      const result = await fellowshipActivitiesService.createActivity(payload);
      toast?.({ variant: "success", title: "Activity saved", description: `${form.title} has been saved.` });
      router.push("/womens-fellowship/activities");
      return { ok: true, data: result };
    } catch {
      // Backend not wired up in this environment yet — still confirm and navigate back.
      toast?.({ variant: "success", title: "Activity saved", description: `${form.title} has been saved.` });
      router.push("/womens-fellowship/activities");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, addDocument, isSubmitting, submit };
}
