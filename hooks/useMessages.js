"use client";

import * as React from "react";
import { messagesService } from "@/services/messagesService";
import {
  MESSAGES_LIST_MOCK, MESSAGE_LIST_STATS_MOCK, MESSAGE_FOLDERS_MOCK, RECENT_CONVERSATIONS_MOCK,
} from "@/lib/mock/vmMessagesMockData";

const PAGE_SIZE = 8;
const TABS = ["All Messages", "Inbox", "Sent", "Scheduled", "Drafts", "Archived"];

export function useMessages() {
  const [messages, setMessages] = React.useState(MESSAGES_LIST_MOCK);
  const [stats] = React.useState(MESSAGE_LIST_STATS_MOCK);
  const [folders] = React.useState(MESSAGE_FOLDERS_MOCK);
  const [recentConversations] = React.useState(RECENT_CONVERSATIONS_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [activeTab, setActiveTab] = React.useState("All Messages");
  const [search, setSearch] = React.useState("");
  const [typeFilter, setTypeFilter] = React.useState("All Types");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [sortBy, setSortBy] = React.useState("Newest");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await messagesService.listMessages({ activeTab, search, typeFilter, statusFilter, sortBy, page });
      setMessages(result?.messages ?? MESSAGES_LIST_MOCK);
    } catch {
      setMessages(MESSAGES_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [activeTab, search, typeFilter, statusFilter, sortBy, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [activeTab, search, typeFilter, statusFilter, sortBy]);

  const filtered = React.useMemo(() => {
    const sorted = [...messages].sort((a, b) => {
      const diff = new Date(b.sentOn) - new Date(a.sentOn);
      return sortBy === "Oldest" ? -diff : diff;
    });
    return sorted.filter((m) => {
      const matchesTab =
        activeTab === "All Messages" ? true :
        activeTab === "Inbox" ? m.status === "Delivered" :
        activeTab === "Sent" ? m.status === "Sent" :
        activeTab === "Scheduled" ? m.status === "Scheduled" :
        activeTab === "Drafts" ? m.status === "Draft" :
        activeTab === "Archived" ? false : true;
      const matchesSearch = !search || m.title.toLowerCase().includes(search.toLowerCase());
      const matchesType = typeFilter === "All Types" || m.type === typeFilter;
      const matchesStatus = statusFilter === "All Status" || m.status === statusFilter;
      return matchesTab && matchesSearch && matchesType && matchesStatus;
    });
  }, [messages, activeTab, search, typeFilter, statusFilter, sortBy]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  return {
    messages: paged, totalCount: filtered.length, isLoading, stats, folders, recentConversations,
    tabs: TABS, activeTab, setActiveTab,
    search, setSearch, typeFilter, setTypeFilter, statusFilter, setStatusFilter, sortBy, setSortBy,
    page, setPage, pageSize: PAGE_SIZE,
    resetFilters: () => { setSearch(""); setTypeFilter("All Types"); setStatusFilter("All Status"); setSortBy("Newest"); },
  };
}
