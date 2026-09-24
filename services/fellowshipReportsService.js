import apiClient from "@/lib/axios";

/** Women's Fellowship Reports service — maps to womens_fellowship/reports/views.py. */
export const fellowshipReportsService = {
  async getOverview(params) {
    const { data } = await apiClient.get("/womens-fellowship/reports/overview/", { params });
    return data.data;
  },
};
