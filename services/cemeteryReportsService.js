import { apiClient } from "@/lib/axios";

export const cemeteryReportsService = {
  async listReports(params) {
    const { data } = await apiClient.get("/cemetery-management/reports", { params });
    return data;
  },
};
