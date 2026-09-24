"use client";

import * as React from "react";
import { mensFellowshipService } from "@/services/mensFellowshipService";
import { buildStudyDetailMock } from "@/lib/mock/bibleStudiesMockData";

export function useBibleStudyDetail(id) {
  const [study, setStudy] = React.useState(() => buildStudyDetailMock(id));
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await mensFellowshipService.getBibleStudy(id);
        if (!cancelled) setStudy(result ?? buildStudyDetailMock(id));
      } catch {
        if (!cancelled) setStudy(buildStudyDetailMock(id));
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  return { study, isLoading };
}
