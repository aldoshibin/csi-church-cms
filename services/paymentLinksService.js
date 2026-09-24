import apiClient from "@/lib/axios";

/** Payment Links service — maps to giving/payment_links/views.py. */
export const paymentLinksService = {
  async listLinks(params) {
    const { data } = await apiClient.get("/giving/payment-links/", { params });
    return data.data;
  },
  async getLink(id) {
    const { data } = await apiClient.get(`/giving/payment-links/${id}/`);
    return data.data;
  },
  async createLink(payload) {
    const { data } = await apiClient.post("/giving/payment-links/", payload);
    return data.data;
  },
  async updateLink(id, payload) {
    const { data } = await apiClient.patch(`/giving/payment-links/${id}/`, payload);
    return data.data;
  },
  async duplicateLink(id) {
    const { data } = await apiClient.post(`/giving/payment-links/${id}/duplicate/`);
    return data.data;
  },
  async deactivateLink(id) {
    const { data } = await apiClient.post(`/giving/payment-links/${id}/deactivate/`);
    return data.data;
  },
  async deleteLink(id) {
    const { data } = await apiClient.delete(`/giving/payment-links/${id}/`);
    return data.data;
  },
};
