import apiClient from "@/lib/axios";

/** Prayer Ministry service — maps to prayer_ministry/* views.py once wired up. */
export const prayerMinistryService = {
  async listPrayerRequests(params) {
    const { data } = await apiClient.get("/prayer-ministry/requests/", { params });
    return data.data;
  },
  async getPrayerRequest(id) {
    const { data } = await apiClient.get(`/prayer-ministry/requests/${id}/`);
    return data.data;
  },
  async addPrayerUpdate(id, payload) {
    const { data } = await apiClient.post(`/prayer-ministry/requests/${id}/updates/`, payload);
    return data.data;
  },
  async markAnswered(id) {
    const { data } = await apiClient.post(`/prayer-ministry/requests/${id}/mark-answered/`);
    return data.data;
  },
  async createPrayerRequest(payload) {
    const { data } = await apiClient.post("/prayer-ministry/requests/", payload);
    return data.data;
  },
  async getDashboard(params) {
    const { data } = await apiClient.get("/prayer-ministry/dashboard/", { params });
    return data.data;
  },
  async listPraiseReports(params) {
    const { data } = await apiClient.get("/prayer-ministry/praise-reports/", { params });
    return data.data;
  },
  async getPraiseReport(id) {
    const { data } = await apiClient.get(`/prayer-ministry/praise-reports/${id}/`);
    return data.data;
  },
  async createPraiseReport(payload) {
    const { data } = await apiClient.post("/prayer-ministry/praise-reports/", payload);
    return data.data;
  },
  async unpublishPraiseReport(id) {
    const { data } = await apiClient.post(`/prayer-ministry/praise-reports/${id}/unpublish/`);
    return data.data;
  },
  async listPrayerGroups(params) {
    const { data } = await apiClient.get("/prayer-ministry/groups/", { params });
    return data.data;
  },
  async getPrayerGroup(id) {
    const { data } = await apiClient.get(`/prayer-ministry/groups/${id}/`);
    return data.data;
  },
  async createPrayerGroup(payload) {
    const { data } = await apiClient.post("/prayer-ministry/groups/", payload);
    return data.data;
  },
  async deactivatePrayerGroup(id) {
    const { data } = await apiClient.post(`/prayer-ministry/groups/${id}/deactivate/`);
    return data.data;
  },
  async listIntercessors(params) {
    const { data } = await apiClient.get("/prayer-ministry/intercessors/", { params });
    return data.data;
  },
  async getIntercessor(id) {
    const { data } = await apiClient.get(`/prayer-ministry/intercessors/${id}/`);
    return data.data;
  },
  async createIntercessor(payload) {
    const { data } = await apiClient.post("/prayer-ministry/intercessors/", payload);
    return data.data;
  },
  async deactivateIntercessor(id) {
    const { data } = await apiClient.post(`/prayer-ministry/intercessors/${id}/deactivate/`);
    return data.data;
  },
  async listCalendarEvents(params) {
    const { data } = await apiClient.get("/prayer-ministry/calendar/events/", { params });
    return data.data;
  },
  async createCalendarEvent(payload) {
    const { data } = await apiClient.post("/prayer-ministry/calendar/events/", payload);
    return data.data;
  },
  async listBulletinRequests(params) {
    const { data } = await apiClient.get("/prayer-ministry/bulletin-requests/", { params });
    return data.data;
  },
  async getBulletinRequest(id) {
    const { data } = await apiClient.get(`/prayer-ministry/bulletin-requests/${id}/`);
    return data.data;
  },
  async createBulletinRequest(payload) {
    const { data } = await apiClient.post("/prayer-ministry/bulletin-requests/", payload);
    return data.data;
  },
  async deleteBulletinRequest(id) {
    const { data } = await apiClient.delete(`/prayer-ministry/bulletin-requests/${id}/`);
    return data.data;
  },
};
