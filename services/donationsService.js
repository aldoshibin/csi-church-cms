import apiClient from "@/lib/axios";

/** Donations service — maps to giving/donations/views.py. */
export const donationsService = {
  async listDonations(params) {
    const { data } = await apiClient.get("/giving/donations/", { params });
    return data.data;
  },
  async getDonation(id) {
    const { data } = await apiClient.get(`/giving/donations/${id}/`);
    return data.data;
  },
  async sendReceipt(id) {
    const { data } = await apiClient.post(`/giving/donations/${id}/send-receipt/`);
    return data.data;
  },
  async refundDonation(id, payload) {
    const { data } = await apiClient.post(`/giving/donations/${id}/refund/`, payload);
    return data.data;
  },
  async deleteDonation(id) {
    const { data } = await apiClient.delete(`/giving/donations/${id}/`);
    return data.data;
  },
};
