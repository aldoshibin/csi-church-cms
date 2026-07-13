"use client";

import { Badge } from "@/components/ui/Badge";


export function TasksTab() {
  const tasks = [
    { id: 1, title: "Book venue for Youth Retreat", assignee: "John Thomas", committee: "Youth Ministry Committee", dueDate: "26 May 2025", status: "Pending" },
    { id: 2, title: "Order medical camp supplies", assignee: "Grace Abraham", committee: "Health Committee", dueDate: "24 May 2025", status: "In Progress" },
    { id: 3, title: "Finalize choir setlist", assignee: "Alex Varghese", committee: "Worship Committee", dueDate: "23 May 2025", status: "Completed" },
    { id: 4, title: "Prepare finance report", assignee: "John Samuel", committee: "Finance Committee", dueDate: "30 May 2025", status: "Pending" },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="p-4">
        <h3 className="text-sm font-semibold text-interactive-500">Tasks</h3>
        <p className="text-xs text-ink-subtle">best-guess layout based on the "Assign Task" Quick Action.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-full text-left text-sm">
          <thead className="border-y border-border bg-surface-canvas text-xs uppercase tracking-wide text-ink-subtle">
            <tr>
              {["Task", "Assignee", "Committee", "Due Date", "Status"].map((h) => (
                <th key={h} className="whitespace-nowrap px-4 py-3 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {tasks.map((task) => (
              <tr key={task.id}>
                <td className="px-4 py-3 font-medium text-ink">{task.title}</td>
                <td className="px-4 py-3 text-ink-subtle">{task.assignee}</td>
                <td className="px-4 py-3 text-ink-subtle">{task.committee}</td>
                <td className="px-4 py-3 text-ink-subtle">{task.dueDate}</td>
                <td className="px-4 py-3">
                  <Badge variant={task.status === "Completed" ? "success" : task.status === "Pending" ? "warning" : "info"}>
                    {task.status}
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
