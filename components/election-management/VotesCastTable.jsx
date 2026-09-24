"use client";

export function VotesCastTable({ votes = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Votes Cast</h3>
      {votes.length === 0 ? (
        <p className="mt-4 text-sm text-ink-subtle">No votes have been cast yet.</p>
      ) : (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs font-medium uppercase tracking-wide text-ink-subtle">
                <th className="pb-2 pr-4">Position</th>
                <th className="pb-2 pr-4">Candidate Voted For</th>
                <th className="pb-2">Membership No.</th>
              </tr>
            </thead>
            <tbody>
              {votes.map((vote) => (
                <tr key={vote.position} className="border-b border-border last:border-0">
                  <td className="py-3 pr-4 font-medium text-ink">{vote.position}</td>
                  <td className="py-3 pr-4 text-ink">{vote.candidateName}</td>
                  <td className="py-3 text-ink-subtle">{vote.candidateMembershipNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
