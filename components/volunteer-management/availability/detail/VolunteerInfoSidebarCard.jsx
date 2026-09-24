"use client";

function Row({ label, children }) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className="text-ink-subtle">{label}</span>
      <span className="text-right font-medium text-ink">{children}</span>
    </div>
  );
}

export function VolunteerInfoSidebarCard({ availability }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Volunteer Information</h3>
      <div className="flex flex-col gap-3">
        <Row label="Ministry / Team">{availability.ministry}</Row>
        <Row label="Role">{availability.role}</Row>
        <Row label="Joined On">{new Date(availability.joinedOn).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</Row>
        <Row label="Email">{availability.email}</Row>
        <Row label="Phone">{availability.phone}</Row>
        <Row label="Address">{availability.address}</Row>
      </div>
    </div>
  );
}
