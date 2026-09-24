import apiClient from "@/lib/axios";

/** Reports service — maps to reports/views.py. */
export const reportsService = {
  async getOverview(params) {
    const { data } = await apiClient.get("/reports/overview/", { params });
    return data.data;
  },
  async listReports(params) {
    const { data } = await apiClient.get("/reports/", { params });
    return data.data;
  },
  async generateReport(id) {
    const { data } = await apiClient.post(`/reports/${id}/generate/`);
    return data.data;
  },
  async downloadReport(id) {
    const { data } = await apiClient.get(`/reports/${id}/download/`, { responseType: "blob" });
    return data;
  },
};
