"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

function DonutBlock({ title, data }) {
  return (
    <div>
      <p className="mb-3 text-sm font-medium text-ink-muted">{title}</p>
      <div className="flex items-center gap-5">
        <div className="h-[140px] w-[140px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} dataKey="count" nameKey="label" innerRadius={42} outerRadius={68} paddingAngle={1}>
                {data.map((entry) => <Cell key={entry.label} fill={entry.color} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-1 flex-col gap-2.5">
          {data.map((entry) => (
            <div key={entry.label} className="flex items-center gap-2 text-sm">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: entry.color }} />
              <span className="text-ink-muted">{entry.label}</span>
              <span className="ml-auto font-medium text-ink">{entry.count} ({entry.pct}%)</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CwTeamOverviewSection({ teamDistribution, activityOverview }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Team Overview</h3>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {teamDistribution && <DonutBlock title="Team Distribution" data={teamDistribution.breakdown} />}
        {activityOverview && <DonutBlock title="Activity Overview (This Month)" data={activityOverview.breakdown} />}
      </div>
    </div>
  );
}
