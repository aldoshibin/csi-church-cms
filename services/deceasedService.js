import { apiClient } from "@/lib/axios";

export const deceasedService = {
  async listDeceased(params) {
    const { data } = await apiClient.get("/cemetery-management/deceased", { params });
    return data;
  },
  async getDeceased(id) {
    const { data } = await apiClient.get(`/cemetery-management/deceased/${id}`);
    return data;
  },
  async createDeceased(payload) {
    const { data } = await apiClient.post("/cemetery-management/deceased", payload);
    return data;
  },
  async deleteDeceased(id) {
    const { data } = await apiClient.delete(`/cemetery-management/deceased/${id}`);
    return data;
  },
};
