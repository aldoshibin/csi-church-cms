"use client";

import * as React from "react";
import { electionManagementService } from "@/services/electionManagementService";
import { buildVoterVotingDetailMock } from "@/lib/mock/vmVotingMockData";

export function useVoterVotingDetail(id) {
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
        const result = await electionManagementService.getVotingRecord(id);
        if (active) setVoter(result ?? buildVoterVotingDetailMock(id));
      } catch {
        if (active) setVoter(buildVoterVotingDetailMock(id));
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
