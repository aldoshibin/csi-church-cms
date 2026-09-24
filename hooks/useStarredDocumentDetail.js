"use client";

import * as React from "react";
import { starredDocumentsService } from "@/services/starredDocumentsService";
import { buildStarredDocumentDetailMock } from "@/lib/mock/vmStarredDocumentsMockData";

export function useStarredDocumentDetail(id) {
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
        const result = await starredDocumentsService.getStarredDocument(id);
        if (active) setDocument(result ?? buildStarredDocumentDetailMock(id));
      } catch {
        if (active) setDocument(buildStarredDocumentDetailMock(id));
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
