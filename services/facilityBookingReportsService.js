import { apiClient } from "@/lib/axios";

export const facilityBookingReportsService = {
  async getReportSummary(params) {
    const { data } = await apiClient.get("/facility-booking/reports", { params });
    return data;
  },
};
