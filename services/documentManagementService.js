import { apiClient } from "@/lib/axios";

export const documentManagementService = {
  async listDocuments(params) {
    const { data } = await apiClient.get("/document-management/documents", { params });
    return data;
  },
  async getDocument(id) {
    const { data } = await apiClient.get(`/document-management/documents/${id}`);
    return data;
  },
  async uploadDocument(payload) {
    const { data } = await apiClient.post("/document-management/documents", payload);
    return data;
  },
  async deleteDocument(id) {
    const { data } = await apiClient.delete(`/document-management/documents/${id}`);
    return data;
  },
};
