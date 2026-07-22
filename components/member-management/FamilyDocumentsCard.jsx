import { FileText, Image as ImageIcon, Download } from "lucide-react";

const DOCS = [
  { key: "family_declaration_form", label: "Family Declaration Form", ext: "PDF", icon: FileText },
  { key: "family_photo", label: "Family Photo", ext: "JPG", icon: ImageIcon },
  { key: "marriage_certificate", label: "Marriage Certificate", ext: "PDF", icon: FileText },
];

export function FamilyDocumentsCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-bold text-ink">Documents to Upload</h3>
      <ul className="divide-y divide-border">
        {DOCS.map((doc) => (
          <li key={doc.key} className="flex items-center justify-between py-3">
            <div className="flex items-center gap-2.5">
              <doc.icon className="h-4 w-4 text-interactive-500" />
              <span className="text-sm font-semibold text-ink">{doc.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-surface-muted px-2 py-0.5 text-[11px] font-semibold text-ink-subtle">{doc.ext}</span>
              <button type="button" aria-label={`Download ${doc.label} template`} className="text-success-600">
                <Download className="h-4 w-4" />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-xs text-ink-subtle">You can upload documents after saving the family.</p>
    </div>
  );
}
