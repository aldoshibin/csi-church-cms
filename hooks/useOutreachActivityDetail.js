"use client";

import * as React from "react";
import { missionEvangelismService } from "@/services/missionEvangelismService";
import { buildActivityDetailMock } from "@/lib/mock/vmMissionEvangelismMockData";

export function useOutreachActivityDetail(id) {
  const [activity, setActivity] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!id) {
      setActivity(null);
      return;
    }
    let active = true;
    (async () => {
      setIsLoading(true);
      try {
        const result = await missionEvangelismService.getOutreachActivity(id);
        if (active) setActivity(result ?? buildActivityDetailMock(id));
      } catch {
        if (active) setActivity(buildActivityDetailMock(id));
      } finally {
        if (active) setIsLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [id]);

  return { activity, isLoading };
}
