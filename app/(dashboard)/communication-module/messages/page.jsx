"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Plus, Filter } from "lucide-react";

import { useMessages } from "@/hooks/useMessages";
import { Button } from "@/components/ui/Button";
import { MessagesStatsRow } from "@/components/communication-module/messages/MessagesStatsRow";
import { MessagesTable } from "@/components/communication-module/messages/MessagesTable";
import { MessageFoldersCard } from "@/components/communication-module/messages/MessageFoldersCard";
import { RecentConversationsCard } from "@/components/communication-module/messages/RecentConversationsCard";
import { MessageQuickActions } from "@/components/communication-module/messages/MessageQuickActions";

export default function MessagesPage() {
  const router = useRouter();
  const {
    messages, totalCount, isLoading, stats, folders, recentConversations,
    tabs, activeTab, setActiveTab,
    search, setSearch, typeFilter, setTypeFilter, statusFilter, setStatusFilter, sortBy, setSortBy,
    page, setPage, pageSize,
  } = useMessages();

  const openDetails = (row) => router.push(`/communication-module/messages/${row.id}`);

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Messages</h1>
          <p className="mt-1 text-sm text-ink-subtle">Send messages and communicate with individuals, groups or ministries.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<Filter className="h-4 w-4" />}>Filters</Button>
          <Link href="/communication-module/messages/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>New Message</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="flex flex-col gap-5 xl:col-span-2">
          <MessagesStatsRow stats={stats} />
          <MessagesTable
            messages={messages}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab}
            search={search} onSearchChange={setSearch}
            typeFilter={typeFilter} onTypeFilterChange={setTypeFilter}
            statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
            sortBy={sortBy} onSortByChange={setSortBy}
            onViewDetails={openDetails}
            onResend={(row) => console.log("Resend", row.id)}
            onDuplicate={(row) => console.log("Duplicate", row.id)}
            onDelete={(row) => console.log("Delete", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <MessageFoldersCard folders={folders} onCreateFolder={() => console.log("Create folder")} />
          <RecentConversationsCard conversations={recentConversations} />
          <MessageQuickActions />
        </div>
      </div>
    </div>
  );
}
