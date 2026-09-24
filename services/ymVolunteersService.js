import apiClient from "@/lib/axios";

/** Youth Ministry Volunteers service — maps to youth_ministry/volunteers/views.py. */
export const ymVolunteersService = {
  async listVolunteers(params) {
    const { data } = await apiClient.get("/youth-ministry/volunteers/", { params });
    return data.data;
  },
  async getVolunteer(id) {
    const { data } = await apiClient.get(`/youth-ministry/volunteers/${id}/`);
    return data.data;
  },
  async createVolunteer(payload) {
    const { data } = await apiClient.post("/youth-ministry/volunteers/", payload);
    return data.data;
  },
  async updateVolunteer(id, payload) {
    const { data } = await apiClient.patch(`/youth-ministry/volunteers/${id}/`, payload);
    return data.data;
  },
  async deleteVolunteer(id) {
    const { data } = await apiClient.delete(`/youth-ministry/volunteers/${id}/`);
    return data.data;
  },
};
