import { Info } from "lucide-react";

export function InfoBanner({ children }) {
  return (
    <div className="mb-5 flex items-start gap-2 rounded-md border border-interactive-100 bg-interactive-50 px-4 py-2.5 text-[13px] text-interactive-700">
      <Info className="mt-0.5 h-4 w-4 shrink-0" />
      <span>{children}</span>
    </div>
  );
}
