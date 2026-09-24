import apiClient from "@/lib/axios";

/** Women's Fellowship Activities service — maps to womens_fellowship/activities/views.py. */
export const fellowshipActivitiesService = {
  async listActivities(params) {
    const { data } = await apiClient.get("/womens-fellowship/activities/", { params });
    return data.data;
  },
  async getActivity(id) {
    const { data } = await apiClient.get(`/womens-fellowship/activities/${id}/`);
    return data.data;
  },
  async createActivity(payload) {
    const { data } = await apiClient.post("/womens-fellowship/activities/", payload);
    return data.data;
  },
  async updateActivity(id, payload) {
    const { data } = await apiClient.patch(`/womens-fellowship/activities/${id}/`, payload);
    return data.data;
  },
  async deleteActivity(id) {
    const { data } = await apiClient.delete(`/womens-fellowship/activities/${id}/`);
    return data.data;
  },
};
