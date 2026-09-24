"use client";

import * as React from "react";
import { attendanceService } from "@/services/attendanceService";
import { buildAttendanceDetailMock } from "@/lib/mock/vmAttendanceMockData";

export function useAttendanceDetail(id) {
  const [record, setRecord] = React.useState(() => buildAttendanceDetailMock(id));
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await attendanceService.getAttendance(id);
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
