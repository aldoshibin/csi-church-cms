"use client";

import * as React from "react";
import { donationsService } from "@/services/donationsService";
import { DONATIONS_MOCK } from "@/lib/mock/donationsMockData";

const PAGE_SIZE = 10;

export function useDonations() {
  const [donations, setDonations] = React.useState(DONATIONS_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [paymentMethodFilter, setPaymentMethodFilter] = React.useState("All Payment Methods");
  const [fundFilter, setFundFilter] = React.useState("All Funds / Accounts");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [dateRange] = React.useState("01 May 2025 - 18 May 2025");
  const [page, setPage] = React.useState(1);

  const [selectedDonation, setSelectedDonation] = React.useState(null);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await donationsService.listDonations({ search, paymentMethodFilter, fundFilter, statusFilter, dateRange, page });
      setDonations(result?.donations ?? DONATIONS_MOCK);
    } catch {
      setDonations(DONATIONS_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, paymentMethodFilter, fundFilter, statusFilter, dateRange, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, paymentMethodFilter, fundFilter, statusFilter]);

  const filteredDonations = React.useMemo(() => {
    return donations.filter((d) => {
      const matchesSearch = !search
        || d.donor.toLowerCase().includes(search.toLowerCase())
        || d.email.toLowerCase().includes(search.toLowerCase())
        || d.id.toLowerCase().includes(search.toLowerCase());
      const matchesMethod = paymentMethodFilter === "All Payment Methods" || d.paymentMethod === paymentMethodFilter;
      const matchesFund = fundFilter === "All Funds / Accounts" || d.fund === fundFilter;
      const matchesStatus = statusFilter === "All Status" || d.status === statusFilter;
      return matchesSearch && matchesMethod && matchesFund && matchesStatus;
    });
  }, [donations, search, paymentMethodFilter, fundFilter, statusFilter]);

  const pagedDonations = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredDonations.slice(start, start + PAGE_SIZE).map((d, i) => ({ ...d, serial: start + i + 1 }));
  }, [filteredDonations, page]);

  return {
    donations: pagedDonations, totalCount: filteredDonations.length, isLoading,
    search, setSearch,
    paymentMethodFilter, setPaymentMethodFilter,
    fundFilter, setFundFilter,
    statusFilter, setStatusFilter,
    dateRange, page, setPage, pageSize: PAGE_SIZE,
    selectedDonation, setSelectedDonation,
    refetch,
  };
}
