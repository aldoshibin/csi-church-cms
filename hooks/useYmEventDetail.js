"use client";

import * as React from "react";
import { ymEventsService } from "@/services/ymEventsService";
import { YM_EVENT_DETAIL_MOCK } from "@/lib/mock/ymEventsMockData";

export function useYmEventDetail(id) {
  const [event, setEvent] = React.useState({ ...YM_EVENT_DETAIL_MOCK, id: id ?? YM_EVENT_DETAIL_MOCK.id });
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await ymEventsService.getEvent(id);
        if (!cancelled) setEvent(result ?? { ...YM_EVENT_DETAIL_MOCK, id });
      } catch {
        if (!cancelled) setEvent({ ...YM_EVENT_DETAIL_MOCK, id });
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  return { event, isLoading };
}
