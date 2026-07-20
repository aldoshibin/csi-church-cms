"use client";

import Link from "next/link";
import { ShieldCheck, LayoutDashboard, Users2, ArrowLeft } from "lucide-react";
import { FaChurch } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoShieldHalf } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";


const DEFAULT_FEATURES = [
  { icon: IoShieldHalf, title: "Secure Access", description: "Your account is protected with secure authentication." },
  { icon: FaChurch, title: "Parish Dashboard", description: "Access church operations from one place." },
  { icon: FaUsers, title: "Member Records", description: "Manage families, members and ministries easily." },
];

export function AuthLayout({
  children,
  heading = "Welcome Back",
  headingAccentDot = true,
  description = "Sign in to manage your parish, members, events and ministries.",
  features = DEFAULT_FEATURES,
  quote = "This system has transformed the way we serve our church community.",
  quoteAuthor = "Parish Council",
  topRight,
  formMaxWidth = "max-w-sm",
}) {
  return (
    <div className="flex min-h-screen bg-white font-open-sans ">
      <div
        className="relative hidden w-[30%] flex-col justify-between overflow-hidden text-white lg:flex"
        // style={{ padding: "44px 38px", background: "#005f59" }}
        style={{

          padding: "44px 38px",
          backgroundImage:
            "linear-gradient(180deg, rgba(0, 73, 67, .93), rgba(0, 112, 101, .91)), url('/images/church-auth-bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,138,122,0.35),_transparent_55%)]" />

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 flex items-center gap-3"
        >
          <div className="flex  items-center justify-center ">
            <FaChurch className="h-12 w-12 text-white" />
          </div>
          <div>
            <p className=" font-semibold text-[21px]">
              CSI St. <span className="font-bold ">John's Church</span>
            </p>
            <p className="text-[14px] text-white">Church Management System</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative z-10"
        >
          <h1 className="text-[26px] font-bold leading-tight text-[#06164a]">
            {heading}
            {headingAccentDot && <span className="text-[#3ee3a5]">.</span>}
          </h1>
          <p className="mt-3 max-w-sm text-white text-[14px]">{description}</p>
          <div className="mt-5 h-px w-10 bg-white" />

          <div className="mt-8 space-y-5">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                className="flex items-start  gap-5"
              >
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#009688]">
                  <feature.icon className="h-[18px] w-[18px] text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#00695C] mb-2">{feature.title}</p>
                  <p className="text-sm text-white">{feature.description}</p>
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
          <span className=" block font-bold leading-none text-white text-[52px] font-open-sans">"</span>
          {quote}
          <footer className="mt-2 text-[16px] font-semibold text-[#48e0a6]">— {quoteAuthor}</footer>
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
