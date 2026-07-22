"use client";

import { Search, SlidersHorizontal, RotateCcw } from "lucide-react";
import { MEMBERSHIP_STATUS_OPTIONS, GENDER_OPTIONS, MEMBER_CATEGORY_OPTIONS } from "@/utils/constants";
import { FaFilter } from "react-icons/fa6";

export function MemberDirectoryFilterBar({ onSearchChange, onStatusChange, onBranchChange, onGenderChange, onReset }) {
  return (
    <div className="space-y-3 rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="flex flex-wrap items-end gap-3">
        <div className="relative min-w-[240px] flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
          <input
            type="search"
            placeholder="Search by name, member ID, phone or email"
            onChange={(e) => onSearchChange(e.target.value)}
            className="h-10 w-full rounded-md border border-border pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle"
          />
        </div>
         <div className="flex flex-col gap-1.5">
        <span className="text-[12px] font-medium text-[#071351]">Member Category</span>
        <select onChange={(e) => onBranchChange(e.target.value)} defaultValue="" className="h-10 w-40 rounded-md border border-border px-3 text-sm text-ink">
          <option value="">All Branches</option>
          <option>St. John's Church (Main)</option>
          <option>St. Peter's Church (North)</option>
          <option>CSI Church (West)</option>
          <option>St. Thomas Church (South)</option>
        </select>
        </div>
 <div className="flex flex-col gap-1.5">
        <span className="text-[12px] font-medium text-[#071351]">Member Type</span>
        <select defaultValue="" className="h-10 w-40 rounded-md border border-border px-3 text-sm text-ink">
          <option value="">All Categories</option>
          {MEMBER_CATEGORY_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
       </div> 
 <div className="flex flex-col gap-1.5">
        <span className="text-[12px] font-medium text-[#071351]">Membership Status</span>
        <select onChange={(e) => onStatusChange(e.target.value)} defaultValue="" className="h-10 w-36 rounded-md border border-border px-3 text-sm text-ink">
          <option value="">All Status</option>
          {MEMBERSHIP_STATUS_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
</div>
 <div className="flex flex-col gap-1.5">
        <span className="text-[12px] font-medium text-[#071351]">Age Group</span>
        <select defaultValue="" className="h-10 w-36 rounded-md border border-border px-3 text-sm text-ink">
          <option value="">All Age Groups</option>
          <option>Children (0-12)</option>
          <option>Youth (13-17)</option>
          <option>Adults (18+)</option>
          <option>Senior (60+)</option>
        </select>
</div>
 <div className="flex flex-col gap-1.5">
        <span className="text-[12px] font-medium text-[#071351]">Gender</span>
        <select onChange={(e) => onGenderChange(e.target.value)} defaultValue="" className="h-10 w-32 rounded-md border border-border px-3 text-sm text-ink">
          <option value="">All</option>
          {GENDER_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
</div>
        <button onClick={onReset} className="flex h-10 items-center gap-2 rounded-md border border-border bg-white px-4 text-sm font-medium text-[#00796b] hover:bg-surface-muted">
          {/* <RotateCcw className="h-3.5 w-3.5" /> */}
           Reset
        </button>
      </div>

      <button className="flex h-9 items-center gap-2 rounded-md border border-border bg-white px-3 text-sm font-medium text-ink hover:bg-surface-muted">
        <FaFilter className="h-3.5 w-3.5" /> More Filters
      </button>
    </div>
  );
}
