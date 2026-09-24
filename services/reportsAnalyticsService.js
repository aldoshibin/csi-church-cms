import { apiClient } from "@/lib/axios";

// Distinct from the existing services/reportsService.js (an unrelated,
// never-wired-up scaffold for a different member/finance-list design).
export const reportsAnalyticsService = {
  async getOverview(params) {
    const { data } = await apiClient.get("/reports-analytics/overview", { params });
    return data;
  },
};
