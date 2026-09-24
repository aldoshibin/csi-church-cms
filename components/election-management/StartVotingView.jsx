"use client";

import * as React from "react";
import Link from "next/link";
import * as Icons from "lucide-react";
import { Home, ChevronRight, ArrowLeft, PlayCircle, CheckCircle2, Vote } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { formatDateTime } from "@/lib/utils";
import {
  START_VOTING_ELECTION_INFO, START_VOTING_CHECKLIST, START_VOTING_INSTRUCTIONS, START_VOTING_NOTES,
} from "@/lib/mock/vmVotingMockData";

export function StartVotingView() {
  const [isStarting, setIsStarting] = React.useState(false);
  const [started, setStarted] = React.useState(false);
  const info = START_VOTING_ELECTION_INFO;

  const handleStart = () => {
    setIsStarting(true);
    setTimeout(() => {
      setIsStarting(false);
      setStarted(true);
    }, 800);
  };

  return (
    <div className="flex flex-col gap-4">
      <nav className="flex items-center gap-1.5 text-sm text-ink-subtle">
        <Home className="h-3.5 w-3.5" />
        <Link href="/election-management/dashboard" className="hover:text-interactive-600">Election Management</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/election-management/voting" className="hover:text-interactive-600">Voting</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-ink">Start Voting</span>
      </nav>

      <div>
        <Link href="/election-management/voting" className="inline-flex items-center gap-1.5 text-sm font-medium text-interactive-600 hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Voting
        </Link>
      </div>

      <div className="flex items-start gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
          <Vote className="h-6 w-6" />
        </span>
        <div>
          <h1 className="text-2xl font-semibold text-ink">Start Voting</h1>
          <p className="mt-1 text-sm text-ink-subtle">Review the election details and start the voting process.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-6">
          {started && (
            <div className="flex items-center gap-3 rounded-lg border border-success-500/30 bg-success-50 p-4 text-sm text-success-700">
              <CheckCircle2 className="h-5 w-5 shrink-0" />
              Voting has been started for {info.name}. Eligible voters have been notified.
            </div>
          )}

          <div className="rounded-lg border border-border bg-white p-6 shadow-card">
            <h3 className="text-sm font-semibold text-ink">Election Information</h3>
            <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs text-ink-subtle">Election Name</dt>
                <dd className="mt-1 text-sm font-medium text-ink">{info.name}</dd>
              </div>
              <div>
                <dt className="text-xs text-ink-subtle">Election Type</dt>
                <dd className="mt-1 text-sm font-medium text-ink">{info.type}</dd>
              </div>
              <div>
                <dt className="text-xs text-ink-subtle">Start Date</dt>
                <dd className="mt-1 text-sm font-medium text-ink">{formatDateTime(info.startDate)}</dd>
              </div>
              <div>
                <dt className="text-xs text-ink-subtle">End Date</dt>
                <dd className="mt-1 text-sm font-medium text-ink">{formatDateTime(info.endDate)}</dd>
              </div>
              <div>
                <dt className="text-xs text-ink-subtle">Voting Method</dt>
                <dd className="mt-1 text-sm font-medium text-ink">{info.votingMethod}</dd>
              </div>
              <div>
                <dt className="text-xs text-ink-subtle">Eligible Voters</dt>
                <dd className="mt-1 text-sm font-medium text-ink">{info.eligibleVoters}</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-lg border border-border bg-white p-6 shadow-card">
            <h3 className="text-sm font-semibold text-ink">Pre-Voting Checklist</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {START_VOTING_CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-muted">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-white p-6 shadow-card">
            <h3 className="text-sm font-semibold text-ink">How It Works</h3>
            <ol className="mt-4 flex flex-col gap-4">
              {START_VOTING_INSTRUCTIONS.map((step) => {
                const Icon = Icons[step.icon] ?? Icons.Circle;
                return (
                  <li key={step.step} className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-ink">{step.step}. {step.title}</p>
                      <p className="text-sm text-ink-subtle">{step.description}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="flex items-center justify-end gap-3 rounded-lg border border-border bg-white p-6 shadow-card">
            <Link href="/election-management/voting">
              <Button type="button" variant="secondary">Cancel</Button>
            </Link>
            <Button type="button" variant="primary" leftIcon={<PlayCircle className="h-4 w-4" />} isLoading={isStarting} disabled={started} onClick={handleStart}>
              {started ? "Voting Started" : "Start Voting"}
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-lg border border-warning-500/30 bg-warning-50 p-5">
            <h3 className="text-sm font-semibold text-warning-700">Important Notes</h3>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-warning-700">
              {START_VOTING_NOTES.map((note) => (
                <li key={note} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning-500" />
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
