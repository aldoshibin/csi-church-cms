"use client";

import * as React from "react";
import { documentsService } from "@/services/documentsService";
import { buildDocumentDetailMock } from "@/lib/mock/vmCemeteryDocumentsMockData";

export function useDocumentDetail(id) {
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
        const result = await documentsService.getDocument(id);
        if (active) setDocument(result ?? buildDocumentDetailMock(id));
      } catch {
        if (active) setDocument(buildDocumentDetailMock(id));
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
