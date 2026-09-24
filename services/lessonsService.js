import apiClient from "@/lib/axios";

/** Sunday School Lessons service — maps to sunday_school/lessons/views.py. */
export const lessonsService = {
  async listLessons(params) {
    const { data } = await apiClient.get("/sunday-school/lessons/", { params });
    return data.data;
  },
  async getLesson(id) {
    const { data } = await apiClient.get(`/sunday-school/lessons/${id}/`);
    return data.data;
  },
  async createLesson(payload) {
    const { data } = await apiClient.post("/sunday-school/lessons/", payload);
    return data.data;
  },
  async updateLesson(id, payload) {
    const { data } = await apiClient.patch(`/sunday-school/lessons/${id}/`, payload);
    return data.data;
  },
  async deleteLesson(id) {
    const { data } = await apiClient.delete(`/sunday-school/lessons/${id}/`);
    return data.data;
  },
};
