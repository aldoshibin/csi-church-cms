import { apiClient } from "@/lib/axios";

export const documentCategoriesService = {
  async listCategories(params) {
    const { data } = await apiClient.get("/document-management/categories", { params });
    return data;
  },
  async getCategory(id) {
    const { data } = await apiClient.get(`/document-management/categories/${id}`);
    return data;
  },
  async createCategory(payload) {
    const { data } = await apiClient.post("/document-management/categories", payload);
    return data;
  },
  async deleteCategory(id) {
    const { data } = await apiClient.delete(`/document-management/categories/${id}`);
    return data;
  },
};
