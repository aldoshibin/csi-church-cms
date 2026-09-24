import apiClient from "@/lib/axios";

/** Women's Fellowship Meeting Attendance service — maps to womens_fellowship/meetings/views.py. */
export const meetingAttendanceService = {
  async listMeetings(params) {
    const { data } = await apiClient.get("/womens-fellowship/meetings/", { params });
    return data.data;
  },
  async getMeeting(id) {
    const { data } = await apiClient.get(`/womens-fellowship/meetings/${id}/`);
    return data.data;
  },
  async createMeeting(payload) {
    const { data } = await apiClient.post("/womens-fellowship/meetings/", payload);
    return data.data;
  },
};
