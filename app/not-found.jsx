import Link from "next/link";
import { Church } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3 bg-surface-canvas px-4 text-center">
      <Church className="h-10 w-10 text-interactive-500" />
      <h1 className="text-2xl font-bold text-ink">Page not found</h1>
      <p className="max-w-sm text-sm text-ink-subtle">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link href="/dashboard" className="mt-2 text-sm font-medium text-interactive-500 hover:underline">
        Back to Dashboard
      </Link>
    </div>
  );
}
