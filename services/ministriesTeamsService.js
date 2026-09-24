import apiClient from "@/lib/axios";

/** Ministries & Teams service — maps to volunteer_management/ministries/* views.py once wired up. */
export const ministriesTeamsService = {
  async listMinistries(params) {
    const { data } = await apiClient.get("/volunteer-management/ministries/", { params });
    return data.data;
  },
  async getMinistry(id) {
    const { data } = await apiClient.get(`/volunteer-management/ministries/${id}/`);
    return data.data;
  },
  async createMinistry(payload) {
    const { data } = await apiClient.post("/volunteer-management/ministries/", payload);
    return data.data;
  },
  async deactivateMinistry(id) {
    const { data } = await apiClient.post(`/volunteer-management/ministries/${id}/deactivate/`);
    return data.data;
  },
  async deleteMinistry(id) {
    const { data } = await apiClient.delete(`/volunteer-management/ministries/${id}/`);
    return data.data;
  },
};
