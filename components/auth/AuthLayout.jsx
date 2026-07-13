"use client";

import Link from "next/link";
import { Church, ShieldCheck, LayoutDashboard, Users2, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";


const DEFAULT_FEATURES = [
  { icon: ShieldCheck, title: "Secure Access", description: "Your account is protected with secure authentication." },
  { icon: LayoutDashboard, title: "Parish Dashboard", description: "Access church operations from one place." },
  { icon: Users2, title: "Member Records", description: "Manage families, members and ministries easily." },
];

export function AuthLayout({
  children,
  heading = "Welcome Back.",
  headingAccentDot = false,
  description = "Sign in to manage your parish, members, events and ministries.",
  features = DEFAULT_FEATURES,
  quote = "This system has transformed the way we serve our church community.",
  quoteAuthor = "Parish Council",
  topRight,
  formMaxWidth = "max-w-sm",
}) {
  return (
    <div className="flex min-h-screen bg-white font-open-sans">
      {/* Left brand panel — exact .auth-side styling from the demo */}
      <div
        className="relative hidden w-[44%] flex-col justify-between overflow-hidden text-white lg:flex"
        style={{ padding: "44px 38px", background: "#005f59" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,138,122,0.35),_transparent_55%)]" />

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-auth-soft">
            <Church className="h-5 w-5 text-auth-deep" />
          </div>
          <div>
            <p className="text-sm font-semibold">
              CSI St. <span className="font-bold">John's Church</span>
            </p>
            <p className="text-xs text-white/60">Church Management System</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative z-10"
        >
          <h1 className="text-4xl font-bold leading-tight">
            {heading}
            {headingAccentDot && <span className="text-auth-soft">.</span>}
          </h1>
          <p className="mt-3 max-w-sm text-white/75">{description}</p>
          <div className="mt-5 h-px w-10 bg-white/30" />

          <div className="mt-8 space-y-5">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                className="flex items-start gap-3"
              >
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <feature.icon className="h-[18px] w-[18px] text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{feature.title}</p>
                  <p className="text-sm text-white/70">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative z-10 rounded-lg bg-white/10 p-4 text-sm text-white/85"
        >
          <span className="mb-1 block text-lg font-bold leading-none text-white/40">"</span>
          {quote}
          <footer className="mt-2 text-xs font-semibold text-auth-soft">— {quoteAuthor}</footer>
        </motion.blockquote>
      </div>

      {/* Right form panel */}
      <div className="relative flex w-full flex-1 flex-col bg-white px-6 py-8 lg:w-[56%]">
        {topRight && (
          <div className="flex justify-end">
            <TopRightElement {...topRight} />
          </div>
        )}
        <div className="flex flex-1 items-center justify-center">
          <div className={`w-full ${formMaxWidth} text-auth-text`}>{children}</div>
        </div>
      </div>
    </div>
  );
}

function TopRightElement({ type, href, label, icon: Icon, prefixLabel }) {
  if (type === "back") {
    return (
      <Link href={href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-auth hover:underline">
        <ArrowLeft className="h-4 w-4" />
        {label}
      </Link>
    );
  }

  if (type === "button") {
    return (
      <Link
        href={href}
        className="rounded-md border border-auth px-4 py-1.5 text-sm font-semibold text-auth transition-colors hover:bg-auth-soft"
      >
        {label}
      </Link>
    );
  }

  if (type === "button-with-label") {
    return (
      <div className="flex items-center gap-3 text-sm">
        <span className="text-auth-muted">{prefixLabel}</span>
        <Link
          href={href}
          className="rounded-md border border-auth px-4 py-1.5 font-semibold text-auth transition-colors hover:bg-auth-soft"
        >
          {label}
        </Link>
      </div>
    );
  }

  // type === "link" (default)
  return (
    <Link href={href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-auth hover:underline">
      {Icon && <Icon className="h-4 w-4" />}
      {label}
    </Link>
  );
}
