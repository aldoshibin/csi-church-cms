"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Upload } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useUploadDocumentForm } from "@/hooks/useUploadDocumentForm";
import { DocumentInformationSection } from "@/components/cemetery-management/documents/form/DocumentInformationSection";
import { UploadFileSection } from "@/components/cemetery-management/documents/form/UploadFileSection";
import { DocumentAdditionalInformationSection } from "@/components/cemetery-management/documents/form/DocumentAdditionalInformationSection";
import { UploadGuidelinesCard } from "@/components/cemetery-management/documents/form/UploadGuidelinesCard";
import { DocumentTypesCard } from "@/components/cemetery-management/documents/form/DocumentTypesCard";
import { DocumentsHelpCard } from "@/components/cemetery-management/documents/DocumentsHelpCard";

export default function UploadDocumentPage() {
  const router = useRouter();
  const { form, setField, file, setFile, isSubmitting, submit } = useUploadDocumentForm();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-ink">Upload Document</h1>
          <p className="mt-1 text-sm text-ink-subtle">Upload a new document related to cemetery records.</p>
        </div>
        <Button type="button" variant="secondary" onClick={() => router.back()} leftIcon={<ArrowLeft className="h-4 w-4" />}>
          Back to Documents
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-5">
          <DocumentInformationSection form={form} setField={setField} />
          <UploadFileSection file={file} setFile={setFile} />
          <DocumentAdditionalInformationSection form={form} setField={setField} />

          <div className="flex items-center justify-between">
            <Button type="button" variant="secondary" onClick={() => router.back()}>
              Cancel
            </Button>
            <div className="flex items-center gap-3">
              <Button type="button" variant="secondary" onClick={() => submit({ asDraft: true })} isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />}>
                Save as Draft
              </Button>
              <Button type="button" variant="success" onClick={() => submit()} isLoading={isSubmitting} leftIcon={<Upload className="h-4 w-4" />}>
                Upload Document
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <UploadGuidelinesCard />
          <DocumentTypesCard />
          <DocumentsHelpCard />
        </div>
      </div>
    </div>
  );
}
