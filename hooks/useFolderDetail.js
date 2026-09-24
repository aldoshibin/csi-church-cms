"use client";

import * as React from "react";
import { documentFoldersService } from "@/services/documentFoldersService";
import { buildFolderDetailMock } from "@/lib/mock/vmDocumentFoldersMockData";

export function useFolderDetail(id) {
  const [folder, setFolder] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!id) {
      setFolder(null);
      return;
    }
    let active = true;
    (async () => {
      setIsLoading(true);
      try {
        const result = await documentFoldersService.getFolder(id);
        if (active) setFolder(result ?? buildFolderDetailMock(id));
      } catch {
        if (active) setFolder(buildFolderDetailMock(id));
      } finally {
        if (active) setIsLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [id]);

  return { folder, isLoading };
}
