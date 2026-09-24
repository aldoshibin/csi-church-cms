"use client";

import * as React from "react";
import { electionManagementService } from "@/services/electionManagementService";
import { buildVoterDetailMock } from "@/lib/mock/vmVotersMockData";

export function useVoterDetail(id) {
  const [voter, setVoter] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!id) {
      setVoter(null);
      return;
    }
    let active = true;
    (async () => {
      setIsLoading(true);
      try {
        const result = await electionManagementService.getVoter(id);
        if (active) setVoter(result ?? buildVoterDetailMock(id));
      } catch {
        if (active) setVoter(buildVoterDetailMock(id));
      } finally {
        if (active) setIsLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [id]);

  return { voter, isLoading };
}
