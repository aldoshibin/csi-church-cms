"use client";

import * as React from "react";
import { serviceAssignmentsService } from "@/services/serviceAssignmentsService";
import { buildAssignmentDetailMock } from "@/lib/mock/serviceAssignmentsMockData";

export function useAssignmentDetail(id) {
  const [assignment, setAssignment] = React.useState(() => buildAssignmentDetailMock(id));
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await serviceAssignmentsService.getAssignment(id);
        if (!cancelled) setAssignment(result ?? buildAssignmentDetailMock(id));
      } catch {
        if (!cancelled) setAssignment(buildAssignmentDetailMock(id));
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  return { assignment, isLoading };
}
