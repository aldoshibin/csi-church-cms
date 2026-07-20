import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function BCStepFooter({ step, onBack, onNext, onConfirm, onCancel }) {
  return (
    <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
      <div>
        {step === 1 ? (
          <Button variant="secondary" onClick={onCancel}>Cancel</Button>
        ) : (
          <Button variant="secondary" leftIcon={<ChevronLeft className="h-4 w-4" />} onClick={onBack}>
            Previous
          </Button>
        )}
      </div>
      {step === 5 ? (
        <Button variant="primary" leftIcon={<Check className="h-4 w-4" />} onClick={onConfirm}>
          Confirm
        </Button>
      ) : (
        <Button variant="primary" rightIcon={<ChevronRight className="h-4 w-4" />} onClick={onNext}>
          Next
        </Button>
      )}
    </div>
  );
}
