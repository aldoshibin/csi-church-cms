"use client";

import * as React from "react";
import { mensFellowshipGroupsService } from "@/services/mensFellowshipGroupsService";
import { FELLOWSHIP_GROUPS_MOCK } from "@/lib/mock/mensFellowshipGroupsMockData";

const DEFAULT_GROUP = FELLOWSHIP_GROUPS_MOCK[0];

export function useMensFellowshipGroupDetail(id) {
  const [group, setGroup] = React.useState({ ...DEFAULT_GROUP, id: id ?? DEFAULT_GROUP.id });
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await mensFellowshipGroupsService.getGroup(id);
        if (!cancelled) setGroup(result ?? { ...DEFAULT_GROUP, id });
      } catch {
        if (!cancelled) setGroup({ ...DEFAULT_GROUP, id });
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  return { group, isLoading };
}
