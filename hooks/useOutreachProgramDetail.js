"use client";

import * as React from "react";
import { missionEvangelismService } from "@/services/missionEvangelismService";
import { buildProgramDetailMock } from "@/lib/mock/vmMissionEvangelismMockData";

export function useOutreachProgramDetail(id) {
  const [program, setProgram] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!id) {
      setProgram(null);
      return;
    }
    let active = true;
    (async () => {
      setIsLoading(true);
      try {
        const result = await missionEvangelismService.getOutreachProgram(id);
        if (active) setProgram(result ?? buildProgramDetailMock(id));
      } catch {
        if (active) setProgram(buildProgramDetailMock(id));
      } finally {
        if (active) setIsLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [id]);

  return { program, isLoading };
}
