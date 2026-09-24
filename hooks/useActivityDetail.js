"use client";

import * as React from "react";
import { mensFellowshipService } from "@/services/mensFellowshipService";
import { buildActivityDetailMock } from "@/lib/mock/activitiesMockData";

export function useActivityDetail(id) {
  const [activity, setActivity] = React.useState(() => buildActivityDetailMock(id));
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await mensFellowshipService.getActivity(id);
        if (!cancelled) setActivity(result ?? buildActivityDetailMock(id));
      } catch {
        if (!cancelled) setActivity(buildActivityDetailMock(id));
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  return { activity, isLoading };
}
