"use client";

import * as React from "react";
import { sharedDocumentsService } from "@/services/sharedDocumentsService";
import { buildSharedDocumentDetailMock } from "@/lib/mock/vmSharedDocumentsMockData";

export function useSharedDocumentDetail(id) {
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
        const result = await sharedDocumentsService.getSharedDocument(id);
        if (active) setDocument(result ?? buildSharedDocumentDetailMock(id));
      } catch {
        if (active) setDocument(buildSharedDocumentDetailMock(id));
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
