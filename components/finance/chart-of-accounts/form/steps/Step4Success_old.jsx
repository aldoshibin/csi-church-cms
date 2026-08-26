"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Check, FileText, Tag, CircleCheck, FolderPlus, ArrowLeftRight, BarChart3, ArrowLeft, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const ACCOUNT_NEXT_ACTIONS = [
  { icon: FolderPlus, title: "Add Sub Account", desc: "Create a sub account under this account.", cta: "Add Sub Account", hrefSuffix: "add-sub-account" },
  { icon: FileText, title: "Record Transaction", desc: "Record income or expense using this account.", cta: "Record Transaction", hrefSuffix: "record-transaction" },
  { icon: BarChart3, title: "View in Chart", desc: "View this account in the Chart of Accounts.", cta: "View in Chart", hrefSuffix: "view" },
];

export default function Step4Success({ form, isSubAccount, onBackToReview, onAddAnother }) {
  const router = useRouter();

  if (isSubAccount) {
    const summary = [
      ["Parent Account", form.parentAccount ? `${form.parentAccount} - Parent` : "—"],
      ["Sub Account Code", form.code],
      ["As of Date", form.asOfDate],
      ["Sub Account Name", form.name],
      ["Account Nature", form.nature],
      ["Reporting Group", form.reportingGroup || "—"],
      ["Sub Account Type", form.type],
      ["Opening Balance (₹)", Number(form.openingBalance || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 })],
      ["Status", "Active"],
    ];

    return (
      <div className="flex flex-col items-center rounded-lg border border-border bg-white p-8 text-center shadow-card">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success-50">
          <Check className="h-7 w-7 text-success-600" />
        </div>
        <h3 className="text-lg font-semibold text-ink">Sub Account Added Successfully!</h3>
        <p className="mx-auto mt-1 max-w-md text-sm text-ink-subtle">The new sub account has been created and added under the selected parent account.</p>

        <div className="mt-6 grid w-full grid-cols-1 gap-x-8 gap-y-4 rounded-lg bg-surface-canvas p-5 text-left text-sm sm:grid-cols-3">
          {summary.map(([label, value]) => (
            <div key={label}>
              <p className="text-xs text-ink-subtle">{label}</p>
              <p className="mt-0.5 font-medium text-ink">{label === "Status" ? <Badge variant="success">{value}</Badge> : value}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 w-full rounded-lg bg-interactive-50 p-4 text-left text-sm text-interactive-700">
          <span className="font-medium">What's Next? </span>
          You can now manage this sub account or add more accounts under the same parent account.
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button type="button" variant="secondary" leftIcon={<FolderPlus className="h-4 w-4" />} onClick={onAddAnother}>Add Another Sub Account</Button>
          <Link href="/finance/chart-of-accounts"><Button type="button" variant="secondary" leftIcon={<BarChart3 className="h-4 w-4" />}>View in Chart of Accounts</Button></Link>
          <Link href="/finance/transactions/add"><Button type="button" variant="secondary" leftIcon={<ArrowLeftRight className="h-4 w-4" />}>Record Transaction</Button></Link>
          <Button type="button" rightIcon={<ArrowRight className="h-4 w-4" />} onClick={() => router.push("/finance/chart-of-accounts")}>Go to Chart of Accounts</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center rounded-lg border border-border bg-white p-8 text-center shadow-card">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success-50">
        <Check className="h-7 w-7 text-success-600" />
      </div>
      <h3 className="text-lg font-semibold text-ink">Account Created Successfully!</h3>
      <p className="mx-auto mt-1 max-w-md text-sm text-ink-subtle">The new account has been created and added to the Chart of Accounts.</p>

      <div className="mt-6 grid w-full grid-cols-1 gap-6 rounded-lg bg-surface-canvas p-5 text-left sm:grid-cols-3">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-ink-subtle"><FileText className="h-4 w-4" /></span>
          <div><p className="text-xs text-ink-subtle">Account Code</p><p className="font-semibold text-ink">{form.code}</p></div>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-ink-subtle"><Tag className="h-4 w-4" /></span>
          <div><p className="text-xs text-ink-subtle">Account Name</p><p className="font-semibold text-ink">{form.name}</p></div>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-ink-subtle"><CircleCheck className="h-4 w-4" /></span>
          <div><p className="text-xs text-ink-subtle">Status</p><Badge variant="success">Active</Badge></div>
        </div>
      </div>

      <div className="mt-8 w-full text-left">
        <h4 className="text-sm font-semibold text-ink">What's Next?</h4>
        <p className="mb-4 text-xs text-ink-subtle">You can manage and use this account for your financial transactions.</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {ACCOUNT_NEXT_ACTIONS.map((action) => (
            <div key={action.title} className="flex flex-col rounded-lg border border-border p-4">
              <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-interactive-50 text-interactive-600">
                <action.icon className="h-4 w-4" />
              </span>
              <p className="text-sm font-semibold text-ink">{action.title}</p>
              <p className="mb-3 flex-1 text-xs text-ink-subtle">{action.desc}</p>
              {action.hrefSuffix === "add-sub-account" ? (
                <Link href={`/finance/chart-of-accounts/add-sub-account?parent=${form.code}`}>
                  <Button type="button" variant="secondary" size="sm" className="w-full">{action.cta}</Button>
                </Link>
              ) : action.hrefSuffix === "record-transaction" ? (
                <Link href="/finance/transactions/add">
                  <Button type="button" variant="secondary" size="sm" className="w-full">{action.cta}</Button>
                </Link>
              ) : (
                <Link href="/finance/chart-of-accounts">
                  <Button type="button" variant="secondary" size="sm" className="w-full">{action.cta}</Button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex w-full items-center justify-between border-t border-border pt-4">
        <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />} onClick={onBackToReview}>Back to Review</Button>
        <Button type="button" rightIcon={<ArrowRight className="h-4 w-4" />} onClick={() => router.push("/finance/chart-of-accounts")}>Go to Chart of Accounts</Button>
      </div>
    </div>
  );
}
