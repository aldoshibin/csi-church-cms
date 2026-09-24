"use client";

import * as React from "react";
import { availabilityService } from "@/services/availabilityService";
import { buildAvailabilityDetailMock } from "@/lib/mock/availabilityMockData";

export function useAvailabilityDetail(id) {
  const [availability, setAvailability] = React.useState(() => buildAvailabilityDetailMock(id));
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await availabilityService.getAvailability(id);
        if (!cancelled) setAvailability(result ?? buildAvailabilityDetailMock(id));
      } catch {
        if (!cancelled) setAvailability(buildAvailabilityDetailMock(id));
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  return { availability, isLoading };
}
