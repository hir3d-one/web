import Climate from '@/components/climate';
import { Container } from '@/components/container';
import { Prose } from '@/components/prose';
import type { Metadata } from 'next';
import { PricingTable } from './components/pricing-table';

const title = 'Simple, transparent pricing';
const description =
  'No hidden fees. No surprises. 15-day trial. Cancel anytime.';

export const metadata: Metadata = {
  title,
  description,
};

const Pricing = () => {
  // Static prices instead of fetching from Stripe
  const monthlyPrice = 15;
  const annualPrice = 12;

  return (
    <Container className="border-x p-4 pt-16 text-center">
      <Prose className="max-w-none">
        <header className="flex flex-col items-center">
          <h1 className="mb-0 pr-1 text-center font-semibold text-[2.125rem] tracking-tighter sm:text-5xl">
            {title}
          </h1>
          <p className="text-center text-lg">{description}</p>
        </header>
      </Prose>
      <PricingTable
        monthlyPrice={monthlyPrice}
        annualPrice={annualPrice}
      />
      <div className="flex justify-center py-16">
        <Climate />
      </div>
    </Container>
  );
};

export default Pricing;