"use client";

import * as React from "react";
import { choirWorshipService } from "@/services/choirWorshipService";
import { buildWtMemberDetailMock } from "@/lib/mock/worshipTeamMembersMockData";

export function useWorshipTeamMemberDetail(id) {
  const [member, setMember] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!id) {
      setMember(null);
      return;
    }
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await choirWorshipService.getWorshipTeamMember(id);
        if (!cancelled) setMember(result ?? buildWtMemberDetailMock(id));
      } catch {
        if (!cancelled) setMember(buildWtMemberDetailMock(id));
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  return { member, isLoading };
}
