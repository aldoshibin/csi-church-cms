import apiClient from "@/lib/axios";

/**
 * Member Management service — maps 1:1 to members/views.py's MemberViewSet
 * actions. All list/detail pages and forms for Member Management go through
 * these functions rather than calling apiClient directly.
 */
export const memberService = {
  async list(params = {}) {
    const { data } = await apiClient.get("/members/", { params });
    return data; // { count, next, previous, results }
  },

  async get(id) {
    const { data } = await apiClient.get(`/members/${id}/`);
    return data.data;
  },

  async create(payload) {
    const { data } = await apiClient.post("/members/", payload);
    return data.data;
  },

  async update(id, payload) {
    const { data } = await apiClient.patch(`/members/${id}/`, payload);
    return data.data;
  },

  async remove(id) {
    await apiClient.delete(`/members/${id}/`);
  },

  async uploadPhoto(id, file) {
    const formData = new FormData();
    formData.append("photo", file);
    const { data } = await apiClient.post(`/members/${id}/upload-photo/`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return data.data;
  },

  async transferOut(id, payload) {
    const { data } = await apiClient.post(`/members/${id}/transfer-out/`, payload);
    return data.data;
  },

  async transferIn(payload) {
    const { data } = await apiClient.post("/members/transfer-in/", payload);
    return data.data;
  },

  async transferHistory(id) {
    const { data } = await apiClient.get(`/members/${id}/transfer-history/`);
    return data.data;
  },

  async birthdaysForMonth(month) {
    const { data } = await apiClient.get("/members/birthdays/", { params: { month } });
    return data.data;
  },

  /** Triggers a file download of the filtered member list as .xlsx */
  async exportExcel(params = {}) {
    const response = await apiClient.get("/members/export/excel/", { params, responseType: "blob" });
    downloadBlob(response.data, "members_export.xlsx");
  },

  /** Triggers a file download of the filtered member list as .pdf */
  async exportPdf(params = {}) {
    const response = await apiClient.get("/members/export/pdf/", { params, responseType: "blob" });
    downloadBlob(response.data, "members_export.pdf");
  },
};

function downloadBlob(blobData, filename) {
  const url = window.URL.createObjectURL(new Blob([blobData]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
}
