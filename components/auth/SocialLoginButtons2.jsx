"use client";

import * as React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";
import { useRouter } from "next/navigation";


export function SocialLoginButtons({ rememberMe = false, labelPrefix = "" }) {
  const [loadingProvider, setLoadingProvider] = React.useState(null);
  const { socialLogin } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const handleSocialLogin = async (provider) => {
    setLoadingProvider(provider);
    try {
      const token =
        provider === "google" ? await getGoogleIdToken() : await getMicrosoftAccessToken();

      await socialLogin({ provider, token, rememberMe });
      toast({ variant: "success", title: "Signed in", description: `Logged in with ${provider === "google" ? "Google" : "Microsoft"}.` });
      router.push("/dashboard");
    } catch (error) {
      toast({
        variant: "error",
        title: "Sign-in failed",
        description: error?.message || "Could not complete social sign-in. Please try again.",
      });
    } finally {
      setLoadingProvider(null);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      <button
        type="button"
        onClick={() => handleSocialLogin("google")}
        disabled={!!loadingProvider}
        className="flex h-11 items-center justify-center gap-2 rounded-md border border-auth-line bg-white text-sm font-semibold text-auth-text transition-colors hover:bg-auth-soft disabled:opacity-50"
      >
        {loadingProvider === "google" ? <Spinner /> : <GoogleGlyph />}
        {labelPrefix}Google
      </button>
      <button
        type="button"
        onClick={() => handleSocialLogin("microsoft")}
        disabled={!!loadingProvider}
        className="flex h-11 items-center justify-center gap-2 rounded-md border border-auth-line bg-white text-sm font-semibold text-auth-text transition-colors hover:bg-auth-soft disabled:opacity-50"
      >
        {loadingProvider === "microsoft" ? <Spinner /> : <MicrosoftGlyph />}
        {labelPrefix}Microsoft
      </button>
    </div>
  );
}

function Spinner() {
  return (
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}


function getGoogleIdToken() {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !window.google?.accounts?.id) {
      reject(new Error("Google Sign-In is not configured. Add the GSI script and client ID."));
      return;
    }
    window.google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      callback: (response) => resolve(response.credential),
    });
    window.google.accounts.id.prompt();
  });
}


async function getMicrosoftAccessToken() {
  if (typeof window === "undefined" || !window.msalInstance) {
    throw new Error("Microsoft Sign-In is not configured. Add MSAL.js and a client ID.");
  }
  const result = await window.msalInstance.loginPopup({ scopes: ["User.Read"] });
  return result.accessToken;
}


function GoogleGlyph() {
  return <span className="text-base font-bold leading-none text-[#EA4335]">G</span>;
}


function MicrosoftGlyph() {
  return <span className="h-3 w-3 shrink-0 bg-[#F25022]" />;
}
