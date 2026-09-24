"use client";

import * as React from "react";
import { documentsService } from "@/services/documentsService";
import { DOCUMENTS_LIST_MOCK, STORAGE_OVERVIEW_MOCK, DOCUMENT_SUMMARY_MOCK } from "@/lib/mock/vmCemeteryDocumentsMockData";

export function useCemeteryDocuments() {
  const [documents, setDocuments] = React.useState(DOCUMENTS_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [typeFilter, setTypeFilter] = React.useState("All Document Types");
  const [relatedToFilter, setRelatedToFilter] = React.useState("All Related To");
  const [uploadedByFilter, setUploadedByFilter] = React.useState("All Uploaded By");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await documentsService.listDocuments({ search, typeFilter, relatedToFilter, uploadedByFilter, page, pageSize });
      setDocuments(result?.documents ?? DOCUMENTS_LIST_MOCK);
    } catch {
      setDocuments(DOCUMENTS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, typeFilter, relatedToFilter, uploadedByFilter, page, pageSize]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, typeFilter, relatedToFilter, uploadedByFilter, pageSize]);

  const clearFilters = () => {
    setSearch("");
    setTypeFilter("All Document Types");
    setRelatedToFilter("All Related To");
    setUploadedByFilter("All Uploaded By");
  };

  const filtered = React.useMemo(() => {
    return documents.filter((d) => {
      const matchesSearch = !search
        || d.documentName.toLowerCase().includes(search.toLowerCase())
        || d.id.toLowerCase().includes(search.toLowerCase())
        || d.documentType.toLowerCase().includes(search.toLowerCase());
      const matchesType = typeFilter === "All Document Types" || d.documentType === typeFilter;
      const matchesRelated = relatedToFilter === "All Related To" || d.relatedTo === relatedToFilter;
      const matchesUploader = uploadedByFilter === "All Uploaded By" || d.uploadedBy === uploadedByFilter;
      return matchesSearch && matchesType && matchesRelated && matchesUploader;
    });
  }, [documents, search, typeFilter, relatedToFilter, uploadedByFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  return {
    documents: paged, totalCount: filtered.length, isLoading,
    storage: STORAGE_OVERVIEW_MOCK, summary: DOCUMENT_SUMMARY_MOCK,
    search, setSearch, typeFilter, setTypeFilter, relatedToFilter, setRelatedToFilter,
    uploadedByFilter, setUploadedByFilter, clearFilters,
    page, setPage, pageSize, setPageSize,
  };
}
