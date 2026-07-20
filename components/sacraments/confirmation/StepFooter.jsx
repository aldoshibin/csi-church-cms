import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function StepFooter({ step, onBack, onNext, onSaveDraft, onConfirm }) {
  return (
    <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
      <div>
        {step > 1 && (
          <Button variant="secondary" leftIcon={<ChevronLeft className="h-4 w-4" />} onClick={onBack}>
            Previous Step
          </Button>
        )}
      </div>
      <div className="flex gap-2.5">
        {step === 6 ? (
          <>
            <Button variant="secondary" onClick={onSaveDraft}>Save as Draft</Button>
            <Button variant="primary" leftIcon={<Check className="h-4 w-4" />} onClick={onConfirm}>
              Confirm & Save Record
            </Button>
          </>
        ) : (
          <Button variant="primary" rightIcon={<ChevronRight className="h-4 w-4" />} onClick={onNext}>
            Save & Next
          </Button>
        )}
      </div>
    </div>
  );
}
