"use client";

import * as React from "react";
import { cemeteryService } from "@/services/cemeteryService";
import {
  CEMETERY_OVERVIEW_DONUT_MOCK, BURIALS_BY_YEAR_MOCK,
  MAINTENANCE_REMINDERS_MOCK, RECENT_DOCUMENTS_MOCK,
} from "@/lib/mock/vmCemeteryMockData";

export function useCemeteryOverview() {
  const [data, setData] = React.useState({
    donut: CEMETERY_OVERVIEW_DONUT_MOCK,
    burialsByYear: BURIALS_BY_YEAR_MOCK,
    maintenanceReminders: MAINTENANCE_REMINDERS_MOCK,
    recentDocuments: RECENT_DOCUMENTS_MOCK,
  });
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let active = true;
    (async () => {
      setIsLoading(true);
      try {
        const result = await cemeteryService.getOverview();
        if (active && result) setData((prev) => ({ ...prev, ...result }));
      } catch {
        // keep mock fallback
      } finally {
        if (active) setIsLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  return { ...data, isLoading };
}
