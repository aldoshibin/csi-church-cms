"use client";

import * as React from "react";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { COUNTRY_CODES } from "@/utils/constants";


export function PhoneInput({ label, value = "", onChange, error, required, helperText, defaultCountry = "+91" }) {
  const generatedId = React.useId();

  const { countryCode, localNumber } = React.useMemo(() => {
    const matched = COUNTRY_CODES.find((c) => value.startsWith(c.dialCode));
    return matched
      ? { countryCode: matched.dialCode, localNumber: value.slice(matched.dialCode.length) }
      : { countryCode: defaultCountry, localNumber: value.replace(/^\+/, "") };
  }, [value, defaultCountry]);

  const emit = (nextCountryCode, nextLocalNumber) => {
    const digitsOnly = nextLocalNumber.replace(/[^0-9]/g, "");
    onChange(digitsOnly ? `${nextCountryCode}${digitsOnly}` : "");
  };

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={generatedId} className="mb-1.5 block text-sm font-medium text-auth-text">
          {label}
          {required && <span className="ml-0.5 text-danger-500">*</span>}
        </label>
      )}
      <div className="flex">
        <select
          aria-label="Country code"
          value={countryCode}
          onChange={(e) => emit(e.target.value, localNumber)}
          className="rounded-l-md border border-r-0 border-auth-line bg-white px-2 text-sm text-auth-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-auth"
        >
          {COUNTRY_CODES.map((country) => (
            <option key={country.value} value={country.dialCode}>
              {country.label}
            </option>
          ))}
        </select>
        <input
          id={generatedId}
          type="tel"
          inputMode="numeric"
          placeholder="Enter your phone number"
          value={localNumber}
          onChange={(e) => emit(countryCode, e.target.value)}
          aria-invalid={!!error}
          className={cn(
            "h-10 w-full rounded-r-md border px-3 text-sm text-auth-text placeholder:text-auth-muted",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-auth focus-visible:border-auth",
            error ? "border-danger-500" : "border-auth-line"
          )}
        />
      </div>
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-xs text-danger-600">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
          {error}
        </p>
      )}
      {!error && helperText && <p className="mt-1.5 text-xs text-auth-muted">{helperText}</p>}
    </div>
  );
}
