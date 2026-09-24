import apiClient from "@/lib/axios";

/** Women's Fellowship Members service — maps to womens_fellowship/members/views.py. */
export const fellowshipMembersService = {
  async listMembers(params) {
    const { data } = await apiClient.get("/womens-fellowship/members/", { params });
    return data.data;
  },
  async getMember(id) {
    const { data } = await apiClient.get(`/womens-fellowship/members/${id}/`);
    return data.data;
  },
  async createMember(payload) {
    const { data } = await apiClient.post("/womens-fellowship/members/", payload);
    return data.data;
  },
  async updateMember(id, payload) {
    const { data } = await apiClient.patch(`/womens-fellowship/members/${id}/`, payload);
    return data.data;
  },
  async deleteMember(id) {
    const { data } = await apiClient.delete(`/womens-fellowship/members/${id}/`);
    return data.data;
  },
};
