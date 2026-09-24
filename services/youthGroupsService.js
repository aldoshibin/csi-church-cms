import apiClient from "@/lib/axios";

/** Youth Groups service — maps to youth_ministry/groups/views.py. */
export const youthGroupsService = {
  async listGroups(params) {
    const { data } = await apiClient.get("/youth-ministry/groups/", { params });
    return data.data;
  },
  async getGroup(id) {
    const { data } = await apiClient.get(`/youth-ministry/groups/${id}/`);
    return data.data;
  },
  async createGroup(payload) {
    const { data } = await apiClient.post("/youth-ministry/groups/", payload);
    return data.data;
  },
  async updateGroup(id, payload) {
    const { data } = await apiClient.patch(`/youth-ministry/groups/${id}/`, payload);
    return data.data;
  },
  async deactivateGroup(id) {
    const { data } = await apiClient.post(`/youth-ministry/groups/${id}/deactivate/`);
    return data.data;
  },
  async deleteGroup(id) {
    const { data } = await apiClient.delete(`/youth-ministry/groups/${id}/`);
    return data.data;
  },
};
