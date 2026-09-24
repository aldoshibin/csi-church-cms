import apiClient from "@/lib/axios";

/** Attendance service — maps to volunteer_management/attendance/* views.py once wired up. */
export const attendanceService = {
  async listAttendance(params) {
    const { data } = await apiClient.get("/volunteer-management/attendance/", { params });
    return data.data;
  },
  async getAttendance(id) {
    const { data } = await apiClient.get(`/volunteer-management/attendance/${id}/`);
    return data.data;
  },
  async markAttendance(payload) {
    const { data } = await apiClient.post("/volunteer-management/attendance/mark/", payload);
    return data.data;
  },
  async updateAttendance(id, payload) {
    const { data } = await apiClient.patch(`/volunteer-management/attendance/${id}/`, payload);
    return data.data;
  },
};
