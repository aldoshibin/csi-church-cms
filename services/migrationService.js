import apiClient from "@/lib/axios";

/**
 * Migrated Member Tracking actions. The base member list reuses the
 * real, confirmed memberService.list({ membership_status:
 * "TRANSFERRED_OUT" }) — nothing here duplicates that. These three
 * actions are new and unconfirmed: no Migration/FollowUp model exists
 * anywhere in this codebase to check field names or paths against.
 */
export const migrationService = {
  async requestConfirmation(memberId) {
    const { data } = await apiClient.post(`/members/${memberId}/migration/request-confirmation/`);
    return data.data;
  },

  async addFollowUpNote(memberId, note) {
    const { data } = await apiClient.post(`/members/${memberId}/migration/follow-up-notes/`, { note });
    return data.data;
  },

  async confirmMigrationDetails(memberId, details) {
    const { data } = await apiClient.patch(`/members/${memberId}/migration/`, details);
    return data.data;
  },
};

export default migrationService;
