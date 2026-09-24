import apiClient from "@/lib/axios";

/** Pledges service — maps to giving/pledges/views.py. */
export const pledgesService = {
  async listPledges(params) {
    const { data } = await apiClient.get("/giving/pledges/", { params });
    return data.data;
  },
  async getPledge(id) {
    const { data } = await apiClient.get(`/giving/pledges/${id}/`);
    return data.data;
  },
  async createPledge(payload) {
    const { data } = await apiClient.post("/giving/pledges/", payload);
    return data.data;
  },
  async updatePledge(id, payload) {
    const { data } = await apiClient.patch(`/giving/pledges/${id}/`, payload);
    return data.data;
  },
  async recordPayment(id, payload) {
    const { data } = await apiClient.post(`/giving/pledges/${id}/record-payment/`, payload);
    return data.data;
  },
  async cancelPledge(id) {
    const { data } = await apiClient.post(`/giving/pledges/${id}/cancel/`);
    return data.data;
  },
};
