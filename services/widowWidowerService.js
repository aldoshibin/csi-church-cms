import apiClient from "@/lib/axios";


export const widowWidowerService = {
  async create(payload) {
    const { data } = await apiClient.post("/members/widow-widower-registry/", payload);
    return data.data;
  },

  async update(memberId, payload) {
    const { data } = await apiClient.patch(`/members/${memberId}/widow-widower-registry/`, payload);
    return data.data;
  },

  async addSupportNote(memberId, note) {
    const { data } = await apiClient.post(`/members/${memberId}/widow-widower-registry/support-notes/`, { note });
    return data.data;
  },

  /** Follow-up & Notes tab's "+ Add Note" — not tied to a specific
   * member row (the tab lets you type who it's about), so it's a
   * separate endpoint from addSupportNote above. */
  async addGeneralSupportNote(payload) {
    const { data } = await apiClient.post("/senior-care/widow-widower-notes/", payload);
    return data.data;
  },

  /** Upcoming Milestones tab's "+ Add Milestone". */
  async addMilestone(payload) {
    const { data } = await apiClient.post("/widow-widower-registry/milestones/", payload);
    return data.data;
  },
};

export default widowWidowerService;
