"use client";

import * as React from "react";
import { prayerMinistryService } from "@/services/prayerMinistryService";
import { buildBulletinRequestDetailMock } from "@/lib/mock/bulletinRequestsMockData";

export function useBulletinRequestDetail(id) {
  const [request, setRequest] = React.useState(() => buildBulletinRequestDetailMock(id));
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await prayerMinistryService.getBulletinRequest(id);
        if (!cancelled) setRequest(result ?? buildBulletinRequestDetailMock(id));
      } catch {
        if (!cancelled) setRequest(buildBulletinRequestDetailMock(id));
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  return { request, isLoading };
}
