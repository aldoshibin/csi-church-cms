"use client";

import * as React from "react";
import { ministriesTeamsService } from "@/services/ministriesTeamsService";
import { buildMinistryDetailMock } from "@/lib/mock/ministriesTeamsMockData";

export function useMinistryDetail(id) {
  const [ministry, setMinistry] = React.useState(() => buildMinistryDetailMock(id));
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await ministriesTeamsService.getMinistry(id);
        if (!cancelled) setMinistry(result ?? buildMinistryDetailMock(id));
      } catch {
        if (!cancelled) setMinistry(buildMinistryDetailMock(id));
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  return { ministry, isLoading };
}
