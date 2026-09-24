import apiClient from "@/lib/axios";

/** Online Giving & Payments service — maps to giving/views.py. */
export const onlineGivingService = {
  async getDashboard(params) {
    const { data } = await apiClient.get("/giving/dashboard/", { params });
    return data.data;
  },
  async listDonations(params) {
    const { data } = await apiClient.get("/giving/donations/", { params });
    return data.data;
  },
};
