import apiClient from "@/lib/axios";

/** Volunteer Availability service — maps to volunteer_management/availability/* views.py once wired up. */
export const availabilityService = {
  async listAvailability(params) {
    const { data } = await apiClient.get("/volunteer-management/availability/", { params });
    return data.data;
  },
  async getAvailability(id) {
    const { data } = await apiClient.get(`/volunteer-management/availability/${id}/`);
    return data.data;
  },
  async createAvailability(payload) {
    const { data } = await apiClient.post("/volunteer-management/availability/", payload);
    return data.data;
  },
  async removeAvailability(id) {
    const { data } = await apiClient.delete(`/volunteer-management/availability/${id}/`);
    return data.data;
  },
};
