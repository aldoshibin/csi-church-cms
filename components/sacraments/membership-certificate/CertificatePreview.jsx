import { Church } from "lucide-react";

export function CertificatePreview({ title = "This is how the certificate will appear." }) {
  return (
    <div className="w-[340px] shrink-0">
      <div className="rounded-lg border border-border bg-white p-4 shadow-card">
        <h3 className="mb-1 text-sm font-bold text-ink">Certificate Preview</h3>
        <p className="mb-4 text-xs text-ink-subtle">{title}</p>

        <div
          className="relative rounded-md border-4 p-6 text-center"
          style={{ borderColor: "#0f5443", background: "#fdfaf3" }}
        >
          <span className="absolute left-2 top-2 text-lg text-interactive-600">❧</span>
          <span className="absolute right-2 top-2 text-lg text-interactive-600">❧</span>
          <span className="absolute bottom-2 left-2 text-lg text-interactive-600">❧</span>
          <span className="absolute bottom-2 right-2 text-lg text-interactive-600">❧</span>

          <Church className="mx-auto mb-2 h-6 w-6 text-interactive-600" />
          <p className="text-[13px] font-bold text-ink">CSI St. John's Church</p>
          <p className="mb-3 text-[10px] text-ink-subtle">Nagercoil, Tamil Nadu</p>

          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-ink">Membership Certificate</p>
          <p className="text-[11px] text-ink-subtle">This is to certify that</p>
          <p className="my-2 font-serif text-lg italic text-interactive-600">Mr. Thomas Mathew</p>
          <p className="text-[11px] leading-relaxed text-ink-subtle">
            is a bonafide member of CSI St. John's Church, Nagercoil.
          </p>

          <p className="mt-3 text-[10px] text-ink-subtle">Member ID: MEM-000125</p>
          <p className="text-[10px] text-ink-subtle">Date of Issue: 22 May 2025</p>

          <div className="mt-6 flex items-end justify-between px-2">
            <div className="h-10 w-10 rounded-full border border-dashed border-ink-subtle/40 text-center text-[7px] leading-[38px] text-ink-subtle/50">
              SEAL
            </div>
            <div className="text-right">
              <p className="font-serif text-sm italic text-ink">Rev. Michael</p>
              <p className="text-[10px] text-ink-subtle">Rev. Michael John</p>
              <p className="text-[9px] text-ink-subtle">Parish Priest</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
