"use client";

import * as React from "react";
import { deceasedService } from "@/services/deceasedService";
import { buildDeceasedDetailMock } from "@/lib/mock/vmDeceasedMockData";

export function useDeceasedDetail(id) {
  const [record, setRecord] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!id) {
      setRecord(null);
      return;
    }
    let active = true;
    (async () => {
      setIsLoading(true);
      try {
        const result = await deceasedService.getDeceased(id);
        if (active) setRecord(result ?? buildDeceasedDetailMock(id));
      } catch {
        if (active) setRecord(buildDeceasedDetailMock(id));
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
