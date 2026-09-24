import { apiClient } from "@/lib/axios";

export const emailCampaignsService = {
  async listCampaigns(params) {
    const { data } = await apiClient.get("/communication/email-campaigns", { params });
    return data;
  },
  async getCampaign(id) {
    const { data } = await apiClient.get(`/communication/email-campaigns/${id}`);
    return data;
  },
  async createCampaign(payload) {
    const { data } = await apiClient.post("/communication/email-campaigns", payload);
    return data;
  },
  async resendCampaign(id) {
    const { data } = await apiClient.post(`/communication/email-campaigns/${id}/resend`);
    return data;
  },
  async duplicateCampaign(id) {
    const { data } = await apiClient.post(`/communication/email-campaigns/${id}/duplicate`);
    return data;
  },
  async deleteCampaign(id) {
    const { data } = await apiClient.delete(`/communication/email-campaigns/${id}`);
    return data;
  },
};
