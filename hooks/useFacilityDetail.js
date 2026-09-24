"use client";

import * as React from "react";
import { facilitiesService } from "@/services/facilitiesService";
import { buildFacilityDetailMock } from "@/lib/mock/vmFacilitiesMockData";

export function useFacilityDetail(id) {
  const [facility, setFacility] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!id) {
      setFacility(null);
      return;
    }
    let active = true;
    (async () => {
      setIsLoading(true);
      try {
        const result = await facilitiesService.getFacility(id);
        if (active) setFacility(result ?? buildFacilityDetailMock(id));
      } catch {
        if (active) setFacility(buildFacilityDetailMock(id));
      } finally {
        if (active) setIsLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [id]);

  return { facility, isLoading };
}
