import apiClient from "@/lib/axios";

/** Dashboard & Reports service — maps to reports/views.py. */
export const dashboardService = {
  async getDashboard() {
    const { data } = await apiClient.get("/reports/dashboard/");
    return data.data;
  },
  async membershipReport() {
    const { data } = await apiClient.get("/reports/membership/");
    return data.data;
  },
  async financialReport(year) {
    const { data } = await apiClient.get("/reports/financial/", { params: { year } });
    return data.data;
  },
  async attendanceReport({ sessionType, year }) {
    const { data } = await apiClient.get("/reports/attendance/", {
      params: { session_type: sessionType, year },
    });
    return data.data;
  },
  async ministryReport() {
    const { data } = await apiClient.get("/reports/ministries/");
    return data.data;
  },
  async eventReport() {
    const { data } = await apiClient.get("/reports/events/");
    return data.data;
  },
};
