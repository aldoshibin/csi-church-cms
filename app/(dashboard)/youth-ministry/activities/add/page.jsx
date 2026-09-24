"use client";

import Link from "next/link";
import { X, Save } from "lucide-react";

import { useNewYouthActivityForm } from "@/hooks/useNewYouthActivityForm";
import { Button } from "@/components/ui/Button";
import { NewYouthActivityForm } from "@/components/youth-ministry/form/NewYouthActivityForm";
import { ActivityImagePanel } from "@/components/youth-ministry/form/ActivityImagePanel";
import { YmTargetAudiencePanel } from "@/components/youth-ministry/form/YmTargetAudiencePanel";
import { YmVisibilityPanel } from "@/components/youth-ministry/form/YmVisibilityPanel";

export default function NewYouthActivityPage() {
  const { form, setField, toggleAudience, isSubmitting, submit } = useNewYouthActivityForm();

  return (
    <div className="space-y-5 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <nav className="flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/youth-ministry" className="hover:underline">Youth Ministry</Link>
            <span className="text-ink-subtle">›</span>
            <Link href="/youth-ministry/events" className="hover:underline">Youth Activity</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">New Youth Activity</span>
          </nav>
          <h1 className="mt-1 font-display text-2xl font-bold text-ink">New Youth Activity</h1>
          <p className="mt-1 text-sm text-ink-subtle">Create a new activity, event, or program for the youth ministry.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/youth-ministry">
            <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
          </Link>
          <Button type="button" isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />} onClick={submit}>
            Save Activity
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <NewYouthActivityForm form={form} setField={setField} />
        </div>

        <div className="flex flex-col gap-5">
          <ActivityImagePanel imageName={form.imageName} onUpload={(name) => setField("imageName", name)} />
          <YmTargetAudiencePanel selected={form.targetAudience} onToggle={toggleAudience} />
          <YmVisibilityPanel value={form.visibility} onChange={(v) => setField("visibility", v)} />
        </div>
      </div>
    </div>
  );
}
