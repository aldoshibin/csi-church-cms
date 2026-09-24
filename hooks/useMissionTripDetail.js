"use client";

import * as React from "react";
import { missionEvangelismService } from "@/services/missionEvangelismService";
import { buildMissionTripDetailMock } from "@/lib/mock/vmMissionEvangelismMockData";

export function useMissionTripDetail(id) {
  const [trip, setTrip] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!id) {
      setTrip(null);
      return;
    }
    let active = true;
    (async () => {
      setIsLoading(true);
      try {
        const result = await missionEvangelismService.getMissionTrip(id);
        if (active) setTrip(result ?? buildMissionTripDetailMock(id));
      } catch {
        if (active) setTrip(buildMissionTripDetailMock(id));
      } finally {
        if (active) setIsLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [id]);

  return { trip, isLoading };
}
