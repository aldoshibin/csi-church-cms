import apiClient from "@/lib/axios";

/** Choir & Worship Team service — maps to choir_worship/* views.py once wired up. */
export const choirWorshipService = {
  async getDashboard(params) {
    const { data } = await apiClient.get("/choir-worship/dashboard/", { params });
    return data.data;
  },
  async listMembers(params) {
    const { data } = await apiClient.get("/choir-worship/members/", { params });
    return data.data;
  },
  async getMember(id) {
    const { data } = await apiClient.get(`/choir-worship/members/${id}/`);
    return data.data;
  },
  async createMember(payload) {
    const { data } = await apiClient.post("/choir-worship/members/", payload);
    return data.data;
  },
  async listWorshipTeamMembers(params) {
    const { data } = await apiClient.get("/choir-worship/worship-team-members/", { params });
    return data.data;
  },
  async getWorshipTeamMember(id) {
    const { data } = await apiClient.get(`/choir-worship/worship-team-members/${id}/`);
    return data.data;
  },
  async createWorshipTeamMember(payload) {
    const { data } = await apiClient.post("/choir-worship/worship-team-members/", payload);
    return data.data;
  },
  async listPracticeSchedule(params) {
    const { data } = await apiClient.get("/choir-worship/practice-schedule/", { params });
    return data.data;
  },
  async getPracticeScheduleMember(id) {
    const { data } = await apiClient.get(`/choir-worship/practice-schedule/${id}/`);
    return data.data;
  },
  async createPracticeSchedule(payload) {
    const { data } = await apiClient.post("/choir-worship/practice-schedule/", payload);
    return data.data;
  },
  async listRehearsals(params) {
    const { data } = await apiClient.get("/choir-worship/rehearsals/", { params });
    return data.data;
  },
  async listServices(params) {
    const { data } = await apiClient.get("/choir-worship/services/", { params });
    return data.data;
  },
  async getService(id) {
    const { data } = await apiClient.get(`/choir-worship/services/${id}/`);
    return data.data;
  },
  async createService(payload) {
    const { data } = await apiClient.post("/choir-worship/services/", payload);
    return data.data;
  },
  async listSongs(params) {
    const { data } = await apiClient.get("/choir-worship/songs/", { params });
    return data.data;
  },
  async getSong(id) {
    const { data } = await apiClient.get(`/choir-worship/songs/${id}/`);
    return data.data;
  },
  async createSong(payload) {
    const { data } = await apiClient.post("/choir-worship/songs/", payload);
    return data.data;
  },
  async getChoirWorshipReports(params) {
    const { data } = await apiClient.get("/choir-worship/reports/", { params });
    return data.data;
  },
  async createItem(payload) {
    const { data } = await apiClient.post("/choir-worship/items/", payload);
    return data.data;
  },
};
