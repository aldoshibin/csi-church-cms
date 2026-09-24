import { apiClient } from "@/lib/axios";

export const electionManagementService = {
  async getDashboard(params) {
    const { data } = await apiClient.get("/election-management/dashboard", { params });
    return data;
  },
  async listElections(params) {
    const { data } = await apiClient.get("/election-management/elections", { params });
    return data;
  },
  async getElection(id) {
    const { data } = await apiClient.get(`/election-management/elections/${id}`);
    return data;
  },
  async listPositions(params) {
    const { data } = await apiClient.get("/election-management/positions", { params });
    return data;
  },
  async getPosition(id) {
    const { data } = await apiClient.get(`/election-management/positions/${id}`);
    return data;
  },
  async createPosition(payload) {
    const { data } = await apiClient.post("/election-management/positions", payload);
    return data;
  },
  async listCandidates(params) {
    const { data } = await apiClient.get("/election-management/candidates", { params });
    return data;
  },
  async getCandidate(id) {
    const { data } = await apiClient.get(`/election-management/candidates/${id}`);
    return data;
  },
  async createCandidate(payload) {
    const { data } = await apiClient.post("/election-management/candidates", payload);
    return data;
  },
  async listVoters(params) {
    const { data } = await apiClient.get("/election-management/voters", { params });
    return data;
  },
  async getVoter(id) {
    const { data } = await apiClient.get(`/election-management/voters/${id}`);
    return data;
  },
  async createVoter(payload) {
    const { data } = await apiClient.post("/election-management/voters", payload);
    return data;
  },
  async listNominations(params) {
    const { data } = await apiClient.get("/election-management/nominations", { params });
    return data;
  },
  async getNomination(id) {
    const { data } = await apiClient.get(`/election-management/nominations/${id}`);
    return data;
  },
  async listVotingRecords(params) {
    const { data } = await apiClient.get("/election-management/voting", { params });
    return data;
  },
  async getVotingRecord(id) {
    const { data } = await apiClient.get(`/election-management/voting/${id}`);
    return data;
  },
  async getResults(params) {
    const { data } = await apiClient.get("/election-management/results", { params });
    return data;
  },
  async listElectionReports(params) {
    const { data } = await apiClient.get("/election-management/reports", { params });
    return data;
  },
  // Added for the Elections list/Create/Edit screens (previously missing
  // routes) — see README_CHANGES.txt.
  async createElection(payload) {
    const { data } = await apiClient.post("/election-management/elections", payload);
    return data;
  },
  async updateElection(id, payload) {
    const { data } = await apiClient.put(`/election-management/elections/${id}`, payload);
    return data;
  },
};
