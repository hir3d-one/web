'use client';

import { useMemo } from 'react';
import { cn } from '@/lib/utils';

type Candidate = {
  readonly name: string;
  readonly title: string;
  readonly fitScore: number; // 0-100
  readonly highlights: readonly string[];
};

const demoCandidates: readonly Candidate[] = [
  {
    name: 'Amina Patel',
    title: 'Senior Data Scientist',
    fitScore: 92,
    highlights: ['Python', 'NLP', 'FinTech'],
  },
  {
    name: 'Liam O’Connor',
    title: 'Full‑stack Engineer',
    fitScore: 87,
    highlights: ['React', 'Node.js', 'AWS'],
  },
  {
    name: 'Chen Wei',
    title: 'ML Engineer',
    fitScore: 84,
    highlights: ['PyTorch', 'Recommendation'],
  },
  {
    name: 'Sofia Rossi',
    title: 'Frontend Engineer',
    fitScore: 78,
    highlights: ['TypeScript', 'Accessibility'],
  },
  {
    name: 'Diego Alvarez',
    title: 'Backend Engineer',
    fitScore: 74,
    highlights: ['Go', 'Distributed Systems'],
  },
];

export const RankingGraphic = () => {
  const ranked = useMemo(
    () => [...demoCandidates].sort((a, b) => b.fitScore - a.fitScore),
    []
  );

  return (
      <div className="h-full w-full rounded-lg border bg-background shadow-sm">
        <div className="grid grid-cols-12 items-center border-b px-4 py-2 text-xs text-muted-foreground">
          <div className="col-span-1">#</div>
          <div className="col-span-6">Candidate</div>
          <div className="col-span-3 text-right">Fit score</div>
          <div className="col-span-2 text-right">Highlights</div>
        </div>
        <ul className="divide-y overflow-auto h-full">
          {ranked.map((candidate, index) => {
            const rank = index + 1;
            const scoreColor =
              candidate.fitScore >= 90
                ? 'text-emerald-500'
                : candidate.fitScore >= 80
                ? 'text-violet-500'
                : 'text-amber-500';
            return (
              <li key={candidate.name} className="grid grid-cols-12 items-center px-4 py-3">
                <div className="col-span-1 font-mono text-sm text-muted-foreground">{rank}</div>
                <div className="col-span-6 flex items-center gap-3">
                  <div
                    className={cn(
                      'flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold',
                      'bg-muted text-foreground'
                    )}
                    aria-hidden
                  >
                    {candidate.name
                      .split(' ')
                      .slice(0, 2)
                      .map((p) => p[0])
                      .join('')}
                  </div>
                  <div>
                    <p className="m-0 text-sm font-medium leading-tight">{candidate.name}</p>
                    <p className="m-0 text-xs text-muted-foreground">{candidate.title}</p>
                  </div>
                </div>
                <div className={cn('col-span-3 text-right text-sm font-semibold', scoreColor)}>
                  {candidate.fitScore}
                </div>
                <div className="col-span-2 flex flex-wrap justify-end gap-1">
                  {candidate.highlights.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
  );
};


