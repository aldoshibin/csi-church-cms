"use client";

import { Calendar, Bell, FileText } from "lucide-react";

const ITEMS = [
  { title: "Date of Death", description: "Select the exact date of the person's passing.", icon: Calendar },
  { title: "Burial Information", description: "Ensure the section and plot details are correct.", icon: Bell },
  { title: "Documents", description: "You can upload any relevant documents (certificate, photo, etc.).", icon: FileText },
];

export function InformationGuideCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-base font-semibold text-ink">Information Guide</h3>
      <p className="mt-1 text-sm text-ink-subtle">Fields marked with * are mandatory.</p>
      <div className="mt-4 flex flex-col gap-4">
        {ITEMS.map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-success-50 text-success-600">
              <item.icon className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{item.title}</p>
              <p className="text-xs text-ink-subtle">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
