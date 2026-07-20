"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import {
  SACRAMENT_REPORTS_MOCK, getTabRecords, getTabRecordLabel,
} from "@/lib/mock/sacramentReportsMockData";
import { SacramentOverviewPanel } from "@/components/sacrament-reports/SacramentOverviewPanel";
import { SacramentFilterBar } from "@/components/sacrament-reports/SacramentFilterBar";
import { SacramentTypeTabs } from "@/components/sacrament-reports/SacramentTypeTabs";
import { SacramentRecordsTable } from "@/components/sacrament-reports/SacramentRecordsTable";



export default function SacramentReportsPage() {
  const data = SACRAMENT_REPORTS_MOCK;
  const [activeTab, setActiveTab] = React.useState("All Sacraments");
  const records = React.useMemo(() => getTabRecords(data, activeTab), [data, activeTab]);
  const recordLabel = getTabRecordLabel(activeTab);

  return (
    <div className="space-y-5">
      {/* Header */}
      <div>
        <h1 className="font-display text-[26px] font-semibold text-[#06164a]">Sacrament Reports</h1>
        <p className="mt-1 flex items-center gap-1.5 text-sm">
          <Link href="/parish-administration" className="text-interactive-500 hover:underline">
            Parish Administration
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-ink-subtle" />
          <Link href="/parish-administration/sacrament-reports" className="text-interactive-500 hover:underline">
            Sacrament Reports
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-ink-subtle" />
          <span className="text-ink-subtle">{activeTab === "All Sacraments" ? "All Sacraments" : activeTab}</span>
        </p>
      </div>

      <SacramentOverviewPanel overview={data.overview} byLocation={data.byLocation} />

      <SacramentFilterBar filters={data.filters} />

      <div className="rounded-lg border border-border bg-white shadow-card">
        <SacramentTypeTabs tabs={data.tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        <SacramentRecordsTable recordLabel={recordLabel} records={records} />
      </div>
    </div>
  );
}
