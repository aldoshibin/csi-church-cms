"use client";

import * as React from "react";
import { electionManagementService } from "@/services/electionManagementService";
import { buildElectionDetailMock } from "@/lib/mock/vmElectionDetailMockData";

export function useElectionDetail(id) {
  const [election, setElection] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!id) {
      setElection(null);
      return;
    }
    let active = true;
    (async () => {
      setIsLoading(true);
      try {
        const result = await electionManagementService.getElection(id);
        if (active) setElection(result ?? buildElectionDetailMock(id));
      } catch {
        if (active) setElection(buildElectionDetailMock(id));
      } finally {
        if (active) setIsLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [id]);

  return { election, isLoading };
}
