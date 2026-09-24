import { apiClient } from "@/lib/axios";

export const missionEvangelismService = {
  async getOverview(params) {
    const { data } = await apiClient.get("/mission-evangelism/overview", { params });
    return data;
  },
  async listOutreachPrograms(params) {
    const { data } = await apiClient.get("/mission-evangelism/outreach-programs", { params });
    return data;
  },
  async getOutreachProgram(id) {
    const { data } = await apiClient.get(`/mission-evangelism/outreach-programs/${id}`);
    return data;
  },
  async createOutreachProgram(payload) {
    const { data } = await apiClient.post("/mission-evangelism/outreach-programs", payload);
    return data;
  },
  async listMissionTrips(params) {
    const { data } = await apiClient.get("/mission-evangelism/mission-trips", { params });
    return data;
  },
  async getMissionTrip(id) {
    const { data } = await apiClient.get(`/mission-evangelism/mission-trips/${id}`);
    return data;
  },
  async createMissionTrip(payload) {
    const { data } = await apiClient.post("/mission-evangelism/mission-trips", payload);
    return data;
  },
  async listDonations(params) {
    const { data } = await apiClient.get("/mission-evangelism/donations", { params });
    return data;
  },
  async getDonation(id) {
    const { data } = await apiClient.get(`/mission-evangelism/donations/${id}`);
    return data;
  },
  async createDonation(payload) {
    const { data } = await apiClient.post("/mission-evangelism/donations", payload);
    return data;
  },
  async getReportsOverview(params) {
    const { data } = await apiClient.get("/mission-evangelism/reports", { params });
    return data;
  },
};
