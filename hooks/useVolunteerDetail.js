"use client";

import * as React from "react";
import { volunteerManagementService } from "@/services/volunteerManagementService";
import { buildVolunteerDetailMock } from "@/lib/mock/volunteersMockData";

export function useVolunteerDetail(id) {
  const [volunteer, setVolunteer] = React.useState(() => buildVolunteerDetailMock(id));
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await volunteerManagementService.getVolunteer(id);
        if (!cancelled) setVolunteer(result ?? buildVolunteerDetailMock(id));
      } catch {
        if (!cancelled) setVolunteer(buildVolunteerDetailMock(id));
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  return { volunteer, isLoading };
}
