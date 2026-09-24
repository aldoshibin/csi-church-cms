import apiClient from "@/lib/axios";

/** Fellowship Groups service — maps to womens_fellowship/groups/views.py. */
export const fellowshipGroupsService = {
  async listGroups(params) {
    const { data } = await apiClient.get("/womens-fellowship/groups/", { params });
    return data.data;
  },
  async getGroup(id) {
    const { data } = await apiClient.get(`/womens-fellowship/groups/${id}/`);
    return data.data;
  },
  async createGroup(payload) {
    const { data } = await apiClient.post("/womens-fellowship/groups/", payload);
    return data.data;
  },
  async updateGroup(id, payload) {
    const { data } = await apiClient.patch(`/womens-fellowship/groups/${id}/`, payload);
    return data.data;
  },
  async deleteGroup(id) {
    const { data } = await apiClient.delete(`/womens-fellowship/groups/${id}/`);
    return data.data;
  },
};
