"use client";

import * as React from "react";
import { electionManagementService } from "@/services/electionManagementService";
import {
  ELECTION_MANAGEMENT_STATS_MOCK, ELECTION_TABS,
  UPCOMING_ELECTIONS_MOCK, ONGOING_ELECTIONS_MOCK, COMPLETED_ELECTIONS_MOCK,
  ELECTION_TIMELINE_MOCK, RECENT_ACTIVITY_MOCK, ELECTION_OVERVIEW_MOCK,
} from "@/lib/mock/vmElectionManagementMockData";

const ELECTIONS_BY_TAB = {
  "Upcoming Elections": UPCOMING_ELECTIONS_MOCK,
  "Ongoing Elections": ONGOING_ELECTIONS_MOCK,
  "Completed Elections": COMPLETED_ELECTIONS_MOCK,
};

export function useElectionManagement() {
  const [activeTab, setActiveTab] = React.useState(ELECTION_TABS[0]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [dashboard, setDashboard] = React.useState({
    stats: ELECTION_MANAGEMENT_STATS_MOCK,
    timeline: ELECTION_TIMELINE_MOCK,
    recentActivity: RECENT_ACTIVITY_MOCK,
    overview: ELECTION_OVERVIEW_MOCK,
  });

  React.useEffect(() => {
    let active = true;
    (async () => {
      setIsLoading(true);
      try {
        const result = await electionManagementService.getDashboard();
        if (active && result) setDashboard(result);
      } catch {
        // keep mock fallback
      } finally {
        if (active) setIsLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const elections = ELECTIONS_BY_TAB[activeTab] ?? [];

  return {
    ...dashboard, isLoading,
    tabs: ELECTION_TABS, activeTab, setActiveTab, elections,
  };
}
