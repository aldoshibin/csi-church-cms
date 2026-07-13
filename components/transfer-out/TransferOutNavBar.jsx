"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function TransferOutNavBar({ isFirstStep, onPrevious, onSaveContinue, onSubmit, isSubmitting }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border bg-white p-4 shadow-card">
      {isFirstStep ? (
        <Link href="/members">
          <Button type="button" variant="secondary">Cancel</Button>
        </Link>
      ) : (
        <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />} onClick={onPrevious}>
          Previous
        </Button>
      )}
      <Button type="button" variant="secondary" onClick={onSaveContinue} rightIcon={<ArrowRight className="h-4 w-4" />}>
        Save &amp; Continue
      </Button>
      <Button type="button" onClick={onSubmit} isLoading={isSubmitting} rightIcon={!isSubmitting && <Send className="h-4 w-4" />}>
        {isSubmitting ? "Submitting..." : "Submit Transfer Request"}
      </Button>
    </div>
  );
}
