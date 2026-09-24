"use client";

import * as React from "react";
import { prayerMinistryService } from "@/services/prayerMinistryService";
import { buildPraiseReportDetailMock } from "@/lib/mock/praiseReportsMockData";

export function usePraiseReportDetail(id) {
  const [report, setReport] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!id) {
      setReport(null);
      return;
    }
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await prayerMinistryService.getPraiseReport(id);
        if (!cancelled) setReport(result ?? buildPraiseReportDetailMock(id));
      } catch {
        if (!cancelled) setReport(buildPraiseReportDetailMock(id));
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  const unpublish = () => setReport((prev) => prev ? { ...prev, status: "Unpublished" } : prev);

  return { report, isLoading, unpublish };
}
