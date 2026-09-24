"use client";

import * as React from "react";
import { communicationService } from "@/services/communicationService";
import {
  COMMUNICATION_OVERVIEW_STATS_MOCK, COMMUNICATION_TOOLS_MOCK, RECENT_COMMUNICATIONS_MOCK,
  ANNOUNCEMENTS_PANEL_MOCK, UPCOMING_MESSAGES_MOCK,
} from "@/lib/mock/communicationMockData";

const RECENT_PAGE_SIZE = 5;

export function useCommunicationOverview() {
  const [stats, setStats] = React.useState(COMMUNICATION_OVERVIEW_STATS_MOCK);
  const [tools] = React.useState(COMMUNICATION_TOOLS_MOCK);
  const [recent, setRecent] = React.useState(RECENT_COMMUNICATIONS_MOCK);
  const [announcements] = React.useState(ANNOUNCEMENTS_PANEL_MOCK);
  const [upcomingMessages] = React.useState(UPCOMING_MESSAGES_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const overview = await communicationService.getOverview();
        if (!cancelled) setStats(overview?.stats ?? COMMUNICATION_OVERVIEW_STATS_MOCK);
        const result = await communicationService.listCommunications({ page: 1, pageSize: RECENT_PAGE_SIZE });
        if (!cancelled) setRecent(result?.communications ?? RECENT_COMMUNICATIONS_MOCK);
      } catch {
        if (!cancelled) {
          setStats(COMMUNICATION_OVERVIEW_STATS_MOCK);
          setRecent(RECENT_COMMUNICATIONS_MOCK);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return {
    stats, tools, recent: recent.slice(0, RECENT_PAGE_SIZE), isLoading,
    announcements, upcomingMessages,
  };
}
