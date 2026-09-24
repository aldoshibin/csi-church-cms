import apiClient from "@/lib/axios";

/** Youth Ministry Attendance service — maps to youth_ministry/attendance/views.py. */
export const ymAttendanceService = {
  async getOverview(params) {
    const { data } = await apiClient.get("/youth-ministry/attendance/overview/", { params });
    return data.data;
  },
  async getEventAttendance(id) {
    const { data } = await apiClient.get(`/youth-ministry/attendance/${id}/`);
    return data.data;
  },
  async updateEventAttendance(id, payload) {
    const { data } = await apiClient.patch(`/youth-ministry/attendance/${id}/`, payload);
    return data.data;
  },
};
