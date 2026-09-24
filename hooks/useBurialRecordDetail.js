"use client";

import * as React from "react";
import { cemeteryService } from "@/services/cemeteryService";
import { buildBurialDetailMock } from "@/lib/mock/vmCemeteryMockData";

export function useBurialRecordDetail(id) {
  const [record, setRecord] = React.useState(() => buildBurialDetailMock(id));
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let active = true;
    (async () => {
      setIsLoading(true);
      try {
        const result = await cemeteryService.getBurialRecord(id);
        if (active) setRecord(result ?? buildBurialDetailMock(id));
      } catch {
        if (active) setRecord(buildBurialDetailMock(id));
      } finally {
        if (active) setIsLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [id]);

  return { record, isLoading };
}
