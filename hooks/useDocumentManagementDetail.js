"use client";

import * as React from "react";
import { documentManagementService } from "@/services/documentManagementService";
import { buildDocumentManagementDetailMock } from "@/lib/mock/vmDocumentManagementMockData";

export function useDocumentManagementDetail(id) {
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
        const result = await documentManagementService.getDocument(id);
        if (active) setDocument(result ?? buildDocumentManagementDetailMock(id));
      } catch {
        if (active) setDocument(buildDocumentManagementDetailMock(id));
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
