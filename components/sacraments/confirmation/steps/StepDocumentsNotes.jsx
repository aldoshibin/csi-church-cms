import { FileText, Image as ImageIcon, Download, Trash2, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FormSelect, FormTextarea } from "../formFields";
import { InfoBanner } from "../InfoBanner";

export const MOCK_DOCS = [
  { type: "Baptism Certificate", name: "baptism_certificate_john.pdf", size: "1.2 MB", icon: FileText, color: "text-danger-500", date: "20 May 2025, 10:30 AM" },
  { type: "Birth Certificate", name: "birth_certificate_john.jpg", size: "824 KB", icon: ImageIcon, color: "text-success-500", date: "20 May 2025, 10:31 AM" },
  { type: "ID Proof", name: "id_proof_john.pdf", size: "653 KB", icon: FileText, color: "text-danger-500", date: "20 May 2025, 10:32 AM" },
  { type: "Other (Optional)", name: "family_photo.jpg", size: "1.8 MB", icon: ImageIcon, color: "text-success-500", date: "20 May 2025, 10:33 AM" },
];

export function StepDocumentsNotes() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Documents & Notes</h2>
      <p className="mb-4 text-sm text-ink-subtle">Upload supporting documents and add any additional notes (optional).</p>

      <h3 className="mb-2 text-sm font-bold text-ink">Documents Upload</h3>
      <InfoBanner>You can upload multiple documents. Supported formats: PDF, JPG, PNG (Max size: 5MB each)</InfoBanner>

      <div className="mb-4 overflow-hidden rounded-lg border border-border">
        <table className="w-full text-left text-[13px]">
          <thead>
            <tr className="border-b border-border bg-surface-muted text-xs font-semibold text-ink-subtle">
              <th className="px-4 py-2.5">Document Type</th>
              <th className="px-4 py-2.5">File Name</th>
              <th className="px-4 py-2.5">Uploaded On</th>
              <th className="px-4 py-2.5">Uploaded By</th>
              <th className="px-4 py-2.5">Action</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_DOCS.map((d) => (
              <tr key={d.name} className="border-b border-border last:border-0">
                <td className="px-4 py-2.5"><FormSelect defaultValue={d.type}><option>{d.type}</option></FormSelect></td>
                <td className="px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <d.icon className={`h-4 w-4 ${d.color}`} />
                    <div>
                      <p className="font-medium text-ink">{d.name}</p>
                      <p className="text-xs text-ink-subtle">{d.size}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2.5 text-ink-subtle">{d.date}</td>
                <td className="px-4 py-2.5 text-ink-subtle">Rev. Michael John</td>
                <td className="px-4 py-2.5">
                  <div className="flex gap-1.5">
                    <Button variant="outline" size="icon" aria-label="Download"><Download className="h-3.5 w-3.5" /></Button>
                    <Button variant="danger" size="icon" aria-label="Delete"><Trash2 className="h-3.5 w-3.5" /></Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-6 flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border py-8">
        <UploadCloud className="h-6 w-6 text-ink-subtle" />
        <p className="text-sm text-ink-subtle">
          Drag and drop here or{" "}
          <Button variant="outline" size="sm" className="ml-1">Browse Files</Button>
        </p>
        <p className="text-xs text-ink-subtle">Maximum file size: 5MB per file</p>
      </div>

      <FormTextarea label="Additional Notes" placeholder="Enter notes here..." />
    </div>
  );
}
