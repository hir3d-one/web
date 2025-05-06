import Climate from '@/components/climate';
import { Container } from '@/components/container';
import { Prose } from '@/components/prose';
import type { Metadata } from 'next';
import { PricingTable } from './components/pricing-table';

const title = 'HIR3D Pricing Plans';
const description = 
  'All prices in EUR, VAT excluded where applicable';

export const metadata: Metadata = {
  title,
  description,
};

// Hardcoded pricing plans based on provided information
const pricingPlans = {
  plans: [
    {
      name: "HIR3D Plus Plan",
      subtitle: "Standalone Job Posting",
      monthlyPrice: 5,
      yearlyPrice: 5,
      features: [
        "€5 per job post per day",
        "Job post live for 24 hours on HIR3D's platform",
        "Visible to all job seekers on the platform",
        "Basic analytics (views & applications received)"
      ],
      ctaText: "Post a Job",
      popular: false
    },
    {
      name: "Premium Plan",
      subtitle: "AI-Powered Candidate Search",
      monthlyPrice: 149,
      yearlyPrice: 126.58, // €1,519/year ÷ 12 months
      features: [
        "AI-powered matching for up to 50 candidate searches/month",
        "Limited to 100 saved candidate profiles",
        "E-signature integration",
        "GDPR & CCPA compliance tools",
        "Self-guided onboarding"
      ],
      ctaText: "Select Premium",
      popular: true
    },
    {
      name: "Gold Plan",
      subtitle: "AI-Powered Search + Direct Outreach",
      monthlyPrice: 199,
      yearlyPrice: 169.08, // €2,029/year ÷ 12 months
      features: [
        "AI-powered matching for up to 75 candidate searches/month",
        "50 contact outreach credits per month",
        "Unlimited saved candidate profiles",
        "E-signature integration",
        "GDPR & CCPA compliance tools",
        "Self-guided onboarding",
        "Email tracking & scheduling for outreach"
      ],
      ctaText: "Select Gold",
      popular: false
    },
    {
      name: "Diamond Plan",
      subtitle: "AI CV Search + Job Posting & Outreach",
      monthlyPrice: 349,
      yearlyPrice: 296.58, // €3,559/year ÷ 12 months
      features: [
        "AI-powered matching for up to 100 CV searches/month",
        "30-day job posting package (up to 10 active jobs at once)",
        "75 contact outreach credits per month",
        "Unlimited saved candidate profiles",
        "Candidate response tracking",
        "Advanced analytics & insights",
        "E-signature integration",
        "GDPR & CCPA compliance tools",
        "Customisable careers page",
        "Priority customer support",
        "Self-guided onboarding",
        "Premium Onboarding & Training available as add-on for €200"
      ],
      ctaText: "Select Diamond",
      popular: false
    },
    {
      name: "Platinum Enterprise Plan",
      subtitle: "Fully Custom Hiring Solutions for Enterprises",
      monthlyPrice: 2499,
      yearlyPrice: 2124.15, // With 15% discount
      features: [
        "End-to-end AI recruitment & sourcing at scale",
        "Unlimited AI-powered searches, outreach & job postings",
        "Dedicated account manager with custom support",
        "Integration with existing ATS & HR systems",
        "Enterprise-grade security, compliance & analytics",
        "White-label career page & branding",
        "Premium priority support & SLA compliance",
        "Premium Onboarding & Training included",
        "Personalised 1-on-1 training",
        "AI recruitment strategy consultation",
        "ATS workflow integration support",
        "GDPR compliance & e-signature setup",
        "30-day priority support"
      ],
      ctaText: "Contact Sales",
      popular: false,
      isEnterprise: true
    }
  ],
  discountMessage: "Yearly plans offer ~15% discount per month",
  addOns: [
    {
      title: "Add-Ons & Pay-As-You-Go Features",
      options: [
        "Additional job posting: €5 per job/day",
        "Extra AI searches: €0.50 per search beyond the plan limit",
        "Extra outreach credits: €1 per contact",
        "Dedicated account manager: €59/month",
        "Premium Onboarding & Training (€200 for Diamond Plan, included in Platinum Enterprise)"
      ]
    }
  ]
};

const Pricing = async () => {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="w-full bg-gradient-to-b from-muted/50 to-background py-16">
        <Container className="px-4 sm:px-6">
          <Prose className="max-w-3xl mx-auto text-center">
            <header className="flex flex-col items-center">
              <h1 className="mb-6 text-center font-bold text-4xl tracking-tight sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="text-center text-muted-foreground text-lg max-w-2xl">
                Choose the perfect plan for your recruitment needs. Streamline your hiring process with AI-powered tools.
              </p>
              <p className="text-center text-sm text-muted-foreground mt-4">
                {description}
              </p>
            </header>
          </Prose>
        </Container>
      </div>
      
      <Container className="flex-grow px-0 sm:px-6">
        <PricingTable 
          plans={pricingPlans.plans}
          discountMessage={pricingPlans.discountMessage}
          addOns={pricingPlans.addOns}
        />
      </Container>
      
      <div className="w-full bg-muted/20 py-16">
        <Container className="px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-6">Need a custom solution?</h2>
            <p className="text-muted-foreground mb-8">
              Our team can build a tailored plan to meet your organization's specific requirements.
              Contact us to discuss your recruitment needs.
            </p>
            <Climate />
          </div>
        </Container>
      </div>
    </main>
  );
};

export default Pricing;
