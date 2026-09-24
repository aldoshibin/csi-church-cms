import apiClient from "@/lib/axios";

/** Women's Fellowship Bible Studies service — maps to womens_fellowship/bible_studies/views.py. */
export const bibleStudiesService = {
  async listStudies(params) {
    const { data } = await apiClient.get("/womens-fellowship/bible-studies/", { params });
    return data.data;
  },
  async getStudy(id) {
    const { data } = await apiClient.get(`/womens-fellowship/bible-studies/${id}/`);
    return data.data;
  },
  async createStudy(payload) {
    const { data } = await apiClient.post("/womens-fellowship/bible-studies/", payload);
    return data.data;
  },
};
