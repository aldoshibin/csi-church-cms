import apiClient from "@/lib/axios";

/** Chart of Accounts service — maps to finance/accounts/views.py. */
export const chartOfAccountsService = {
  async listAccounts(params) {
    const { data } = await apiClient.get("/finance/accounts/", { params });
    return data.data;
  },
  async getAccount(id) {
    const { data } = await apiClient.get(`/finance/accounts/${id}/`);
    return data.data;
  },
  async createAccount(payload) {
    const { data } = await apiClient.post("/finance/accounts/", payload);
    return data.data;
  },
  async updateAccount(id, payload) {
    const { data } = await apiClient.patch(`/finance/accounts/${id}/`, payload);
    return data.data;
  },
  async deactivateAccount(id) {
    const { data } = await apiClient.post(`/finance/accounts/${id}/deactivate/`);
    return data.data;
  },
  async deleteAccount(id) {
    const { data } = await apiClient.delete(`/finance/accounts/${id}/`);
    return data.data;
  },
  async getAccountHierarchy(parentId) {
    const { data } = await apiClient.get(`/finance/accounts/${parentId}/hierarchy/`);
    return data.data;
  },
};
