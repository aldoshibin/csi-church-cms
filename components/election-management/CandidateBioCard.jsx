"use client";

export function CandidateBioCard({ bio }) {
  if (!bio) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Candidate Bio</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{bio}</p>
    </div>
  );
}
