"use client";

import * as React from "react";
import { refundsService } from "@/services/refundsService";
import {
  REFUNDS_MOCK, REFUNDS_STATS_MOCK, REFUND_SUMMARY_MOCK,
  REFUND_STATUS_BREAKDOWN_MOCK, REFUND_PAYMENT_METHOD_BREAKDOWN_MOCK,
} from "@/lib/mock/refundsMockData";

const PAGE_SIZE = 10;

export function useRefunds() {
  const [refunds, setRefunds] = React.useState(REFUNDS_MOCK);
  const [stats, setStats] = React.useState(REFUNDS_STATS_MOCK);
  const [summary, setSummary] = React.useState(REFUND_SUMMARY_MOCK);
  const [statusBreakdown, setStatusBreakdown] = React.useState(REFUND_STATUS_BREAKDOWN_MOCK);
  const [paymentMethodBreakdown, setPaymentMethodBreakdown] = React.useState(REFUND_PAYMENT_METHOD_BREAKDOWN_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [fundFilter, setFundFilter] = React.useState("All Funds / Accounts");
  const [dateRange] = React.useState("01 Apr 2025 - 30 Apr 2025");
  const [page, setPage] = React.useState(1);

  const [selectedRefund, setSelectedRefund] = React.useState(null);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await refundsService.listRefunds({ search, statusFilter, fundFilter, dateRange, page });
      setRefunds(result?.refunds ?? REFUNDS_MOCK);
      setStats(result?.stats ?? REFUNDS_STATS_MOCK);
      setSummary(result?.summary ?? REFUND_SUMMARY_MOCK);
      setStatusBreakdown(result?.statusBreakdown ?? REFUND_STATUS_BREAKDOWN_MOCK);
      setPaymentMethodBreakdown(result?.paymentMethodBreakdown ?? REFUND_PAYMENT_METHOD_BREAKDOWN_MOCK);
    } catch {
      setRefunds(REFUNDS_MOCK);
      setStats(REFUNDS_STATS_MOCK);
      setSummary(REFUND_SUMMARY_MOCK);
      setStatusBreakdown(REFUND_STATUS_BREAKDOWN_MOCK);
      setPaymentMethodBreakdown(REFUND_PAYMENT_METHOD_BREAKDOWN_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, statusFilter, fundFilter, dateRange, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, statusFilter, fundFilter]);

  const filteredRefunds = React.useMemo(() => {
    return refunds.filter((r) => {
      const matchesSearch = !search
        || r.donor.toLowerCase().includes(search.toLowerCase())
        || r.id.toLowerCase().includes(search.toLowerCase())
        || r.reason.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All Status" || r.status === statusFilter;
      const matchesFund = fundFilter === "All Funds / Accounts" || r.fund === fundFilter;
      return matchesSearch && matchesStatus && matchesFund;
    });
  }, [refunds, search, statusFilter, fundFilter]);

  const pagedRefunds = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredRefunds.slice(start, start + PAGE_SIZE).map((r, i) => ({ ...r, serial: start + i + 1 }));
  }, [filteredRefunds, page]);

  return {
    refunds: pagedRefunds, totalCount: filteredRefunds.length, isLoading,
    stats, summary, statusBreakdown, paymentMethodBreakdown,
    search, setSearch, statusFilter, setStatusFilter, fundFilter, setFundFilter, dateRange,
    page, setPage, pageSize: PAGE_SIZE,
    selectedRefund, setSelectedRefund,
    refetch,
  };
}
