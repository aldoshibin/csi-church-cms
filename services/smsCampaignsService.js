import { apiClient } from "@/lib/axios";

export const smsCampaignsService = {
  async listCampaigns(params) {
    const { data } = await apiClient.get("/communication/sms-campaigns", { params });
    return data;
  },
  async getCampaign(id) {
    const { data } = await apiClient.get(`/communication/sms-campaigns/${id}`);
    return data;
  },
  async createCampaign(payload) {
    const { data } = await apiClient.post("/communication/sms-campaigns", payload);
    return data;
  },
  async resendCampaign(id) {
    const { data } = await apiClient.post(`/communication/sms-campaigns/${id}/resend`);
    return data;
  },
  async duplicateCampaign(id) {
    const { data } = await apiClient.post(`/communication/sms-campaigns/${id}/duplicate`);
    return data;
  },
  async deleteCampaign(id) {
    const { data } = await apiClient.delete(`/communication/sms-campaigns/${id}`);
    return data;
  },
};
