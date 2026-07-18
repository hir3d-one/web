import { Container } from '@/components/container';
import { Prose } from '@/components/prose';
import { createMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import { PricingTable } from './components/pricing-table';

const title = 'Historical pricing';
const description =
  'Plans Hir3d offered when the product was live. This site is a deprecated portfolio showcase — billing and trials are closed.';

export const metadata: Metadata = createMetadata({
  title,
  description,
});

const Pricing = () => {
  // Static historical prices (product is no longer sold)
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
      <PricingTable monthlyPrice={monthlyPrice} annualPrice={annualPrice} />
    </Container>
  );
};

export default Pricing;
