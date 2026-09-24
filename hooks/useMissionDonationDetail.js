"use client";

import * as React from "react";
import { missionEvangelismService } from "@/services/missionEvangelismService";
import { buildDonationDetailMock } from "@/lib/mock/vmMissionEvangelismMockData";

export function useMissionDonationDetail(id) {
  const [donation, setDonation] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!id) {
      setDonation(null);
      return;
    }
    let active = true;
    (async () => {
      setIsLoading(true);
      try {
        const result = await missionEvangelismService.getDonation(id);
        if (active) setDonation(result ?? buildDonationDetailMock(id));
      } catch {
        if (active) setDonation(buildDonationDetailMock(id));
      } finally {
        if (active) setIsLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [id]);

  return { donation, isLoading };
}
