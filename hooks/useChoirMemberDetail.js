"use client";

import * as React from "react";
import { choirWorshipService } from "@/services/choirWorshipService";
import { buildChoirMemberDetailMock } from "@/lib/mock/choirMembersMockData";

export function useChoirMemberDetail(id) {
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
        const result = await choirWorshipService.getMember(id);
        if (!cancelled) setMember(result ?? buildChoirMemberDetailMock(id));
      } catch {
        if (!cancelled) setMember(buildChoirMemberDetailMock(id));
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  return { member, isLoading };
}
