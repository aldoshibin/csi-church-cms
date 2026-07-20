export function CCBreadcrumb({ step }) {
  // Step 1's title ("Confirmand Details") is never shown — replaced by
  // "New Confirmation Certificate". From step 2 onward, each step's title
  // is appended in sequence, so the trail grows as you progress instead
  // of just showing a fixed "current step" label.
  const trailTitles = ["Sponsor Details", "Confirmation Details", "Review & Confirm"];
  const extra = trailTitles.slice(0, step - 1);

  const crumbs = ["Sacramental Records", "Confirmation Certificate", "New Confirmation Certificate", ...extra];

  return (
    <p className="mb-5 text-sm">
      {crumbs.map((c, i) => (
        <span key={c}>
          <span className={i === crumbs.length - 1 ? "font-semibold text-ink" : "text-interactive-500"}>{c}</span>
          {i < crumbs.length - 1 && <span className="mx-1.5 text-ink-subtle">&gt;</span>}
        </span>
      ))}
    </p>
  );
}
