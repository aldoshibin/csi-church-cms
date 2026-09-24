"use client";

import * as React from "react";
import { electionManagementService } from "@/services/electionManagementService";
import {
  ELECTIONS_LIST_STATS_MOCK, ELECTIONS_LIST_TABS, ELECTIONS_LIST_MOCK,
  ELECTIONS_LIST_TIMELINE_MOCK, ELECTIONS_LIST_QUICK_ACTIONS_GRID,
} from "@/lib/mock/vmElectionsListMockData";

const STATUS_BY_TAB = {
  "Upcoming Elections": "Upcoming",
  "Ongoing Elections": "Ongoing",
  "Completed Elections": "Completed",
};

export function useElectionsList() {
  const [activeTab, setActiveTab] = React.useState(ELECTIONS_LIST_TABS[0]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  const [elections, setElections] = React.useState(ELECTIONS_LIST_MOCK);
  const [stats, setStats] = React.useState(ELECTIONS_LIST_STATS_MOCK);

  React.useEffect(() => {
    let active = true;
    (async () => {
      setIsLoading(true);
      try {
        const result = await electionManagementService.listElections();
        if (active && result?.elections) {
          setElections(result.elections);
          if (result.stats) setStats(result.stats);
        }
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

  const filteredElections = React.useMemo(() => {
    const status = STATUS_BY_TAB[activeTab];
    return elections
      .filter((e) => (status ? e.status === status : true))
      .filter((e) => (searchTerm ? e.name.toLowerCase().includes(searchTerm.toLowerCase()) : true));
  }, [elections, activeTab, searchTerm]);

  return {
    stats, tabs: ELECTIONS_LIST_TABS, activeTab, setActiveTab,
    searchTerm, setSearchTerm, elections: filteredElections, isLoading,
    timeline: ELECTIONS_LIST_TIMELINE_MOCK, quickActions: ELECTIONS_LIST_QUICK_ACTIONS_GRID,
  };
}
