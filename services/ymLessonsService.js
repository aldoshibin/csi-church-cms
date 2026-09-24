import apiClient from "@/lib/axios";

/** Youth Ministry Lessons service — maps to youth_ministry/lessons/views.py. */
export const ymLessonsService = {
  async listLessons(params) {
    const { data } = await apiClient.get("/youth-ministry/lessons/", { params });
    return data.data;
  },
  async getLesson(id) {
    const { data } = await apiClient.get(`/youth-ministry/lessons/${id}/`);
    return data.data;
  },
  async createLesson(payload) {
    const { data } = await apiClient.post("/youth-ministry/lessons/", payload);
    return data.data;
  },
  async updateLesson(id, payload) {
    const { data } = await apiClient.patch(`/youth-ministry/lessons/${id}/`, payload);
    return data.data;
  },
  async deleteLesson(id) {
    const { data } = await apiClient.delete(`/youth-ministry/lessons/${id}/`);
    return data.data;
  },
};
