import apiClient from "@/lib/axios";

/** Youth Ministry Reports service — maps to youth_ministry/reports/views.py. */
export const ymReportsService = {
  async getOverview(params) {
    const { data } = await apiClient.get("/youth-ministry/reports/overview/", { params });
    return data.data;
  },
};
