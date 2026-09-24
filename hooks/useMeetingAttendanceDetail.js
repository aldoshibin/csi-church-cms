"use client";

import * as React from "react";
import { mensFellowshipService } from "@/services/mensFellowshipService";
import { buildAttendanceDetailMock } from "@/lib/mock/meetingAttendanceMockData";

export function useMeetingAttendanceDetail(id) {
  const [record, setRecord] = React.useState(() => buildAttendanceDetailMock(id));
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await mensFellowshipService.getAttendanceRecord(id);
        if (!cancelled) setRecord(result ?? buildAttendanceDetailMock(id));
      } catch {
        if (!cancelled) setRecord(buildAttendanceDetailMock(id));
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  return { record, isLoading };
}
