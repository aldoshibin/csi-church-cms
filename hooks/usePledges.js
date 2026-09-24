"use client";

import * as React from "react";
import { pledgesService } from "@/services/pledgesService";
import {
  PLEDGES_MOCK, PLEDGE_SUMMARY_MOCK, PLEDGE_STATUS_BREAKDOWN_MOCK, PLEDGE_FUND_BREAKDOWN_MOCK,
} from "@/lib/mock/pledgesMockData";

const PAGE_SIZE = 10;

export function usePledges() {
  const [pledges, setPledges] = React.useState(PLEDGES_MOCK);
  const [summary, setSummary] = React.useState(PLEDGE_SUMMARY_MOCK);
  const [statusBreakdown, setStatusBreakdown] = React.useState(PLEDGE_STATUS_BREAKDOWN_MOCK);
  const [fundBreakdown, setFundBreakdown] = React.useState(PLEDGE_FUND_BREAKDOWN_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [fundFilter, setFundFilter] = React.useState("All Funds / Accounts");
  const [yearFilter, setYearFilter] = React.useState("All Years");
  const [page, setPage] = React.useState(1);

  const [selectedPledge, setSelectedPledge] = React.useState(null);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await pledgesService.listPledges({ search, statusFilter, fundFilter, yearFilter, page });
      setPledges(result?.pledges ?? PLEDGES_MOCK);
      setSummary(result?.summary ?? PLEDGE_SUMMARY_MOCK);
      setStatusBreakdown(result?.statusBreakdown ?? PLEDGE_STATUS_BREAKDOWN_MOCK);
      setFundBreakdown(result?.fundBreakdown ?? PLEDGE_FUND_BREAKDOWN_MOCK);
    } catch {
      setPledges(PLEDGES_MOCK);
      setSummary(PLEDGE_SUMMARY_MOCK);
      setStatusBreakdown(PLEDGE_STATUS_BREAKDOWN_MOCK);
      setFundBreakdown(PLEDGE_FUND_BREAKDOWN_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, statusFilter, fundFilter, yearFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, statusFilter, fundFilter, yearFilter]);

  const filteredPledges = React.useMemo(() => {
    return pledges.filter((p) => {
      const matchesSearch = !search
        || p.donor.toLowerCase().includes(search.toLowerCase())
        || p.email.toLowerCase().includes(search.toLowerCase())
        || p.id.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All Status" || p.status === statusFilter;
      const matchesFund = fundFilter === "All Funds / Accounts" || p.fund === fundFilter;
      const matchesYear = yearFilter === "All Years" || p.startDate.startsWith(yearFilter);
      return matchesSearch && matchesStatus && matchesFund && matchesYear;
    });
  }, [pledges, search, statusFilter, fundFilter, yearFilter]);

  const pagedPledges = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredPledges.slice(start, start + PAGE_SIZE).map((p, i) => ({ ...p, serial: start + i + 1 }));
  }, [filteredPledges, page]);

  return {
    pledges: pagedPledges, totalCount: filteredPledges.length, isLoading,
    summary, statusBreakdown, fundBreakdown,
    search, setSearch, statusFilter, setStatusFilter, fundFilter, setFundFilter, yearFilter, setYearFilter,
    page, setPage, pageSize: PAGE_SIZE,
    selectedPledge, setSelectedPledge,
    refetch,
  };
}
