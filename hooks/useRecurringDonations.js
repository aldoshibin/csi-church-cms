"use client";

import * as React from "react";
import { recurringDonationsService } from "@/services/recurringDonationsService";
import {
  SUBSCRIPTIONS_MOCK, RD_SUMMARY_MOCK, RD_STATUS_BREAKDOWN_MOCK, RD_FREQUENCY_BREAKDOWN_MOCK,
} from "@/lib/mock/recurringDonationsMockData";

const PAGE_SIZE = 10;

export function useRecurringDonations() {
  const [subscriptions, setSubscriptions] = React.useState(SUBSCRIPTIONS_MOCK);
  const [summary, setSummary] = React.useState(RD_SUMMARY_MOCK);
  const [statusBreakdown, setStatusBreakdown] = React.useState(RD_STATUS_BREAKDOWN_MOCK);
  const [frequencyBreakdown, setFrequencyBreakdown] = React.useState(RD_FREQUENCY_BREAKDOWN_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [fundFilter, setFundFilter] = React.useState("All Funds / Accounts");
  const [frequencyFilter, setFrequencyFilter] = React.useState("All Frequencies");
  const [page, setPage] = React.useState(1);

  const [selectedSubscription, setSelectedSubscription] = React.useState(null);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await recurringDonationsService.listSubscriptions({ search, statusFilter, fundFilter, frequencyFilter, page });
      setSubscriptions(result?.subscriptions ?? SUBSCRIPTIONS_MOCK);
      setSummary(result?.summary ?? RD_SUMMARY_MOCK);
      setStatusBreakdown(result?.statusBreakdown ?? RD_STATUS_BREAKDOWN_MOCK);
      setFrequencyBreakdown(result?.frequencyBreakdown ?? RD_FREQUENCY_BREAKDOWN_MOCK);
    } catch {
      setSubscriptions(SUBSCRIPTIONS_MOCK);
      setSummary(RD_SUMMARY_MOCK);
      setStatusBreakdown(RD_STATUS_BREAKDOWN_MOCK);
      setFrequencyBreakdown(RD_FREQUENCY_BREAKDOWN_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, statusFilter, fundFilter, frequencyFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, statusFilter, fundFilter, frequencyFilter]);

  const filteredSubscriptions = React.useMemo(() => {
    return subscriptions.filter((s) => {
      const matchesSearch = !search
        || s.donor.toLowerCase().includes(search.toLowerCase())
        || s.email.toLowerCase().includes(search.toLowerCase())
        || s.purpose.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All Status" || s.status === statusFilter;
      const matchesFund = fundFilter === "All Funds / Accounts" || s.fund === fundFilter || s.purpose === fundFilter;
      const matchesFrequency = frequencyFilter === "All Frequencies" || s.frequency === frequencyFilter;
      return matchesSearch && matchesStatus && matchesFund && matchesFrequency;
    });
  }, [subscriptions, search, statusFilter, fundFilter, frequencyFilter]);

  const pagedSubscriptions = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredSubscriptions.slice(start, start + PAGE_SIZE).map((s, i) => ({ ...s, serial: start + i + 1 }));
  }, [filteredSubscriptions, page]);

  return {
    subscriptions: pagedSubscriptions, totalCount: filteredSubscriptions.length, isLoading,
    summary, statusBreakdown, frequencyBreakdown,
    search, setSearch, statusFilter, setStatusFilter, fundFilter, setFundFilter, frequencyFilter, setFrequencyFilter,
    page, setPage, pageSize: PAGE_SIZE,
    selectedSubscription, setSelectedSubscription,
    refetch,
  };
}
