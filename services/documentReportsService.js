import { apiClient } from "@/lib/axios";

export const documentReportsService = {
  async getReport(params) {
    const { data } = await apiClient.get("/document-management/reports", { params });
    return data;
  },
};
