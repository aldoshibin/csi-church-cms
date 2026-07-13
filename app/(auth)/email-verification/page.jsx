"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Mail, Shield, Clock, Info, Headset, Loader2 } from "lucide-react";

import { AuthLayout } from "@/components/auth/AuthLayout";
import { useToast } from "@/contexts/ToastContext";
import { authService } from "@/services/authService";


const EMAIL_VERIFICATION_FEATURES = [
  { icon: Mail, title: "Check Inbox", description: "Look for an email from no-reply@csistjohnschurch.in" },
  { icon: Shield, title: "Check Spam Folder", description: "If you don't see it, please check your spam or junk folder." },
  { icon: Clock, title: "Link Expires Soon", description: "The reset link will expire in 15 minutes for your security." },
];

function EmailVerificationContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { toast } = useToast();
  const email = searchParams.get("email") || "your email address";

  const [isResending, setIsResending] = React.useState(false);

  const handleResend = async () => {
    setIsResending(true);
    try {
      await authService.forgotPassword(email);
      toast({ variant: "success", title: "Email resent", description: `A new reset link has been sent to ${email}.` });
    } catch {
      toast({ variant: "error", title: "Could not resend", description: "Please try again in a moment." });
    } finally {
      setIsResending(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center text-center">
        <EnvelopeCheckIcon />

        <h2 className="mt-6 text-3xl font-bold text-auth-text">Email Sent!</h2>
        <p className="mt-3 text-sm text-auth-muted">
          We've sent a password reset link to{" "}
          <span className="font-bold text-auth">{email}</span>
        </p>
        <p className="mt-4 text-sm text-auth-muted">
          Please check your email and click on the link to reset your password.
        </p>
      </div>

      <div className="mt-7 space-y-4">
        <div className="flex items-start gap-2.5 rounded-md border border-auth-line bg-auth-soft p-3.5">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-auth-text" />
          <p className="text-sm text-auth-text">
            If you don't receive the email within a few minutes, please check your spam folder or try again.
          </p>
        </div>

        <button
          type="button"
          onClick={handleResend}
          disabled={isResending}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-md bg-auth text-sm font-bold text-white shadow-sm transition-colors hover:bg-auth-dark disabled:opacity-50"
        >
          {isResending && <Loader2 className="h-4 w-4 animate-spin" />}
          {isResending ? "Resending…" : "Resend Email"}
        </button>

        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-auth-line" />
          <span className="text-xs text-auth-muted">or</span>
          <div className="h-px flex-1 bg-auth-line" />
        </div>

        <button
          type="button"
          onClick={() => router.push("/forgot-password")}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-md border border-auth-line bg-white text-sm font-bold text-auth-text transition-colors hover:bg-auth-soft"
        >
          <Mail className="h-4 w-4" />
          Try a Different Email
        </button>
      </div>

      <p className="mt-6 text-center text-sm text-auth-muted">
        <Headset className="mr-1.5 inline h-4 w-4 -translate-y-px text-auth" />
        Need help?{" "}
        <a href="mailto:office@csi-church.org" className="font-semibold text-auth hover:underline">
          Contact the Parish Office
        </a>
      </p>
    </>
  );
}

export default function EmailVerificationPage() {
  return (
    <AuthLayout
      heading="Check Your Email"
      headingAccentDot
      description="We've sent a password reset link to your email address."
      features={EMAIL_VERIFICATION_FEATURES}
      topRight={{ type: "back", href: "/login", label: "Back to Sign in" }}
    >
      <React.Suspense
        fallback={
          <div className="flex justify-center py-12">
            <Loader2 className="h-5 w-5 animate-spin text-auth" />
          </div>
        }
      >
        <EmailVerificationContent />
      </React.Suspense>
    </AuthLayout>
  );
}

function EnvelopeCheckIcon() {
  return (
    <div className="relative">
      <svg width="80" height="68" viewBox="0 0 80 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 14 L40 42 L76 14"
          stroke="#008a7a"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M4 14 L40 2 L76 14 L76 60 L4 60 Z"
          stroke="#008a7a"
          strokeWidth="5"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full bg-auth ring-4 ring-white">
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 6L5.5 10.5L15 1" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  );
}
