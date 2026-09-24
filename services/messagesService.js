import { apiClient } from "@/lib/axios";

export const messagesService = {
  async listMessages(params) {
    const { data } = await apiClient.get("/communication/messages", { params });
    return data;
  },
  async getMessage(id) {
    const { data } = await apiClient.get(`/communication/messages/${id}`);
    return data;
  },
  async createMessage(payload) {
    const { data } = await apiClient.post("/communication/messages", payload);
    return data;
  },
  async resendMessage(id) {
    const { data } = await apiClient.post(`/communication/messages/${id}/resend`);
    return data;
  },
  async duplicateMessage(id) {
    const { data } = await apiClient.post(`/communication/messages/${id}/duplicate`);
    return data;
  },
  async deleteMessage(id) {
    const { data } = await apiClient.delete(`/communication/messages/${id}`);
    return data;
  },
};
