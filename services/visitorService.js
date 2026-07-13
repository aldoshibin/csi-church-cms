import apiClient from "@/lib/axios";


export const visitorService = {
  async list(params = {}) {
    const { data } = await apiClient.get("/visitors/", { params });
    return data;
  },

  async get(id) {
    const { data } = await apiClient.get(`/visitors/${id}/`);
    return data.data;
  },

  async create(payload) {
    const { data } = await apiClient.post("/visitors/", payload);
    return data.data;
  },

  async update(id, payload) {
    const { data } = await apiClient.patch(`/visitors/${id}/`, payload);
    return data.data;
  },

  async remove(id) {
    await apiClient.delete(`/visitors/${id}/`);
  },

  async checkIn(nameOrPhone) {
    const { data } = await apiClient.post("/visitors/check-in/", { query: nameOrPhone });
    return data.data;
  },
};

export default visitorService;
