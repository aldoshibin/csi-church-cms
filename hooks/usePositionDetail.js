"use client";

import * as React from "react";
import { electionManagementService } from "@/services/electionManagementService";
import { buildPositionDetailMock } from "@/lib/mock/vmPositionsMockData";

export function usePositionDetail(id) {
  const [position, setPosition] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!id) {
      setPosition(null);
      return;
    }
    let active = true;
    (async () => {
      setIsLoading(true);
      try {
        const result = await electionManagementService.getPosition(id);
        if (active) setPosition(result ?? buildPositionDetailMock(id));
      } catch {
        if (active) setPosition(buildPositionDetailMock(id));
      } finally {
        if (active) setIsLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [id]);

  return { position, isLoading };
}
