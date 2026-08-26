import apiClient from "@/lib/axios";

/** Income service — maps to finance/income/views.py. */
export const incomeService = {
  async getSummary(params) {
    const { data } = await apiClient.get("/finance/income/summary/", { params });
    return data.data;
  },
  async listIncome(params) {
    const { data } = await apiClient.get("/finance/income/", { params });
    return data.data;
  },
  async getIncome(id) {
    const { data } = await apiClient.get(`/finance/income/${id}/`);
    return data.data;
  },
  async createIncome(payload) {
    const { data } = await apiClient.post("/finance/income/", payload);
    return data.data;
  },
  async updateIncome(id, payload) {
    const { data } = await apiClient.patch(`/finance/income/${id}/`, payload);
    return data.data;
  },
  async deleteIncome(id) {
    const { data } = await apiClient.delete(`/finance/income/${id}/`);
    return data.data;
  },
};
