"use client";

import * as React from "react";
import { Calendar, MapPin, User, Eye } from "lucide-react";
import { sacramentBadgeClass } from "@/lib/mock/sacramentReportsMockData";
import { SacramentRecordDetailsModal } from "./SacramentRecordDetailsModal";


export function SacramentRecordsGrid({ records = [] }) {
  const [selectedRecord, setSelectedRecord] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleViewDetails = (record) => {
    setSelectedRecord(record);
    setModalOpen(true);
  };

  const handleEdit = (record) => {
    // TODO: wire to a real edit form once this page moves off mock data.
    setModalOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {records.map((record) => (
          <div key={record.id} className="rounded-lg border border-border p-4">
            <div className="flex items-start justify-between">
              <span className={`inline-flex rounded-md px-2 py-1 text-xs font-medium ${sacramentBadgeClass(record.sacramentType)}`}>
                {record.sacramentType}
              </span>
              <button
                onClick={() => handleViewDetails(record)}
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted"
                aria-label={`View details for ${record.name}`}
              >
                <Eye className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-3 text-base font-bold text-ink">{record.name}</p>
            <p className="text-sm text-ink-subtle">{record.relation}</p>

            <div className="mt-3 space-y-1.5 text-sm text-ink">
              <p className="flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5 shrink-0 text-interactive-500" />
                {record.month}{record.date}{record.year}
              </p>
              <p className="flex items-center gap-2 text-interactive-600">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-interactive-500" />
                {record.location}
              </p>
              <p className="flex items-center gap-2">
                <User className="h-3.5 w-3.5 shrink-0 text-interactive-500" />
                {record.officiatedBy}
              </p>
            </div>
          </div>
        ))}
      </div>

      <SacramentRecordDetailsModal
        record={selectedRecord}
        open={modalOpen}
        onOpenChange={setModalOpen}
        onEdit={handleEdit}
      />
    </>
  );
}
