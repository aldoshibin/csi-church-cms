import apiClient from "@/lib/axios";

/** Men's Fellowship service — maps to mens_fellowship/* views.py once wired up. */
export const mensFellowshipService = {
  async getDashboard(params) {
    const { data } = await apiClient.get("/mens-fellowship/dashboard/", { params });
    return data.data;
  },
  async listMembers(params) {
    const { data } = await apiClient.get("/mens-fellowship/members/", { params });
    return data.data;
  },
  async getMember(id) {
    const { data } = await apiClient.get(`/mens-fellowship/members/${id}/`);
    return data.data;
  },
  async createMember(payload) {
    const { data } = await apiClient.post("/mens-fellowship/members/", payload);
    return data.data;
  },
  async updateMember(id, payload) {
    const { data } = await apiClient.patch(`/mens-fellowship/members/${id}/`, payload);
    return data.data;
  },
  async deactivateMember(id) {
    const { data } = await apiClient.post(`/mens-fellowship/members/${id}/deactivate/`);
    return data.data;
  },
  async deleteMember(id) {
    const { data } = await apiClient.delete(`/mens-fellowship/members/${id}/`);
    return data.data;
  },
  async listGroups(params) {
    const { data } = await apiClient.get("/mens-fellowship/groups/", { params });
    return data.data;
  },
  async listMeetings(params) {
    const { data } = await apiClient.get("/mens-fellowship/meetings/", { params });
    return data.data;
  },
  async getMeeting(id) {
    const { data } = await apiClient.get(`/mens-fellowship/meetings/${id}/`);
    return data.data;
  },
  async createMeeting(payload) {
    const { data } = await apiClient.post("/mens-fellowship/meetings/", payload);
    return data.data;
  },
  async updateMeeting(id, payload) {
    const { data } = await apiClient.patch(`/mens-fellowship/meetings/${id}/`, payload);
    return data.data;
  },
  async cancelMeeting(id) {
    const { data } = await apiClient.post(`/mens-fellowship/meetings/${id}/cancel/`);
    return data.data;
  },
  async listActivities(params) {
    const { data } = await apiClient.get("/mens-fellowship/activities/", { params });
    return data.data;
  },
  async getActivity(id) {
    const { data } = await apiClient.get(`/mens-fellowship/activities/${id}/`);
    return data.data;
  },
  async createActivity(payload) {
    const { data } = await apiClient.post("/mens-fellowship/activities/", payload);
    return data.data;
  },
  async updateActivity(id, payload) {
    const { data } = await apiClient.patch(`/mens-fellowship/activities/${id}/`, payload);
    return data.data;
  },
  async cancelActivity(id) {
    const { data } = await apiClient.post(`/mens-fellowship/activities/${id}/cancel/`);
    return data.data;
  },
  async listBibleStudies(params) {
    const { data } = await apiClient.get("/mens-fellowship/bible-studies/", { params });
    return data.data;
  },
  async getBibleStudy(id) {
    const { data } = await apiClient.get(`/mens-fellowship/bible-studies/${id}/`);
    return data.data;
  },
  async listAttendance(params) {
    const { data } = await apiClient.get("/mens-fellowship/attendance/", { params });
    return data.data;
  },
  async getAttendanceRecord(id) {
    const { data } = await apiClient.get(`/mens-fellowship/attendance/${id}/`);
    return data.data;
  },
  async listReports(params) {
    const { data } = await apiClient.get("/mens-fellowship/reports/", { params });
    return data.data;
  },
};
