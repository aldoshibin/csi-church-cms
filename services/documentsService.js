import { apiClient } from "@/lib/axios";

export const documentsService = {
  async listDocuments(params) {
    const { data } = await apiClient.get("/cemetery-management/documents", { params });
    return data;
  },
  async getDocument(id) {
    const { data } = await apiClient.get(`/cemetery-management/documents/${id}`);
    return data;
  },
  async uploadDocument(payload) {
    const { data } = await apiClient.post("/cemetery-management/documents", payload);
    return data;
  },
  async deleteDocument(id) {
    const { data } = await apiClient.delete(`/cemetery-management/documents/${id}`);
    return data;
  },
};
