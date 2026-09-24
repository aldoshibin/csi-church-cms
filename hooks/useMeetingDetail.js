"use client";

import * as React from "react";
import { mensFellowshipService } from "@/services/mensFellowshipService";
import { buildMeetingDetailMock } from "@/lib/mock/meetingsMockData";

export function useMeetingDetail(id) {
  const [meeting, setMeeting] = React.useState(() => buildMeetingDetailMock(id));
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await mensFellowshipService.getMeeting(id);
        if (!cancelled) setMeeting(result ?? buildMeetingDetailMock(id));
      } catch {
        if (!cancelled) setMeeting(buildMeetingDetailMock(id));
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  return { meeting, isLoading };
}
