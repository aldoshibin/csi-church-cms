import apiClient from "@/lib/axios";

/** Finance & Accounting service — maps to finance/views.py. */
export const financeService = {
  async getDashboard(params) {
    const { data } = await apiClient.get("/finance/dashboard/", { params });
    return data.data;
  },
  async listTransactions(params) {
    const { data } = await apiClient.get("/finance/transactions/", { params });
    return data.data;
  },
  async getTransaction(id) {
    const { data } = await apiClient.get(`/finance/transactions/${id}/`);
    return data.data;
  },
  async createTransaction(payload) {
    const { data } = await apiClient.post("/finance/transactions/", payload);
    return data.data;
  },
  async updateTransaction(id, payload) {
    const { data } = await apiClient.patch(`/finance/transactions/${id}/`, payload);
    return data.data;
  },
  async deleteTransaction(id) {
    const { data } = await apiClient.delete(`/finance/transactions/${id}/`);
    return data.data;
  },
  async getAccountBalance(accountId) {
    const { data } = await apiClient.get(`/finance/accounts/${accountId}/balance/`);
    return data.data;
  },
};
