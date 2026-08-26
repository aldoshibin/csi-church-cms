"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check, List, Printer, Plus, BarChart3, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

const NEXT_ACTIONS = [
  { icon: List, title: "View this expense", desc: "See the details of the recorded expense." },
  { icon: Printer, title: "Print Receipt", desc: "Print the expense receipt for records." },
  { icon: Plus, title: "Add Another Expense", desc: "Record another expense in the system." },
  { icon: BarChart3, title: "View Expense List", desc: "Go to the expense list to see all expenses." },
];

export default function Step4Success({ onAddAnother, onPrint }) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center rounded-lg border border-border bg-white p-8 text-center shadow-card">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success-50">
        <Check className="h-7 w-7 text-success-600" />
      </div>
      <h3 className="text-lg font-semibold text-ink">Expense Added Successfully!</h3>
      <p className="mx-auto mt-1 max-w-md text-sm text-ink-subtle">The expense has been recorded and saved successfully.</p>

      <div className="mt-8 w-full">
        <div className="mb-4 rounded-t-lg bg-surface-canvas px-4 py-2 text-left text-sm font-semibold text-ink">What's Next?</div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          {NEXT_ACTIONS.map((action) => (
            <div key={action.title} className="flex flex-col items-center rounded-lg border border-border p-4 text-center">
              <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-success-50 text-success-600">
                <action.icon className="h-5 w-5" />
              </span>
              <p className="text-sm font-semibold text-ink">{action.title}</p>
              <p className="mt-1 text-xs text-ink-subtle">{action.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/finance/expenses">
          <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />}>Back to Expense List</Button>
        </Link>
        <Button type="button" variant="secondary" leftIcon={<Printer className="h-4 w-4" />} onClick={onPrint}>Print Receipt</Button>
        <Button type="button" variant="secondary" leftIcon={<Plus className="h-4 w-4" />} onClick={onAddAnother}>Add Another Expense</Button>
        <Button type="button" leftIcon={<List className="h-4 w-4" />} onClick={() => router.push("/finance/expenses")}>View Expense List</Button>
      </div>
    </div>
  );
}
