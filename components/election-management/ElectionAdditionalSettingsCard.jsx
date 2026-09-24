"use client";

import { Settings2 } from "lucide-react";
import { ToggleSwitch } from "@/components/election-management/ToggleSwitch";

// Edit Election form's sidebar card: a vertical list of setting toggles,
// using this module's own local ToggleSwitch.jsx.
export function ElectionAdditionalSettingsCard({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <Settings2 className="h-4 w-4 text-interactive-600" />
        <h3 className="text-sm font-semibold text-ink">Additional Settings</h3>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <ToggleSwitch
          label="Allow Multiple Nominations" description="Candidates may run for more than one position"
          checked={form.allowMultipleNominations} onChange={(v) => setField("allowMultipleNominations", v)}
        />
        <ToggleSwitch
          label="Display Voter List to Candidates" description="Candidates can view the list of eligible voters"
          checked={form.displayVoterListToCandidates} onChange={(v) => setField("displayVoterListToCandidates", v)}
        />
        <ToggleSwitch
          label="Require Approval for Nominations" description="Admin must approve nominations before publishing"
          checked={form.requireApprovalForNominations} onChange={(v) => setField("requireApprovalForNominations", v)}
        />
        <ToggleSwitch
          label="Send Email Notifications" description="Notify members about election updates via email"
          checked={form.sendEmailNotifications} onChange={(v) => setField("sendEmailNotifications", v)}
        />
      </div>
    </div>
  );
}
