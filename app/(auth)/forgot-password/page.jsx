"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, Info, Headset, ShieldCheck } from "lucide-react";

import { AuthLayout } from "@/components/auth/AuthLayout";
import { Input } from "@/components/ui/Input";
import { authService } from "@/services/authService";
import { forgotPasswordSchema } from "@/lib/validation";


const FORGOT_PASSWORD_FEATURES = [
  { icon: Mail, title: "Secure & Quick", description: "Reset your password quickly and securely." },
  { icon: ShieldCheck, title: "Email Verification", description: "We'll send a secure link to your registered email." },
  { icon: Lock, title: "Protect Your Account", description: "Keep your account safe with a new strong password." },
];

export default function ForgotPasswordPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(forgotPasswordSchema) });

  const onSubmit = async (values) => {
    await authService.forgotPassword(values.email); // backend always returns a generic success message
    router.push(`/email-verification?email=${encodeURIComponent(values.email)}`);
  };

  return (
    <AuthLayout
      heading="Forgot Password?"
      headingAccentDot
      description="No worries! Enter your registered email address and we'll help you reset your password."
      features={FORGOT_PASSWORD_FEATURES}
      topRight={{ type: "back", href: "/login", label: "Back to Sign in" }}
    >
      <div className="flex flex-col items-center text-center">
        <HeroIcon icon={Lock} />

        <h2 className="mt-6 text-2xl font-bold text-auth-text">Reset Your Password</h2>
        <p className="mt-3 text-sm text-auth-muted">
          Enter your registered email address and we'll send you a link to reset your password.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-7 space-y-4 text-left">
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your registered email address"
          required
          leftIcon={<Mail className="h-4 w-4" />}
          error={errors.email?.message}
          className="border-auth-line focus-visible:border-auth focus-visible:ring-auth"
          {...register("email")}
        />

        <div className="flex items-start gap-2.5 rounded-md border border-auth-line bg-auth-soft p-3.5">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-auth-text" />
          <p className="text-sm text-auth-text">
            We will send a password reset link to your email. Please check your inbox and spam folder.
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-12 w-full items-center justify-center rounded-md bg-auth text-sm font-bold text-white shadow-sm transition-colors hover:bg-auth-dark disabled:opacity-50"
        >
          {isSubmitting ? "Sending…" : "Send Reset Link"}
        </button>
      </form>

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
    </AuthLayout>
  );
}


function HeroIcon({ icon: Icon }) {
  return (
    <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-auth-soft">
      <Icon className="h-9 w-9 text-auth" />
      <span className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-auth text-xs font-bold text-white ring-4 ring-white">
        ?
      </span>
    </div>
  );
}
