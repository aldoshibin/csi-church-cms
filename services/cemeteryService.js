import { apiClient } from "@/lib/axios";

export const cemeteryService = {
  async getOverview() {
    const { data } = await apiClient.get("/cemetery-management/overview");
    return data;
  },
  async listBurialRecords(params) {
    const { data } = await apiClient.get("/cemetery-management/burial-records", { params });
    return data;
  },
  async getBurialRecord(id) {
    const { data } = await apiClient.get(`/cemetery-management/burial-records/${id}`);
    return data;
  },
  async createBurialRecord(payload) {
    const { data } = await apiClient.post("/cemetery-management/burial-records", payload);
    return data;
  },
  async deleteBurialRecord(id) {
    const { data } = await apiClient.delete(`/cemetery-management/burial-records/${id}`);
    return data;
  },
  async listPlots(params) {
    const { data } = await apiClient.get("/cemetery-management/plots", { params });
    return data;
  },
  async getPlot(id) {
    const { data } = await apiClient.get(`/cemetery-management/plots/${id}`);
    return data;
  },
  async createPlot(payload) {
    const { data } = await apiClient.post("/cemetery-management/plots", payload);
    return data;
  },
};
