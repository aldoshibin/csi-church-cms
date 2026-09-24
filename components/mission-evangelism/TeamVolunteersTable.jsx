"use client";

export function TeamVolunteersTable({ team = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Team &amp; Volunteers</h3>
      {team.length === 0 ? (
        <p className="mt-4 text-sm text-ink-subtle">No team members recorded for this program yet.</p>
      ) : (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs font-medium uppercase tracking-wide text-ink-subtle">
                <th className="pb-2 pr-4">Name</th>
                <th className="pb-2 pr-4">Role</th>
                <th className="pb-2 pr-4">Contact</th>
                <th className="pb-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {team.map((member) => (
                <tr key={member.email} className="border-b border-border last:border-0">
                  <td className="py-3 pr-4 font-medium text-ink">{member.name}</td>
                  <td className="py-3 pr-4 text-ink">{member.role}</td>
                  <td className="py-3 pr-4 text-ink">{member.contact}</td>
                  <td className="py-3 text-ink-subtle">{member.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
