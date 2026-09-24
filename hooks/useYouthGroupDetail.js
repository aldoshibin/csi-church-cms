"use client";

import * as React from "react";
import { youthGroupsService } from "@/services/youthGroupsService";
import { YOUTH_GROUP_DETAIL_MOCK } from "@/lib/mock/youthGroupsMockData";

export function useYouthGroupDetail(id) {
  const [group, setGroup] = React.useState({ ...YOUTH_GROUP_DETAIL_MOCK, id: id ?? YOUTH_GROUP_DETAIL_MOCK.id });
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await youthGroupsService.getGroup(id);
        if (!cancelled) setGroup(result ?? { ...YOUTH_GROUP_DETAIL_MOCK, id });
      } catch {
        if (!cancelled) setGroup({ ...YOUTH_GROUP_DETAIL_MOCK, id });
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  return { group, isLoading };
}
