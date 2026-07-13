import apiClient from "@/lib/axios";


export const seniorCareService = {
  async addSupportNote(memberId, note) {
    const { data } = await apiClient.post(`/members/${memberId}/senior-care/support-notes/`, { note });
    return data.data;
  },

  async updateHealthInfo(memberId, healthInfo) {
    const { data } = await apiClient.patch(`/members/${memberId}/senior-care/health-info/`, healthInfo);
    return data.data;
  },

  /** Upcoming Milestones tab — "+ Add Milestone". */
  async addMilestone(payload) {
    const { data } = await apiClient.post("/senior-care/milestones/", payload);
    return data.data;
  },

  /** Health & Assistance tab — "+ Add Assistance". */
  async addAssistanceRecord(payload) {
    const { data } = await apiClient.post("/senior-care/assistance-records/", payload);
    return data.data;
  },

  /** Follow-up & Notes tab — "+ Add Note" (distinct from addSupportNote,
   * which is scoped to one member from the table row action; this one
   * lets you pick who the note is about). */
  async addFollowUpEntry(payload) {
    const { data } = await apiClient.post("/senior-care/follow-up-entries/", payload);
    return data.data;
  },
};

export default seniorCareService;
