"use client";

function Cell({ label, value }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="text-sm font-medium text-ink">{value || "-"}</p>
    </div>
  );
}

export function EnrollmentQuickSummaryPanel({ fullName, gender, church, mobile, showFamily, familyHeadName, spouseName, childrenCount, totalMembers, address }) {
  return (
    <section className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h2 className="mb-3 text-sm font-semibold text-interactive-500">Quick Summary (Preview)</h2>
      <div className="grid grid-cols-2 gap-x-3 gap-y-3">
        {!showFamily ? (
          <>
            <Cell label="Full Name" value={fullName} />
            <Cell label="Gender" value={gender} />
            <Cell label="Branch" value={church} />
            <Cell label="Mobile" value={mobile} />
          </>
        ) : (
          <>
            <Cell label="Family Head" value={familyHeadName} />
            <Cell label="Spouse" value={spouseName} />
            <Cell label="Children" value={childrenCount} />
            <Cell label="Total Members" value={totalMembers} />
            <div className="col-span-2">
              <Cell label="Address" value={address} />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
