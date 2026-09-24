import { apiClient } from "@/lib/axios";

export const templatesService = {
  async listTemplates(params) {
    const { data } = await apiClient.get("/communication/templates", { params });
    return data;
  },
  async getTemplate(id) {
    const { data } = await apiClient.get(`/communication/templates/${id}`);
    return data;
  },
  async createTemplate(payload) {
    const { data } = await apiClient.post("/communication/templates", payload);
    return data;
  },
  async duplicateTemplate(id) {
    const { data } = await apiClient.post(`/communication/templates/${id}/duplicate`);
    return data;
  },
  async deleteTemplate(id) {
    const { data } = await apiClient.delete(`/communication/templates/${id}`);
    return data;
  },
};
