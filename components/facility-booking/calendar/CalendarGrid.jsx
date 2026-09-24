"use client";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function CalendarGrid({ days, categoryStyle }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-white">
      <div className="grid grid-cols-7 border-b border-border bg-surface-canvas">
        {WEEKDAYS.map((day) => (
          <div key={day} className="px-3 py-2.5 text-center text-xs font-semibold text-ink-subtle">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {days.map((day) => (
          <div
            key={day.date}
            className={`flex min-h-[110px] flex-col gap-1 border-b border-r border-border p-2 last:border-r-0 ${day.inMonth ? "bg-white" : "bg-surface-canvas/60"}`}
          >
            <span
              className={`self-start text-xs font-semibold ${day.inMonth ? "text-ink" : "text-ink-subtle/60"} ${day.isToday ? "flex h-6 w-6 items-center justify-center rounded-full bg-success-500 text-white" : ""}`}
            >
              {day.dayNumber}
            </span>
            <div className="flex flex-col gap-1">
              {day.events.map((event, i) => {
                const style = categoryStyle[event.category] ?? categoryStyle.Others;
                return (
                  <div
                    key={`${event.title}-${i}`}
                    className="truncate rounded px-1.5 py-1 text-[11px] leading-tight"
                    style={{ backgroundColor: style.bg, color: style.color }}
                    title={`${event.time} ${event.title} — ${event.facility}`}
                  >
                    <span className="font-semibold">{event.time}</span> {event.title}
                  </div>
                );
              })}
              {day.extraCount > 0 && (
                <span className="text-[11px] font-medium text-interactive-600">+{day.extraCount} more</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
