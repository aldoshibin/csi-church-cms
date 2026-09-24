"use client";

import * as React from "react";
import { prayerMinistryService } from "@/services/prayerMinistryService";
import { buildIntercessorDetailMock } from "@/lib/mock/intercessorsMockData";

export function useIntercessorDetail(id) {
  const [intercessor, setIntercessor] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!id) {
      setIntercessor(null);
      return;
    }
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await prayerMinistryService.getIntercessor(id);
        if (!cancelled) setIntercessor(result ?? buildIntercessorDetailMock(id));
      } catch {
        if (!cancelled) setIntercessor(buildIntercessorDetailMock(id));
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  const deactivate = () => setIntercessor((prev) => prev ? { ...prev, status: "Inactive" } : prev);

  return { intercessor, isLoading, deactivate };
}
