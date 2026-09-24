"use client";

import * as React from "react";
import { paymentLinksService } from "@/services/paymentLinksService";
import {
  PAYMENT_LINKS_MOCK, PAYMENT_LINKS_STATS_MOCK, CLICKS_AMOUNT_OVERVIEW_MOCK,
  LINK_SUMMARY_MOCK, RECENT_LINK_ACTIVITY_MOCK,
} from "@/lib/mock/paymentLinksMockData";

const PAGE_SIZE = 10;

export function usePaymentLinks() {
  const [links, setLinks] = React.useState(PAYMENT_LINKS_MOCK);
  const [stats, setStats] = React.useState(PAYMENT_LINKS_STATS_MOCK);
  const [clicksAmountOverview, setClicksAmountOverview] = React.useState(CLICKS_AMOUNT_OVERVIEW_MOCK);
  const [linkSummary, setLinkSummary] = React.useState(LINK_SUMMARY_MOCK);
  const [recentActivity, setRecentActivity] = React.useState(RECENT_LINK_ACTIVITY_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [fundFilter, setFundFilter] = React.useState("All Funds / Accounts");
  const [createdFilter] = React.useState("Created: All Time");
  const [page, setPage] = React.useState(1);

  const [selectedLink, setSelectedLink] = React.useState(null);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await paymentLinksService.listLinks({ search, statusFilter, fundFilter, page });
      setLinks(result?.links ?? PAYMENT_LINKS_MOCK);
      setStats(result?.stats ?? PAYMENT_LINKS_STATS_MOCK);
      setClicksAmountOverview(result?.clicksAmountOverview ?? CLICKS_AMOUNT_OVERVIEW_MOCK);
      setLinkSummary(result?.linkSummary ?? LINK_SUMMARY_MOCK);
      setRecentActivity(result?.recentActivity ?? RECENT_LINK_ACTIVITY_MOCK);
    } catch {
      setLinks(PAYMENT_LINKS_MOCK);
      setStats(PAYMENT_LINKS_STATS_MOCK);
      setClicksAmountOverview(CLICKS_AMOUNT_OVERVIEW_MOCK);
      setLinkSummary(LINK_SUMMARY_MOCK);
      setRecentActivity(RECENT_LINK_ACTIVITY_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, statusFilter, fundFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, statusFilter, fundFilter]);

  const filteredLinks = React.useMemo(() => {
    return links.filter((l) => {
      const matchesSearch = !search
        || l.linkName.toLowerCase().includes(search.toLowerCase())
        || l.fund.toLowerCase().includes(search.toLowerCase())
        || l.linkUrl.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All Status" || l.status === statusFilter;
      const matchesFund = fundFilter === "All Funds / Accounts" || l.fund === fundFilter;
      return matchesSearch && matchesStatus && matchesFund;
    });
  }, [links, search, statusFilter, fundFilter]);

  const pagedLinks = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredLinks.slice(start, start + PAGE_SIZE).map((l, i) => ({ ...l, serial: start + i + 1 }));
  }, [filteredLinks, page]);

  return {
    links: pagedLinks, totalCount: filteredLinks.length, isLoading,
    stats, clicksAmountOverview, linkSummary, recentActivity,
    search, setSearch, statusFilter, setStatusFilter, fundFilter, setFundFilter, createdFilter,
    page, setPage, pageSize: PAGE_SIZE,
    selectedLink, setSelectedLink,
    refetch,
  };
}
