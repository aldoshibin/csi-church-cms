"use client";

import * as React from "react";
import { electionManagementService } from "@/services/electionManagementService";
import {
  RESULTS_STATS_MOCK, RESULTS_OVERVIEW_MOCK, POSITION_RESULTS_MOCK, OVERALL_SUMMARY_MOCK,
} from "@/lib/mock/vmResultsMockData";

export function useResults() {
  const [results, setResults] = React.useState({
    stats: RESULTS_STATS_MOCK, overview: RESULTS_OVERVIEW_MOCK,
    positionResults: POSITION_RESULTS_MOCK, overallSummary: OVERALL_SUMMARY_MOCK,
  });
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState("Position Results");

  React.useEffect(() => {
    let active = true;
    (async () => {
      setIsLoading(true);
      try {
        const data = await electionManagementService.getResults();
        if (active && data) setResults(data);
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

  return { ...results, isLoading, activeTab, setActiveTab };
}
