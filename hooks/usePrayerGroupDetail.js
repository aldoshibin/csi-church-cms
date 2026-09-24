"use client";

import * as React from "react";
import { prayerMinistryService } from "@/services/prayerMinistryService";
import { buildPrayerGroupDetailMock } from "@/lib/mock/prayerGroupsMockData";

export function usePrayerGroupDetail(id) {
  const [group, setGroup] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!id) {
      setGroup(null);
      return;
    }
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await prayerMinistryService.getPrayerGroup(id);
        if (!cancelled) setGroup(result ?? buildPrayerGroupDetailMock(id));
      } catch {
        if (!cancelled) setGroup(buildPrayerGroupDetailMock(id));
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  const deactivate = () => setGroup((prev) => prev ? { ...prev, status: "Inactive" } : prev);

  return { group, isLoading, deactivate };
}
