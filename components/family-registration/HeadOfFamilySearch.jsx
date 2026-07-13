"use client";

import * as React from "react";
import { Controller } from "react-hook-form";
import { Search, X, AlertCircle } from "lucide-react";
import { memberService } from "@/services/memberService";
import { debounce } from "@/lib/utils";

function HeadOfFamilySearchField({ value, onChange, error }) {
  const [query, setQuery] = React.useState(value?.name || "");
  const [results, setResults] = React.useState([]);
  const [isSearching, setIsSearching] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef(null);

  const runSearch = React.useMemo(
    () =>
      debounce(async (term) => {
        if (!term.trim()) {
          setResults([]);
          return;
        }
        setIsSearching(true);
        try {
          const data = await memberService.list({ search: term, page: 1 });
          setResults(data.results ?? []);
        } finally {
          setIsSearching(false);
        }
      }, 350),
    []
  );

  React.useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <label className="mb-1.5 block text-sm font-medium text-ink">
        Head of the Family <span className="text-danger-500">*</span>
      </label>
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            if (value) onChange(null);
            runSearch(e.target.value);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search member..."
          aria-invalid={!!error}
          className={
            "h-10 w-full rounded-md border bg-white pl-9 pr-9 text-sm text-ink placeholder:text-ink-subtle " +
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-500 " +
            (error ? "border-danger-500" : "border-border")
          }
        />
        {value && (
          <button
            type="button"
            onClick={() => {
              onChange(null);
              setQuery("");
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-subtle hover:text-ink"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {open && (isSearching || results.length > 0) && (
        <ul className="absolute z-10 mt-1 w-full rounded-md border border-border bg-white shadow-elevated">
          {isSearching && <li className="px-3 py-2 text-sm text-ink-subtle">Searching…</li>}
          {!isSearching &&
            results.map((m) => (
              <li key={m.id}>
                <button
                  type="button"
                  onClick={() => {
                    onChange({ id: m.id, name: `${m.first_name} ${m.last_name}` });
                    setQuery(`${m.first_name} ${m.last_name}`);
                    setOpen(false);
                  }}
                  className="flex w-full flex-col items-start px-3 py-2 text-left text-sm hover:bg-surface-muted"
                >
                  <span className="font-medium text-ink">{m.first_name} {m.last_name}</span>
                  <span className="text-xs text-ink-subtle">{m.phone_number || m.email || "—"}</span>
                </button>
              </li>
            ))}
        </ul>
      )}

      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-xs text-danger-600">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" /> {error}
        </p>
      )}
    </div>
  );
}

export default function HeadOfFamilySearch({ control, name, errors }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <HeadOfFamilySearchField
          value={field.value}
          onChange={field.onChange}
          error={errors?.[name]?.message}
        />
      )}
    />
  );
}
