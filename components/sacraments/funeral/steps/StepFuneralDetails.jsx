import { UploadCloud, FileText, Image as ImageIcon, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { FormSelect, FormTextarea } from "@/components/sacraments/confirmation/formFields";
import { Button } from "@/components/ui/Button";

const UPLOADED_FILES = [
  { name: "funeral_order_001.pdf", size: "245 KB", icon: FileText, color: "text-danger-500" },
  { name: "death_certificate_001.jpg", size: "1.2 MB", icon: ImageIcon, color: "text-success-500" },
];

export function StepFuneralDetails() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Funeral Details</h2>
      <p className="mb-5 text-sm text-ink-subtle">Please provide the details of the funeral service.</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Input label="Funeral Date" required type="date" />
        <Input label="Funeral Time" required type="time" />
        <FormSelect label="Officiated By" required><option>Rev. Michael John</option></FormSelect>
        <Input label="Assisted By (Optional)" placeholder="Enter name" />

        <FormSelect label="Place of Funeral Service" required><option>CSI St. John's Church, Nagercoil</option></FormSelect>
        <div>
          <p className="mb-1.5 text-sm font-medium text-ink">Conducted By <span className="text-danger-500">*</span></p>
          <div className="flex h-10 items-center gap-6">
            <label className="flex items-center gap-2 text-sm text-ink">
              <input type="radio" name="conductedBy" defaultChecked /> Church
            </label>
            <label className="flex items-center gap-2 text-sm text-ink">
              <input type="radio" name="conductedBy" /> Family
            </label>
          </div>
        </div>
        <FormSelect label="Language Used" required><option>English</option><option>Tamil</option><option>Malayalam</option></FormSelect>
        <FormSelect label="Music / Hymns"><option>Yes</option><option>No</option></FormSelect>
      </div>

      <h3 className="mb-3 mt-6 text-sm font-bold text-ink">Funeral Service Details</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormTextarea label="Scripture Readings (Optional)" rows={3} maxLength={300} placeholder="Enter scripture readings" />
        <FormTextarea label="Sermon / Message (Optional)" rows={3} maxLength={300} placeholder="Enter sermon or message" />
      </div>

      <h3 className="mb-3 mt-6 text-sm font-bold text-ink">Committal / Burial Details</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <FormSelect label="Burial Location" required><option>St. John's Cemetery, Nagercoil</option></FormSelect>
        <Input label="Grave / Plot No. (Optional)" placeholder="Enter grave / plot number" />
        <Input label="Undertaker (Optional)" placeholder="Enter undertaker name" />
        <FormTextarea label="Witnesses Present (Optional)" rows={1} maxLength={200} placeholder="Enter witnesses present" />
      </div>

      <h3 className="mb-3 mt-6 text-sm font-bold text-ink">Documents (Optional)</h3>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div>
          <p className="mb-1.5 text-sm font-medium text-ink">Upload Funeral Order / Certificate / Others</p>
          <div className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border py-8">
            <UploadCloud className="h-6 w-6 text-ink-subtle" />
            <p className="text-sm text-ink-subtle">Click to upload files or drag and drop</p>
            <p className="text-xs text-ink-subtle">PDF, JPG or PNG (Max. 5MB)</p>
          </div>
        </div>
        <div>
          <p className="mb-1.5 text-sm font-medium text-ink">Uploaded Files</p>
          <div className="space-y-2 rounded-lg border border-border p-2">
            {UPLOADED_FILES.map((f) => (
              <div key={f.name} className="flex items-center justify-between rounded-md px-2 py-1.5 hover:bg-surface-muted">
                <div className="flex items-center gap-2">
                  <f.icon className={`h-4 w-4 ${f.color}`} />
                  <div>
                    <p className="text-sm text-ink">{f.name}</p>
                    <p className="text-xs text-ink-subtle">{f.size}</p>
                  </div>
                </div>
                <Button variant="danger" size="icon" aria-label="Remove"><Trash2 className="h-3.5 w-3.5" /></Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
