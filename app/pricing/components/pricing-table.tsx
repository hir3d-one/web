'use client';

import { Link } from '@/components/link';
import { Select } from '@/components/precomposed/select';
import { Tooltip } from '@/components/precomposed/tooltip';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  MAX_FREE_CANDIDATES,
  MAX_FREE_CV_ANALYSES,
  MAX_FREE_JOBS,
  MAX_FREE_ORGS,
  MAX_FREE_SEARCHES,
  MAX_FREE_SEATS,
} from '@/lib/consts';
import { sites } from '@/lib/sites';
import { CheckIcon, HelpCircleIcon } from 'lucide-react';
import { useState } from 'react';

const groups = [
  {
    name: 'Workspace',
    features: [
      {
        label: 'Seats',
        description: 'Invite recruiters and hiring managers to your workspace.',
        plans: [MAX_FREE_SEATS, 'Unlimited', 'Unlimited'],
      },
      {
        label: 'Organizations',
        description: 'Run hiring under one or more company workspaces.',
        plans: [MAX_FREE_ORGS, 3, 'Unlimited'],
      },
      {
        label: 'Multifactor authentication',
        description: 'Add an extra layer of security for your team.',
        plans: [false, false, true],
      },
      {
        label: 'Advanced SSO',
        description: 'Sign in with custom SAML SSO.',
        plans: [false, false, true],
      },
      {
        label: 'Audit logs',
        description: 'Track changes across your recruiting workspace.',
        plans: [false, false, true],
      },
    ],
  },
  {
    name: 'Candidate search',
    features: [
      {
        label: 'AI candidate searches',
        description: 'Search and rank candidates with natural-language queries.',
        plans: [MAX_FREE_SEARCHES, 'Unlimited', 'Unlimited'],
      },
      {
        label: 'Candidate profiles',
        description: 'Store and browse candidate profiles in one place.',
        plans: [MAX_FREE_CANDIDATES, 'Unlimited', 'Unlimited'],
      },
      {
        label: 'Saved searches',
        description: 'Reuse search criteria across open roles.',
        plans: [true, true, true],
      },
      {
        label: 'Match scoring',
        description: 'See how well candidates fit a role.',
        plans: [true, true, true],
      },
      {
        label: 'Semantic ranking',
        description: 'Rank results by skills, experience, and role fit.',
        plans: [false, true, true],
      },
    ],
  },
  {
    name: 'CV analysis',
    features: [
      {
        label: 'CV / resume analysis',
        description: 'Extract skills, experience, and highlights from resumes.',
        plans: [MAX_FREE_CV_ANALYSES, 'Unlimited', 'Unlimited'],
      },
      {
        label: 'Bulk CV upload',
        description: 'Upload multiple resumes at once via the upload portal.',
        plans: [true, true, true],
      },
      {
        label: 'Skills extraction',
        description: 'Automatically tag candidates with inferred skills.',
        plans: [true, true, true],
      },
      {
        label: 'AI screening notes',
        description: 'Generate short screening summaries for each candidate.',
        plans: [false, true, true],
      },
      {
        label: 'Custom screening criteria',
        description: 'Define must-have and nice-to-have criteria per role.',
        plans: [false, true, true],
      },
    ],
  },
  {
    name: 'Jobs & pipeline',
    features: [
      {
        label: 'Open roles',
        description: 'Track active job openings in your workspace.',
        plans: [MAX_FREE_JOBS, 'Unlimited', 'Unlimited'],
      },
      {
        label: 'Hiring pipeline',
        description: 'Move candidates through screening stages.',
        plans: [true, true, true],
      },
      {
        label: 'Custom stages',
        description: 'Create your own pipeline statuses.',
        plans: [false, true, true],
      },
      {
        label: 'Team notes & comments',
        description: 'Collaborate on candidates with your hiring team.',
        plans: [true, true, true],
      },
      {
        label: 'Role templates',
        description: 'Reuse job and screening templates across openings.',
        plans: [false, true, true],
      },
    ],
  },
  {
    name: 'Integrations & API',
    features: [
      {
        label: 'CSV import / export',
        description: 'Import and export candidate data as CSV.',
        plans: [true, true, true],
      },
      {
        label: 'Email notifications',
        description: 'Get notified about pipeline activity.',
        plans: [true, true, true],
      },
      {
        label: 'Webhook events',
        description: 'Receive hiring events in your own systems.',
        plans: [false, true, true],
      },
      {
        label: 'REST API access',
        description: 'Build custom recruiting integrations.',
        plans: [false, true, true],
      },
      {
        label: 'Dedicated support',
        description: 'Priority help for showcase exploration and self-hosting.',
        plans: [false, false, true],
      },
    ],
  },
];

export const PricingTable = ({
  monthlyPrice,
  annualPrice,
}: {
  monthlyPrice: number;
  annualPrice: number;
}) => {
  const plans = [
    {
      name: 'Hobby',
      description: 'Explore the showcase',
      price: 'Free forever',
      cta: 'Open the app',
      link: `${sites.app}/`,
      caption: 'Portfolio showcase — not an active SaaS trial.',
    },
    {
      name: 'Pro',
      description: 'For small recruiting teams',
      price: annualPrice,
      cta: 'View showcase',
      link: `${sites.app}/`,
      caption: `Historical plan at $${monthlyPrice}/user/mo billed monthly.`,
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      price: 'Custom',
      cta: 'View on GitHub',
      link: 'https://github.com/hir3d-one',
      caption: 'Contact via GitHub — sales is closed.',
    },
  ];

  const [mobilePlan, setMobilePlan] = useState(plans[0]?.name);

  return (
    <section className="flex flex-col gap-8 py-16 sm:px-8">
      <div className="block md:hidden">
        <Select
          label="Choose a plan"
          value={mobilePlan}
          onChange={setMobilePlan}
          data={plans.map((plan) => ({
            value: plan.name,
            label: plan.name,
          }))}
          type="plan"
        />
      </div>
      <div className="not-prose">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div>
            <div className="h-[220px]" />
            {groups.map((group) => (
              <div key={group.name} className="space-y-4 py-8">
                <p className="text-left font-medium">{group.name}</p>
                <div className="grid divide-y">
                  {group.features.map((feature) => (
                    <div
                      key={feature.label}
                      className="flex h-10 items-center gap-2"
                    >
                      <p className="truncate font-medium text-sm">
                        {feature.label}
                      </p>
                      <Tooltip
                        content={
                          <p className="font-medium text-sm">
                            {feature.description}
                          </p>
                        }
                      >
                        <HelpCircleIcon className="h-4 w-4 text-muted-foreground" />
                      </Tooltip>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {plans.map((plan, planIndex) => (
            <div
              className={cn(
                'rounded-lg py-8',
                'hidden sm:block',
                mobilePlan === plan.name && 'block',
                planIndex === 1 &&
                  'sm:bg-background sm:shadow-sm sm:ring-1 sm:ring-border'
              )}
              key={plan.name}
            >
              <div className="text-center">
                <p className="truncate font-medium">{plan.name}</p>
                <p className="truncate text-muted-foreground text-sm">
                  {plan.description}
                </p>
                <div className="my-4">
                  {typeof plan.price === 'number' ? (
                    <div className="inline-flex items-center gap-1 truncate text-muted-foreground text-sm">
                      <sup>US</sup>
                      <p className="font-semibold text-foreground text-xl">
                        ${plan.price}
                      </p>
                      <p>per user/month</p>
                    </div>
                  ) : (
                    <p className="truncate font-semibold text-foreground text-xl">
                      {plan.price}
                    </p>
                  )}
                </div>
                <div className="my-4">
                  <Button asChild>
                    <Link href={plan.link}>{plan.cta}</Link>
                  </Button>
                  <small className="mt-4 block truncate text-muted-foreground text-xs">
                    {plan.caption}
                  </small>
                </div>
              </div>
              {groups.map((group) => (
                <div key={group.name} className="space-y-4 py-8">
                  <div className="h-6" />
                  <div className="grid divide-y">
                    {group.features.map((feature, featureIndex) => (
                      <div
                        className="flex h-10 items-center justify-center"
                        key={featureIndex}
                      >
                        {typeof feature.plans[planIndex] === 'boolean' &&
                        feature.plans[planIndex] ? (
                          <CheckIcon className="h-5 w-5 text-green-500" />
                        ) : null}
                        {typeof feature.plans[planIndex] !== 'boolean' && (
                          <p className="font-medium text-sm">
                            {feature.plans[planIndex]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
