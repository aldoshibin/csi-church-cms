"use client";

import * as React from "react";
import { cn } from "@/lib/utils";


export function OtpInput({ length = 6, value = "", onChange, error = false, disabled = false, autoFocus = true }) {
  const inputRefs = React.useRef([]);
  const digits = React.useMemo(() => {
    const padded = value.padEnd(length, " ").slice(0, length);
    return padded.split("");
  }, [value, length]);

  const setDigitAt = (index, digit) => {
    const next = digits.slice();
    next[index] = digit;
    onChange(next.join("").trimEnd());
  };

  const handleChange = (index, rawValue) => {
    const digit = rawValue.replace(/[^0-9]/g, "").slice(-1);
    if (!digit) {
      setDigitAt(index, " ");
      return;
    }
    setDigitAt(index, digit);
    if (index < length - 1) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !digits[index]?.trim() && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (event.key === "ArrowLeft" && index > 0) inputRefs.current[index - 1]?.focus();
    if (event.key === "ArrowRight" && index < length - 1) inputRefs.current[index + 1]?.focus();
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pasted = event.clipboardData.getData("text").replace(/[^0-9]/g, "").slice(0, length);
    if (!pasted) return;
    onChange(pasted.padEnd(length, "").trimEnd());
    const focusIndex = Math.min(pasted.length, length - 1);
    inputRefs.current[focusIndex]?.focus();
  };

  return (
    <div className="flex gap-2.5" onPaste={handlePaste}>
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          autoFocus={autoFocus && index === 0}
          disabled={disabled}
          value={digits[index]?.trim() || ""}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          aria-label={`Digit ${index + 1} of ${length}`}
          className={cn(
            "h-14 w-12 rounded-md border text-center text-xl font-semibold text-auth-text",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-auth focus-visible:border-auth",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-surface-muted",
            error ? "border-danger-500" : "border-auth-line"
          )}
        />
      ))}
    </div>
  );
}
