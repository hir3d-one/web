'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { sites } from '@/lib/sites';
import {
  ArrowUpRightIcon,
  CheckIcon,
  FileSearchIcon,
  SparklesIcon,
  UsersIcon,
} from 'lucide-react';
import { useState } from 'react';

type Candidate = {
  readonly id: string;
  readonly name: string;
  readonly initials: string;
  readonly role: string;
  readonly score: number;
  readonly summary: string;
  readonly skills: readonly string[];
  readonly signals: readonly {
    readonly label: string;
    readonly value: number;
  }[];
};

const candidates: readonly Candidate[] = [
  {
    id: 'amina',
    name: 'Amina Patel',
    initials: 'AP',
    role: 'Senior Data Scientist',
    score: 94,
    summary:
      'Eight years in applied machine learning with strong fintech and team leadership experience.',
    skills: ['Python', 'NLP', 'Fintech', 'Leadership'],
    signals: [
      { label: 'Role experience', value: 96 },
      { label: 'Core skills', value: 94 },
      { label: 'Leadership', value: 88 },
    ],
  },
  {
    id: 'marcus',
    name: 'Marcus Chen',
    initials: 'MC',
    role: 'Machine Learning Engineer',
    score: 89,
    summary:
      'Production ML specialist with deep model deployment, Python, and cloud infrastructure experience.',
    skills: ['PyTorch', 'MLOps', 'AWS', 'Python'],
    signals: [
      { label: 'Role experience', value: 86 },
      { label: 'Core skills', value: 95 },
      { label: 'Leadership', value: 74 },
    ],
  },
  {
    id: 'elena',
    name: 'Elena Rossi',
    initials: 'ER',
    role: 'Analytics Lead',
    score: 83,
    summary:
      'Commercial analytics lead with excellent stakeholder management and experimentation experience.',
    skills: ['SQL', 'Experimentation', 'Looker', 'Strategy'],
    signals: [
      { label: 'Role experience', value: 82 },
      { label: 'Core skills', value: 78 },
      { label: 'Leadership', value: 91 },
    ],
  },
];

export const CandidateShowcase = () => {
  const [selectedId, setSelectedId] = useState(candidates[0].id);
  const [shortlistedIds, setShortlistedIds] = useState<ReadonlySet<string>>(
    new Set([candidates[0].id])
  );

  const selected =
    candidates.find((candidate) => candidate.id === selectedId) ?? candidates[0];
  const isShortlisted = shortlistedIds.has(selected.id);

  const toggleShortlist = () => {
    setShortlistedIds((current) => {
      const next = new Set(current);

      if (next.has(selected.id)) {
        next.delete(selected.id);
      } else {
        next.add(selected.id);
      }

      return next;
    });
  };

  return (
    <div className="relative overflow-hidden rounded-xl border bg-background p-6 shadow-sm">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm text-muted-foreground">AI CV Analysis</p>
          <h3 className="mt-4 font-semibold text-xl">
            Get instant insights from candidate resumes
          </h3>
          <p className="mt-1 max-w-3xl text-muted-foreground">
            Hir3d&apos;s AI compares every candidate against the role, explains
            the strongest signals, and helps your team build a confident shortlist.
          </p>
        </div>
        <span className="w-fit shrink-0 rounded-full border bg-muted/30 px-3 py-1 text-xs font-medium text-muted-foreground">
          Interactive demo
        </span>
      </div>
      <div className="mt-6 overflow-hidden rounded-lg border bg-background">
        <div className="flex items-center justify-between border-b bg-muted/30 px-4 py-3 sm:px-5">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
            </div>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <p className="hidden text-xs font-medium text-muted-foreground sm:block">
              Senior Data Scientist / Candidates
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border bg-background px-2.5 py-1 text-[11px] font-medium">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            AI screening complete
          </div>
        </div>

        <div className="grid min-h-[420px] md:grid-cols-[290px_1fr]">
          <aside className="border-b bg-muted/20 p-3 md:border-r md:border-b-0 md:p-4">
            <div className="mb-3 flex items-center justify-between px-1">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <UsersIcon className="h-3.5 w-3.5" />
                Top matches
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">
                24 total
              </span>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-1">
              {candidates.map((candidate, index) => (
                <button
                  type="button"
                  key={candidate.id}
                  onClick={() => setSelectedId(candidate.id)}
                  aria-pressed={selected.id === candidate.id}
                  className={cn(
                    'group rounded-lg border p-2.5 text-left transition-all hover:border-foreground/20 hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:p-3',
                    selected.id === candidate.id
                      ? 'border-foreground/15 bg-background shadow-sm'
                      : 'border-transparent'
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="hidden w-4 font-mono text-[10px] text-muted-foreground md:block">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground text-[10px] font-semibold text-background">
                      {candidate.initials}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-xs font-medium sm:text-sm">
                        {candidate.name}
                      </span>
                      <span className="hidden truncate text-[11px] text-muted-foreground md:block">
                        {candidate.role}
                      </span>
                    </span>
                    <span className="hidden font-mono text-xs font-semibold text-violet-600 dark:text-violet-400 sm:block">
                      {candidate.score}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </aside>

          <div className="flex flex-col p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background">
                  {selected.initials}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-semibold tracking-tight">
                      {selected.name}
                    </h2>
                    {isShortlisted ? (
                      <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-700 dark:text-emerald-400">
                        Shortlisted
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm text-muted-foreground">{selected.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border bg-muted/20 px-3 py-2">
                <SparklesIcon className="h-4 w-4 text-violet-500" />
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    Match score
                  </p>
                  <p className="font-mono text-xl font-semibold leading-none">
                    {selected.score}
                    <span className="text-xs text-muted-foreground">/100</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-lg border bg-muted/20 p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-medium">
                <FileSearchIcon className="h-3.5 w-3.5 text-violet-500" />
                AI match summary
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {selected.summary}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {selected.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border bg-background px-2.5 py-1 text-[11px] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {selected.signals.map((signal) => (
                <div key={signal.label}>
                  <div className="mb-1.5 flex items-center justify-between text-[11px]">
                    <span className="text-muted-foreground">{signal.label}</span>
                    <span className="font-mono font-medium">{signal.value}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-foreground transition-[width] duration-500 motion-reduce:transition-none"
                      style={{ width: `${signal.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t pt-5">
              <p className="text-[11px] text-muted-foreground">
                Screened against 12 role requirements
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={sites.app}>
                    View profile
                    <ArrowUpRightIcon />
                  </a>
                </Button>
                <Button size="sm" type="button" onClick={toggleShortlist}>
                  {isShortlisted ? <CheckIcon /> : <SparklesIcon />}
                  {isShortlisted ? 'Shortlisted' : 'Shortlist'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-[11px] text-muted-foreground">
        Select a candidate to compare their match signals and shortlist them.
      </p>
    </div>
  );
};
