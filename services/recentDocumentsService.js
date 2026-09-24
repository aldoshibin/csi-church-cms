import { apiClient } from "@/lib/axios";

export const recentDocumentsService = {
  async listRecentDocuments(params) {
    const { data } = await apiClient.get("/document-management/recent-documents", { params });
    return data;
  },
  async getRecentDocument(id) {
    const { data } = await apiClient.get(`/document-management/recent-documents/${id}`);
    return data;
  },
};
