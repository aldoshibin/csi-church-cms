import apiClient from "@/lib/axios";

/** Communication Module service — maps to communication/* views.py once wired up. */
export const communicationService = {
  async getOverview(params) {
    const { data } = await apiClient.get("/communication/overview/", { params });
    return data.data;
  },
  async listCommunications(params) {
    const { data } = await apiClient.get("/communication/recent/", { params });
    return data.data;
  },
};
