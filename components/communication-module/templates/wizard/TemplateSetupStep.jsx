"use client";

import { TemplateInformationSection } from "./TemplateInformationSection";
import { VariablesSection } from "./VariablesSection";
import { AdditionalSettingsSection } from "./AdditionalSettingsSection";

export function TemplateSetupStep({ form, setField }) {
  return (
    <div className="flex flex-col gap-5">
      <TemplateInformationSection form={form} setField={setField} />
      <VariablesSection />
      <AdditionalSettingsSection form={form} setField={setField} />
    </div>
  );
}
