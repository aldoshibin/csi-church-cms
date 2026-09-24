import apiClient from "@/lib/axios";

/** Events service — maps to events/views.py (shared church-wide events, surfaced here under Sunday School). */
export const eventsService = {
  async listEvents(params) {
    const { data } = await apiClient.get("/events/", { params });
    return data.data;
  },
  async getEvent(id) {
    const { data } = await apiClient.get(`/events/${id}/`);
    return data.data;
  },
  async createEvent(payload) {
    const { data } = await apiClient.post("/events/", payload);
    return data.data;
  },
  async updateEvent(id, payload) {
    const { data } = await apiClient.patch(`/events/${id}/`, payload);
    return data.data;
  },
  async cancelEvent(id) {
    const { data } = await apiClient.post(`/events/${id}/cancel/`);
    return data.data;
  },
};
