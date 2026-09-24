import apiClient from "@/lib/axios";

/** Service Assignments service — maps to volunteer_management/assignments/* views.py once wired up. */
export const serviceAssignmentsService = {
  async listAssignments(params) {
    const { data } = await apiClient.get("/volunteer-management/assignments/", { params });
    return data.data;
  },
  async getAssignment(id) {
    const { data } = await apiClient.get(`/volunteer-management/assignments/${id}/`);
    return data.data;
  },
  async createAssignment(payload) {
    const { data } = await apiClient.post("/volunteer-management/assignments/", payload);
    return data.data;
  },
  async cancelAssignment(id) {
    const { data } = await apiClient.post(`/volunteer-management/assignments/${id}/cancel/`);
    return data.data;
  },
  async deleteAssignment(id) {
    const { data } = await apiClient.delete(`/volunteer-management/assignments/${id}/`);
    return data.data;
  },
};
