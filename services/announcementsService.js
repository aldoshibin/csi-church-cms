import apiClient from "@/lib/axios";

/** Announcements service — maps to communication/announcements/* views.py once wired up. */
export const announcementsService = {
  async listAnnouncements(params) {
    const { data } = await apiClient.get("/communication/announcements/", { params });
    return data.data;
  },
  async getAnnouncement(id) {
    const { data } = await apiClient.get(`/communication/announcements/${id}/`);
    return data.data;
  },
  async createAnnouncement(payload) {
    const { data } = await apiClient.post("/communication/announcements/", payload);
    return data.data;
  },
  async duplicateAnnouncement(id) {
    const { data } = await apiClient.post(`/communication/announcements/${id}/duplicate/`);
    return data.data;
  },
  async deleteAnnouncement(id) {
    const { data } = await apiClient.delete(`/communication/announcements/${id}/`);
    return data.data;
  },
};
