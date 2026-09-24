"use client";

import * as React from "react";
import { electionManagementService } from "@/services/electionManagementService";
import { buildNominationDetailMock } from "@/lib/mock/vmNominationsMockData";

export function useNominationDetail(id) {
  const [nomination, setNomination] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!id) {
      setNomination(null);
      return;
    }
    let active = true;
    (async () => {
      setIsLoading(true);
      try {
        const result = await electionManagementService.getNomination(id);
        if (active) setNomination(result ?? buildNominationDetailMock(id));
      } catch {
        if (active) setNomination(buildNominationDetailMock(id));
      } finally {
        if (active) setIsLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [id]);

  return { nomination, isLoading };
}
