"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/contexts/ToastContext";
import { documentManagementService } from "@/services/documentManagementService";
import { NEW_DOCUMENT_MANAGEMENT_DEFAULTS } from "@/lib/mock/vmDocumentManagementMockData";

export function useUploadDocumentManagementForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [form, setForm] = React.useState({ ...NEW_DOCUMENT_MANAGEMENT_DEFAULTS });
  const [file, setFile] = React.useState(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const buildPayload = () => ({
    document_name: form.documentName,
    document_type: form.documentType,
    category: form.category,
    folder: form.folder,
    tags: form.tags,
    description: form.description,
    expiry_date: form.expiryDate,
    access_level: form.accessLevel,
    allowed_for: form.allowedFor,
    permissions: form.permissions,
    notify_users: form.notifyUsers,
  });

  const submit = async () => {
    setIsSubmitting(true);
    const notify = () => toast?.({
      variant: "success",
      title: "Document uploaded",
      description: form.documentName ? `"${form.documentName}" has been uploaded.` : "The document has been uploaded.",
    });
    try {
      await documentManagementService.uploadDocument(buildPayload());
      notify();
      router.push("/document-management/all-documents");
    } catch {
      notify();
      router.push("/document-management/all-documents");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, file, setFile, isSubmitting, submit };
}
