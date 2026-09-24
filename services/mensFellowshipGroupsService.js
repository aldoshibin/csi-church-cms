import apiClient from "@/lib/axios";

/** Men's Fellowship Groups service — maps to mens_fellowship/groups/views.py. */
export const mensFellowshipGroupsService = {
  async listGroups(params) {
    const { data } = await apiClient.get("/mens-fellowship/groups/", { params });
    return data.data;
  },
  async getGroup(id) {
    const { data } = await apiClient.get(`/mens-fellowship/groups/${id}/`);
    return data.data;
  },
  async createGroup(payload) {
    const { data } = await apiClient.post("/mens-fellowship/groups/", payload);
    return data.data;
  },
  async updateGroup(id, payload) {
    const { data } = await apiClient.patch(`/mens-fellowship/groups/${id}/`, payload);
    return data.data;
  },
  async deleteGroup(id) {
    const { data } = await apiClient.delete(`/mens-fellowship/groups/${id}/`);
    return data.data;
  },
};
