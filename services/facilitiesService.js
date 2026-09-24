import { apiClient } from "@/lib/axios";

export const facilitiesService = {
  async listFacilities(params) {
    const { data } = await apiClient.get("/facility-booking/facilities", { params });
    return data;
  },
  async getFacility(id) {
    const { data } = await apiClient.get(`/facility-booking/facilities/${id}`);
    return data;
  },
  async createFacility(payload) {
    const { data } = await apiClient.post("/facility-booking/facilities", payload);
    return data;
  },
  async deactivateFacility(id) {
    const { data } = await apiClient.post(`/facility-booking/facilities/${id}/deactivate`);
    return data;
  },
};
