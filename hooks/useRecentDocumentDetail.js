"use client";

import * as React from "react";
import { recentDocumentsService } from "@/services/recentDocumentsService";
import { buildRecentDocumentDetailMock } from "@/lib/mock/vmRecentDocumentsMockData";

export function useRecentDocumentDetail(id) {
  const [document_, setDocument] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!id) {
      setDocument(null);
      return;
    }
    let active = true;
    (async () => {
      setIsLoading(true);
      try {
        const result = await recentDocumentsService.getRecentDocument(id);
        if (active) setDocument(result ?? buildRecentDocumentDetailMock(id));
      } catch {
        if (active) setDocument(buildRecentDocumentDetailMock(id));
      } finally {
        if (active) setIsLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [id]);

  return { document: document_, isLoading };
}
