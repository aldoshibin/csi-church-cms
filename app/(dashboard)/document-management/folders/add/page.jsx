"use client";

import { Lock, Bell, FolderCog } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useNewFolderForm } from "@/hooks/useNewFolderForm";
import { NewFolderQuickTipsCard } from "@/components/document-management/NewFolderQuickTipsCard";
import { NewFolderPreviewCard } from "@/components/document-management/NewFolderPreviewCard";
import { NewFolderRequiredFieldsCard } from "@/components/document-management/NewFolderRequiredFieldsCard";
import { FOLDER_OPTIONS } from "@/lib/mock/vmDocumentManagementMockData";
import {
  FOLDER_TYPE_OPTIONS, FOLDER_ACCESS_LEVEL_OPTIONS, FOLDER_ALLOWED_FOR_OPTIONS,
} from "@/lib/mock/vmDocumentFoldersMockData";

export default function NewFolderPage() {
  const { form, setField, isSubmitting, submit } = useNewFolderForm();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-ink">New Folder</h1>
        <p className="mt-1 text-sm text-ink-subtle">Create a new folder to organize your documents.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <form
          onSubmit={(e) => { e.preventDefault(); submit(); }}
          className="flex flex-col gap-6 rounded-lg border border-border bg-white p-6 shadow-card"
        >
          <div>
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">Folder Information</h3>
            <div className="grid grid-cols-1 gap-4">
              <Input
                label="Folder Name" required placeholder="Enter folder name"
                value={form.folderName} onChange={(e) => setField("folderName", e.target.value)}
                helperText="Enter a clear and descriptive name for the folder."
              />
              <Textarea
                label="Description" placeholder="Add a short description about this folder"
                rows={3}
                value={form.description} onChange={(e) => setField("description", e.target.value)}
                helperText="Add a short description about this folder."
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Select
                  label="Parent Folder"
                  value={form.parentFolder} onChange={(e) => setField("parentFolder", e.target.value)}
                  helperText="Choose a parent folder (leave empty for root folder)."
                >
                  <option value="">None (root folder)</option>
                  {FOLDER_OPTIONS.map((f) => <option key={f} value={f}>{f}</option>)}
                </Select>
                <Select
                  label="Folder Type"
                  value={form.folderType} onChange={(e) => setField("folderType", e.target.value)}
                  helperText="Choose a type for better organization."
                >
                  <option value="">Select folder type</option>
                  {FOLDER_TYPE_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
                </Select>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Select
                  label="Access Level"
                  value={form.accessLevel} onChange={(e) => setField("accessLevel", e.target.value)}
                  helperText="Set who can access this folder."
                >
                  <option value="">Select access level</option>
                  {FOLDER_ACCESS_LEVEL_OPTIONS.map((a) => <option key={a} value={a}>{a}</option>)}
                </Select>
                <Select
                  label="Allowed For"
                  value={form.allowedFor} onChange={(e) => setField("allowedFor", e.target.value)}
                  helperText="Choose users or roles who can access this folder."
                >
                  <option value="">Select users / roles</option>
                  {FOLDER_ALLOWED_FOR_OPTIONS.map((a) => <option key={a} value={a}>{a}</option>)}
                </Select>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">Folder Settings</h3>
            <div className="flex flex-col gap-3">
              <label className="flex items-start gap-3 rounded-md border border-border p-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-interactive-50 text-interactive-600">
                  <Lock className="h-4 w-4" />
                </span>
                <span className="flex-1">
                  <span className="flex items-center justify-between">
                    <span className="text-sm font-medium text-ink">Set as Private Folder</span>
                    <input
                      type="checkbox" className="h-4 w-4 rounded border-border text-interactive-500 focus-visible:ring-interactive-500"
                      checked={form.isPrivate} onChange={(e) => setField("isPrivate", e.target.checked)}
                    />
                  </span>
                  <p className="text-xs text-ink-subtle">Only selected users will be able to access this folder.</p>
                </span>
              </label>

              <label className="flex items-start gap-3 rounded-md border border-border p-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-interactive-50 text-interactive-600">
                  <Bell className="h-4 w-4" />
                </span>
                <span className="flex-1">
                  <span className="flex items-center justify-between">
                    <span className="text-sm font-medium text-ink">Enable Notifications</span>
                    <input
                      type="checkbox" className="h-4 w-4 rounded border-border text-interactive-500 focus-visible:ring-interactive-500"
                      checked={form.enableNotifications} onChange={(e) => setField("enableNotifications", e.target.checked)}
                    />
                  </span>
                  <p className="text-xs text-ink-subtle">Notify me when new documents are added to this folder.</p>
                </span>
              </label>

              <label className="flex items-start gap-3 rounded-md border border-border p-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-interactive-50 text-interactive-600">
                  <FolderCog className="h-4 w-4" />
                </span>
                <span className="flex-1">
                  <span className="flex items-center justify-between">
                    <span className="text-sm font-medium text-ink">Automatically Organize</span>
                    <input
                      type="checkbox" className="h-4 w-4 rounded border-border text-interactive-500 focus-visible:ring-interactive-500"
                      checked={form.autoOrganize} onChange={(e) => setField("autoOrganize", e.target.checked)}
                    />
                  </span>
                  <p className="text-xs text-ink-subtle">Allow system to suggest and organize documents in this folder.</p>
                </span>
              </label>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 border-t border-border pt-5">
            <Button type="button" variant="secondary">Cancel</Button>
            <Button type="submit" variant="primary" isLoading={isSubmitting}>Create Folder</Button>
          </div>
        </form>

        <div className="flex flex-col gap-6">
          <NewFolderQuickTipsCard />
          <NewFolderPreviewCard folderName={form.folderName} />
          <NewFolderRequiredFieldsCard />
        </div>
      </div>
    </div>
  );
}
