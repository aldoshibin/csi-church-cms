import apiClient from "@/lib/axios";

/**
 * Member activity actions for Inactive Member Tracking's Call/Reminder/
 * Follow-up-note modals. None of these endpoints are confirmed — there's
 * no ActivityLog/FollowUp model anywhere in this codebase to check
 * against. Paths follow the same nested-action convention as
 * memberService's transfer-in/transfer-out/upload-photo, which IS a
 * confirmed real pattern, but that doesn't make these three real.
 *
 * "Mark as Active" deliberately does NOT live here — it reuses the
 * real, confirmed memberService.update() to set membership_status back
 * to ACTIVE, since that's an actual field with a working endpoint.
 */
export const memberActivityService = {
  async logCall(memberId, notes) {
    const { data } = await apiClient.post(`/members/${memberId}/log-call/`, { notes });
    return data.data;
  },

  async sendReminder(memberId, { to, message }) {
    const { data } = await apiClient.post(`/members/${memberId}/send-reminder/`, { to, message });
    return data.data;
  },

  async addFollowUpNote(memberId, note) {
    const { data } = await apiClient.post(`/members/${memberId}/follow-up-notes/`, { note });
    return data.data;
  },

  async listFollowUpNotes(memberId) {
    const { data } = await apiClient.get(`/members/${memberId}/follow-up-notes/`);
    return data.data;
  },
};

export default memberActivityService;
