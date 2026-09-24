"use client";

import * as React from "react";
import { electionManagementService } from "@/services/electionManagementService";
import { buildCandidateDetailMock } from "@/lib/mock/vmCandidatesMockData";

export function useCandidateDetail(id) {
  const [candidate, setCandidate] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!id) {
      setCandidate(null);
      return;
    }
    let active = true;
    (async () => {
      setIsLoading(true);
      try {
        const result = await electionManagementService.getCandidate(id);
        if (active) setCandidate(result ?? buildCandidateDetailMock(id));
      } catch {
        if (active) setCandidate(buildCandidateDetailMock(id));
      } finally {
        if (active) setIsLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [id]);

  return { candidate, isLoading };
}
