import { apiClient } from "@/lib/axios";

export const facilityBookingService = {
  async listBookings(params) {
    const { data } = await apiClient.get("/facility-booking/bookings", { params });
    return data;
  },
  async getBooking(id) {
    const { data } = await apiClient.get(`/facility-booking/bookings/${id}`);
    return data;
  },
  async createBooking(payload) {
    const { data } = await apiClient.post("/facility-booking/bookings", payload);
    return data;
  },
  async cancelBooking(id) {
    const { data } = await apiClient.post(`/facility-booking/bookings/${id}/cancel`);
    return data;
  },
};
