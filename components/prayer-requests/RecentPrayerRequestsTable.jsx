"use client";

import * as React from "react";
import { List, Grid3x3, Eye, MoreVertical } from "lucide-react";
import { statusBadgeClass, categoryBadgeClass } from "@/lib/mock/prayerRequestSummaryMockData";
import { PrayerRequestDetailsModal } from "./PrayerRequestDetailsModal";
import { PrayerRequestsGrid } from "./PrayerRequestsGrid";


export function RecentPrayerRequestsTable({ requests = [] }) {
  const [viewMode, setViewMode] = React.useState("list"); // "list" | "grid"
  const [selectedRequest, setSelectedRequest] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleEdit = () => {
    // TODO: wire to a real edit form once this page moves off mock data.
    setModalOpen(false);
  };

  const openDetails = (request) => {
    setSelectedRequest(request);
    setModalOpen(true);
  };

  return (
    <>
      <div className="rounded-lg border border-border bg-white shadow-card">
        <div className="flex items-center justify-between p-4">
          <h3 className="text-base font-bold text-ink">Recent Prayer Requests</h3>
          <div className="flex items-center gap-1.5">
            <span className="mr-1 text-xs text-ink-subtle">View:</span>
            <button
              onClick={() => setViewMode("list")}
              className={`flex h-8 w-8 items-center justify-center rounded-md ${
                viewMode === "list" ? "bg-interactive-500 text-white" : "border border-border text-ink-muted hover:bg-surface-muted"
              }`}
              aria-label="List view"
            >
              <List className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex h-8 w-8 items-center justify-center rounded-md ${
                viewMode === "grid" ? "bg-interactive-500 text-white" : "border border-border text-ink-muted hover:bg-surface-muted"
              }`}
              aria-label="Grid view"
            >
              <Grid3x3 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {viewMode === "list" ? (
          <div className="overflow-x-auto">
            <table className="w-full min-w-full text-left text-sm">
              <thead className="border-y border-border text-xs uppercase tracking-wide text-ink-subtle">
                <tr>
                  {["Date Requested", "Requested By", "Request For", "Category", "Request Details", "Status", "Requested For", "Actions"].map((h) => (
                    <th key={h} className="whitespace-nowrap px-4 py-3 font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {requests.map((request) => (
                  <tr key={request.id}>
                    <td className="px-4 py-3">
                      <p className="font-medium text-ink">{request.date}</p>
                      <p className="text-xs text-ink-subtle">{request.time}</p>
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-semibold text-ink">{request.requestedBy}</p>
                      <p className="text-xs text-ink-subtle">{request.requestedByLocation}</p>
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-semibold text-ink">{request.requestFor}</p>
                      <p className="text-xs text-ink-subtle">{request.requestForRelation}</p>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex rounded-md px-2 py-1 text-xs font-medium ${categoryBadgeClass(request.category)}`}>
                        {request.category}
                      </span>
                    </td>
                    <td className="max-w-xs px-4 py-3 text-ink">{request.details}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex rounded-md px-2 py-1 text-xs font-medium ${statusBadgeClass(request.status)}`}>
                        {request.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-ink">{request.requestedFor}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => openDetails(request)}
                          className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted"
                          aria-label={`View request for ${request.requestFor}`}
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-muted" aria-label="Row actions">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <PrayerRequestsGrid requests={requests} onViewDetails={openDetails} />
        )}
      </div>

      <PrayerRequestDetailsModal
        request={selectedRequest}
        open={modalOpen}
        onOpenChange={setModalOpen}
        onEdit={handleEdit}
      />
    </>
  );
}
