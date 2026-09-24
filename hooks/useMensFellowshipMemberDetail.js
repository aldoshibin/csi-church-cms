"use client";

import * as React from "react";
import { mensFellowshipService } from "@/services/mensFellowshipService";
import { buildMemberDetailMock } from "@/lib/mock/mensFellowshipMockData";

export function useMensFellowshipMemberDetail(id) {
  const [member, setMember] = React.useState(() => buildMemberDetailMock(id));
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await mensFellowshipService.getMember(id);
        if (!cancelled) setMember(result ?? buildMemberDetailMock(id));
      } catch {
        if (!cancelled) setMember(buildMemberDetailMock(id));
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  return { member, isLoading };
}
