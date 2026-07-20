"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Save } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function BaptismWizardNav({ isFirstStep, isLastStep, onPrevious, onNext, onSubmit, isSubmitting }) {
  return (
    <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
      {isFirstStep ? (
        <Link href="/sacraments/baptism">
          <Button type="button" variant="secondary">Cancel</Button>
        </Link>
      ) : (
        <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />} onClick={onPrevious}>
          Previous Step
        </Button>
      )}

      {isLastStep ? (
        <Button type="button" onClick={onSubmit} isLoading={isSubmitting} leftIcon={!isSubmitting && <Save className="h-4 w-4" />}>
          {isSubmitting ? "Saving..." : "Confirm & Save Record"}
        </Button>
      ) : (
        <Button type="button" onClick={onNext} rightIcon={<ArrowRight className="h-4 w-4" />}>
          Next Step
        </Button>
      )}
    </div>
  );
}
