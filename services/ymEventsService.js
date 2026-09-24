import apiClient from "@/lib/axios";

/** Youth Ministry Events service — maps to youth_ministry/events/views.py. */
export const ymEventsService = {
  async listEvents(params) {
    const { data } = await apiClient.get("/youth-ministry/events/", { params });
    return data.data;
  },
  async getEvent(id) {
    const { data } = await apiClient.get(`/youth-ministry/events/${id}/`);
    return data.data;
  },
  async createEvent(payload) {
    const { data } = await apiClient.post("/youth-ministry/events/", payload);
    return data.data;
  },
  async updateEvent(id, payload) {
    const { data } = await apiClient.patch(`/youth-ministry/events/${id}/`, payload);
    return data.data;
  },
  async deleteEvent(id) {
    const { data } = await apiClient.delete(`/youth-ministry/events/${id}/`);
    return data.data;
  },
};
