"use client";

import * as React from "react";
import { cemeteryService } from "@/services/cemeteryService";
import { buildPlotDetailMock, buildSectionAvailabilityDonutMock } from "@/lib/mock/vmCemeteryMockData";

export function usePlotDetail(id) {
  const [plot, setPlot] = React.useState(() => buildPlotDetailMock(id));
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let active = true;
    (async () => {
      setIsLoading(true);
      try {
        const result = await cemeteryService.getPlot(id);
        if (active) setPlot(result ?? buildPlotDetailMock(id));
      } catch {
        if (active) setPlot(buildPlotDetailMock(id));
      } finally {
        if (active) setIsLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [id]);

  const sectionAvailability = React.useMemo(
    () => (plot ? buildSectionAvailabilityDonutMock(plot.section) : null),
    [plot]
  );

  return { plot, sectionAvailability, isLoading };
}
