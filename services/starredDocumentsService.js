import { apiClient } from "@/lib/axios";

export const starredDocumentsService = {
  async listStarredDocuments(params) {
    const { data } = await apiClient.get("/document-management/starred-documents", { params });
    return data;
  },
  async getStarredDocument(id) {
    const { data } = await apiClient.get(`/document-management/starred-documents/${id}`);
    return data;
  },
};
