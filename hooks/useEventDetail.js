"use client";

import * as React from "react";
import { eventsService } from "@/services/eventsService";
import { EVENT_DETAIL_MOCK } from "@/lib/mock/eventsMockData";

export function useEventDetail(id) {
  const [event, setEvent] = React.useState({ ...EVENT_DETAIL_MOCK, id: id ?? EVENT_DETAIL_MOCK.id });
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await eventsService.getEvent(id);
        if (!cancelled) setEvent(result ?? { ...EVENT_DETAIL_MOCK, id });
      } catch {
        if (!cancelled) setEvent({ ...EVENT_DETAIL_MOCK, id });
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  return { event, isLoading };
}
