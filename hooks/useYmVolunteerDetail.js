"use client";

import * as React from "react";
import { ymVolunteersService } from "@/services/ymVolunteersService";
import { VOLUNTEER_DETAIL_MOCK } from "@/lib/mock/ymVolunteersMockData";

export function useYmVolunteerDetail(id) {
  const [volunteer, setVolunteer] = React.useState({ ...VOLUNTEER_DETAIL_MOCK, id: id ?? VOLUNTEER_DETAIL_MOCK.id });
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await ymVolunteersService.getVolunteer(id);
        if (!cancelled) setVolunteer(result ?? { ...VOLUNTEER_DETAIL_MOCK, id });
      } catch {
        if (!cancelled) setVolunteer({ ...VOLUNTEER_DETAIL_MOCK, id });
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  return { volunteer, isLoading };
}
