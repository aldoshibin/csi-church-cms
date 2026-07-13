"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Mail, Shield, Clock, Info, Headset, Loader2, RotateCw } from "lucide-react";

import { AuthLayout } from "@/components/auth/AuthLayout";
import { OtpInput } from "@/components/ui/OtpInput";
import { useToast } from "@/contexts/ToastContext";
import { authService } from "@/services/authService";


const VERIFY_EMAIL_FEATURES = [
  { icon: Shield, title: "Secure & Reliable", description: "Your verification code is protected and encrypted." },
  { icon: Mail, title: "Email Verification", description: "The code has been sent to your registered email." },
  { icon: Clock, title: "Time Sensitive", description: "The code will expire in 10 minutes for your security." },
];

const RESEND_COOLDOWN_SECONDS = 22;


function cooldownStorageKey(email) {
  return `csi_otp_resend_until:${email}`;
}


function getStoredCooldownRemaining(email) {
  if (typeof window === "undefined") return 0;
  const expiry = Number(sessionStorage.getItem(cooldownStorageKey(email)) || 0);
  return Math.max(0, Math.ceil((expiry - Date.now()) / 1000));
}

function startCooldown(email, seconds) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(cooldownStorageKey(email), String(Date.now() + seconds * 1000));
}

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { toast } = useToast();
  const email = searchParams.get("email") || "";

  const [code, setCode] = React.useState("");
  const [isVerifying, setIsVerifying] = React.useState(false);
  const [isResending, setIsResending] = React.useState(false);
  const [error, setError] = React.useState("");
  const [cooldown, setCooldown] = React.useState(0);

  // On mount (including after a refresh), pick up wherever the persisted
  // expiry actually is rather than restarting at the full duration. If no
  // cooldown was ever started for this email (first visit), start one now,
  // matching the page's own "a code was just sent" premise.
  React.useEffect(() => {
    if (!email) return;
    const remaining = getStoredCooldownRemaining(email);
    if (remaining > 0) {
      setCooldown(remaining);
    } else {
      startCooldown(email, RESEND_COOLDOWN_SECONDS);
      setCooldown(RESEND_COOLDOWN_SECONDS);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  React.useEffect(() => {
    if (!email) return;
    const timer = setInterval(() => {
      setCooldown(getStoredCooldownRemaining(email));
    }, 1000);
    return () => clearInterval(timer);
  }, [email]);

  const formattedCooldown = `(${String(Math.floor(cooldown / 60)).padStart(2, "0")}:${String(cooldown % 60).padStart(2, "0")})`;

  const handleVerify = async () => {
    if (code.length !== 6) {
      setError("Please enter the full 6-digit code.");
      return;
    }
    setIsVerifying(true);
    setError("");
    try {
      await authService.verifyEmail({ email, code });
      router.push("/registration-success");
    } catch (err) {
      // A non-2xx response (wrong/expired code) rejects via the axios
      // interceptor's normalized { success, message } shape — see lib/axios.js.
      setError(err?.message || "Could not verify this code. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResend = async () => {
    setIsResending(true);
    try {
      await authService.resendVerificationCode(email);
      toast({ variant: "success", title: "Code resent", description: `A new code has been sent to ${email}.` });
      startCooldown(email, RESEND_COOLDOWN_SECONDS);
      setCooldown(RESEND_COOLDOWN_SECONDS);
      setCode("");
      setError("");
    } catch {
      toast({ variant: "error", title: "Could not resend", description: "Please try again in a moment." });
    } finally {
      setIsResending(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center text-center">
        <EnvelopeLockIcon />
        <h2 className="mt-6 text-3xl font-bold text-auth-text">Verify Your Email</h2>
        <p className="mt-3 text-sm text-auth-muted">
          Enter the 6-digit code we sent to <span className="font-bold text-auth">{email || "your email address"}</span>
        </p>
      </div>

      <div className="mt-7">
        <label className="mb-2 block text-sm font-medium text-auth-text">
          Enter 6-Digit Code<span className="ml-0.5 text-danger-500">*</span>
        </label>
        <OtpInput length={6} value={code} onChange={setCode} error={!!error} disabled={isVerifying} />
        {error && <p className="mt-2 text-sm text-danger-600">{error}</p>}

        <p className="mt-3 text-sm text-auth-muted">
          Didn't receive the code?{" "}
          {cooldown > 0 ? (
            <span className="text-auth-muted">Resend Code {formattedCooldown}</span>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              disabled={isResending}
              className="inline-flex items-center gap-1 font-semibold text-auth underline hover:no-underline disabled:opacity-50"
            >
              <RotateCw className={`h-3.5 w-3.5 ${isResending ? "animate-spin" : ""}`} />
              Resend Code
            </button>
          )}
        </p>

        <div className="mt-4 flex items-start gap-2.5 rounded-md border border-auth-line bg-auth-soft p-3.5">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-auth-text" />
          <p className="text-sm text-auth-text">
            Please check your inbox and spam folder if you don't see the email.
          </p>
        </div>

        <button
          type="button"
          onClick={handleVerify}
          disabled={isVerifying}
          className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-md bg-auth text-sm font-bold text-white shadow-sm transition-colors hover:bg-auth-dark disabled:opacity-50"
        >
          {isVerifying && <Loader2 className="h-4 w-4 animate-spin" />}
          {isVerifying ? "Verifying…" : "Verify Code"}
        </button>
      </div>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-auth-line" />
        <span className="text-xs text-auth-muted">or</span>
        <div className="h-px flex-1 bg-auth-line" />
      </div>

      <p className="text-center text-sm text-auth-muted">
        <Headset className="mr-1.5 inline h-4 w-4 -translate-y-px text-auth" />
        Need help?{" "}
        <a href="mailto:office@csi-church.org" className="font-semibold text-auth hover:underline">
          Contact the Parish Office
        </a>
      </p>
    </>
  );
}

export default function VerifyEmailPage() {
  return (
    <AuthLayout
      heading="Secure Verification"
      headingAccentDot
      description="We've sent a 6-digit verification code to your email address."
      features={VERIFY_EMAIL_FEATURES}
      topRight={{ type: "back", href: "/login", label: "Back to Sign in" }}
    >
      <React.Suspense
        fallback={
          <div className="flex justify-center py-12">
            <Loader2 className="h-5 w-5 animate-spin text-auth" />
          </div>
        }
      >
        <VerifyEmailContent />
      </React.Suspense>
    </AuthLayout>
  );
}

function EnvelopeLockIcon() {
  return (
    <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-auth-soft">
      <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="38" height="26" rx="3" stroke="#008a7a" strokeWidth="3" />
        <path d="M3 4L21 18L39 4" stroke="#008a7a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="absolute bottom-1 right-1 flex h-8 w-8 items-center justify-center rounded-full bg-auth ring-4 ring-auth-soft">
        <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="6.5" width="11" height="7" rx="1.5" stroke="white" strokeWidth="1.6" />
          <path d="M3.5 6.5V4.5a3 3 0 016 0v2" stroke="white" strokeWidth="1.6" />
        </svg>
      </span>
    </div>
  );
}
