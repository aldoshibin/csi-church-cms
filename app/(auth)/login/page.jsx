"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, Eye, EyeOff, Church, UserPlus } from "lucide-react";

import { AuthLayout } from "@/components/auth/AuthLayout";
import { SocialLoginButtons } from "@/components/auth/SocialLoginButtons";
import { Input } from "@/components/ui/Input";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";
import { loginSchema } from "@/lib/validation";
import { FaChurch,FaCross  } from "react-icons/fa";



export default function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const { login } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "", rememberMe: false },
  });

  const onSubmit = async (values) => {
    router.push("/dashboard");
    // try {
    //   await login({ email: values.email, password: values.password, rememberMe: values.rememberMe });
    //   toast({ variant: "success", title: "Welcome back!", description: "You've signed in successfully." });
    //   router.push("/dashboard");
    // } catch (error) {

    //   if (error?.errors?.email_verification_required) {
    //     toast({
    //       variant: "info",
    //       title: "Email verification required",
    //       description: "Please verify your email to continue.",
    //     });
    //     router.push(`/otp-verification?email=${encodeURIComponent(error.errors.email)}`);
    //     return;
    //   }
    //   toast({
    //     variant: "error",
    //     title: "Sign-in failed",
    //     description: error?.message || "Check your email and password and try again.",
    //   });
    // }
  };

  return (
    <AuthLayout topRight={{ type: "link", href: "/register", label: "Create Account", icon: UserPlus }}>
      <div className="flex flex-col items-center text-center">
        <div className=" circle-hero flex h-28 w-28 items-center justify-center rounded-full bg-auth-soft">
          <FaChurch className="h-16 w-16 text-auth" />
        </div> 
        
        <h2 className="mt-6 text-3xl font-bold text-auth-text">Sign In</h2>
        <p className="mt-2 text-sm text-auth-muted">
          Welcome back to <span className="font-bold text-[#00796b]">CSI St. John's Church</span>
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-7 space-y-4 text-left">
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your email address"
          required
          leftIcon={<Mail className="h-4 w-4" />}
          error={errors.email?.message}
          className="border-auth-line focus-visible:border-auth focus-visible:ring-auth"
          {...register("email")}
        />

        <Input
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          required
          leftIcon={<Lock className="h-4 w-4" />}
          rightIcon={
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="pointer-events-auto text-auth-muted hover:text-auth-text"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          }
          error={errors.password?.message}
          className="border-auth-line focus-visible:border-auth focus-visible:ring-auth"
          {...register("password")}
        />

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-auth-text">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-auth-line text-auth focus-visible:ring-auth"
              {...register("rememberMe")}
            />
            Remember me
          </label>
          <Link href="/forgot-password" className="text-sm font-semibold text-auth underline hover:no-underline">
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-12 w-full items-center justify-center rounded-md bg-auth text-sm font-bold text-white shadow-sm transition-colors hover:bg-auth-dark disabled:opacity-50"
        >
          {isSubmitting ? "Signing in…" : "Sign In"}
        </button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-auth-line" />
        <span className="text-xs text-auth-muted">or</span>
        <div className="h-px flex-1 bg-auth-line" />
      </div>

      <SocialLoginButtons rememberMe={watch("rememberMe")} />

      <p className="mt-6 text-center text-xs text-auth-muted">
        Your information is secure and will never be shared.
      </p>
    </AuthLayout>
  );
}
