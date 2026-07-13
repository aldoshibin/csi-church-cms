"use client";

import Link from "next/link";
import { ShieldCheck, UsersRound, CalendarRange, HandHeart } from "lucide-react";

import { AuthLayout } from "@/components/auth/AuthLayout";


const REGISTRATION_SUCCESS_FEATURES = [
  { icon: UsersRound, title: "Member Management", description: "Keep member records organized and up to date." },
  { icon: CalendarRange, title: "Events & Schedule", description: "Plan and manage events, meetings and services." },
  { icon: HandHeart, title: "Giving & Contributions", description: "Track donations and generate reports with ease." },
];

export default function RegistrationSuccessPage() {
  return (
    <AuthLayout
      heading="Welcome to Church Management"
      headingAccentDot
      description="Your account is ready to use with our secure church management system."
      features={REGISTRATION_SUCCESS_FEATURES}
      topRight={{ type: "back", href: "/login", label: "Back to Sign in" }}
    >
      <div className="flex flex-col items-center text-center">
        <EnvelopeCheckIcon />

        <h2 className="mt-6 text-3xl font-bold text-auth-text">Registration Successful!</h2>
        <p className="mt-3 max-w-xs text-sm text-auth-muted">
          Your account has been created successfully. Please sign in to continue.
        </p>

        <Link
          href="/login"
          className="mt-7 flex h-12 w-full items-center justify-center rounded-md bg-auth text-sm font-bold text-white shadow-sm transition-colors hover:bg-auth-dark"
        >
          Sign in
        </Link>

        <p className="mt-4 flex items-center gap-1.5 text-xs text-auth-muted">
          <ShieldCheck className="h-3.5 w-3.5 text-auth" />
          Your information is secure and will never be shared.
        </p>
      </div>
    </AuthLayout>
  );
}


function EnvelopeCheckIcon() {
  return (
    <svg width="80" height="68" viewBox="0 0 80 68" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 14 L40 42 L76 14" stroke="#008a7a" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M4 14 L40 2 L76 14 L76 60 L4 60 Z" stroke="#008a7a" strokeWidth="5" strokeLinejoin="round" fill="none" />
      <circle cx="64" cy="50" r="13" fill="#008a7a" />
      <path d="M58 50L62.5 54.5L70 45.5" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
