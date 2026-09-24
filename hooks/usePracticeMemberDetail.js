"use client";

import * as React from "react";
import { choirWorshipService } from "@/services/choirWorshipService";
import { buildPsMemberDetailMock } from "@/lib/mock/practiceScheduleMockData";

export function usePracticeMemberDetail(id) {
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
        const result = await choirWorshipService.getPracticeScheduleMember(id);
        if (!cancelled) setMember(result ?? buildPsMemberDetailMock(id));
      } catch {
        if (!cancelled) setMember(buildPsMemberDetailMock(id));
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  return { member, isLoading };
}
