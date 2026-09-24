import { apiClient } from "@/lib/axios";

export const documentTrashService = {
  async listTrash(params) {
    const { data } = await apiClient.get("/document-management/trash", { params });
    return data;
  },
  async restoreDocument(id) {
    const { data } = await apiClient.post(`/document-management/trash/${id}/restore`);
    return data;
  },
  async deletePermanently(id) {
    const { data } = await apiClient.delete(`/document-management/trash/${id}`);
    return data;
  },
  async emptyTrash() {
    const { data } = await apiClient.delete("/document-management/trash");
    return data;
  },
};
