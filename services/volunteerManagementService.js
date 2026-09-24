import apiClient from "@/lib/axios";

/** Volunteer Management service — maps to volunteer_management/* views.py once wired up. */
export const volunteerManagementService = {
  async getDashboard(params) {
    const { data } = await apiClient.get("/volunteer-management/dashboard/", { params });
    return data.data;
  },
  async listVolunteers(params) {
    const { data } = await apiClient.get("/volunteer-management/volunteers/", { params });
    return data.data;
  },
  async getVolunteer(id) {
    const { data } = await apiClient.get(`/volunteer-management/volunteers/${id}/`);
    return data.data;
  },
  async createVolunteer(payload) {
    const { data } = await apiClient.post("/volunteer-management/volunteers/", payload);
    return data.data;
  },
  async deactivateVolunteer(id) {
    const { data } = await apiClient.post(`/volunteer-management/volunteers/${id}/deactivate/`);
    return data.data;
  },
};
