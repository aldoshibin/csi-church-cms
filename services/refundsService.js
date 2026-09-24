import apiClient from "@/lib/axios";

/** Refunds service — maps to giving/refunds/views.py. */
export const refundsService = {
  async listRefunds(params) {
    const { data } = await apiClient.get("/giving/refunds/", { params });
    return data.data;
  },
  async getRefund(id) {
    const { data } = await apiClient.get(`/giving/refunds/${id}/`);
    return data.data;
  },
  async createRefund(payload) {
    const { data } = await apiClient.post("/giving/refunds/", payload);
    return data.data;
  },
  async cancelRefund(id) {
    const { data } = await apiClient.post(`/giving/refunds/${id}/cancel/`);
    return data.data;
  },
};
