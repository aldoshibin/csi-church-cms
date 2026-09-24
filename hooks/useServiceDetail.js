"use client";

import * as React from "react";
import { choirWorshipService } from "@/services/choirWorshipService";
import { buildServiceDetailMock } from "@/lib/mock/servicesMockData";

export function useServiceDetail(id) {
  const [service, setService] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!id) {
      setService(null);
      return;
    }
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await choirWorshipService.getService(id);
        if (!cancelled) setService(result ?? buildServiceDetailMock(id));
      } catch {
        if (!cancelled) setService(buildServiceDetailMock(id));
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  return { service, isLoading };
}
