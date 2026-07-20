import { ChevronLeft, ChevronRight, X, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CCStepFooter({ step, onBack, onNext, onConfirm, onCancel }) {
  return (
    <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
      <div className="flex gap-2.5">
        {step === 1 ? (
          <Button variant="secondary" leftIcon={<X className="h-4 w-4" />} onClick={onCancel}>Cancel</Button>
        ) : (
          <Button variant="secondary" leftIcon={<ChevronLeft className="h-4 w-4" />} onClick={onBack}>Back</Button>
        )}
        {step === 4 && (
          <Button variant="secondary" leftIcon={<X className="h-4 w-4" />} onClick={onCancel}>Cancel</Button>
        )}
      </div>
      {step === 4 ? (
        <Button variant="primary" rightIcon={<Check className="h-4 w-4" />} onClick={onConfirm}>Confirm</Button>
      ) : (
        <Button variant="primary" rightIcon={<ChevronRight className="h-4 w-4" />} onClick={onNext}>Next</Button>
      )}
    </div>
  );
}
