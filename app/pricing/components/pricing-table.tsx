'use client';

import { Link } from '@repo/design-system/components/link';
import { Select } from '@repo/design-system/components/precomposed/select';
import { Tooltip } from '@repo/design-system/components/precomposed/tooltip';
import { Button } from '@repo/design-system/components/ui/button';
import { cn } from '@repo/design-system/lib/utils';
import { CheckIcon, HelpCircleIcon } from 'lucide-react';
import { useState } from 'react';

type Plan = {
  name: string;
  subtitle: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  ctaText: string;
  popular: boolean;
  isEnterprise?: boolean;
};

type AddOn = {
  title: string;
  options: string[];
};

interface PricingTableProps {
  plans: Plan[];
  discountMessage: string;
  addOns?: AddOn[];
}

export const PricingTable = ({ plans, discountMessage, addOns }: PricingTableProps) => {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="mt-12 w-full max-w-7xl mx-auto px-4 sm:px-6">
      <div className="mb-10 flex flex-col items-center justify-center gap-4">
        <div className="inline-flex items-center justify-center bg-muted/30 rounded-full px-4 py-1.5">
          <p className="text-muted-foreground font-medium">
            {discountMessage}
          </p>
        </div>
        <Select
          value={yearly ? 'yearly' : 'monthly'}
          onChange={(value) => setYearly(value === 'yearly')}
          data={[
            { value: 'monthly', label: 'Monthly billing' },
            { value: 'yearly', label: 'Yearly billing' },
          ]}
        />
      </div>

      {/* Mobile view: stacked cards */}
      <div className="grid grid-cols-1 gap-6 md:hidden">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative rounded-xl border bg-card p-6 shadow-sm transition-all duration-200",
              plan.popular && "border-primary border-2 shadow-md"
            )}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground rounded-full">
                MOST POPULAR
              </div>
            )}
            
            <div className="mb-4">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-muted-foreground mt-1">{plan.subtitle}</p>
            </div>

            <div className="mb-6">
              <p className="flex items-baseline">
                {plan.isEnterprise ? (
                  <span className="text-3xl font-bold">
                    From €{yearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                ) : (
                  <span className="text-3xl font-bold">
                    €{yearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                )}
                <span className="text-muted-foreground ml-1">
                  {plan.name === "HIR3D Plus Plan" ? "/job post" : "/recruiter/month"}
                </span>
              </p>
            </div>

            <ul className="mb-8 space-y-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="mr-2 h-5 w-5 shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              className="w-full" 
              variant={plan.popular ? "default" : "outline"}
              size="lg"
            >
              {plan.ctaText}
            </Button>
          </div>
        ))}
      </div>

      {/* Desktop view: horizontal cards */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative rounded-xl border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md",
              plan.popular && "border-primary border-2 shadow-md"
            )}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground rounded-full">
                MOST POPULAR
              </div>
            )}
            
            <div className="mb-4">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-muted-foreground mt-1 h-12">{plan.subtitle}</p>
            </div>

            <div className="mb-6">
              <p className="flex flex-wrap items-baseline">
                {plan.isEnterprise ? (
                  <span className="text-3xl font-bold">
                    From €{yearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                ) : (
                  <span className="text-3xl font-bold">
                    €{yearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                )}
                <span className="text-muted-foreground ml-1">
                  {plan.name === "HIR3D Plus Plan" ? "/job post" : "/recruiter/month"}
                </span>
              </p>
            </div>

            <ul className="mb-8 space-y-3">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start text-sm">
                  <CheckIcon className="mr-2 h-5 w-5 shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              className="w-full mt-auto" 
              variant={plan.popular ? "default" : "outline"}
              size="lg"
            >
              {plan.ctaText}
            </Button>
          </div>
        ))}
      </div>

      {addOns && addOns.length > 0 && (
        <div className="mt-20 border-t pt-16">
          {addOns.map((addon, index) => (
            <div key={index} className="mb-10">
              <h3 className="text-2xl font-semibold mb-6 text-center">{addon.title}</h3>
              <div className="max-w-3xl mx-auto bg-card border rounded-xl p-6 shadow-sm">
                <ul className="space-y-4 divide-y">
                  {addon.options.map((option, optIndex) => (
                    <li key={optIndex} className={cn("flex items-start pt-4", optIndex === 0 && "pt-0")}>
                      <CheckIcon className="mr-2 h-5 w-5 shrink-0 text-primary" />
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
