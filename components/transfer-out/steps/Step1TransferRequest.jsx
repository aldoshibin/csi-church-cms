"use client";

import * as React from "react";
import { Search, Info } from "lucide-react";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { memberService } from "@/services/memberService";
import {
  REQUESTED_BY_OPTIONS, TRANSFER_OUT_REQUEST_TYPE_OPTIONS, REASON_CATEGORY_OPTIONS,
  CERTIFICATE_TYPE_OPTIONS, PRIORITY_OPTIONS, MEMBER_SEARCH_BY_OPTIONS,
} from "@/utils/constants";

export default function Step1TransferRequest({ form, onMatchedMember }) {
  const { register, watch, formState: { errors } } = form;
  const reasonLength = (watch("reason_for_transfer") || "").length;
  const notesLength = (watch("additional_notes") || "").length;
  const matchedMember = watch("matched_member");

  const [searchBy, setSearchBy] = React.useState("");
  const [searchValue, setSearchValue] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState(null);

  const handleSearch = async () => {
    if (!searchBy || !searchValue.trim()) return;
    setIsSearching(true);
    try {
      const data = await memberService.list({ search: searchValue, [searchBy]: searchValue, membership_status: "ACTIVE" });
      setSearchResults(data.results ?? []);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <>
      <section className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h2 className="font-display text-base font-semibold text-ink">Transfer Request Details</h2>
        <p className="mb-5 text-sm text-ink-subtle">Enter the transfer out request information and reason for leaving.</p>

        <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
          <Input label="Transfer Out Date" type="date" required error={errors.transfer_out_date?.message} {...register("transfer_out_date")} />
          <Select label="Requested By" required error={errors.requested_by?.message} {...register("requested_by")}>
            <option value="">Select requester</option>
            {REQUESTED_BY_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </Select>
          <Select label="Request Type" required error={errors.request_type?.message} {...register("request_type")}>
            <option value="">Select request type</option>
            {TRANSFER_OUT_REQUEST_TYPE_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </Select>

          <Select label="Reason Category" required error={errors.reason_category?.message} {...register("reason_category")}>
            <option value="">Select category</option>
            {REASON_CATEGORY_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </Select>
          <Select label="Requested Certificate Type" required error={errors.requested_certificate_type?.message} {...register("requested_certificate_type")}>
            <option value="">Select certificate</option>
            {CERTIFICATE_TYPE_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </Select>
          <Select label="Priority" {...register("priority")}>
            {PRIORITY_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </Select>
        </div>

        <div className="mt-5">
          <Textarea
            label="Reason for Transfer"
            required
            rows={2}
            maxLength={250}
            placeholder="Enter reason for transfer out"
            error={errors.reason_for_transfer?.message}
            {...register("reason_for_transfer")}
          />
          <p className="mt-1 text-right text-xs text-ink-subtle">{reasonLength}/250</p>
        </div>

        <div className="mt-2">
          <Textarea label="Additional Notes" rows={2} maxLength={250} placeholder="Enter any additional notes (optional)" {...register("additional_notes")} />
          <p className="mt-1 text-right text-xs text-ink-subtle">{notesLength}/250</p>
        </div>
      </section>

      <section className="mt-4 rounded-lg border border-border bg-white p-6 shadow-card">
        <h2 className="font-display text-base font-semibold text-ink">Member Search</h2>
        <p className="mb-4 text-sm text-ink-subtle">Search and select the existing member who is requesting transfer out.</p>

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

        {errors.matched_member && (
          <p className="mt-2 text-xs text-danger-600">{errors.matched_member.message}</p>
        )}

        {matchedMember && (
          <div className="mt-4 flex items-center justify-between rounded-md border border-success-200 bg-success-50 p-3">
            <p className="text-sm font-medium text-success-700">Selected: {matchedMember.name}</p>
          </div>
        )}

        {searchResults === null && !matchedMember && (
          <div className="mt-4 flex items-start gap-2 rounded-md bg-interactive-50 p-3 text-xs text-interactive-700">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            Search and select an active member to begin transfer out.
          </div>
        )}

        {searchResults !== null && (
          <ul className="mt-4 divide-y divide-border rounded-md border border-border">
            {searchResults.length === 0 && <li className="p-3 text-sm text-ink-subtle">No matching active members found.</li>}
            {searchResults.map((m) => (
              <li key={m.id} className="flex items-center justify-between p-3">
                <div>
                  <p className="text-sm font-medium text-ink">{m.first_name} {m.last_name}</p>
                  <p className="text-xs text-ink-subtle">{m.phone_number || m.email || "—"}</p>
                </div>
                <Button type="button" size="sm" variant="secondary" onClick={() => { onMatchedMember(m); setSearchResults(null); }}>
                  Select
                </Button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
