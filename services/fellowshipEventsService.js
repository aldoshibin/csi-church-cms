import apiClient from "@/lib/axios";

/** Women's Fellowship Events service — maps to womens_fellowship/events/views.py. */
export const fellowshipEventsService = {
  async listEvents(params) {
    const { data } = await apiClient.get("/womens-fellowship/events/", { params });
    return data.data;
  },
  async getEvent(id) {
    const { data } = await apiClient.get(`/womens-fellowship/events/${id}/`);
    return data.data;
  },
  async createEvent(payload) {
    const { data } = await apiClient.post("/womens-fellowship/events/", payload);
    return data.data;
  },
  async updateEvent(id, payload) {
    const { data } = await apiClient.patch(`/womens-fellowship/events/${id}/`, payload);
    return data.data;
  },
  async deleteEvent(id) {
    const { data } = await apiClient.delete(`/womens-fellowship/events/${id}/`);
    return data.data;
  },
};
