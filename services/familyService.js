import apiClient from "@/lib/axios";

/** Family Management service — maps to families/views.py's FamilyViewSet. */
export const familyService = {
  async list(params = {}) {
    const { data } = await apiClient.get("/families/", { params });
    return data;
  },
  async get(id) {
    const { data } = await apiClient.get(`/families/${id}/`);
    return data.data;
  },
  async create(payload) {
    const { data } = await apiClient.post("/families/", payload);
    return data.data;
  },
  async update(id, payload) {
    const { data } = await apiClient.patch(`/families/${id}/`, payload);
    return data.data;
  },
  async remove(id) {
    await apiClient.delete(`/families/${id}/`);
  },
  async updateAddress(id, payload) {
    const { data } = await apiClient.post(`/families/${id}/update-address/`, payload);
    return data.data;
  },
  async addressHistory(id) {
    const { data } = await apiClient.get(`/families/${id}/address-history/`);
    return data.data;
  },
};
