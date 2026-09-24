import apiClient from "@/lib/axios";

/** Sunday School Students service — maps to sunday_school/students/views.py. */
export const studentsService = {
  async listStudents(params) {
    const { data } = await apiClient.get("/sunday-school/students/", { params });
    return data.data;
  },
  async getStudent(id) {
    const { data } = await apiClient.get(`/sunday-school/students/${id}/`);
    return data.data;
  },
  async createStudent(payload) {
    const { data } = await apiClient.post("/sunday-school/students/", payload);
    return data.data;
  },
  async updateStudent(id, payload) {
    const { data } = await apiClient.patch(`/sunday-school/students/${id}/`, payload);
    return data.data;
  },
  async deactivateStudent(id) {
    const { data } = await apiClient.post(`/sunday-school/students/${id}/deactivate/`);
    return data.data;
  },
  async deleteStudent(id) {
    const { data } = await apiClient.delete(`/sunday-school/students/${id}/`);
    return data.data;
  },
};
