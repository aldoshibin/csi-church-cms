import apiClient from "@/lib/axios";

/** Recurring Donations service — maps to giving/recurring/views.py. */
export const recurringDonationsService = {
  async listSubscriptions(params) {
    const { data } = await apiClient.get("/giving/recurring-donations/", { params });
    return data.data;
  },
  async getSubscription(id) {
    const { data } = await apiClient.get(`/giving/recurring-donations/${id}/`);
    return data.data;
  },
  async createSubscription(payload) {
    const { data } = await apiClient.post("/giving/recurring-donations/", payload);
    return data.data;
  },
  async updateSubscription(id, payload) {
    const { data } = await apiClient.patch(`/giving/recurring-donations/${id}/`, payload);
    return data.data;
  },
  async pauseSubscription(id) {
    const { data } = await apiClient.post(`/giving/recurring-donations/${id}/pause/`);
    return data.data;
  },
  async cancelSubscription(id) {
    const { data } = await apiClient.post(`/giving/recurring-donations/${id}/cancel/`);
    return data.data;
  },
};
