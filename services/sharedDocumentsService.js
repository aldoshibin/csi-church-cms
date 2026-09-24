import { apiClient } from "@/lib/axios";

export const sharedDocumentsService = {
  async listSharedDocuments(params) {
    const { data } = await apiClient.get("/document-management/shared-documents", { params });
    return data;
  },
  async getSharedDocument(id) {
    const { data } = await apiClient.get(`/document-management/shared-documents/${id}`);
    return data;
  },
};
