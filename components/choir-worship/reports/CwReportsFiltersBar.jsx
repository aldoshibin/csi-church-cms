"use client";

import { Filter, RefreshCw } from "lucide-react";
import { Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import {
  CW_REPORT_TYPE_OPTIONS, CW_REPORT_DATE_RANGE_OPTIONS, CW_REPORT_MINISTRY_OPTIONS, CW_REPORT_SERVICE_TYPE_OPTIONS,
} from "@/lib/mock/choirWorshipReportsMockData";

export function CwReportsFiltersBar({
  reportType, onReportTypeChange, dateRange, onDateRangeChange, ministry, onMinistryChange, serviceType, onServiceTypeChange,
  onApply, onReset,
}) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="grid grid-cols-1 items-end gap-4 sm:grid-cols-2 lg:grid-cols-6">
        <Select label="Report Type" value={reportType} onChange={(e) => onReportTypeChange(e.target.value)}>
          {CW_REPORT_TYPE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
        </Select>
        <Select label="Date Range" value={dateRange} onChange={(e) => onDateRangeChange(e.target.value)}>
          {CW_REPORT_DATE_RANGE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
        </Select>
        <Select label="Ministry" value={ministry} onChange={(e) => onMinistryChange(e.target.value)}>
          {CW_REPORT_MINISTRY_OPTIONS.map((o) => <option key={o}>{o}</option>)}
        </Select>
        <Select label="Service Type" value={serviceType} onChange={(e) => onServiceTypeChange(e.target.value)}>
          {CW_REPORT_SERVICE_TYPE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
        </Select>
        <Button type="button" leftIcon={<Filter className="h-4 w-4" />} onClick={onApply}>Apply Filters</Button>
        <Button type="button" variant="secondary" leftIcon={<RefreshCw className="h-4 w-4" />} onClick={onReset}>Reset</Button>
      </div>
    </div>
  );
}
