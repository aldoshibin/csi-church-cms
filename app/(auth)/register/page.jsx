"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Mail, Lock, User, Phone, Calendar, ChevronDown, Eye, EyeOff,
  Users, HeartHandshake, UserCog, Church as ChurchIcon,
  UsersRound, CalendarRange, HandHeart, ShieldCheck,
} from "lucide-react";
import { FaUsers } from "react-icons/fa6";
import { IoShieldHalf } from "react-icons/io5";
import { FaCalendarDay } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { FaUsersCog } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FaChurch } from "react-icons/fa";

import { AuthLayout } from "@/components/auth/AuthLayout";
import { SocialLoginButtons } from "@/components/auth/SocialLoginButtons";
import { Input } from "@/components/ui/Input";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";
import { registerSchema } from "@/lib/validation";


const REGISTER_FEATURES = [
  { icon: FaUsers, title: "Member Management", description: "Keep member records organized and up to date." },
  { icon: FaCalendarDay, title: "Events & Schedule", description: "Plan and manage events, meetings and services." },
  { icon: FaHandHoldingHeart, title: "Giving & Contributions", description: "Track donations and generate reports with ease." },
  { icon: IoShieldHalf, title: "Secure & Reliable", description: "Your data is protected with enterprise-grade security." },
];

const SIGNUP_TYPES = [
  { value: "MEMBER", icon: FaRegUser, label: "Member", description: "Join as a church member" },
  { value: "VOLUNTEER", icon: FaUsersCog, label: "Volunteer", description: "I want to volunteer my services" },
  { value: "STAFF", icon: FaUserGroup, label: "Staff", description: "I am joining the church staff" },
  { value: "PRIEST_PASTOR", icon: FaChurch, label: "Priest / Pastor", description: "I am a priest or church pastor" },
];


const PARISH_OPTIONS = [
  { value: "1", label: "CSI St. John's Church — Chennai" },
];

export default function RegisterPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const { register: registerUser } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: { signupType: "MEMBER", agreeToTerms: false, phoneNumber: "" },
  });

  const onSubmit = async (values) => {
    const [firstName, ...rest] = values.fullName.trim().split(" ");
    const lastName = rest.join(" ") || firstName;

    try {
      await registerUser({
        firstName,
        lastName,
        email: values.email,
        // PhoneInput emits a complete E.164 string (e.g. "+919876543210")
        // already — required by the backend's PhoneNumberField. Sending
        // just the locally-typed digits with no country code is what
        // previously caused "The phone number entered is not valid."
        phoneNumber: values.phoneNumber,
        password: values.password,
        passwordConfirm: values.passwordConfirm,
        // See note above the SIGNUP_TYPES constant — only MEMBER maps
        // directly; everything else lands as VISITOR pending a real
        // "request access" backend flow.
        role: values.signupType === "MEMBER" ? "MEMBER" : "VISITOR",
      });
      toast({ variant: "success", title: "Account created", description: "Please verify your email to continue." });
      router.push(`/otp-verification?email=${encodeURIComponent(values.email)}`);
    } catch (error) {
      toast({
        variant: "error",
        title: "Could not create account",
        description: error?.message || "Please check your details and try again.",
      });
    }
  };

  const inputClassName = "border-auth-line focus-visible:border-auth focus-visible:ring-auth";

  return (
    <AuthLayout
      heading="Manage. Connect."
      headingAccentDot={false}
      description="A unified platform to manage your church members, events, ministries and more — all in one place."
      features={REGISTER_FEATURES}
      topRight={{ type: "button-with-label", href: "/login", label: "Sign in", prefixLabel: "Already have an account?" }}
      formMaxWidth="max-w-xl"
    >
      <h2 className="text-3xl font-bold text-auth-text">Create Your Account</h2>
      <p className="mt-1.5 text-sm text-auth-muted">Join CSI St. John's Church and get started today.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input
            label="Full Name"
            required
            placeholder="Enter your full name"
            leftIcon={<User className="h-4 w-4" />}
            error={errors.fullName?.message}
            className={inputClassName}
            {...register("fullName")}
          />
          <Input
            label="Email Address"
            type="email"
            required
            placeholder="Enter your email address"
            leftIcon={<Mail className="h-4 w-4" />}
            error={errors.email?.message}
            className={inputClassName}
            {...register("email")}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field }) => (
              <PhoneInput
                label="Phone Number"
                required
                value={field.value}
                onChange={field.onChange}
                error={errors.phoneNumber?.message}
              />
            )}
          />

          <Input
            label="Password"
            type={showPassword ? "text" : "password"}
            required
            placeholder="Create a password"
            helperText={!errors.password ? "Minimum 8 characters with letters and numbers" : undefined}
            leftIcon={<Lock className="h-4 w-4" />}
            rightIcon={
              <button type="button" onClick={() => setShowPassword((s) => !s)} className="pointer-events-auto text-auth-muted hover:text-auth-text">
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            }
            error={errors.password?.message}
            className={inputClassName}
            {...register("password")}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            required
            placeholder="Confirm your password"
            leftIcon={<Lock className="h-4 w-4" />}
            rightIcon={
              <button type="button" onClick={() => setShowConfirmPassword((s) => !s)} className="pointer-events-auto text-auth-muted hover:text-auth-text">
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            }
            error={errors.passwordConfirm?.message}
            className={inputClassName}
            {...register("passwordConfirm")}
          />
          <Input
            label="Date of Birth"
            type="date"
            leftIcon={<Calendar className="h-4 w-4" />}
            error={errors.dateOfBirth?.message}
            className={inputClassName}
            {...register("dateOfBirth")}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-auth-text">
            I am signing up as<span className="ml-0.5 text-danger-500">*</span>
          </label>
          <Controller
            control={control}
            name="signupType"
            render={({ field }) => (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {SIGNUP_TYPES.map((option) => {
                  const isSelected = field.value === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => field.onChange(option.value)}
                      className={`flex flex-col items-center gap-1.5 rounded-md border p-3 text-center transition-colors ${
                        isSelected ? "border-auth bg-auth-soft" : "border-auth-line bg-white hover:bg-auth-soft/50"
                      }`}
                    >
                      <option.icon className={`h-5 w-5 ${isSelected ? "text-auth" : "text-auth-muted"}`} />
                      <span className="text-sm font-semibold text-auth-text">{option.label}</span>
                      <span className="text-xs text-auth-muted">{option.description}</span>
                    </button>
                  );
                })}
              </div>
            )}
          />
          {errors.signupType && <p className="mt-1.5 text-xs text-danger-600">{errors.signupType.message}</p>}
        </div>

        <div className="w-full">
          <label className="mb-1.5 block text-sm font-medium text-auth-text">
            Select Parish / Branch<span className="ml-0.5 text-danger-500">*</span>
          </label>
          <div className="relative">
            <FaChurch className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-auth-muted" />
            <select
              className="h-10 w-full appearance-none rounded-md border border-auth-line bg-white pl-10 pr-9 text-sm text-auth-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-auth focus-visible:border-auth"
              defaultValue=""
              {...register("parishBranchId")}
            >
              <option value="" disabled>
                Choose your parish or branch
              </option>
              {PARISH_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-auth-muted" />
          </div>
          {errors.parishBranchId && <p className="mt-1.5 text-xs text-danger-600">{errors.parishBranchId.message}</p>}
        </div>

        <div>
          <label className="flex items-start gap-2 text-sm text-auth-text">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 rounded border-auth-line text-auth focus-visible:ring-auth"
              {...register("agreeToTerms")}
            />
            <span>
              I agree to the{" "}
              <a href="/terms" className="font-semibold text-auth underline hover:no-underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="font-semibold text-auth underline hover:no-underline">
                Privacy Policy
              </a>
            </span>
          </label>
          {errors.agreeToTerms && <p className="mt-1.5 text-xs text-danger-600">{errors.agreeToTerms.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-12 w-full items-center justify-center rounded-md bg-auth text-sm font-bold text-white shadow-sm transition-colors hover:bg-auth-dark disabled:opacity-50"
        >
          {isSubmitting ? "Creating account…" : "Create Account"}
        </button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-auth-line" />
        <span className="text-xs text-auth-muted">or sign up with</span>
        <div className="h-px flex-1 bg-auth-line" />
      </div>

      <SocialLoginButtons labelPrefix="Continue with " />
    </AuthLayout>
  );
}
