import { apiClient } from "@/lib/axios";

export const documentFoldersService = {
  async listFolders(params) {
    const { data } = await apiClient.get("/document-management/folders", { params });
    return data;
  },
  async getFolder(id) {
    const { data } = await apiClient.get(`/document-management/folders/${id}`);
    return data;
  },
  async createFolder(payload) {
    const { data } = await apiClient.post("/document-management/folders", payload);
    return data;
  },
  async deleteFolder(id) {
    const { data } = await apiClient.delete(`/document-management/folders/${id}`);
    return data;
  },
};
