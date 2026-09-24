import { apiClient } from "@/lib/axios";

export const bookingRequestsService = {
  async listRequests(params) {
    const { data } = await apiClient.get("/facility-booking/requests", { params });
    return data;
  },
  async getRequest(id) {
    const { data } = await apiClient.get(`/facility-booking/requests/${id}`);
    return data;
  },
  async approveRequest(id) {
    const { data } = await apiClient.post(`/facility-booking/requests/${id}/approve`);
    return data;
  },
  async rejectRequest(id) {
    const { data } = await apiClient.post(`/facility-booking/requests/${id}/reject`);
    return data;
  },
};
