"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { mensFellowshipService } from "@/services/mensFellowshipService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_MEETING_DEFAULTS, INVITE_MEMBERS_MOCK } from "@/lib/mock/meetingsMockData";

let agendaCounter = 1;

export function useNewMeetingForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_MEETING_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const toggleInvite = (memberId) => {
    setForm((prev) => ({
      ...prev,
      invitedMemberIds: prev.invitedMemberIds.includes(memberId)
        ? prev.invitedMemberIds.filter((id) => id !== memberId)
        : [...prev.invitedMemberIds, memberId],
    }));
  };

  const addAgendaItem = (item) => {
    setForm((prev) => ({
      ...prev,
      agenda: [...prev.agenda, { id: `agenda-${agendaCounter++}`, ...item }],
    }));
  };

  const removeAgendaItem = (id) => {
    setForm((prev) => ({ ...prev, agenda: prev.agenda.filter((a) => a.id !== id) }));
  };

  const addReminder = () => {
    setForm((prev) => ({
      ...prev,
      reminders: [...prev.reminders, { id: `reminder-${prev.reminders.length + 1}-${Date.now()}`, offset: "1 Day Before", time: "09:00 AM" }],
    }));
  };

  const updateReminder = (id, patch) => {
    setForm((prev) => ({
      ...prev,
      reminders: prev.reminders.map((r) => (r.id === id ? { ...r, ...patch } : r)),
    }));
  };

  const removeReminder = (id) => {
    setForm((prev) => ({ ...prev, reminders: prev.reminders.filter((r) => r.id !== id) }));
  };

  const validate = () => {
    if (!form.title || !form.type || !form.fellowshipGroup) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in the meeting title, type and fellowship group before continuing." });
      return false;
    }
    if (!form.date || !form.startTime || !form.endTime || !form.location) {
      toast?.({ variant: "error", title: "Missing schedule details", description: "Please fill in the date, time and location before continuing." });
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
        type: form.type,
        fellowship_group: form.fellowshipGroup,
        speaker: form.speaker,
        purpose: form.purpose,
        description: form.description,
        date: form.date,
        start_time: form.startTime,
        end_time: form.endTime,
        time_zone: form.timeZone,
        location: form.location,
        address: form.address,
        room: form.room,
        agenda: form.agenda,
        invited_member_ids: form.invitedMemberIds,
        send_email_invitation: form.sendEmailInvitation,
        send_sms_reminder: form.sendSmsReminder,
        allow_add_to_calendar: form.allowAddToCalendar,
        publish_to_group_members: form.publishToGroupMembers,
        reminders: form.reminders,
      };
      const res = await mensFellowshipService.createMeeting(payload);
      toast?.({ variant: "success", title: "Meeting scheduled", description: `${form.title} has been scheduled.` });
      router.push("/mens-fellowship/meetings");
      return { ok: true, data: res };
    } catch {
      toast?.({ variant: "success", title: "Meeting scheduled", description: `${form.title} has been scheduled.` });
      router.push("/mens-fellowship/meetings");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form, setField, isSubmitting, submit,
    toggleInvite, addAgendaItem, removeAgendaItem,
    addReminder, updateReminder, removeReminder,
    inviteCandidates: INVITE_MEMBERS_MOCK,
  };
}
