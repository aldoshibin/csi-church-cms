"use client";

import * as React from "react";
import { documentReportsService } from "@/services/documentReportsService";
import {
  DOCUMENT_REPORTS_STATS_MOCK, DOCUMENTS_BY_CATEGORY_MOCK, DOCUMENT_ACTIVITY_TREND_MOCK,
  TOP_CATEGORIES_BY_DOCUMENTS_MOCK, CATEGORY_WISE_REPORT_MOCK,
} from "@/lib/mock/vmDocumentReportsMockData";

export function useDocumentReports() {
  const [report, setReport] = React.useState({
    stats: DOCUMENT_REPORTS_STATS_MOCK,
    byCategory: DOCUMENTS_BY_CATEGORY_MOCK,
    activityTrend: DOCUMENT_ACTIVITY_TREND_MOCK,
    topCategories: TOP_CATEGORIES_BY_DOCUMENTS_MOCK,
    categoryWise: CATEGORY_WISE_REPORT_MOCK,
  });
  const [isLoading, setIsLoading] = React.useState(true);

  const [dateRange, setDateRange] = React.useState("Last 6 Months");
  const [categoryFilter, setCategoryFilter] = React.useState("All Categories");
  const [typeFilter, setTypeFilter] = React.useState("All Types");
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(8);

  const generateReport = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await documentReportsService.getReport({ dateRange, categoryFilter, typeFilter });
      setReport({
        stats: result?.stats ?? DOCUMENT_REPORTS_STATS_MOCK,
        byCategory: result?.byCategory ?? DOCUMENTS_BY_CATEGORY_MOCK,
        activityTrend: result?.activityTrend ?? DOCUMENT_ACTIVITY_TREND_MOCK,
        topCategories: result?.topCategories ?? TOP_CATEGORIES_BY_DOCUMENTS_MOCK,
        categoryWise: result?.categoryWise ?? CATEGORY_WISE_REPORT_MOCK,
      });
    } catch {
      setReport({
        stats: DOCUMENT_REPORTS_STATS_MOCK, byCategory: DOCUMENTS_BY_CATEGORY_MOCK,
        activityTrend: DOCUMENT_ACTIVITY_TREND_MOCK, topCategories: TOP_CATEGORIES_BY_DOCUMENTS_MOCK,
        categoryWise: CATEGORY_WISE_REPORT_MOCK,
      });
    } finally {
      setIsLoading(false);
    }
  }, [dateRange, categoryFilter, typeFilter]);

  React.useEffect(() => {
    generateReport();
  }, [generateReport]);

  const filteredCategoryWise = React.useMemo(() => {
    return report.categoryWise.filter((row) => !search || row.name.toLowerCase().includes(search.toLowerCase()));
  }, [report.categoryWise, search]);

  const pagedCategoryWise = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredCategoryWise.slice(start, start + pageSize);
  }, [filteredCategoryWise, page, pageSize]);

  React.useEffect(() => {
    setPage(1);
  }, [search]);

  return {
    ...report, isLoading, generateReport,
    dateRange, setDateRange, categoryFilter, setCategoryFilter, typeFilter, setTypeFilter,
    search, setSearch,
    categoryWise: pagedCategoryWise, categoryWiseTotalCount: filteredCategoryWise.length,
    page, setPage, pageSize,
  };
}
