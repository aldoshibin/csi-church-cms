"use client";

import * as React from "react";
import { smsCampaignsService } from "@/services/smsCampaignsService";
import {
  SMS_CAMPAIGNS_LIST_MOCK, SMS_CAMPAIGN_OVERVIEW_STATS_MOCK, SMS_CAMPAIGN_OVERVIEW_DONUT_MOCK, SMS_CAMPAIGN_TYPES_SIDEBAR_MOCK,
} from "@/lib/mock/vmSmsCampaignsMockData";

const PAGE_SIZE = 7;
const TABS = ["All Campaigns", "Sent", "Scheduled", "Drafts", "Archived"];

export function useSmsCampaigns() {
  const [campaigns, setCampaigns] = React.useState(SMS_CAMPAIGNS_LIST_MOCK);
  const [stats] = React.useState(SMS_CAMPAIGN_OVERVIEW_STATS_MOCK);
  const [donut] = React.useState(SMS_CAMPAIGN_OVERVIEW_DONUT_MOCK);
  const [campaignTypes] = React.useState(SMS_CAMPAIGN_TYPES_SIDEBAR_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [activeTab, setActiveTab] = React.useState("All Campaigns");
  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [typeFilter, setTypeFilter] = React.useState("All Types");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await smsCampaignsService.listCampaigns({ activeTab, search, statusFilter, typeFilter, page });
      setCampaigns(result?.campaigns ?? SMS_CAMPAIGNS_LIST_MOCK);
    } catch {
      setCampaigns(SMS_CAMPAIGNS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [activeTab, search, statusFilter, typeFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [activeTab, search, statusFilter, typeFilter]);

  const filtered = React.useMemo(() => {
    return campaigns.filter((c) => {
      const matchesTab =
        activeTab === "All Campaigns" ? true :
        activeTab === "Sent" ? c.status === "Sent" :
        activeTab === "Scheduled" ? c.status === "Scheduled" :
        activeTab === "Drafts" ? c.status === "Draft" :
        activeTab === "Archived" ? false : true;
      const matchesSearch = !search || c.title.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All Status" || c.status === statusFilter;
      const matchesType = typeFilter === "All Types" || c.type === typeFilter;
      return matchesTab && matchesSearch && matchesStatus && matchesType;
    });
  }, [campaigns, activeTab, search, statusFilter, typeFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  return {
    campaigns: paged, totalCount: filtered.length, isLoading, stats, donut, campaignTypes,
    tabs: TABS, activeTab, setActiveTab,
    search, setSearch, statusFilter, setStatusFilter, typeFilter, setTypeFilter,
    page, setPage, pageSize: PAGE_SIZE,
  };
}
