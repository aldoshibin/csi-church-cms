function ReviewCard({ title, children }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-bold text-ink">{title}</h3>
        <button type="button" className="flex items-center gap-1 text-xs font-medium text-interactive-500 hover:underline">
          Edit
        </button>
      </div>
      {children}
    </div>
  );
}

/* single "Label  :  Value" row, used for Groom/Bride Details */
function KVRow({ k, v }) {
  return (
    <div className="flex text-[13px]">
      <span className="w-36 shrink-0 text-ink-subtle">{k}</span>
      <span className="text-ink">: {v}</span>
    </div>
  );
}

/* label above value, used inside 2-column grids (Marriage / Witness Details) */
function KV({ k, v }) {
  return (
    <div>
      <p className="text-ink-subtle">{k}</p>
      <p className="font-semibold text-ink">{v}</p>
    </div>
  );
}

export function StepReviewConfirm() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Review & Confirm</h2>
      <p className="mb-5 text-sm text-ink-subtle">Please review all the details before confirming.</p>

      <div className="space-y-4">
        <ReviewCard title="Groom Details">
          <div className="space-y-2">
            <KVRow k="Name" v="John Mathew" />
            <KVRow k="Date of Birth" v="10/02/1992" />
            <KVRow k="Place of Birth" v="Nagercoil" />
            <KVRow k="Religion" v="Christian" />
            <KVRow k="Occupation" v="Engineer" />
            <KVRow k="Marital Status" v="Bachelor" />
          </div>
        </ReviewCard>

        <ReviewCard title="Bride Details">
          <div className="space-y-2">
            <KVRow k="Name" v="Rose Mary" />
            <KVRow k="Date of Birth" v="15/05/1993" />
            <KVRow k="Place of Birth" v="Nagercoil" />
            <KVRow k="Religion" v="Christian" />
            <KVRow k="Occupation" v="Teacher" />
            <KVRow k="Marital Status" v="Spinster" />
          </div>
        </ReviewCard>

        <ReviewCard title="Marriage Details">
          <div className="grid grid-cols-1 gap-x-8 gap-y-3 text-[13px] sm:grid-cols-2">
            <div className="space-y-3">
              <KV k="Date of Marriage" v="12/05/2025" />
              <KV k="Time of Marriage" v="10:30 AM" />
              <KV k="Place of Marriage / Church" v="CSI Holy Trinity Church, Nagercoil" />
            </div>
            <div className="space-y-3">
              <KV k="Marriage Type" v="Religious Marriage" />
              <KV k="Conducted By" v="Rev. David Samuel" />
              <KV k="Diocese" v="Nagercoil Diocese" />
            </div>
          </div>
        </ReviewCard>

        <ReviewCard title="Witness Details">
          <div className="grid grid-cols-1 gap-x-8 gap-y-3 text-[13px] sm:grid-cols-2">
            <div>
              <p className="mb-2 text-xs font-semibold text-ink-subtle">Witness 1</p>
              <div className="space-y-2">
                <KVRow k="Name" v="Samuel Raj" />
                <KVRow k="Relation" v="Friend" />
                <KVRow k="Phone" v="+91 98765 43210" />
                <KVRow k="Email" v="samuelraj@example.com" />
                <KVRow k="Address" v="12, Beach Road, Nagercoil, Tamil Nadu - 629001" />
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold text-ink-subtle">Witness 2</p>
              <div className="space-y-2">
                <KVRow k="Name" v="Anitha Grace" />
                <KVRow k="Relation" v="Cousin" />
                <KVRow k="Phone" v="+91 87654 32109" />
                <KVRow k="Email" v="anithagrace@example.com" />
                <KVRow k="Address" v="45, Market Street, Nagercoil, Tamil Nadu - 629001" />
              </div>
            </div>
          </div>
        </ReviewCard>
      </div>
    </div>
  );
}
