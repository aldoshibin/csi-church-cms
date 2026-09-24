import apiClient from "@/lib/axios";

/** Sunday School Teachers service — maps to sunday_school/teachers/views.py. */
export const teachersService = {
  async listTeachers(params) {
    const { data } = await apiClient.get("/sunday-school/teachers/", { params });
    return data.data;
  },
  async getTeacher(id) {
    const { data } = await apiClient.get(`/sunday-school/teachers/${id}/`);
    return data.data;
  },
  async createTeacher(payload) {
    const { data } = await apiClient.post("/sunday-school/teachers/", payload);
    return data.data;
  },
  async updateTeacher(id, payload) {
    const { data } = await apiClient.patch(`/sunday-school/teachers/${id}/`, payload);
    return data.data;
  },
  async deactivateTeacher(id) {
    const { data } = await apiClient.post(`/sunday-school/teachers/${id}/deactivate/`);
    return data.data;
  },
  async deleteTeacher(id) {
    const { data } = await apiClient.delete(`/sunday-school/teachers/${id}/`);
    return data.data;
  },
};
