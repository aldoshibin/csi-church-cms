"use client";

import { FolderPlus } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useNewCategoryForm } from "@/hooks/useNewCategoryForm";
import { DocumentToggleSwitch } from "@/components/document-management/DocumentToggleSwitch";
import { CategoryGuidelinesCard } from "@/components/document-management/CategoryGuidelinesCard";
import { NeedHelpCard } from "@/components/document-management/NeedHelpCard";
import { CATEGORY_COLOR_OPTIONS, PARENT_CATEGORY_OPTIONS } from "@/lib/mock/vmDocumentCategoriesMockData";

export default function NewCategoryPage() {
  const { form, setField, isSubmitting, submit } = useNewCategoryForm();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
          <FolderPlus className="h-6 w-6" />
        </span>
        <div>
          <h1 className="text-2xl font-semibold text-ink">New Category</h1>
          <p className="mt-1 text-sm text-ink-subtle">Create a new category to organize your church documents.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <form
          onSubmit={(e) => { e.preventDefault(); submit(); }}
          className="flex flex-col gap-6 rounded-lg border border-border bg-white p-6 shadow-card"
        >
          <div>
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">Category Details</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                label="Category Name" required placeholder="Enter category name"
                value={form.categoryName} onChange={(e) => setField("categoryName", e.target.value)}
                helperText="Use a clear and unique name for the category."
              />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink">
                  Category Color <span className="text-danger-500">*</span>
                </label>
                <div className="flex items-center gap-2">
                  <span className="h-6 w-6 shrink-0 rounded-md border border-border" style={{ backgroundColor: form.categoryColor }} />
                  <select
                    value={form.categoryColor} onChange={(e) => setField("categoryColor", e.target.value)}
                    className="h-10 w-full rounded-md border border-border bg-white px-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
                  >
                    {CATEGORY_COLOR_OPTIONS.map((c) => <option key={c.hex} value={c.hex}>{c.name}</option>)}
                  </select>
                </div>
                <p className="mt-1.5 text-xs text-ink-subtle">Choose a color to identify this category.</p>
              </div>
            </div>

            <div className="mt-4">
              <Textarea
                label="Description" placeholder="Enter description (optional)" rows={3}
                value={form.description} onChange={(e) => setField("description", e.target.value)}
                helperText="Briefly describe the purpose of this category."
              />
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Select
                label="Parent Category (Optional)"
                value={form.parentCategory} onChange={(e) => setField("parentCategory", e.target.value)}
                helperText="Select a parent category to create a hierarchy."
              >
                <option value="">None</option>
                {PARENT_CATEGORY_OPTIONS.map((p) => <option key={p} value={p}>{p}</option>)}
              </Select>
              <Input
                label="Display Order" type="number" min={0}
                value={form.displayOrder} onChange={(e) => setField("displayOrder", Number(e.target.value))}
                helperText="Set the display order of this category."
              />
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">Category Settings</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <DocumentToggleSwitch
                  label="Status" checked={form.status} onChange={(v) => setField("status", v)}
                />
                <p className="mt-1.5 text-xs text-ink-subtle">Inactive categories will be hidden from users.</p>
              </div>
              <div>
                <DocumentToggleSwitch
                  label="Allow Subcategories" checked={form.allowSubcategories} onChange={(v) => setField("allowSubcategories", v)}
                />
                <p className="mt-1.5 text-xs text-ink-subtle">Enable to allow creating subcategories under this category.</p>
              </div>
            </div>

            <div className="mt-5 rounded-md border border-interactive-100 bg-interactive-50 px-4 py-3 text-sm text-interactive-700">
              You can manage permissions for this category after it is created.
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 border-t border-border pt-5">
            <Button type="button" variant="secondary">Cancel</Button>
            <Button type="button" variant="secondary">Save as Draft</Button>
            <Button type="submit" variant="primary" isLoading={isSubmitting}>Create Category</Button>
          </div>
        </form>

        <div className="flex flex-col gap-6">
          <CategoryGuidelinesCard />
          <NeedHelpCard />
        </div>
      </div>
    </div>
  );
}
