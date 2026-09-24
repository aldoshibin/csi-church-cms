import apiClient from "@/lib/axios";

/** Women's Fellowship service — maps to womens_fellowship/views.py. */
export const womensFellowshipService = {
  async getDashboard(params) {
    const { data } = await apiClient.get("/womens-fellowship/dashboard/", { params });
    return data.data;
  },
};
