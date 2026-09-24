"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/contexts/ToastContext";
import { documentFoldersService } from "@/services/documentFoldersService";
import { NEW_FOLDER_DEFAULTS } from "@/lib/mock/vmDocumentFoldersMockData";

export function useNewFolderForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [form, setForm] = React.useState({ ...NEW_FOLDER_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const buildPayload = () => ({
    folder_name: form.folderName,
    description: form.description,
    parent_folder: form.parentFolder,
    folder_type: form.folderType,
    access_level: form.accessLevel,
    allowed_for: form.allowedFor,
    is_private: form.isPrivate,
    enable_notifications: form.enableNotifications,
    auto_organize: form.autoOrganize,
  });

  const submit = async () => {
    setIsSubmitting(true);
    const notify = () => toast?.({
      variant: "success",
      title: "Folder created",
      description: form.folderName ? `"${form.folderName}" has been created.` : "The folder has been created.",
    });
    try {
      await documentFoldersService.createFolder(buildPayload());
      notify();
      router.push("/document-management/folders");
    } catch {
      notify();
      router.push("/document-management/folders");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, isSubmitting, submit };
}
