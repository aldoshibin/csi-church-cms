import apiClient from "@/lib/axios";

/** Sunday School Classes service — maps to sunday_school/classes/views.py. */
export const classesService = {
  async listClasses(params) {
    const { data } = await apiClient.get("/sunday-school/classes/", { params });
    return data.data;
  },
  async getClass(id) {
    const { data } = await apiClient.get(`/sunday-school/classes/${id}/`);
    return data.data;
  },
  async createClass(payload) {
    const { data } = await apiClient.post("/sunday-school/classes/", payload);
    return data.data;
  },
  async updateClass(id, payload) {
    const { data } = await apiClient.patch(`/sunday-school/classes/${id}/`, payload);
    return data.data;
  },
  async duplicateClass(id) {
    const { data } = await apiClient.post(`/sunday-school/classes/${id}/duplicate/`);
    return data.data;
  },
  async deactivateClass(id) {
    const { data } = await apiClient.post(`/sunday-school/classes/${id}/deactivate/`);
    return data.data;
  },
  async deleteClass(id) {
    const { data } = await apiClient.delete(`/sunday-school/classes/${id}/`);
    return data.data;
  },
};
