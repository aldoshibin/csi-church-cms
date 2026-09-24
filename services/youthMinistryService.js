import apiClient from "@/lib/axios";

/** Youth Ministry service — maps to youth_ministry/views.py. */
export const youthMinistryService = {
  async getDashboard(params) {
    const { data } = await apiClient.get("/youth-ministry/dashboard/", { params });
    return data.data;
  },
  async createActivity(payload) {
    const { data } = await apiClient.post("/youth-ministry/activities/", payload);
    return data.data;
  },
};
