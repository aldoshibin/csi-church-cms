import apiClient from "@/lib/axios";

/** Audit Logs service — maps to core/audit_logs/views.py. */
export const auditLogsService = {
  async listLogs(params) {
    const { data } = await apiClient.get("/audit-logs/", { params });
    return data.data;
  },
  async getSummary(params) {
    const { data } = await apiClient.get("/audit-logs/summary/", { params });
    return data.data;
  },
  async exportLogs(params) {
    const { data } = await apiClient.get("/audit-logs/export/", { params, responseType: "blob" });
    return data;
  },
};
