"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ShieldAlert, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/Button";


export function ProtectedRoute({ children, allowedRoles }) {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-surface-canvas">
        <Loader2 className="h-6 w-6 animate-spin text-interactive-500" />
      </div>
    );
  }

  if (!isAuthenticated) return null; // redirect effect above will fire

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-3 bg-surface-canvas px-4 text-center">
        <ShieldAlert className="h-10 w-10 text-danger-500" />
        <h1 className="text-lg font-semibold text-ink">You don't have access to this page</h1>
        <p className="max-w-sm text-sm text-ink-subtle">
          Your current role ({user.role.replace(/_/g, " ")}) doesn't include permission for this section.
          Contact your administrator if you believe this is a mistake.
        </p>
        <Button variant="secondary" onClick={() => router.push("/dashboard")}>
          Back to Dashboard
        </Button>
      </div>
    );
  }

  return children;
}
