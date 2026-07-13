"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Loader2 } from "lucide-react";

import { AuthLayout } from "@/components/auth/AuthLayout";
import { Input } from "@/components/ui/Input";
import { useToast } from "@/contexts/ToastContext";
import { authService } from "@/services/authService";
import { resetPasswordSchema } from "@/lib/validation";


function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(resetPasswordSchema) });

  const onSubmit = async (values) => {
    if (!token) {
      toast({ variant: "error", title: "Invalid link", description: "This reset link is missing its token." });
      return;
    }
    try {
      await authService.resetPassword({
        token,
        newPassword: values.newPassword,
        newPasswordConfirm: values.newPasswordConfirm,
      });
      toast({ variant: "success", title: "Password reset", description: "You can now sign in with your new password." });
      router.push("/login");
    } catch (error) {
      toast({
        variant: "error",
        title: "Could not reset password",
        description: error?.message || "This link may have expired. Please request a new one.",
      });
    }
  };

  const inputClassName = "border-auth-line focus-visible:border-auth focus-visible:ring-auth";

  return (
    <>
      <h2 className="text-2xl font-semibold text-auth-text">Set a New Password</h2>
      <p className="mt-1 text-sm text-auth-muted">Choose a strong password you haven't used before.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <Input
          label="New Password"
          type="password"
          required
          leftIcon={<Lock className="h-4 w-4" />}
          error={errors.newPassword?.message}
          className={inputClassName}
          {...register("newPassword")}
        />
        <Input
          label="Confirm New Password"
          type="password"
          required
          leftIcon={<Lock className="h-4 w-4" />}
          error={errors.newPasswordConfirm?.message}
          className={inputClassName}
          {...register("newPasswordConfirm")}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-11 w-full items-center justify-center rounded-md bg-auth text-sm font-semibold text-white shadow-sm transition-colors hover:bg-auth-dark disabled:opacity-50"
        >
          {isSubmitting ? "Resetting…" : "Reset Password"}
        </button>
      </form>
    </>
  );
}

export default function ResetPasswordPage() {
  return (
    <AuthLayout>
      <React.Suspense
        fallback={
          <div className="flex justify-center py-12">
            <Loader2 className="h-5 w-5 animate-spin text-auth" />
          </div>
        }
      >
        <ResetPasswordForm />
      </React.Suspense>
    </AuthLayout>
  );
}
