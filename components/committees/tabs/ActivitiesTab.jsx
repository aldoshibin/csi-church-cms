"use client";

import { Badge } from "@/components/ui/Badge";


export function ActivitiesTab() {
  const activities = [
    { id: 1, title: "Medical Camp Organized", committee: "Health Committee", date: "23 May 2025", status: "Completed" },
    { id: 2, title: "Youth Retreat Planning", committee: "Youth Ministry Committee", date: "22 May 2025", status: "In Progress" },
    { id: 3, title: "Sunday School Curriculum Update", committee: "Christian Education Committee", date: "21 May 2025", status: "Completed" },
    { id: 4, title: "Choir Practice Session", committee: "Worship Committee", date: "20 May 2025", status: "Completed" },
    { id: 5, title: "Environment Clean-up Drive", committee: "Social Service Committee", date: "19 May 2025", status: "Pending" },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="p-4">
        <h3 className="text-sm font-semibold text-interactive-500">Activities</h3>
        <p className="text-xs text-ink-subtle"> best-guess layout based on the Overview tab's activity data.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-full text-left text-sm">
          <thead className="border-y border-border bg-surface-canvas text-xs uppercase tracking-wide text-ink-subtle">
            <tr>
              {["Activity", "Committee", "Date", "Status"].map((h) => (
                <th key={h} className="whitespace-nowrap px-4 py-3 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {activities.map((activity) => (
              <tr key={activity.id}>
                <td className="px-4 py-3 font-medium text-ink">{activity.title}</td>
                <td className="px-4 py-3 text-ink-subtle">{activity.committee}</td>
                <td className="px-4 py-3 text-ink-subtle">{activity.date}</td>
                <td className="px-4 py-3">
                  <Badge variant={activity.status === "Completed" ? "success" : activity.status === "Pending" ? "warning" : "info"}>
                    {activity.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
