import apiClient from "@/lib/axios";

/** Expenses service — maps to finance/expenses/views.py. */
export const expensesService = {
  async getSummary(params) {
    const { data } = await apiClient.get("/finance/expenses/summary/", { params });
    return data.data;
  },
  async listExpenses(params) {
    const { data } = await apiClient.get("/finance/expenses/", { params });
    return data.data;
  },
  async getExpense(id) {
    const { data } = await apiClient.get(`/finance/expenses/${id}/`);
    return data.data;
  },
  async createExpense(payload) {
    const { data } = await apiClient.post("/finance/expenses/", payload);
    return data.data;
  },
  async updateExpense(id, payload) {
    const { data } = await apiClient.patch(`/finance/expenses/${id}/`, payload);
    return data.data;
  },
  async deleteExpense(id) {
    const { data } = await apiClient.delete(`/finance/expenses/${id}/`);
    return data.data;
  },
};
