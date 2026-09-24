import apiClient from "@/lib/axios";

/** Sunday School Management service — maps to sunday_school/views.py. */
export const sundaySchoolService = {
  async getDashboard(params) {
    const { data } = await apiClient.get("/sunday-school/dashboard/", { params });
    return data.data;
  },
  async listAttendance(params) {
    const { data } = await apiClient.get("/sunday-school/attendance/", { params });
    return data.data;
  },
};
