"use client";

import * as React from "react";
import { Search, Info } from "lucide-react";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { memberService } from "@/services/memberService";
import { REQUESTED_BY_OPTIONS, REQUEST_TYPE_OPTIONS, TRANSFER_REASON_SUGGESTIONS, MEMBER_SEARCH_BY_OPTIONS } from "@/utils/constants";

export default function Step1TransferInformation({ form, onMatchedMember }) {
  const { register, watch, setValue, formState: { errors } } = form;
  const searchMode = watch("search_mode");

  const [searchBy, setSearchBy] = React.useState("");
  const [searchValue, setSearchValue] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState(null);

  const handleSearch = async () => {
    if (!searchBy || !searchValue.trim()) return;
    setIsSearching(true);
    try {
      const data = await memberService.list({ search: searchValue, [searchBy]: searchValue });
      setSearchResults(data.results ?? []);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <>
      <section className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h2 className="font-display text-base font-semibold text-ink">Transfer Information</h2>
        <p className="mb-5 text-sm text-ink-subtle">Enter details about the member transfer request.</p>

        <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
          <Input label="Transfer In Date" type="date" required error={errors.transfer_in_date?.message} {...register("transfer_in_date")} />
          <Select label="Requested By" required error={errors.requested_by?.message} {...register("requested_by")}>
            <option value="">Select requester</option>
            {REQUESTED_BY_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </Select>
          <Select label="Request Type" required error={errors.request_type?.message} {...register("request_type")}>
            <option value="">Select request type</option>
            {REQUEST_TYPE_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </Select>
        </div>

        <div className="mt-5">
          <label className="mb-1.5 block text-sm font-medium text-ink">Transfer Reason <span className="text-danger-500">*</span></label>
          {/* <input
            list="transfer-reason-suggestions"
            placeholder="Select or enter reason for transfer"
            className={`h-10 w-full rounded-md border px-3 text-sm text-ink placeholder:text-ink-subtle ${errors.transfer_reason ? "border-danger-500" : "border-border"}`}
            {...register("transfer_reason")}
          /> */}
                    <Textarea 
                    // label="Additional Notes" 
                    rows={2} 
                    placeholder="Select are Enter reason for transfer" 
                    {...register("transfer_reason")} />

          <datalist id="transfer-reason-suggestions">
            {TRANSFER_REASON_SUGGESTIONS.map((opt) => (
              <option key={opt} value={opt} />
            ))}
          </datalist>
          {errors.transfer_reason && <p className="mt-1.5 text-xs text-danger-600">{errors.transfer_reason.message}</p>}
        </div>

        <div className="mt-5">
          <Textarea label="Additional Notes" rows={2} placeholder="Enter any additional notes (optional)" {...register("additional_notes")} />
        </div>
      </section>

      <section className="mt-4 rounded-lg border border-border bg-white p-6 shadow-card">
        <h2 className="font-display text-base font-semibold text-ink">Member Search</h2>
        <p className="mb-4 text-sm text-ink-subtle">Search for the member to transfer in. If the member is not found, you can add a new member.</p>

        <div className="mb-4 flex gap-6">
          <label className="flex items-center gap-2 text-sm text-ink">
            <input type="radio" value="EXISTING" checked={searchMode === "EXISTING"} className="h-4 w-4 border-border text-interactive-500 focus-visible:ring-interactive-500" {...register("search_mode")} />
            Search Existing Member
          </label>
          <label className="flex items-center gap-2 text-sm text-ink">
            <input type="radio" value="NEW" checked={searchMode === "NEW"} className="h-4 w-4 border-border text-interactive-500 focus-visible:ring-interactive-500" {...register("search_mode")} />
            Add New Member
          </label>
        </div>

        {searchMode === "EXISTING" ? (
          <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_2fr_auto]">
              <Select label="Search by" required value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
                <option value="">Select search by</option>
                {MEMBER_SEARCH_BY_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </Select>
              <Input label="Search Value" required placeholder="Enter search value" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
              <div className="flex items-end">
                <Button type="button" leftIcon={<Search className="h-4 w-4" />} onClick={handleSearch} isLoading={isSearching}>
                  Search
                </Button>
              </div>
            </div>

            {searchResults === null && (
              <div className="mt-4 flex items-start gap-2 rounded-md bg-interactive-50 p-3 text-xs text-interactive-700">
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                Search for an existing member in the system to initiate transfer in.
              </div>
            )}

            {searchResults !== null && (
              <ul className="mt-4 divide-y divide-border rounded-md border border-border">
                {searchResults.length === 0 && <li className="p-3 text-sm text-ink-subtle">No matching members found.</li>}
                {searchResults.map((m) => (
                  <li key={m.id} className="flex items-center justify-between p-3">
                    <div>
                      <p className="text-sm font-medium text-ink">{m.first_name} {m.last_name}</p>
                      <p className="text-xs text-ink-subtle">{m.phone_number || m.email || "—"}</p>
                    </div>
                    <Button type="button" size="sm" variant="secondary" onClick={() => onMatchedMember(m)}>Use this member</Button>
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          // <div className="flex items-start gap-2 rounded-md bg-interactive-50 p-3 text-xs text-interactive-700">
          //   <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          //   Fill in Member Information on the next step to register this person as a new member.
          // </div>
          <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_2fr_auto]">
              <Select label="Search by" required value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
                <option value="">Select search by</option>
                {MEMBER_SEARCH_BY_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </Select>
              <Input label="Search Value" required placeholder="Enter search value" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
              <div className="flex items-end">
                <Button type="button" leftIcon={<Search className="h-4 w-4" />} onClick={handleSearch} isLoading={isSearching}>
                  Search
                </Button>
              </div>
            </div>

            {searchResults === null && (
              <div className="mt-4 flex items-start gap-2 rounded-md bg-interactive-50 p-3 text-xs text-interactive-700">
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                Continue to Member Information and enter new member details.
              </div>
            )}

            {searchResults !== null && (
              <ul className="mt-4 divide-y divide-border rounded-md border border-border">
                {searchResults.length === 0 && <li className="p-3 text-sm text-ink-subtle">No matching members found.</li>}
                {searchResults.map((m) => (
                  <li key={m.id} className="flex items-center justify-between p-3">
                    <div>
                      <p className="text-sm font-medium text-ink">{m.first_name} {m.last_name}</p>
                      <p className="text-xs text-ink-subtle">{m.phone_number || m.email || "—"}</p>
                    </div>
                    <Button type="button" size="sm" variant="secondary" onClick={() => onMatchedMember(m)}>Use this member</Button>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </section>
    </>
  );
}
